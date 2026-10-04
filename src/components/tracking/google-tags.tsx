"use client";

import { useEffect } from "react";
import Script from "next/script";

const GTM_ID = "GTM-K8S48BQ3";

/**
 * GA4 y Google Ads (un solo gtag.js) y Meta Pixel se cargan con la PRIMERA
 * interacción del visitante (toque, clic, tecla o scroll), no al cargar la
 * página. Misma receta que Airline (decisión del usuario, 2026-10-03): en
 * móvil sumaban más de 1 s de bloqueo del hilo principal y la home se quedaba
 * en ~51 en Lighthouse.
 *
 * Coste asumido: quien entra y sale sin tocar ni desplazar nada no se mide.
 * Las conversiones sí: para llamar, escribir o enviar el formulario hay que
 * tocar la página, y ese toque ya dispara la carga. `dataLayer` y `gtag`
 * existen desde el montaje, así que lo que se encole antes se envía al cargar.
 *
 * GTM sigue con `lazyOnload` (tras window.load): sus disparadores de clic
 * tienen que estar escuchando antes del primer toque. CallRail también se
 * queda en `lazyOnload` (layout): cambia el número visible y, si llegara
 * tarde, la llamada de un visitante de Ads iría al número sin rastrear.
 * IDs desde env: NEXT_PUBLIC_GOOGLE_ADS_ID, NEXT_PUBLIC_GA_ID y
 * NEXT_PUBLIC_META_PIXEL_ID.
 */

const INTERACTION_EVENTS = ["pointerdown", "touchstart", "keydown", "scroll", "wheel"] as const;

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};

type TagsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: Fbq;
  _fbq?: Fbq;
  __tagsLoaded?: boolean;
  __gtagConfigured?: boolean;
};

function loadScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadTags(w: TagsWindow, gtagId: string | undefined, pixelId: string | undefined) {
  if (w.__tagsLoaded) return;
  w.__tagsLoaded = true;

  if (gtagId) loadScript(`https://www.googletagmanager.com/gtag/js?id=${gtagId}`);

  if (pixelId && !w.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    w.fbq = fbq;
    w._fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", pixelId);
    fbq("track", "PageView");
  }
}

export function GoogleTags() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    const w = window as TagsWindow;
    const ids = [adsId, gaId].filter(Boolean) as string[];
    w.dataLayer = w.dataLayer || [];
    if (typeof w.gtag !== "function") {
      w.gtag = function gtag() {
        // gtag.js espera el objeto `arguments`, no un array.
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      };
    }
    // `trackEvent` (conversion-events.tsx) también puede crear `gtag`: la
    // configuración va aparte para que se haga siempre, una sola vez.
    if (!w.__gtagConfigured) {
      w.__gtagConfigured = true;
      w.gtag("js", new Date());
      for (const id of ids) w.gtag("config", id);
    }
    if (w.__tagsLoaded) return;

    const onFirstInteraction = () => {
      for (const e of INTERACTION_EVENTS) window.removeEventListener(e, onFirstInteraction);
      loadTags(w, ids[0], pixelId);
    };
    for (const e of INTERACTION_EVENTS) {
      window.addEventListener(e, onFirstInteraction, { once: true, passive: true });
    }
    return () => {
      for (const e of INTERACTION_EVENTS) window.removeEventListener(e, onFirstInteraction);
    };
  }, [adsId, gaId, pixelId]);

  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
      </Script>
      <Script id="gtm-src" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
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
