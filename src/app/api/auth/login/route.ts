import { NextRequest, NextResponse } from "next/server";
import { findUser, toSessionUser, createSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = findUser(email, password);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const sessionUser = toSessionUser(user);
    const response = NextResponse.json({
      success: true,
      user: sessionUser,
    });

    response.headers.set("Set-Cookie", createSessionCookie(sessionUser));
    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
