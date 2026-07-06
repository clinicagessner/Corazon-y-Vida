import { Star } from "@phosphor-icons/react/dist/ssr";

interface StarRatingProps {
  /** Rating from 0 to 5 (supports decimals, e.g. 4.9). */
  rating: number;
  /** Tailwind size class for each star, e.g. "size-4" / "size-5". */
  starClassName?: string;
  /** Color class for the filled portion. */
  fillColorClassName?: string;
  /** Color class for the empty portion. */
  emptyColorClassName?: string;
  className?: string;
}

/**
 * Renders 5 stars with a FRACTIONAL fill based on `rating` (e.g. 4.9 → 98% filled).
 * Two stacked rows: a gray base row and a yellow row clipped horizontally to the
 * rating percentage via an overflow-hidden wrapper. Pure render — server-safe.
 */
export function StarRating({
  rating,
  starClassName = "size-4",
  fillColorClassName = "text-yellow-400",
  emptyColorClassName = "text-slate-300",
  className,
}: StarRatingProps) {
  const pct = Math.round(Math.max(0, Math.min(100, (rating / 5) * 100)) * 10) / 10;
  const row = (color: string) =>
    [...Array(5)].map((_, i) => (
      <Star key={i} className={`${starClassName} ${color} shrink-0`} weight="fill" />
    ));

  return (
    <div
      className={`relative inline-flex${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={`${rating.toFixed(1)} / 5`}
    >
      <div className="flex gap-0.5">{row(emptyColorClassName)}</div>
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${pct}%` }}
        aria-hidden="true"
      >
        <div className="flex w-max gap-0.5">{row(fillColorClassName)}</div>
      </div>
    </div>
  );
}
