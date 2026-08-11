import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * SectionTitle
 * ----------------------------------------------------------------------------
 * Canonical section header: small eyebrow label, large heading (with an
 * optional gradient-highlighted word), and an optional supporting
 * description. Used at the top of About, Skills, Experience, Projects,
 * Certificates, Contact — keeping heading rhythm identical across the page.
 *
 * @param {string} eyebrow - short kicker label above the heading
 * @param {string} title - main heading text
 * @param {string} highlight - substring of `title` to render with gradient accent
 * @param {string} description - optional supporting paragraph
 * @param {"left"|"center"} align
 */
function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-6 bg-gradient-to-r from-primary to-transparent" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold leading-[1.1] text-text-primary sm:text-4xl lg:text-5xl">
        {parts.length > 1 ? (
          <>
            {parts[0]}
            <span className="text-gradient-primary">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
