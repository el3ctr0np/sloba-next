import Script from "next/script";

/**
 * Consent Mode v2 defaults + GTM bootstrap.
 *
 * Lives in a shared component because <head> content moved out of the root
 * layout: the root layout used to read headers() only to set <html lang>, and
 * that single call opted the ENTIRE app into dynamic rendering (every page
 * returned `no-store` and missed the CDN on every request). <html> is now
 * rendered by src/app/[locale]/layout.tsx, which already knows the locale from
 * params, so pages can be statically rendered and served from the edge.
 *
 * Both scripts are client-side only (localStorage + document), so they do not
 * force dynamic rendering.
 */
export function HeadScripts() {
  return (
    <>
      {/* Google Consent Mode v2 — analytics granted by default (anonimna
          analitika, RS/ZZPL praksa), ADS storage denied dok korisnik ne
          prihvati na banneru. Must run BEFORE the GTM snippet so gtag()
          consent state is queued in dataLayer before any tags fire. */}
      <Script id="consent-mode-default" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted',
  wait_for_update: 500
});
try {
  if (localStorage.getItem('dj_consent') === 'granted') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
  }
} catch (e) {}`}
      </Script>
      <Script id="gtm" strategy="afterInteractive">
        {`if (/(^|\.)slobodan-jelisavac\.com$/.test(location.hostname)) {
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJ4B5QP');
}`}
      </Script>
    </>
  );
}

/** GTM <noscript> fallback. Must sit at the top of <body>. */
export function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PJ4B5QP"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
