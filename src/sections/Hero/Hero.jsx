import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import MagneticButton from "../../components/MagneticButton/MagneticButton";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import Badge from "../../components/Badge/Badge";
import AnimatedCounter from "../../components/AnimatedCounter/AnimatedCounter";
import AuroraBackground from "../../components/AuroraBackground/AuroraBackground";
import { owner, heroStats } from "../../data/portfolioData";
import profile from "../../assets/images/profile.png";

const floatingBadges = [
  { icon: SiReact, label: "React", color: "#61DAFB", position: "top-6 -left-8 sm:-left-14" },
  { icon: SiNodedotjs, label: "Node.js", color: "#5FA04E", position: "top-1/3 -right-6 sm:-right-12" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8", position: "bottom-16 -left-10 sm:-left-16" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248", position: "bottom-4 -right-8 sm:-right-14" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/**
 * Hero
 * ----------------------------------------------------------------------------
 * Above-the-fold introduction: eyebrow + open-to-work badge, large name/role
 * typography, tagline, dual CTAs, socials and stat counters on the left;
 * a glowing profile portrait with hover-revealed floating tech badges on
 * the right. Sits on top of the ambient AuroraBackground.
 */
function Hero() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 sm:pt-40"
      aria-label="Introduction"
    >
      <AuroraBackground variant="hero" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* ---------------------------------------------------------- LEFT: COPY */}
          <div>
            {owner.openToWork && (
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
                <Badge variant="success" pulse className="mb-6">
                  Open to work
                </Badge>
              </motion.div>
            )}

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-primary"
            >
              Hi, I&rsquo;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
            >
              {owner.name}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xl font-medium text-text-secondary sm:text-2xl"
            >
              <span className="text-gradient-primary">
    Full Stack Developer
  </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {owner.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <MagneticButton strength={0.25}>
                <Button href="#projects" variant="primary" size="lg" icon={FiArrowRight} iconPosition="right">
                  View Projects
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Button href={owner.resumeUrl} variant="secondary" size="lg" icon={FiDownload}>
                  Download Resume
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-10 flex items-center gap-6"
            >
              <SocialIcons />
              <span className="h-8 w-px bg-border-glass" aria-hidden="true" />
              <p className="text-sm text-text-muted">{owner.location}</p>
            </motion.div>

            {/* Stats */}
            <motion.dl
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={7}
              className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border-glass pt-8"
            >
              {heroStats.map((stat) => (
                <div key={stat.id}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-text-muted sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ---------------------------------------------------------- RIGHT: PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              className="relative mx-auto aspect-square w-full max-w-[22rem] lg:max-w-none"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Animated glow behind portrait */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 animate-pulse-slow rounded-[2rem] bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/20 blur-3xl"
              />

              {/* Portrait frame */}
              <div className="gradient-border relative h-full w-full overflow-hidden rounded-[2rem] p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-bg-elevated">
                  {/* Using initials mark in place of an external headshot asset */}
                  <img
  src={profile}
  alt="Sudharsan K"
  className="h-full w-full object-cover object-top"
/>
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                </div>
              </div>

              {/* Hover-only floating tech badges */}
              {floatingBadges.map(({ icon: Icon, label, color, position }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={
                    isImageHovered
                      ? { opacity: 1, scale: 1, y: [0, -10, 0] }
                      : { opacity: 0, scale: 0.6, y: 0 }
                  }
                  transition={
                    isImageHovered
                      ? {
                          opacity: { duration: 0.3, delay: i * 0.08 },
                          scale: { duration: 0.3, delay: i * 0.08 },
                          y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                        }
                      : { duration: 0.2 }
                  }
                  className={`glass-surface absolute ${position} z-20 flex items-center gap-2 rounded-xl px-3 py-2 shadow-glass`}
                >
                  <Icon className="h-4 w-4" style={{ color }} aria-hidden="true" />
                  <span className="text-xs font-medium text-text-primary">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-text-muted">Scroll</span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border-glass p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
