import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GlassCard from "../../components/GlassCard/GlassCard";
import AnimatedCounter from "../../components/AnimatedCounter/AnimatedCounter";
import AuroraBackground from "../../components/AuroraBackground/AuroraBackground";
import { aboutCounters, owner } from "../../data/portfolioData";

const pillars = [
  {
    icon: FiCode,
    title: "Clean & Maintainable Code",
    description:
      "I focus on writing structured, reusable code that keeps projects easier to understand, maintain, and improve.",
  },
  {
    icon: FiLayers,
    title: "Full Stack Development",
    description:
      "I enjoy working across frontend, backend, APIs, and databases to build complete and practical web applications.",
  },
  {
    icon: FiZap,
    title: "Continuous Learning",
    description:
      "I continuously improve my skills through internships, personal projects, and hands-on experience with modern technologies.",
  },
];
/**
 * About
 * ----------------------------------------------------------------------------
 * Personal narrative + credibility section: a short bio, three "how I work"
 * pillars, and an animated counter grid summarizing scale (projects,
 * internships, stacks, commits). Sits on a quiet aurora accent.
 */
function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32" aria-label="About">
      <AuroraBackground variant="section" className="opacity-60" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="About Me"
          title="Engineering that turns ideas into practical solutions"
          highlight="production"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Bio + pillars */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-base leading-relaxed text-text-secondary sm:text-lg"
            >
             I’m Sudharsan K, a B.Tech Information Technology student and Full Stack Developer passionate about building modern web applications using React, Node.js, Java, Python, and databases such as MongoDB, MySQL, and PostgreSQL.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              My internships at the French Institute of Pondicherry and Thiranax gave me practical experience working on real projects, improving existing applications, and building full-stack solutions. Alongside my internships, I’ve built projects including a Portfolio CMS, E-Commerce Website, Blog Website, and Task Management System.
            </motion.p>

            <div className="mt-8 space-y-4">
              {pillars.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="glass-surface flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Counters + mini timeline */}
          <div className="grid grid-cols-2 gap-5">
            {aboutCounters.map((counter, i) => (
              <motion.div
                key={counter.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard className="flex h-full flex-col justify-center text-center sm:text-left">
                  <span className="font-display text-4xl font-bold text-gradient-primary sm:text-5xl">
                    <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                  </span>
                  <span className="mt-2 text-sm text-text-secondary">{counter.label}</span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
