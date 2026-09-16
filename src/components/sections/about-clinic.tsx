import { getTranslations } from "next-intl/server";
import { HeartStraight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/routing";

// Bloque de definición de la entidad: encabezado en forma de pregunta y un
// solo párrafo de hechos verificables (qué es, dónde, horario, condiciones,
// idiomas, servicios, teléfono, área) que buscadores e IAs pueden citar tal
// cual. Texto propio de Corazón y Vida; no reutilizar en las clínicas hermanas.
export async function AboutClinic() {
  const t = await getTranslations("about");

  return (
    <section id="sobre-la-clinica" aria-labelledby="about-heading" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-light/60 px-4 py-1.5 text-sm font-semibold text-red-dark mb-4">
            <HeartStraight className="size-4" weight="fill" />
            {t("eyebrow")}
          </span>
          <h2 id="about-heading" className="font-heading text-2xl md:text-3xl font-bold text-slate-dark mb-5">
            {t("heading")}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{t("body")}</p>
          <p className="mt-5 text-base text-muted-foreground">
            <Link
              href="/blog/bienvenidos-clinica-hispana-corazon-y-vida"
              className="font-medium text-red-primary underline-offset-2 hover:underline"
            >
              {t("moreLink")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
