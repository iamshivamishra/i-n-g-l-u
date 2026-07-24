import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/token";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

function clearAuthCookie(cookieStore: Awaited<ReturnType<typeof cookies>>) {
  cookieStore.set("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  });
}

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    let decoded;
    try {
      decoded = verifyToken(token);
    } catch (error) {
      console.warn("AUTH /me invalid token:", error);
      clearAuthCookie(cookieStore);
      return NextResponse.json({ user: null }, { status: 200 });
    }

    console.log("DECODED TOKEN:", decoded);

    const user = await User.findOne({
      $or: [
        { _id: decoded.userId },
        { email: decoded.email?.toLowerCase?.() || decoded.email },
      ],
    }).select("-password");

    if (!user) {
      console.warn("AUTH /me user not found for token payload:", decoded);
      clearAuthCookie(cookieStore);
      return NextResponse.json({ user: null }, { status: 200 });
    }

    console.log("AUTHENTICATE USER FROM DB:", user);

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("AUTH /me ERROR:", error);
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
