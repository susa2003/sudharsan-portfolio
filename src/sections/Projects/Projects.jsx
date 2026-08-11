import { motion } from "framer-motion";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/portfolioData";

/**
 * Projects
 * ----------------------------------------------------------------------------
 * Case-study style project grid. Featured projects (the three flagship
 * builds) surface first for visual hierarchy; remaining projects fill in
 * at standard card width. Grid collapses to a single column on mobile.
 */
function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <section id="projects" className="relative py-24 sm:py-32" aria-label="Projects">
      <Container>
        <SectionTitle
          eyebrow="Selected Work"
          title="Building practical solutions with modern technology"
          highlight="Building practical solutions with modern technology"
          description="A collection of projects developed across full-stack development, web applications, and real-world problem solving."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ordered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
