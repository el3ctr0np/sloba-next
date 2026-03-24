import { NextRequest, NextResponse } from "next/server";
import { getPortalSession } from "@/lib/portal-auth";
import { createClientMetric } from "@/lib/portal-queries";

export async function POST(request: NextRequest) {
  const session = await getPortalSession();

  if (!session) {
    return NextResponse.json(
      { error: "Niste prijavljeni." },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { period, phoneCalls, jobsCompleted, clientNote } = body;

    if (!period || !/^\d{4}-\d{2}$/.test(period)) {
      return NextResponse.json(
        { error: "Period mora biti u formatu YYYY-MM." },
        { status: 400 }
      );
    }

    await createClientMetric({
      clientId: session.clientId,
      period,
      phoneCalls: phoneCalls ? Number(phoneCalls) : undefined,
      jobsCompleted: jobsCompleted ? Number(jobsCompleted) : undefined,
      clientNote: clientNote || undefined,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Došlo je do greške pri čuvanju podataka." },
      { status: 500 }
    );
  }
}
