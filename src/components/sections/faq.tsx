import { getTranslations } from "next-intl/server";
import { Question } from "@phosphor-icons/react/dist/ssr";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/layout/section-header";
import { FAQ_ITEMS } from "@/lib/constants";
import { JsonLdFAQ } from "@/components/seo/json-ld";

export async function FAQ() {
  const t = await getTranslations();

  // Prepare FAQ data for JSON-LD
  const faqData = FAQ_ITEMS.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));

  return (
    <section id="preguntas-frecuentes" className="py-20 md:py-28 bg-red-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          icon={Question}
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />

        {/* FAQ Accordion */}
        <div className="animate-on-scroll fade-up stagger-1 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="group bg-white border border-slate-100 rounded-2xl px-6 shadow-sm hover:shadow-md hover:border-red-primary/20 transition-all duration-300 data-[state=open]:border-red-primary/30 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-dark hover:text-red-primary hover:no-underline py-5 data-[state=open]:text-red-primary">
                  <span className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-8 rounded-lg bg-red-bg text-red-primary text-sm font-bold group-data-[state=open]:bg-red-primary group-data-[state=open]:text-white transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{t(item.question)}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-12 leading-relaxed">
                  {t(item.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* JSON-LD for FAQ */}
      <JsonLdFAQ questions={faqData} />
    </section>
  );
}
