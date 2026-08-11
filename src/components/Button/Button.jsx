import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * Button
 * ----------------------------------------------------------------------------
 * The single source of button styling for the entire site. Renders as a
 * <button> by default, or as an anchor when `href` is passed — keeping
 * semantics correct (links navigate, buttons act) while sharing one visual
 * language.
 *
 * Variants:
 *  - "primary"   → solid gradient fill, used for the #1 CTA ("View Projects")
 *  - "secondary" → glass surface with border, used for secondary CTA ("Resume")
 *  - "ghost"     → text-only, used inline / in nav
 *  - "icon"      → square icon-only button (social icons, nav toggle)
 *
 * Accessibility:
 *  - Always renders visible focus ring (inherited from global :focus-visible)
 *  - Requires `aria-label` when variant="icon" and no visible text child
 */
function Button({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className,
  children,
  ...rest
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight " +
    "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none " +
    "disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-xl",
    md: "h-12 px-6 text-sm rounded-xl",
    lg: "h-14 px-8 text-base rounded-2xl",
    icon: "h-11 w-11 rounded-xl",
  };

  const variants = {
    primary:
      "text-bg bg-gradient-to-r from-primary to-secondary shadow-[0_0_0_0_rgba(0,217,255,0)] " +
      "hover:shadow-glow-primary hover:brightness-110 active:brightness-95",
    secondary:
      "glass-surface text-text-primary hover:border-border-glass-hover hover:bg-white/[0.06]",
    ghost:
      "text-text-secondary hover:text-text-primary bg-transparent",
    icon:
      "glass-surface text-text-secondary hover:text-primary hover:border-border-glass-hover",
  };

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={cn(variant === "icon" ? "h-5 w-5" : "h-4 w-4")} aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className={cn(variant === "icon" ? "h-5 w-5" : "h-4 w-4")} aria-hidden="true" />
      )}
    </>
  );

  const sharedClassName = cn(
    base,
    sizes[variant === "icon" ? "icon" : size],
    variants[variant],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.96 }}
        className={sharedClassName}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.96 }} className={sharedClassName} {...rest}>
      {content}
    </motion.button>
  );
}

export default Button;
