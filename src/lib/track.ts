// --- GTM dataLayer helper for generic CTA click tracking ---------------
// Pushes a `cta_click` event to window.dataLayer so GTM can build CTA
// engagement funnels (which button, from where, to where).

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

/**
 * Pushes a `cta_click` event to the dataLayer.
 * @param location Where the CTA lives (e.g. "hero", "final_cta", "case_study_cta")
 * @param destination Where the CTA links to (e.g. "/kontakt")
 */
export function trackCtaClick(location: string, destination: string): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "cta_click",
    cta_location: location,
    cta_destination: destination,
  });
}
