import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight, Tag } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/layout/section-header";
import { Link } from "@/i18n/routing";
import { PromotionsCarousel } from "@/components/promotions/promotions-carousel";
import { getLocalizedPromotions } from "@/lib/promotions";
import { CONTACT_INFO } from "@/lib/constants";

export async function Promotions() {
  const [t, locale] = await Promise.all([
    getTranslations("promotions"),
    getLocale(),
  ]);

  const promotions = getLocalizedPromotions(locale);

  // PENDIENTE: ocultar la sección hasta que el usuario provea sus flyers + datos.
  if (promotions.length === 0) {
    return null;
  }

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
    prev: t("prev"),
    next: t("next"),
    swipeHint: t("swipeHint"),
  };

  const contact = {
    phone: CONTACT_INFO.phone,
    phoneFormatted: CONTACT_INFO.phoneFormatted,
    googleMapsUrl: CONTACT_INFO.googleMapsUrl,
  };

  return (
    <section id="promociones" className="py-20 md:py-28 bg-red-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          icon={Tag}
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <PromotionsCarousel
          promotions={promotions}
          labels={labels}
          contact={contact}
          formHref="#contacto"
        />

        {/* View all */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/promociones">
              {t("viewAll")}
              <ArrowRight className="size-5" weight="bold" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
