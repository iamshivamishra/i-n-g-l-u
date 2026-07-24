import { cookies } from "next/headers";
import { verifyToken } from "@/lib/token";
import { connectDB } from "@/lib/db";
import User, { IUser } from "@/models/User";

/**
 * Reads the auth_token cookie, verifies it, and loads the full user from the
 * DB (so we always have the current role, not just whatever was baked into
 * the JWT at login time). Returns null if not logged in / token invalid.
 */
export async function getCurrentUser(): Promise<IUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    if (!token) return null;

    const decoded = verifyToken(token);

    await connectDB();
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return null;

    return user;
  } catch {
    return null;
  }
}

// Where each role's dashboard lives. Centralized here so both the
// /dashboard router page and any redirect logic stay in sync.
export function dashboardPathForRole(role: IUser["role"]): string {
  switch (role) {
    case "OWNER":
      return "/dashboard/owner";
    case "SUPER_ADMIN":
    case "ADMIN":
      return "/dashboard/admin";
    case "USER":
    default:
      return "/dashboard/user";
  }
}