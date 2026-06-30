"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import {
  Phone,
  CalendarCheck,
  Heart,
  TestTube,
  CheckCircle,
  Heartbeat,
  Drop,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO } from "@/lib/constants";

const conditions = [
  { icon: Drop, titleKey: "diabetes" },
  { icon: Heartbeat, titleKey: "hypertension" },
  { icon: TestTube, titleKey: "cholesterol" },
  { icon: Heart, titleKey: "thyroid" },
];

const featureKeys = ["lab", "followup", "spanish", "walkin"] as const;

export function ChronicCare() {
  const t = useTranslations("chronicCare");
  const locale = useLocale();

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  return (
    <section
      id="enfermedades-cronicas"
      className="relative overflow-hidden py-20 md:py-28 bg-linear-to-b from-red-bg/50 via-background to-background"
    >
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -top-20 right-0 size-80 rounded-full bg-blue-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-10 -left-20 size-80 rounded-full bg-red-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="animate-on-scroll fade-up mx-auto max-w-3xl text-center">
          <Badge className="bg-red-primary hover:bg-red-dark text-white px-5 py-2 shadow-sm">
            <Heart className="size-4 mr-2" weight="fill" />
            {t("badge")}
          </Badge>
          <h2 className="mt-6 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Two-card layout */}
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Conditions card */}
          <div className="animate-on-scroll fade-up lg:col-span-3 rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-lg">
            <h3 className="mb-6 font-heading text-xl font-bold text-slate-dark">
              {t("conditionsTitle")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {conditions.map((condition, idx) => (
                <div
                  key={condition.titleKey}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:border-red-primary/30 hover:bg-red-bg/40"
                >
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${
                      idx % 2 === 0
                        ? "bg-red-primary/10 text-red-primary"
                        : "bg-blue-primary/10 text-blue-primary"
                    }`}
                  >
                    <condition.icon className="size-6" weight="duotone" />
                  </div>
                  <span className="font-semibold text-slate-dark">
                    {t(`conditions.${condition.titleKey}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Features + CTA card */}
          <div className="animate-on-scroll fade-up stagger-1 lg:col-span-2 flex flex-col rounded-3xl bg-slate-dark p-6 md:p-8 text-white shadow-lg">
            <h3 className="mb-6 font-heading text-xl font-bold">
              {t("featuresTitle")}
            </h3>
            <ul className="flex-1 space-y-4">
              {featureKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-red-light" weight="fill" />
                  <span className="text-sm text-white/90">{t(`features.${key}`)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-red-primary text-white shadow-lg shadow-red-primary/30 hover:bg-red-dark"
              >
                <Link href={getLocalizedHref("/#contacto")}>
                  <CalendarCheck className="size-5" weight="bold" />
                  {t("ctaSchedule")}
                </Link>
              </Button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border-2 border-white/40 font-medium text-white transition-colors hover:bg-white hover:text-slate-dark"
                suppressHydrationWarning
              >
                <Phone className="size-5" weight="bold" />
                {t("ctaCall")}
              </a>
            </div>
          </div>
        </div>

        {/* Learn more */}
        <div className="mt-8 text-center">
          <Link
            href={getLocalizedHref("/services/condiciones-cronicas")}
            className="inline-flex items-center gap-1 font-medium text-red-primary underline-offset-4 transition-colors hover:text-red-dark hover:underline"
          >
            {t("learnMore")}
            <ArrowRight className="size-4" weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
