type FbqFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

const META_PIXEL_ID = "978584014430413";

let pixelInitialized = false;

/**
 * Inicijalizuje Meta Pixel base code.
 * Bezbedno za višestruko pozivanje — inicijalizuje samo jednom.
 */
export function initMetaPixel(): void {
  if (typeof window === "undefined") return;
  if (pixelInitialized) return;

  /* eslint-disable */
  (function (f: Window, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod(...args) : n.queue!.push(args);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [] as unknown[];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s?.parentNode?.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  /* eslint-enable */

  window.fbq!("init", META_PIXEL_ID);
  pixelInitialized = true;
}

/**
 * SHA-256 hash za PII podatke (email, phone).
 */
async function sha256(value: string): Promise<string> {
  if (typeof window === "undefined") return value;
  const normalized = value.trim().toLowerCase();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Čita _fbc i _fbp cookies.
 */
function getFbCookies(): { fbc?: string; fbp?: string } {
  if (typeof document === "undefined") return {};
  const cookies = document.cookie.split(";").reduce(
    (acc, c) => {
      const [key, val] = c.trim().split("=");
      if (key && val) acc[key] = val;
      return acc;
    },
    {} as Record<string, string>
  );
  return {
    fbc: cookies["_fbc"] || undefined,
    fbp: cookies["_fbp"] || undefined,
  };
}

/**
 * Generiše unique event ID za deduplikaciju.
 */
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

interface TrackEventOptions {
  eventName: string;
  customData?: Record<string, unknown>;
  userData?: { email?: string; phone?: string };
}

/**
 * Glavna tracking funkcija — šalje event i na Pixel i na CAPI sa istim event_id.
 */
export async function trackMetaEvent({
  eventName,
  customData,
  userData,
}: TrackEventOptions): Promise<void> {
  if (typeof window === "undefined") return;

  const eventId = generateEventId();
  const eventTime = Math.floor(Date.now() / 1000);
  const eventSourceUrl = window.location.href;
  const { fbc, fbp } = getFbCookies();

  // 1. Pixel (client-side)
  try {
    if (window.fbq) {
      window.fbq("track", eventName, customData ?? {}, { eventID: eventId });
    }
  } catch (e) {
    console.warn("[Meta Pixel] Error:", e);
  }

  // 2. CAPI (server-side) — non-blocking
  try {
    const capiUserData: Record<string, string | undefined> = { fbc, fbp };

    if (userData?.email) {
      capiUserData.em = await sha256(userData.email);
    }
    if (userData?.phone) {
      capiUserData.ph = await sha256(userData.phone);
    }

    fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        events: [
          {
            event_name: eventName,
            event_id: eventId,
            event_time: eventTime,
            event_source_url: eventSourceUrl,
            action_source: "website",
            user_data: capiUserData,
            custom_data: customData,
          },
        ],
      }),
    }).catch((err) => console.warn("[Meta CAPI] Fetch error:", err));
  } catch (e) {
    console.warn("[Meta CAPI] Error:", e);
  }
}

// --- Convenience funkcije ---

export function trackPageView(): void {
  trackMetaEvent({ eventName: "PageView" });
}

export function trackViewContent(): void {
  trackMetaEvent({
    eventName: "ViewContent",
    customData: { content_name: "Scroll 90% - Form Visible" },
  });
}

export function trackFormStart(): void {
  trackMetaEvent({
    eventName: "InitiateCheckout",
    customData: { content_name: "Contact Form Started" },
  });
}

export function trackLead(formData?: {
  email?: string;
  phone?: string;
}): void {
  trackMetaEvent({
    eventName: "Lead",
    customData: { content_name: "Contact Form Submission" },
    userData: formData,
  });
}
