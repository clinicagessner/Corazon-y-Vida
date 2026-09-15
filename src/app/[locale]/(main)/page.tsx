import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { AboutClinic } from "@/components/sections/about-clinic";
import { Promotions } from "@/components/sections/promotions";
import { ChronicCare } from "@/components/sections/chronic-care";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ScrollSpy } from "@/components/animations/scroll-spy";
import { JsonLdMedicalClinic } from "@/components/seo/json-ld";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLdMedicalClinic locale={locale} />
      <Hero />
      <Promotions />
      <Services />
      <AboutClinic />
      <ChronicCare />
      <Testimonials />
      <FAQ />
      <Location />
      <BlogPreview />
      <Contact />
      <ScrollSpy />
    </>
  );
}
