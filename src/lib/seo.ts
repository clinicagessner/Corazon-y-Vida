// Títulos y descripciones dentro de los límites que Google muestra sin truncar.
// Título ≤ 60: se prueba, en orden, nombre + ciudad + marca, nombre + marca,
// nombre + ciudad y solo nombre, y se usa el primero que cabe.
const BRAND = "Corazón y Vida";
const CITY = { es: "en Pasadena TX", en: "in Pasadena TX" } as const;
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

export function seoTitle(core: string, locale: string, opts: { city?: boolean } = {}): string {
  const city = CITY[locale === "en" ? "en" : "es"];
  const withCity = opts.city === false || core.toLowerCase().includes("pasadena") ? core : `${core} ${city}`;
  const candidates = [`${withCity} | ${BRAND}`, `${core} | ${BRAND}`, withCity, core];
  return candidates.find((c) => c.length <= TITLE_MAX) ?? core;
}

// Recorta en el último límite de frase que cabe; si ninguna frase cabe, en palabra.
export function seoDescription(text: string, max = DESCRIPTION_MAX): string {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length <= max) return t;
  const cut = t.slice(0, max + 1);
  const sentence = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  if (sentence >= 60) return t.slice(0, sentence + 1);
  const word = cut.lastIndexOf(" ");
  return `${t.slice(0, word).replace(/[,;:]$/, "")}.`;
}
