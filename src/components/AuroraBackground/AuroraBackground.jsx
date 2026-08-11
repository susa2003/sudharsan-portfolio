import { cn } from "../../utils/cn";

/**
 * AuroraBackground
 * ----------------------------------------------------------------------------
 * Ambient, slow-drifting gradient blobs (cyan + violet) that sit behind
 * content to create the "aurora glow" atmosphere referenced throughout the
 * design brief. Purely decorative — aria-hidden, pointer-events disabled,
 * and respects prefers-reduced-motion via the shared `animate-aurora`
 * keyframe (frozen automatically by the global reduced-motion media query).
 *
 * @param {"hero"|"section"} variant - "hero" is larger/brighter; "section"
 *   is a quieter accent for use behind mid-page sections (About, Contact).
 */
function AuroraBackground({ variant = "section", className }) {
  const isHero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "aurora-blob absolute rounded-full bg-primary animate-aurora",
          isHero
            ? "-top-40 -left-40 h-[32rem] w-[32rem] opacity-40"
            : "-top-20 left-1/4 h-72 w-72 opacity-20"
        )}
      />
      <div
        className={cn(
          "aurora-blob absolute rounded-full bg-secondary animate-aurora",
          isHero
            ? "top-1/3 -right-40 h-[36rem] w-[36rem] opacity-35"
            : "top-10 right-1/4 h-80 w-80 opacity-20"
        )}
        style={{ animationDelay: "-6s" }}
      />
      {isHero && (
        <div
          className="aurora-blob absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-primary opacity-20 animate-aurora"
          style={{ animationDelay: "-12s" }}
        />
      )}
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-pattern" />
    </div>
  );
}

export default AuroraBackground;
