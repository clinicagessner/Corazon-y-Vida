import { getTranslations } from "next-intl/server";
import { Phone, Envelope, MapPin, Clock, ChatCircleText } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeader } from "@/components/layout/section-header";
import { CONTACT_INFO } from "@/lib/constants";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contacto" className="py-20 md:py-28 bg-red-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          icon={ChatCircleText}
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-on-scroll fade-left stagger-1 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8 order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll fade-right stagger-2 order-1 lg:order-2">
            <div className="relative bg-linear-to-br from-red-primary via-red-dark to-slate-dark text-white rounded-2xl p-6 md:p-8 h-full overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <h3 className="relative text-2xl font-heading font-bold mb-8">
                {t("info.address")}
              </h3>

              <div className="relative space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-4 group"
                  suppressHydrationWarning
                >
                  <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="size-6" weight="fill" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t("info.phone")}</p>
                    <p className="text-white/80 text-lg" suppressHydrationWarning>
                      {CONTACT_INFO.phoneFormatted}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <Envelope className="size-6" weight="fill" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t("info.email")}</p>
                    <p className="text-white/80">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <MapPin className="size-6" weight="fill" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t("info.address")}</p>
                    <p className="text-white/80">
                      {CONTACT_INFO.address}
                      <br />
                      {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                    </p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="size-6" weight="fill" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t("info.hours")}</p>
                    <p className="text-white/80">
                      {t("info.hoursWeekday")}
                      <br />
                      {t("info.hoursWeekend")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="relative mt-8 pt-8 border-t border-white/20">
                <p className="text-white/70 text-sm">
                  {t("info.footerNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
