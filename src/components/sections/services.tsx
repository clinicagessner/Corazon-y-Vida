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
  { key: "medicina-general", labelKey: "categoryMedicinaGeneral", icon: Stethoscope },
  { key: "salud-mujer", labelKey: "categorySaludMujer", icon: GenderFemale },
  { key: "examenes", labelKey: "categoryExamenes", icon: Clipboard },
  { key: "laboratorio", labelKey: "categoryLaboratorio", icon: TestTube },
  { key: "tratamientos", labelKey: "categoryTratamientos", icon: Syringe },
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
            const accent = isRed ? "text-red-primary" : "text-blue-primary";
            const tile = isRed
              ? "bg-red-primary/10 text-red-primary"
              : "bg-blue-primary/10 text-blue-primary";

            return (
              <Link
                key={cat.key}
                href={servicesHref}
                className="group animate-on-scroll fade-up flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-primary/30 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex size-14 items-center justify-center rounded-2xl ${tile}`}>
                    <cat.icon className="size-7" weight="duotone" />
                  </div>
                  <span className="rounded-full bg-slate-light px-3 py-1 text-xs font-semibold text-slate-primary">
                    {items.length} {t("servicesAvailable")}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-slate-dark">
                  {t(cat.labelKey)}
                </h3>
                <ul className="flex-1 space-y-2">
                  {examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm text-slate-primary">
                      <CheckCircle className={`mt-0.5 size-4 shrink-0 ${accent}`} weight="fill" />
                      <span className="line-clamp-1">{ex}</span>
                    </li>
                  ))}
                </ul>
                <span className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${accent} transition-all group-hover:gap-2`}>
                  {t("learnMore")}
                  <ArrowRight className="size-4" weight="bold" />
                </span>
              </Link>
            );
          })}

          {/* CTA card fills the 6th cell */}
          <div className="animate-on-scroll fade-up flex flex-col items-start justify-center rounded-3xl bg-linear-to-br from-red-primary to-red-dark p-6 text-white shadow-lg">
            <h3 className="font-heading text-xl font-bold">{t("readyToSchedule")}</h3>
            <p className="mt-2 text-sm text-white/90">{t("callOrVisit")}</p>
            <Button
              asChild
              size="lg"
              className="mt-5 gap-2 bg-white text-red-primary shadow-md hover:bg-white/90"
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
