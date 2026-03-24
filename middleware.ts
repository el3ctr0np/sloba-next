import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const intlMiddleware = createIntlMiddleware(routing);

const JWT_SECRET = new TextEncoder().encode(
  process.env.PORTAL_JWT_SECRET || "dev-secret-change-in-production"
);

// Portal routes that require authentication
const PROTECTED_PORTAL_PATHS = ["/portal/dashboard", "/portal/reports", "/portal/history", "/portal/unos", "/klijenti/"];

function isProtectedPortalRoute(pathname: string): boolean {
  return PROTECTED_PORTAL_PATHS.some((path) =>
    pathname.includes(path)
  );
}

export default async function middleware(request: NextRequest) {
  // Check if this is a protected portal route
  if (isProtectedPortalRoute(request.nextUrl.pathname)) {
    const token = request.cookies.get("portal_session")?.value;

    if (!token) {
      const locale = request.nextUrl.pathname.startsWith("/en") ? "en" : "sr";
      const loginPath = request.nextUrl.pathname.includes("/klijenti/")
        ? `/${locale}/klijenti-login`
        : `/${locale}/portal`;
      return NextResponse.redirect(new URL(loginPath, request.url));
    }

    try {
      await jwtVerify(token, JWT_SECRET);
    } catch {
      const locale = request.nextUrl.pathname.startsWith("/en") ? "en" : "sr";
      const loginPath = request.nextUrl.pathname.includes("/klijenti/")
        ? `/${locale}/klijenti-login`
        : `/${locale}/portal`;
      const response = NextResponse.redirect(new URL(loginPath, request.url));
      response.cookies.delete("portal_session");
      return response;
    }
  }

  // Run intl middleware for all routes
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|studio|api|.*\\..*).*)"],
};
