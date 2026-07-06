import type { ElementType, ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Optional Phosphor icon for the eyebrow pill. */
  icon?: ElementType;
  /** Use on dark-background sections (white text + translucent pill). */
  light?: boolean;
  className?: string;
  /** Optional extra content rendered under the subtitle (e.g. a stats badge). */
  children?: ReactNode;
}

/**
 * Consistent centered section header (eyebrow pill → h2 → subtitle) shared by
 * every home-page section so the eyebrow widget, heading size and spacing match.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  light = false,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={`animate-on-scroll fade-up mx-auto mb-12 max-w-2xl text-center md:mb-16${
        className ? ` ${className}` : ""
      }`}
    >
      <span
        className={
          light
            ? "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm"
            : "inline-flex items-center gap-2 rounded-full border border-red-primary/20 bg-white px-4 py-1.5 text-sm font-semibold text-red-primary shadow-sm"
        }
      >
        {Icon ? <Icon className="size-4" weight="fill" /> : null}
        {eyebrow}
      </span>
      <h2
        className={`mt-6 font-heading text-3xl font-bold md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-lg ${light ? "text-white/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
