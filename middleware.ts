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

// Old WordPress leftovers. The site moved to Next.js in Jan 2026 but Googlebot
// keeps requesting these (GSC Sep 2026: 39 x 404, 3 x 403, 2 x duplicate).
// A 410 says "gone on purpose": it drops out of the index report faster than a
// 404 and, unlike a redirect to the homepage, is never counted as a soft 404.
// Only junk with no successor lives here. Anything with a real replacement is
// a 301 in next.config.ts (which runs before this middleware).
const GONE_PREFIXES = [
  "/wp-content",
  "/wp-admin",
  "/wp-includes",
  "/wp-json",
  "/wp-login",
  "/portfolio-post",
  "/product-tag",
  "/product-category",
  "/service-category",
  "/tag/",
  "/feed",
  "/comments",
  "/hello-world",
  "/5-resasons-to-purchase-desktop-computer",
  "/event-recap-careers-open-source-beyond",
];

function isGone(pathname: string): boolean {
  return GONE_PREFIXES.some(
    (p) => pathname === p || pathname === p.replace(/\/$/, "") || pathname.startsWith(p.endsWith("/") ? p : p + "/")
  );
}

export default async function middleware(request: NextRequest) {
  if (isGone(request.nextUrl.pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  }

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
