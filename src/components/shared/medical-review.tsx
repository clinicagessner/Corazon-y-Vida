import { getLocale, getTranslations } from "next-intl/server";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { formatDate } from "@/lib/dates";

// Caja de autoría y revisión (E-E-A-T): quién responde por el contenido y
// cuándo se revisó, con <time> legible por máquinas. Decisión del cliente:
// se atribuye al equipo médico de la clínica, sin médico nombrado.
export async function MedicalReview({ published, updated }: { published?: string; updated: string }) {
  const [locale, t] = await Promise.all([getLocale(), getTranslations("medicalReview")]);
  return (
    <aside
      aria-label={t("reviewedBy")}
      className="mt-10 flex gap-4 rounded-2xl border border-slate-100 bg-red-warm p-5 text-sm text-slate-600"
    >
      <ShieldCheck className="mt-0.5 size-5 shrink-0 text-red-primary" weight="fill" aria-hidden />
      <div className="space-y-1">
        <p className="font-semibold text-slate-dark">{t("reviewedBy")}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          {published && (
            <span>
              {t("published")} <time dateTime={published}>{formatDate(published, locale)}</time>
            </span>
          )}
          <span>
            {t("updated")} <time dateTime={updated}>{formatDate(updated, locale)}</time>
          </span>
        </p>
        <p className="text-muted-foreground">{t("disclaimer")}</p>
      </div>
    </aside>
  );
}
