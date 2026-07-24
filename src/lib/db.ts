import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI missing in .env.local");
}

// In dev, Next.js hot-reloads modules on every file change. Without this
// global cache, each reload would create a brand new mongoose connection
// (and leave old ones half-open), which is what causes the
// "operation buffering timed out" errors after a few reloads.
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global._mongooseCache ?? {
  conn: null,
  promise: null,
};
global._mongooseCache = cached;

export async function connectDB() {
  // If a previous connection exists but isn't actually ready, drop it so we
  // reconnect instead of silently reusing a dead connection.
  if (cached.conn && mongoose.connection.readyState !== 1) {
    cached.conn = null;
    cached.promise = null;
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI as string, {
        // fail fast instead of buffering ops for 10s if the server is
        // unreachable (e.g. IP not whitelisted in Atlas)
        serverSelectionTimeoutMS: 8000,
      })
      .then((m) => {
        console.log("MongoDB Connected");
        return m;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("MongoDB Error:", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}