import { motion } from "framer-motion";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GlassCard from "../../components/GlassCard/GlassCard";
import { skillCategories } from "../../data/portfolioData";

/**
 * Skills
 * ----------------------------------------------------------------------------
 * Skills are intentionally NOT rendered as progress bars (per brief) — a
 * pattern that implies a false sense of precision ("JavaScript: 87%" means
 * nothing). Instead, each category is a glass card containing a grid of
 * interactive skill tiles that lift and glow on hover, communicating
 * proficiency through polish rather than an arbitrary percentage.
 */
function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32" aria-label="Skills">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="A stack chosen for reliability, not resume padding"
          highlight="reliability"
          description="Every tool below is one I've shipped production code with — not just followed a tutorial on."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard interactive={false} className="h-full">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-text-primary">{category.title}</h3>
                  <span className="font-mono text-xs text-text-muted">
                    {String(catIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-text-secondary">{category.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map(({ name, icon: Icon, color }) => (
                    <motion.div
                      key={name}
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-border-glass bg-white/[0.02] px-3 py-5 text-center transition-colors duration-300 hover:border-border-glass-hover hover:bg-white/[0.05]"
                    >
                      <Icon
                        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                        style={{ color }}
                        aria-hidden="true"
                      />
                      <span className="text-xs font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
