import { cn } from "../../utils/cn";

/**
 * Badge
 * ----------------------------------------------------------------------------
 * Small pill-shaped label used for: tech-stack chips on ProjectCard, the
 * "Open To Work" status indicator in Hero, and category tags. Supports a
 * few visual variants so the same primitive covers status vs. neutral use.
 *
 * @param {"neutral"|"primary"|"success"|"outline"} variant
 * @param {boolean} pulse - shows an animated dot before the label (status use)
 */
function Badge({ children, variant = "neutral", pulse = false, icon: Icon, className, ...rest }) {
  const variants = {
    neutral:
      "bg-white/5 text-text-secondary border border-border-glass",
    primary:
      "bg-primary/10 text-primary border border-primary/25",
    success:
      "bg-success/10 text-success border border-success/25",
    outline:
      "bg-transparent text-text-secondary border border-border-glass hover:border-border-glass-hover",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-xs font-medium tracking-wide whitespace-nowrap",
        "backdrop-blur-sm transition-colors duration-300",
        variants[variant] ?? variants.neutral,
        className
      )}
      {...rest}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-success" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
        </span>
      )}
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}

export default Badge;
