import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { getLocale } from "next-intl/server";

const CLINIC_ID = `${SITE_CONFIG.baseUrl}/#clinic`;

const localePath = (locale: string) => (locale === "es" ? "" : `/${locale}`);

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: CONTACT_INFO.address,
  addressLocality: CONTACT_INFO.city,
  addressRegion: CONTACT_INFO.state,
  postalCode: CONTACT_INFO.zip,
  addressCountry: "US",
};

// Solo perfiles reales y verificados de la clínica.
const SAME_AS = [
  SOCIAL_LINKS.facebook,
  SOCIAL_LINKS.instagram,
  SOCIAL_LINKS.youtube,
  SOCIAL_LINKS.x,
  SOCIAL_LINKS.linkedin,
  SOCIAL_LINKS.google,
].filter(Boolean);

// Mismas zonas que el bloque "Áreas que servimos" de las páginas de servicio.
const AREA_SERVED = [
  "Pasadena",
  "South Houston",
  "Deer Park",
  "Galena Park",
  "Genoa",
  "Red Bluff",
  "Houston",
].map((name) => ({ "@type": "City", name }));

// Valores de la enumeración MedicalSpecialty de schema.org.
const MEDICAL_SPECIALTY = [
  "https://schema.org/PrimaryCare",
  "https://schema.org/Gynecologic",
  "https://schema.org/LaboratoryScience",
  "https://schema.org/CommunityHealth",
  "https://schema.org/PublicHealth",
];

export const serviceProcedureId = (slug: string) => `${SITE_CONFIG.baseUrl}/services/${slug}#procedure`;

/**
 * Nodo ligero de la clínica para todas las páginas menos la home: resuelve el
 * mismo @id sin repetir rating, reseñas y los 29 servicios en 86 páginas (y sin
 * que reviewCount difiera entre páginas regeneradas en momentos distintos).
 */
export async function JsonLdMedicalClinicRef() {
  const locale = await getLocale();
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: SITE_CONFIG.name,
    url: `${SITE_CONFIG.baseUrl}${localePath(locale)}`,
    telephone: CONTACT_INFO.phone,
    address: postalAddress,
    sameAs: SAME_AS,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * MedicalClinic completo: solo en la home, única fuente de verdad del rating.
 * Rating, conteo y reseñas 5★ en vivo desde Places con fallback a GOOGLE_REVIEWS_DATA.
 */
export async function JsonLdMedicalClinic({ locale }: { locale: string }) {
  const googleData = await getGooglePlaceData();
  const ratingValue = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const reviewCount = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const isEn = locale === "en";
  const homeUrl = `${SITE_CONFIG.baseUrl}${localePath(locale)}`;
  const services = [...SERVICES].sort((a, b) => a.order - b.order);

  const clinic: Record<string, unknown> = {
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    // Ubicación exacta para que buscadores e IAs no la mezclen con clínicas de nombre parecido.
    disambiguatingDescription: isEn
      ? `Walk-in Hispanic family clinic at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, TX ${CONTACT_INFO.zip}. Phone ${CONTACT_INFO.phoneFormatted}. Not affiliated with other clinics of similar name.`
      : `Clínica hispana familiar sin cita en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, TX ${CONTACT_INFO.zip}. Teléfono ${CONTACT_INFO.phoneFormatted}. Sin relación con otras clínicas de nombre parecido.`,
    url: homeUrl,
    inLanguage: isEn ? "en-US" : "es-MX",
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    image: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
    logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT_INFO.coordinates.lat,
      longitude: CONTACT_INFO.coordinates.lng,
    },
    hasMap: CONTACT_INFO.googleMapsUrl,
    areaServed: AREA_SERVED,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "19:00",
      },
    ],
    availableLanguage: [
      { "@type": "Language", name: "Spanish", alternateName: "es" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    medicalSpecialty: MEDICAL_SPECIALTY,
    availableService: services.map((service) => ({
      "@type": "MedicalProcedure",
      "@id": serviceProcedureId(service.slug),
      name: isEn && service.titleEn ? service.titleEn : service.title,
      url: `${SITE_CONFIG.baseUrl}${localePath(locale)}/services/${service.slug}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEn ? "Medical Services" : "Servicios Médicos",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        url: `${SITE_CONFIG.baseUrl}${localePath(locale)}/services/${service.slug}`,
        itemOffered: { "@id": serviceProcedureId(service.slug) },
      })),
    },
    sameAs: SAME_AS,
  };

  if (googleData?.reviews?.length) {
    clinic.review = googleData.reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author_name },
      datePublished: r.time ? new Date(r.time).toISOString().slice(0, 10) : undefined,
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
    }));
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      clinic,
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: { "@id": CLINIC_ID },
        inLanguage: ["es-MX", "en-US"],
      },
      {
        "@type": "WebPage",
        "@id": `${homeUrl}/#webpage`,
        url: homeUrl,
        name: SITE_CONFIG.name,
        isPartOf: { "@id": `${SITE_CONFIG.baseUrl}/#website` },
        about: { "@id": CLINIC_ID },
        description: SITE_CONFIG.description,
        inLanguage: isEn ? "en-US" : "es-MX",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function JsonLdFAQ({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function JsonLdBreadcrumb({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalProcedureSchemaProps {
  slug: string;
  name: string;
  description: string;
  image: string;
  url: string;
  bodyLocation?: string;
  procedureType?: "NoninvasiveProcedure" | "PercutaneousProcedure" | "SurgicalProcedure";
}

// `provider` no es una propiedad de MedicalProcedure; la relación con la clínica
// va por el @id que la home lista en availableService.
export function JsonLdMedicalProcedure({
  slug,
  name,
  description,
  image,
  url,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
}: MedicalProcedureSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": serviceProcedureId(slug),
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    mainEntityOfPage: url,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdCollectionPage({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
