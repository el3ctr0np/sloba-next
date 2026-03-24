import { NextRequest, NextResponse } from "next/server";
import {
  createSessionToken,
  createSessionCookie,
  checkRateLimit,
} from "@/lib/portal-auth";
import { findClientByAccessCode } from "@/lib/portal-queries";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Previše pokušaja. Pokušajte ponovo za 15 minuta." },
      { status: 429 }
    );
  }

  try {
    const { accessCode } = await request.json();

    if (!accessCode || typeof accessCode !== "string") {
      return NextResponse.json(
        { error: "Pristupni kod je obavezan." },
        { status: 400 }
      );
    }

    const client = await findClientByAccessCode(accessCode.trim());

    if (!client) {
      return NextResponse.json(
        { error: "Neispravan pristupni kod." },
        { status: 401 }
      );
    }

    const token = await createSessionToken({
      clientId: client._id,
      clientName: client.name,
    });

    const cookie = createSessionCookie(token);
    const response = NextResponse.json({
      success: true,
      slug: client.slug?.current || client._id,
    });
    response.cookies.set(cookie);

    return response;
  } catch {
    return NextResponse.json(
      { error: "Došlo je do greške. Pokušajte ponovo." },
      { status: 500 }
    );
  }
}
