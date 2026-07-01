import Image from "next/image";
import type { ElementType, ReactNode } from "react";

interface PageHeroProps {
  /** Small label shown in the pill above the title. */
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Optional Phosphor icon component for the eyebrow pill. */
  icon?: ElementType;
  /** Optional extra content rendered under the subtitle (e.g. a reviews badge). */
  children?: ReactNode;
}

/**
 * Shared page hero used by the Services, Promotions and Blog listing pages so
 * they share the exact same background image, brand overlay, spacing and
 * content structure (eyebrow pill → h1 → subtitle → optional extra).
 */
export function PageHero({ eyebrow, title, subtitle, icon: Icon, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-40 md:pb-20">
      {/* Background image */}
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Brand overlay for legibility */}
      <div aria-hidden className="absolute inset-0 bg-linear-to-br from-red-dark/85 via-slate-dark/80 to-blue-dark/85" />
      <div aria-hidden className="absolute inset-0 bg-slate-dark/30" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
            {Icon ? <Icon className="size-4" weight="fill" /> : null}
            {eyebrow}
          </span>
          <h1 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">{subtitle}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
