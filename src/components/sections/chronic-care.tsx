"use client";

import Image from "next/image";
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
  { icon: Drop, key: "diabetes" },
  { icon: Heartbeat, key: "hypertension" },
  { icon: TestTube, key: "cholesterol" },
  { icon: Heart, key: "thyroid" },
] as const;

const featureKeys = ["lab", "followup", "spanish", "walkin"] as const;
const includeKeys = ["evaluation", "monitoring", "medication", "nutrition", "education"] as const;

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

        {/* Image + conditions */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-5">
          {/* Image */}
          <div className="animate-on-scroll fade-up relative min-h-[340px] overflow-hidden rounded-3xl shadow-lg lg:col-span-2">
            <Image
              src="/images/services/condiciones-cronicas.webp"
              alt="Enfermera hispana atendiendo a pacientes con diabetes e hipertensión en Clínica Hispana Corazón y Vida, Pasadena TX"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-slate-900/85 via-slate-900/15 to-transparent" />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-red-primary shadow-sm backdrop-blur-sm">
              <Heart className="size-3.5" weight="fill" />
              {t("imageBadge")}
            </span>
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
              <Heartbeat className="size-8 shrink-0 text-red-light" weight="duotone" />
              <div>
                <p className="font-heading text-sm font-bold text-white">{t("motto")}</p>
                <p className="text-xs text-white/80">{t("imageCaption")}</p>
              </div>
            </div>
          </div>

          {/* Conditions */}
          <div className="animate-on-scroll fade-up stagger-1 rounded-3xl border border-slate-100 bg-white p-6 shadow-lg md:p-8 lg:col-span-3">
            <h3 className="mb-6 font-heading text-xl font-bold text-slate-dark">
              {t("conditionsTitle")}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {conditions.map((condition, idx) => (
                <div
                  key={condition.key}
                  className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:border-red-primary/30 hover:bg-red-bg/40"
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
                  <div>
                    <span className="block font-semibold text-slate-dark">
                      {t(`conditions.${condition.key}`)}
                    </span>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`conditionDesc.${condition.key}`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Includes + CTA band */}
        <div className="animate-on-scroll fade-up mt-6 overflow-hidden rounded-3xl bg-slate-dark text-white shadow-lg">
          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-2 lg:items-center">
            {/* Includes checklist */}
            <div>
              <h3 className="mb-6 font-heading text-2xl font-bold">
                {t("includesTitle")}
              </h3>
              <ul className="space-y-3">
                {includeKeys.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-red-light" weight="fill" />
                    <span className="text-white/90">{t(`includes.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits + CTAs */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-2">
                {featureKeys.map((key) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2"
                  >
                    <CheckCircle className="size-4 shrink-0 text-red-light" weight="fill" />
                    <span className="text-xs text-white/90">{t(`features.${key}`)}</span>
                  </div>
                ))}
              </div>

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
              <Link
                href={getLocalizedHref("/services/condiciones-cronicas")}
                className="inline-flex items-center justify-center gap-1 text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {t("learnMore")}
                <ArrowRight className="size-4" weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
