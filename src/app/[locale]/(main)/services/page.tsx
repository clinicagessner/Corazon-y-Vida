import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Stethoscope } from "@phosphor-icons/react/dist/ssr";
import { ServicesFilter } from "@/components/services/services-filter";
import { PageHero } from "@/components/layout/page-hero";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";
import { JsonLdCollectionPage } from "@/components/seo/json-ld";

const categoryInfo: Record<string, { label: string; labelEn: string; iconName: string }> = {
  "medicina-general": { label: "Medicina general", labelEn: "General medicine", iconName: "Stethoscope" },
  "salud-mujer": { label: "Salud de la mujer", labelEn: "Women's health", iconName: "GenderFemale" },
  examenes: { label: "Exámenes y certificados", labelEn: "Exams & certificates", iconName: "Clipboard" },
  laboratorio: { label: "Laboratorio y pruebas", labelEn: "Lab & testing", iconName: "TestTube" },
  tratamientos: { label: "Tratamientos", labelEn: "Treatments", iconName: "Syringe" },
};

const categoryOrder = ["medicina-general", "salud-mujer", "examenes", "laboratorio", "tratamientos"];

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const localePath = locale === "en" ? "/en" : "";

  const title = locale === "en" ? "Medical Services in Pasadena TX | Corazón y Vida" : "Servicios Médicos en Pasadena TX | Corazón y Vida";
  const description = locale === "en"
    ? "Medical services in Pasadena TX: family medicine, I-693 immigration exams, lab tests, gynecology, ultrasound, DOT physicals and more. Walk-ins welcome."
    : "Servicios médicos en Pasadena TX: medicina familiar, exámenes I-693, laboratorio, ginecología, ultrasonido, examen DOT y más. Sin cita, en español.";
  const ogImage = { url: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`, width: 1920, height: 1280, alt: t("title") };

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/services`,
      languages: {
        es: "/services",
        en: "/en/services",
        "x-default": "/services",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_CONFIG.baseUrl}${localePath}/services`,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("services");

  const categories = categoryOrder.map((id) => ({
    id,
    label: locale === "en" ? categoryInfo[id].labelEn : categoryInfo[id].label,
    iconName: categoryInfo[id].iconName,
  }));

  const sortedServices = [...SERVICES].sort((a, b) => a.order - b.order).map((s) => getLocalizedService(s, locale));

  const localePath = locale === "en" ? "/en" : "";

  return (
    <>
      <JsonLdCollectionPage
        name={t("title")}
        description={t("subtitle")}
        url={`${SITE_CONFIG.baseUrl}${localePath}/services`}
      />
      <main className="min-h-screen bg-background">
        {/* Hero Header */}
        <PageHero
          icon={Stethoscope}
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* Services with Filter */}
        <ServicesFilter services={sortedServices} categories={categories} />
      </main>
    </>
  );
}
