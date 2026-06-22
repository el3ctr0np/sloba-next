import { NextRequest, NextResponse } from "next/server";
import { REPORT_B64 } from "./report.data";

// Password-protected client report (HTTP Basic Auth).
const PASSWORD = process.env.REPORT_SLEEPYPIGLET_PASSWORD || "sleepyPiglet2026*";

export const dynamic = "force-dynamic";

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Sleepy Piglet Report", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization") || "";
  if (!auth.startsWith("Basic ")) return unauthorized();
  let decoded = "";
  try { decoded = Buffer.from(auth.slice(6), "base64").toString("utf-8"); }
  catch { return unauthorized(); }
  const sep = decoded.indexOf(":");
  const password = sep >= 0 ? decoded.slice(sep + 1) : "";
  if (password !== PASSWORD) return unauthorized();
  const html = Buffer.from(REPORT_B64, "base64").toString("utf-8");
  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
