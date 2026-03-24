import { NextResponse } from "next/server";
import { deleteSessionCookie } from "@/lib/portal-auth";

export async function POST() {
  const cookie = deleteSessionCookie();
  const response = NextResponse.json({ success: true });
  response.cookies.set(cookie);
  return response;
}
