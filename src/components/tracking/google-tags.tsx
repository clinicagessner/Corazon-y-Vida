import Script from "next/script";

const GTM_ID = "GTM-K8S48BQ3";

/**
 * Google Tag Manager + GA4 y Google Ads con un solo gtag.js, con carga diferida.
 * La inicialización (dataLayer, gtag y config) va inline en afterInteractive
 * para que cualquier evento se encole desde el principio; la descarga de
 * gtm.js y gtag.js (~275 KB) se pospone a después de window.load para que no
 * se precarguen con prioridad alta por delante del hero (LCP). Ambos procesan
 * la cola al llegar, así que no se pierde ningún evento ni conversión.
 * @next/third-parties se reemplaza porque inyecta un preload de gtm.js.
 * gtag.js se pide con el ID de Ads (cargador de la red) y GA4 mide por su `config`.
 * IDs desde env: NEXT_PUBLIC_GOOGLE_ADS_ID y NEXT_PUBLIC_GA_ID.
 */
export function GoogleTags() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const ids = [adsId, gaId].filter(Boolean) as string[];

  return (
    <>
      <Script id="google-tags-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ids.map((id) => `gtag('config', '${id}');`).join("\n")}`}
      </Script>
      <Script id="gtm-src" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
      {ids.length > 0 && (
        <Script id="google-ads-src" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`} />
      )}
    </>
  );
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
