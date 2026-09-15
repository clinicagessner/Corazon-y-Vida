// Fecha larga legible ("15 de septiembre de 2026" / "September 15, 2026").
// Se parsea como fecha local para que "2026-09-15" no retroceda un día por la zona horaria.
export function formatDate(iso: string, locale: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  const date = new Date(y, (m ?? 1) - 1, d ?? 1);
  return date.toLocaleDateString(locale === "en" ? "en-US" : "es-MX", { year: "numeric", month: "long", day: "numeric" });
}
