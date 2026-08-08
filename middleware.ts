import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const intlMiddleware = createIntlMiddleware(routing);

// No fallback default on purpose - see the note in src/lib/portal-auth.ts.
// Throwing here is what we want: the jwtVerify call below is inside a try that
// redirects to login, so a missing secret locks the portal rather than opening
// it with a secret anyone could read in the source.
function jwtSecret(): Uint8Array {
  const secret = process.env.PORTAL_JWT_SECRET;
  if (!secret) throw new Error("PORTAL_JWT_SECRET is not set");
  return new TextEncoder().encode(secret);
}

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
      await jwtVerify(token, jwtSecret());
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
  matcher: ["/((?!_next|studio|api|reports|.*\\..*).*)"],
};
