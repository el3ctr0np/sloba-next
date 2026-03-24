import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "portal_session";
const JWT_SECRET = new TextEncoder().encode(
  process.env.PORTAL_JWT_SECRET || "dev-secret-change-in-production"
);

export interface PortalSession {
  clientId: string;
  clientName: string;
}

export async function createSessionToken(session: PortalSession): Promise<string> {
  return new SignJWT({ ...session })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(JWT_SECRET);
}

export async function verifySessionToken(token: string): Promise<PortalSession | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      clientId: payload.clientId as string,
      clientName: payload.clientName as string,
    };
  } catch {
    return null;
  }
}

export async function getPortalSession(): Promise<PortalSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export function createSessionCookie(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: "/",
  };
}

export function deleteSessionCookie() {
  return {
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 0,
    path: "/",
  };
}

// Simple in-memory rate limiter (resets on cold start — fine for Vercel)
const attempts = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);

  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) {
    return false;
  }

  entry.count++;
  return true;
}
