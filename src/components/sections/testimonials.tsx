import { getTranslations } from "next-intl/server";
import { GoogleLogo, Star } from "@phosphor-icons/react/dist/ssr";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { StarRating } from "@/components/ui/star-rating";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

export async function Testimonials() {
  // Parallel fetching - eliminates waterfall
  const [t, googleData] = await Promise.all([
    getTranslations("testimonials"),
    getGooglePlaceData()
  ]);

  const averageRating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  // Solo reseñas reales de Google. Si la API no devuelve textos, no se muestra el carrusel.
  const reviews = googleData?.reviews ?? [];

  return (
    <section id="testimonios" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          icon={Star}
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        >
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
            <GoogleLogo className="size-6 text-slate-dark" weight="bold" />
            <StarRating rating={averageRating} starClassName="size-4" fillColorClassName="text-yellow-500" />
            <span className="font-bold text-slate-dark">{averageRating}</span>
            <span className="text-muted-foreground text-sm">({totalReviews}+ {t("reviews")})</span>
          </div>
        </SectionHeader>

        {/* Carousel (solo con reseñas reales) */}
        {reviews.length > 0 && <TestimonialsCarousel reviews={reviews} />}

        {/* CTA */}
        <div className="text-center mt-14">
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8">
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleLogo className="size-5" weight="bold" />
              {t("leaveReview")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
