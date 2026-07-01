import type { Metadata } from "next";
import Image from "next/image";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/routing";
import { ContactForm } from "@/components/forms/contact-form";
import { StarRating } from "@/components/ui/star-rating";
import { PromotionsGrid } from "@/components/promotions/promotions-grid";
import {
  JsonLdBreadcrumb,
  JsonLdCollectionPage,
  JsonLdFAQ,
} from "@/components/seo/json-ld";
import { getLocalizedPromotions } from "@/lib/promotions";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA, SITE_CONFIG } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotions" });
  const localePath = locale === "en" ? "/en" : "";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
      languages: {
        es: "/promociones",
        en: "/en/promociones",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
          width: 1200,
          height: 630,
          alt: t("pageTitle"),
        },
      ],
    },
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PromotionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, currentLocale, googleData] = await Promise.all([
    getTranslations("promotions"),
    getLocale(),
    getGooglePlaceData(),
  ]);

  const promotions = getLocalizedPromotions(currentLocale);
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const localePath = locale === "en" ? "/en" : "";

  const labels = {
    limitedTime: t("limitedTime"),
    priceLabel: t("priceLabel"),
    includesLabel: t("includesLabel"),
    ctaCall: t("ctaCall"),
    ctaDirections: t("ctaDirections"),
    ctaForm: t("ctaForm"),
    close: t("close"),
    openAria: t("openAria"),
    viewPromotion: t("viewPromotion"),
    viewDetail: t("viewDetail"),
  };

  const contact = {
    phone: CONTACT_INFO.phone,
    phoneFormatted: CONTACT_INFO.phoneFormatted,
    googleMapsUrl: CONTACT_INFO.googleMapsUrl,
  };

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
  ];

  return (
    <>
      <JsonLdCollectionPage
        name={t("pageTitle")}
        description={t("pageSubtitle")}
        url={`${SITE_CONFIG.baseUrl}${localePath}/promociones`}
      />
      <JsonLdBreadcrumb
        items={[
          { name: locale === "en" ? "Home" : "Inicio", url: `${SITE_CONFIG.baseUrl}${localePath}` },
          { name: t("pageEyebrow"), url: `${SITE_CONFIG.baseUrl}${localePath}/promociones` },
        ]}
      />
      <JsonLdFAQ questions={faqs} />

      <main className="min-h-screen bg-background">
        {/* Hero with background image */}
        <section className="relative overflow-hidden pt-28 pb-14 md:pt-40 md:pb-20">
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div aria-hidden className="absolute inset-0 bg-linear-to-br from-red-dark/85 via-slate-dark/80 to-blue-dark/85" />
          <div aria-hidden className="absolute inset-0 bg-slate-dark/30" />
          <div className="container relative z-10 mx-auto px-4">
            {/* Back to home */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" weight="bold" />
              {t("backToHome")}
            </Link>

            <div className="mx-auto max-w-2xl text-center text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/90">
                {t("pageEyebrow")}
              </p>
              <h1 className="mb-4 font-heading text-3xl font-bold text-white drop-shadow-sm md:text-4xl lg:text-5xl">
                {t("pageTitle")}
              </h1>
              <p className="mb-6 text-lg text-white/90">{t("pageSubtitle")}</p>

              {/* Live reviews badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 shadow-sm backdrop-blur-sm">
                <StarRating rating={rating} starClassName="size-4" fillColorClassName="text-yellow-400" emptyColorClassName="text-white/30" />
                <span className="text-sm font-medium text-white">
                  {rating.toFixed(1)} · {totalReviews}
                  {t("reviewsSuffix")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 pb-16 pt-12 md:pb-24 md:pt-16">
          {/* Grid */}
          <PromotionsGrid
            promotions={promotions}
            labels={labels}
            contact={contact}
            formHref="#formulario"
          />

          {/* FAQ */}
          <section className="mx-auto mt-20 max-w-3xl">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-slate-dark md:text-3xl">
              {t("faqTitle")}
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-heading text-base font-semibold text-slate-dark marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-primary">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Lead form */}
        <section id="formulario" className="py-16 md:py-24 bg-red-warm">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-2xl font-bold text-slate-dark md:text-3xl">
                {t("formTitle")}
              </h2>
              <p className="text-lg text-muted-foreground">{t("formSubtitle")}</p>
            </div>
            <div className="mx-auto max-w-2xl rounded-2xl border border-slate-100 bg-white p-6 shadow-lg md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
