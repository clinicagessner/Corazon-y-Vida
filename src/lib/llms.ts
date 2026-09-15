import { CONTACT_INFO, FAQ_ITEMS, PROMOTIONS, SERVICES, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { getServiceFAQs } from "@/lib/service-faqs";
import { getLocalizedService } from "@/lib/utils";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

// llms.txt y llms-full.txt se generan desde los mismos datos que las páginas
// (servicios, promociones, posts, FAQ, contacto), así nunca vuelven a quedar
// desfasados como el archivo estático que reemplazan. Solo hechos que el sitio
// ya publica: sin credenciales, precios ni cifras que no estén en los datos.
// Toda URL va como enlace Markdown [texto](url): sin enlaces, los validadores
// de "agentic browsing" marcan el archivo como vacío.

type Locale = "es" | "en";

const base = SITE_CONFIG.baseUrl;
const url = (path: string, locale: Locale = "es") =>
  `${base}${locale === "en" ? "/en" : ""}${path === "/" ? "" : path}`;

const CATEGORIES: Array<{ id: string; label: string; labelEn: string }> = [
  { id: "medicina-general", label: "Medicina general", labelEn: "General medicine" },
  { id: "salud-mujer", label: "Salud de la mujer", labelEn: "Women's health" },
  { id: "examenes", label: "Exámenes y certificados", labelEn: "Exams & certificates" },
  { id: "laboratorio", label: "Laboratorio y pruebas", labelEn: "Lab & testing" },
  { id: "tratamientos", label: "Tratamientos", labelEn: "Treatments" },
];

const byOrder = [...SERVICES].sort((a, b) => a.order - b.order);
const byPromoOrder = [...PROMOTIONS].sort((a, b) => a.order - b.order);

const ADDRESS = `${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`;
const HOURS_EN = "Open seven days a week from 9:00 AM to 9:00 PM. No appointment needed at any time the clinic is open.";
const HOURS_ES = "Abierto los siete días de la semana de 9:00 AM a 9:00 PM. Se atiende sin cita en todo el horario.";
const AREA_EN =
  "Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities. The clinic is on W Southmore Ave in ZIP 77502.";
// Ubicación exacta, sin nombrar otras clínicas de nombre parecido.
const ENTITY_EN = `${SITE_CONFIG.name} is a Hispanic family walk-in clinic at ${ADDRESS}, in the southeast Houston area. It is not affiliated with other clinics of similar name. Phone: ${CONTACT_INFO.phoneFormatted}. Website: [${base.replace("https://", "")}](${base}).`;
const ENTITY_ES = `${SITE_CONFIG.name} es una clínica hispana familiar sin cita previa en ${ADDRESS}, en el área sureste de Houston. No tiene relación con otras clínicas de nombre parecido. Teléfono: ${CONTACT_INFO.phoneFormatted}.`;

const homeFaq = (locale: Locale) => {
  const m = (locale === "en" ? en : es) as { faq: Record<string, string> };
  return FAQ_ITEMS.map((f) => ({
    question: m.faq[f.question.replace("faq.", "")],
    answer: m.faq[f.answer.replace("faq.", "")],
  })).filter((f) => f.question && f.answer);
};

const lastUpdated = () =>
  getBlogPosts("es")
    .map((p) => p.dateModified ?? p.date)
    .reduce((m, d) => (d > m ? d : m), "2026-01-01");

export function buildLlmsTxt(): string {
  const posts = getBlogPosts("en");
  const L: string[] = [];
  L.push(`# ${SITE_CONFIG.name} — Pasadena, TX`, "", `> ${en.metadata.description}`, "");
  L.push("## About", "", ENTITY_EN, "", ENTITY_ES, "");
  L.push(
    "## Location and contact",
    "",
    `- Address: ${ADDRESS}`,
    `- Phone: ${CONTACT_INFO.phoneFormatted}`,
    `- WhatsApp: [${CONTACT_INFO.phoneFormatted}](https://wa.me/${CONTACT_INFO.whatsapp})`,
    `- Email: ${CONTACT_INFO.email}`,
    `- Coordinates: ${CONTACT_INFO.coordinates.lat}, ${CONTACT_INFO.coordinates.lng}`,
    `- [Google Maps](${CONTACT_INFO.googleMapsUrl})`,
    `- [Google reviews](${CONTACT_INFO.googleReviewUrl})`,
    "",
  );
  L.push("## Hours", "", HOURS_EN, "", "## Service area", "", AREA_EN, "");
  L.push("## Languages", "", "- Spanish: all staff and consultations, 100% in Spanish", "- English: also available on request", "");
  L.push(`## Services (${SERVICES.length} total)`, "");
  for (const cat of CATEGORIES) {
    const group = byOrder.filter((s) => s.category === cat.id);
    if (!group.length) continue;
    L.push(`### ${cat.labelEn} / ${cat.label}`, "");
    for (const raw of group) {
      const s = getLocalizedService(raw, "en");
      L.push(`- [${s.title}](${url(`/services/${raw.slug}`)}): ${s.description}`);
    }
    L.push("");
  }
  L.push(
    "## Key pages",
    "",
    `- [Homepage](${url("/")})`,
    `- [All services](${url("/services")})`,
    `- [Promotions and health packages](${url("/promociones")})`,
    `- [Blog](${url("/blog")})`,
    `- [English version](${url("/", "en")})`,
    "",
  );
  L.push(`## Current promotions (${PROMOTIONS.length})`, "");
  for (const p of byPromoOrder) {
    L.push(`- [${p.titleEn}${p.price ? ` (${p.price})` : ""}](${url("/promociones")}#${p.slug}): ${p.includesEn.join(", ")}`);
  }
  L.push("", "Promotions are for a limited time; call to confirm availability and current pricing.", "");
  L.push(`## Guides (${posts.length})`, "");
  for (const p of posts) L.push(`- [${p.title}](${url(`/blog/${p.slug}`, "en")}): updated ${p.dateModified ?? p.date}`);
  L.push("");
  L.push(
    "## Pricing and insurance",
    "",
    "No health insurance is needed: patients pay directly at affordable rates, in cash or by card. Ask for the price of your service before your visit by phone or WhatsApp.",
    "",
  );
  L.push("## Frequently asked questions", "");
  for (const f of homeFaq("en")) L.push(`Q: ${f.question}`, `A: ${f.answer}`, "");
  L.push("## Social media", "");
  if (SOCIAL_LINKS.facebook) L.push(`- [Facebook](${SOCIAL_LINKS.facebook})`);
  if (SOCIAL_LINKS.instagram) L.push(`- [Instagram](${SOCIAL_LINKS.instagram})`);
  if (SOCIAL_LINKS.youtube) L.push(`- [YouTube](${SOCIAL_LINKS.youtube})`);
  L.push("");
  L.push("## Full descriptions", "", `- [llms-full.txt](${url("/llms-full.txt")}): the 29 services in Spanish and English with their FAQ, the promotions and the blog guides`, "");
  L.push(`Last updated: ${lastUpdated()}`, "");
  return L.join("\n");
}

export function buildLlmsFullTxt(): string {
  const L: string[] = [];
  L.push(`# ${SITE_CONFIG.name} — Full service descriptions`, "");
  L.push(`Website: [${base.replace("https://", "")}](${base})`, `Address: ${ADDRESS}`, `Phone: ${CONTACT_INFO.phoneFormatted}`, `Hours: ${HOURS_EN}`, "");
  L.push("## About / Sobre la clínica", "", ENTITY_EN, "", ENTITY_ES, "", "---", "");
  for (const raw of byOrder) {
    const s = getLocalizedService(raw, "es");
    const e = getLocalizedService(raw, "en");
    L.push(`## ${s.title} / ${e.title}`, "", s.description, "", e.description, "");
    if (raw.features?.length) {
      L.push("Incluye / Includes:");
      raw.features.forEach((f, i) => L.push(`- ${f}${raw.featuresEn?.[i] ? ` / ${raw.featuresEn[i]}` : ""}`));
      L.push("");
    }
    const faqsEs = getServiceFAQs(raw.slug, "es");
    const faqsEn = getServiceFAQs(raw.slug, "en");
    if (faqsEs.length) {
      L.push("Preguntas frecuentes / FAQ:");
      faqsEs.forEach((f, i) => {
        L.push(`Q: ${f.question}`, `A: ${f.answer}`);
        if (faqsEn[i]) L.push(`Q: ${faqsEn[i].question}`, `A: ${faqsEn[i].answer}`);
        L.push("");
      });
    }
    L.push(`Pages: [Spanish](${url(`/services/${raw.slug}`)}) | [English](${url(`/services/${raw.slug}`, "en")})`, "", "---", "");
  }
  L.push(
    "## Clínica sin cita previa / Walk-in clinic",
    "",
    `${SITE_CONFIG.name} atiende sin cita: ${HOURS_ES} Dirección: ${ADDRESS}. No se necesita seguro médico.`,
    "",
    `Walk-ins welcome: ${HOURS_EN} Address: ${ADDRESS}. No insurance needed.`,
    "",
    `Pages: [Spanish](${url("/")}) | [English](${url("/", "en")})`,
    "",
    "---",
    "",
  );
  L.push(`## Promociones / Promotions (${PROMOTIONS.length})`, "");
  for (const p of byPromoOrder) {
    L.push(`### ${p.title} / ${p.titleEn}${p.price ? ` — ${p.price}` : ""}`, "", p.blurb, "", p.blurbEn, "");
    L.push("Incluye / Includes:");
    p.includes.forEach((x, i) => L.push(`- ${x}${p.includesEn[i] ? ` / ${p.includesEn[i]}` : ""}`));
    L.push("", `Page: [${p.titleEn}](${url("/promociones")}#${p.slug})`, "");
  }
  L.push("---", "");
  L.push("## Preguntas frecuentes / FAQ", "");
  const faqEs = homeFaq("es");
  const faqEn = homeFaq("en");
  faqEs.forEach((f, i) => {
    L.push(`Q: ${f.question}`, `A: ${f.answer}`);
    if (faqEn[i]) L.push(`Q: ${faqEn[i].question}`, `A: ${faqEn[i].answer}`);
    L.push("");
  });
  L.push("---", "");
  const posts = getBlogPosts("es");
  const postsEn = getBlogPosts("en");
  L.push(`## Guías del blog / Blog guides (${posts.length})`, "");
  for (const p of posts) {
    const pe = postsEn.find((x) => x.slug === p.slug);
    L.push(`### ${p.title}${pe ? ` / ${pe.title}` : ""}`, "", p.description, "", ...(pe ? [pe.description, ""] : []), `Published: ${p.date} | Updated: ${p.dateModified ?? p.date}`, `Pages: [Spanish](${url(`/blog/${p.slug}`)}) | [English](${url(`/blog/${p.slug}`, "en")})`, "");
  }
  L.push("---", "", `Last updated: ${lastUpdated()}`, "");
  return L.join("\n");
}
