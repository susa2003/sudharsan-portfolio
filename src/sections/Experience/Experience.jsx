import { motion } from "framer-motion";
import { FiBriefcase, FiCheck } from "react-icons/fi";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GlassCard from "../../components/GlassCard/GlassCard";
import Badge from "../../components/Badge/Badge";
import { experience } from "../../data/portfolioData";

/**
 * Experience
 * ----------------------------------------------------------------------------
 * Vertical timeline of professional experience (IFP, Thirnax). A connecting
 * spine line + node markers communicate chronological order — appropriate
 * here since this content genuinely is a sequence, unlike decorative
 * numbering elsewhere.
 */
function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32" aria-label="Experience">
      <Container>
        <SectionTitle
          eyebrow="Experience"
          title="Where learning turned into real-world experience"
          highlight="production"
        />

        <ol className="relative mt-16 space-y-10 sm:pl-4">
          {/* Timeline spine */}
          <div
            aria-hidden="true"
            className="absolute left-[1.15rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-border-glass to-transparent sm:block"
          />

          {experience.map((job, i) => (
            <motion.li
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative sm:pl-14"
            >
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className="glass-surface absolute left-0 top-1 hidden h-9 w-9 items-center justify-center rounded-full text-primary sm:flex"
              >
                <FiBriefcase className="h-4 w-4" />
              </span>

              <GlassCard>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{job.role}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{job.type}</Badge>
                    <Badge variant="neutral">{job.period}</Badge>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {job.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-text-secondary">
                      <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Experience;
