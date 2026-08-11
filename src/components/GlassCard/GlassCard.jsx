import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * GlassCard
 * ----------------------------------------------------------------------------
 * The core visual primitive of the design system: a glass-morphism surface
 * (backdrop blur + translucent fill + hairline border) with two signature
 * premium interactions layered on top:
 *
 *  1. Cursor-reactive spotlight — a soft radial highlight that follows the
 *     mouse within the card bounds (mirrors Linear/Stripe card treatment).
 *  2. Hover lift — subtle translateY + shadow bloom + gradient-border glow.
 *
 * @param {boolean} interactive - enables spotlight + lift (default true).
 *   Set false for static glass surfaces (e.g. contact info panel) that
 *   shouldn't compete for hover attention.
 * @param {boolean} gradientBorder - use animated gradient border instead of
 *   flat hairline border (used for featured project cards).
 * @param {"div"|"article"} as
 */
function GlassCard({
  as: Tag = "div",
  interactive = true,
  gradientBorder = false,
  className,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!interactive || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y, opacity: 1 });
    },
    [interactive]
  );

  const handleMouseLeave = useCallback(() => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const MotionTag = motion[Tag] ?? motion.div;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={interactive ? { y: -6 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-card p-6 sm:p-8",
        gradientBorder ? "gradient-border" : "glass-surface",
        interactive &&
          "transition-shadow duration-300 hover:shadow-glow-primary hover:border-border-glass-hover",
        !gradientBorder && "border",
        className
      )}
      {...rest}
    >
      {/* Cursor spotlight overlay */}
      {interactive && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(400px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0, 217, 255, 0.08), transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </MotionTag>
  );
}

export default GlassCard;
