import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = process.env.META_PIXEL_ID ?? "179454509459591";
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN ?? "";
const GRAPH_API_URL = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`;

interface MetaUserData {
  client_ip_address?: string;
  client_user_agent?: string;
  fbc?: string;
  fbp?: string;
  em?: string;
  ph?: string;
}

interface MetaEvent {
  event_name: string;
  event_id: string;
  event_time: number;
  event_source_url: string;
  action_source: string;
  user_data?: MetaUserData;
  custom_data?: Record<string, unknown>;
}

interface CAPIRequestBody {
  events: MetaEvent[];
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CAPIRequestBody;

    if (!body.events || !Array.isArray(body.events)) {
      return NextResponse.json(
        { error: "Missing events array" },
        { status: 400 }
      );
    }

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "";
    const userAgent = request.headers.get("user-agent") ?? "";

    const enrichedEvents = body.events.map((event) => ({
      ...event,
      user_data: {
        ...event.user_data,
        client_ip_address: clientIp,
        client_user_agent: userAgent,
      },
    }));

    const params = new URLSearchParams({
      data: JSON.stringify(enrichedEvents),
      access_token: ACCESS_TOKEN,
      // TODO: Ukloni test_event_code pre produkcije
      // test_event_code: "TEST12345",
    });

    const response = await fetch(GRAPH_API_URL, {
      method: "POST",
      body: params,
    });

    const result = await response.json();

    if (!response.ok) {
      console.warn("[Meta CAPI] Error response:", JSON.stringify(result));
      return NextResponse.json(
        { error: "CAPI request failed", details: result },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.warn("[Meta CAPI] Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
