import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// CSP con allowlist de terceros: GTM/GA/Google Ads, Meta Pixel, CallRail,
// Google Maps (iframe) y Places. Si se añade un script o fetch de un tercero
// nuevo, hay que extender la directiva correspondiente o se bloqueará en prod.
// React necesita eval() solo en desarrollo; HMR usa WebSockets a localhost.
const isDev = process.env.NODE_ENV === "development";
const scriptEval = isDev ? " 'unsafe-eval'" : "";
const connectDev = isDev ? " ws://127.0.0.1:* ws://localhost:* http://127.0.0.1:* http://localhost:*" : "";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${scriptEval} https://connect.facebook.net https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://www.google.com https://googleads.g.doubleclick.net https://js.callrail.com https://cdn.callrail.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self'${connectDev} https://graph.facebook.com https://connect.facebook.net https://www.facebook.com https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://ad.doubleclick.net https://pagead2.googlesyndication.com https://places.googleapis.com https://maps.googleapis.com https://js.callrail.com https://cdn.callrail.com https://api.callrail.com`,
  "frame-src 'self' https://www.google.com https://maps.google.com https://www.googletagmanager.com https://td.doubleclick.net https://www.facebook.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  images: {
    // Optimizador de Vercel desactivado (cuota agotada: /_next/image devolvía 402).
    // Loader propio: sirve variantes pregeneradas en prebuild
    // (scripts/generate-image-variants.mjs) para que next/image emita srcset y
    // las tarjetas no descarguen 1024 px, sin pasar por /_next/image.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [384, 640, 828, 1080, 1376],
    imageSizes: [128, 256, 512],
    qualities: [50, 60, 75],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "maps.googleapis.com", pathname: "/**" },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-select"],
  },
  async headers() {
    return [
      {
        // Imágenes estáticas: un año en caché (Vercel sirve public/ con max-age=0 por defecto).
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
