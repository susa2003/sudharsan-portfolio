import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GlassCard from "../../components/GlassCard/GlassCard";
import { certificates, externalLinkIcon as FiExternalLink } from "../../data/portfolioData";

/**
 * Certificates
 * ----------------------------------------------------------------------------
 * Grid of verifiable credentials. Each card is a clickable glass card
 * (whole-card link) opening the issuer's verification page in a new tab —
 * kept visually lighter than ProjectCard since these are supporting proof
 * points, not the primary content of the page.
 */
function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32" aria-label="Certificates">
      <Container>
        <SectionTitle
          eyebrow="Certifications"
          title="Professional experience backed by verified credentials"
          highlight="back up"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="block h-full"
              aria-label={`View credential: ${cert.title} from ${cert.issuer}`}
            >
              <GlassCard className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="glass-surface flex h-11 w-11 items-center justify-center rounded-xl text-primary">
                    <FiAward className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <FiExternalLink
                    className="h-4 w-4 text-text-muted transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug text-text-primary">
                  {cert.title}
                </h3>
                <p className="mt-auto pt-4 text-sm text-text-secondary">
                  {cert.issuer} &middot; {cert.date}
                </p>
              </GlassCard>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Certificates;
