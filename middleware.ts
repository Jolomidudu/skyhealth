import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "skyhealth_session";

function getRoleFromCookie(request: NextRequest): string | null {
  const raw = request.cookies.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  try {
    const data = JSON.parse(decodeURIComponent(raw));
    return data.role || null;
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get(COOKIE_NAME)?.value;
  const role = getRoleFromCookie(request);

  const isProtected =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/doctors") ||
    pathname.startsWith("/patient");

  // Not logged in → send to login
  if (isProtected && !session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Already logged in on /login → role-based home
  if (pathname === "/login" && session) {
    if (role === "patient") {
      return NextResponse.redirect(new URL("/patient", request.url));
    }
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Patients cannot access admin dashboard
  if (session && role === "patient") {
    if (pathname.startsWith("/dashboard") || pathname.startsWith("/doctors")) {
      return NextResponse.redirect(new URL("/patient", request.url));
    }
  }

  // Staff on patient portal → dashboard
  if (session && role !== "patient" && pathname.startsWith("/patient")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/doctors/:path*",
    "/patient/:path*",
    "/login",
  ],
};