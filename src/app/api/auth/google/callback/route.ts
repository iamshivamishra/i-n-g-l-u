import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { signToken } from "@/lib/token";

function decodeJwtPayload(token: string) {
  const parts = token.split(".");
  if (parts.length < 2) {
    throw new Error("Invalid Google ID token");
  }

  const normalized = parts[1].replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const decoded = Buffer.from(padded, "base64").toString("utf8");

  return JSON.parse(decoded) as {
    sub: string;
    email: string;
    name?: string;
    email_verified?: boolean;
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  const baseRedirect = new URL(
    process.env.APP_URL || "http://localhost:3000",
  );

  if (error) {
    baseRedirect.pathname = "/login";
    baseRedirect.searchParams.set("error", error);
    return NextResponse.redirect(baseRedirect);
  }

  if (!code) {
    baseRedirect.pathname = "/login";
    baseRedirect.searchParams.set("error", "oauth_code_missing");
    return NextResponse.redirect(baseRedirect);
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    baseRedirect.pathname = "/login";
    baseRedirect.searchParams.set("error", "google_oauth_not_configured");
    return NextResponse.redirect(baseRedirect);
  }

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    const tokenPayload = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenPayload.id_token) {
      throw new Error(tokenPayload?.error_description || "Google token exchange failed");
    }

    const googleUser = decodeJwtPayload(tokenPayload.id_token);
    const email = googleUser.email?.toLowerCase();

    if (!email) {
      throw new Error("Google account email not returned");
    }

    await connectDB();

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name: googleUser.name || email.split("@")[0],
        email,
        googleId: googleUser.sub,
        emailVerified: true,
        role: "USER",
      });
    } else {
      user.googleId = user.googleId || googleUser.sub;
      user.emailVerified = user.emailVerified || !!googleUser.email_verified;
      await user.save();
    }

    const token = signToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    const cookieStore = await cookies();
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    baseRedirect.pathname = "/";
    return NextResponse.redirect(baseRedirect);
  } catch (error) {
    console.error("GOOGLE AUTH CALLBACK ERROR:", error);
    baseRedirect.pathname = "/login";
    baseRedirect.searchParams.set("error", "google_login_failed");
    return NextResponse.redirect(baseRedirect);
  }
}
