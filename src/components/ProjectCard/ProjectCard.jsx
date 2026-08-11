import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import GlassCard from "../GlassCard/GlassCard";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import { cn } from "../../utils/cn";

/**
 * ProjectCard
 * ----------------------------------------------------------------------------
 * Case-study style project card: large gradient thumbnail (project initials
 * as a typographic mark — no placeholder images), category eyebrow, title,
 * short description, tech-stack chips, and GitHub / Live Demo actions.
 *
 * @param {Object} project - single entry from data/portfolioData.js `projects`
 * @param {boolean} featured - renders with gradient border + larger thumbnail
 */
function ProjectCard({ project, featured = false }) {
  const { title, category, description, tech, githubUrl, liveUrl } = project;

  const initials = title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <GlassCard
      as="article"
      gradientBorder={featured}
      className={cn("flex h-full flex-col p-0 overflow-hidden", featured && "sm:col-span-2")}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden",
          featured ? "h-56 sm:h-64" : "h-44"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-bg-elevated to-secondary/20" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <span
          className="relative font-display text-6xl font-bold text-gradient-primary opacity-90 transition-transform duration-500 group-hover:scale-110 sm:text-7xl"
          aria-hidden="true"
        >
          {initials}
        </span>
        <div className="absolute bottom-4 left-4">
          <Badge variant="outline">{category}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-text-secondary sm:text-base">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2" role="list" aria-label={`Technologies used in ${title}`}>
          {tech.map((t) => (
            <Badge key={t} variant="neutral" role="listitem">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pt-2">
          {project.githubUrl && (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
)}
          {project.liveUrl && (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    Live Demo
  </a>
)}
        </div>
      </div>
    </GlassCard>
  );
}

export default ProjectCard;
