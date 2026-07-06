import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Stethoscope,
  GenderFemale,
  Clipboard,
  TestTube,
  Syringe,
  Heartbeat,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const CATEGORIES = [
  {
    key: "medicina-general",
    labelKey: "categoryMedicinaGeneral",
    icon: Stethoscope,
    image: "/images/services/condiciones-cronicas.webp",
  },
  {
    key: "salud-mujer",
    labelKey: "categorySaludMujer",
    icon: GenderFemale,
    image: "/images/services/ginecologia.webp",
  },
  {
    key: "examenes",
    labelKey: "categoryExamenes",
    icon: Clipboard,
    image: "/images/services/examen-dot.webp",
  },
  {
    key: "laboratorio",
    labelKey: "categoryLaboratorio",
    icon: TestTube,
    image: "/images/services/examenes-sangre.webp",
  },
  {
    key: "tratamientos",
    labelKey: "categoryTratamientos",
    icon: Syringe,
    image: "/images/services/curacion-heridas.webp",
  },
] as const;

export async function Services() {
  const [t, locale] = await Promise.all([
    getTranslations("services"),
    getLocale(),
  ]);
  const en = locale === "en";
  const servicesHref = en ? "/en/services" : "/services";

  return (
    <section id="servicios" className="relative overflow-hidden bg-slate-light py-20 md:py-28">
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-24 size-80 rounded-full bg-red-primary/5 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 size-80 rounded-full bg-blue-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="animate-on-scroll fade-up mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-primary/20 bg-white px-4 py-1.5 text-sm font-semibold text-red-primary shadow-sm">
            <Heartbeat className="size-4" weight="fill" />
            {t("eyebrow")}
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold text-slate-dark md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        {/* Category cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, idx) => {
            const items = SERVICES.filter((s) => s.category === cat.key);
            const examples = items
              .slice(0, 3)
              .map((s) => (en ? s.titleEn ?? s.title : s.title));
            const isRed = idx % 2 === 0;
            const tint = isRed ? "bg-red-dark/25" : "bg-blue-dark/25";
            const check = isRed ? "text-red-light" : "text-blue-light";

            return (
              <Link
                key={cat.key}
                href={servicesHref}
                className="group animate-on-scroll fade-up relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Background image */}
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlays for legibility */}
                <div aria-hidden className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/65 to-slate-900/20" />
                <div aria-hidden className={`absolute inset-0 ${tint}`} />

                {/* Top row: icon + count */}
                <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-sm">
                    <cat.icon className="size-6" weight="duotone" />
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {items.length} {t("servicesAvailable")}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="relative z-10 p-6 text-white">
                  <h3 className="font-heading text-xl font-bold drop-shadow-sm">
                    {t(cat.labelKey)}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-sm text-white/90">
                        <CheckCircle className={`size-4 shrink-0 ${check}`} weight="fill" />
                        <span className="line-clamp-1">{ex}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white transition-all group-hover:gap-2">
                    {t("learnMore")}
                    <ArrowRight className="size-4" weight="bold" />
                  </span>
                </div>
              </Link>
            );
          })}

          {/* CTA card fills the 6th cell */}
          <div className="animate-on-scroll fade-up flex min-h-[300px] flex-col items-start justify-center rounded-3xl bg-linear-to-br from-red-primary to-red-dark p-8 text-white shadow-lg">
            <h3 className="font-heading text-2xl font-bold">{t("readyToSchedule")}</h3>
            <p className="mt-2 text-white/90">{t("callOrVisit")}</p>
            <Button
              asChild
              size="lg"
              className="mt-6 gap-2 bg-white text-red-primary shadow-md hover:bg-white/90"
            >
              <Link href={servicesHref}>
                {t("viewAll")}
                <ArrowRight className="size-5" weight="bold" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
