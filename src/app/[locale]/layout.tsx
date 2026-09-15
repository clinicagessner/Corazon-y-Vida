import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
import { GoogleTags, GoogleTagManagerNoScript } from "@/components/tracking/google-tags";
import Script from "next/script";
import { SITE_CONFIG, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [t, googleData] = await Promise.all([
    getTranslations({ locale, namespace: "metadata" }),
    getGooglePlaceData(),
  ]);
  const reviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const ogDescription = t("ogDescription", { reviews, rating });

  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    alternates: {
      canonical: locale === "en" ? "/en" : "/",
      languages: {
        es: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      url: SITE_CONFIG.baseUrl,
      siteName: SITE_CONFIG.name,
      title: t("title"),
      description: ogDescription,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - Clínica médica hispana en Pasadena TX`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: ogDescription,
      images: [`${SITE_CONFIG.baseUrl}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // PENDIENTE: tokens de verificación de Google Search Console de la nueva clínica.
    // NO reutilizar los del proyecto de referencia. Descomentar y rellenar cuando existan.
    // verification: {
    //   google: ["<token-1>", "<token-2>"],
    // },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Sin esto, cualquier ruta raíz con punto (/ads.txt, /foo.xml) pasaba el
  // matcher del proxy, caía en [locale] y devolvía la home con 200 (soft 404).
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  // Analytics IDs desde variables de entorno (se renderizan solo si existen).
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${montserrat.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E11649" />
        {/* Los scripts de terceros se cargan tras window.load (ver abajo), así
            que no hace falta preconnect en el camino crítico del LCP. */}
        <link rel="dns-prefetch" href="https://cdn.callrail.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Meta Pixel noscript fallback */}
        {metaPixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        {/* GA4 se gestiona desde Google Tag Manager (contenedor abajo). */}
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <GoogleTagManagerNoScript />
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            {children}
            <ScrollToTop />
            <ScrollAnimations />
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
      {/* GTM + Google Ads (gtm.js y gtag.js diferidos a después de window.load) */}
      <GoogleTags />
      {/* CallRail swap: reescribe los números mostrados; diferido, no está en el LCP */}
      <Script
        id="callrail-swap"
        strategy="lazyOnload"
        src="https://cdn.callrail.com/companies/466775339/5eb54ce6b242c3e2876d/12/swap.js"
      />
      {/* Meta Pixel (diferido: era la tarea larga más grande tras la hidratación) */}
      {metaPixelId && (
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      {/* GA4 se gestiona desde Google Tag Manager (GTM-K8S48BQ3). */}
    </html>
  );
}
