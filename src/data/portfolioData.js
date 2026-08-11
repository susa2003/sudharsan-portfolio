/**
 * portfolioData.js
 * ----------------------------------------------------------------------------
 * Single source of truth for all portfolio content. Every section pulls from
 * here so copy/content updates never require touching component code.
 */

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
} from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import profile from "../assets/images/profile.png";
export const owner = {
  name: "Sudharsan K",
  initials: "SK",
  roles: ["susa","Full Stack Developer"],
  tagline:
    "I build fast, accessible, production-grade interfaces — then wire them into full stack systems that hold up under real traffic.",
  location: "Tamil Nadu, India",
  email: "ksudharsan233@gmail.com",
  resumeUrl: "/resume.pdf",
  profileImage: profile,
  openToWork: true,
};

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/susa2003",
    icon: FiGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sudharsan-k-60861122a",
    icon: FiLinkedin,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:ksudharsan233@gmail.com",
    icon: FiMail,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { id: "projects", value: 4, suffix: "+", label: "Projects" },
  { id: "tech", value: 15, suffix: "+", label: "Technologies" },
  { id: "experience", value: 1, suffix: "+", label: "Internships" },
];

/* --------------------------------------------------------------------------
   SKILLS — grouped by category, rendered as interactive cards (no progress bars)
   -------------------------------------------------------------------------- */
export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces that feel instant and look intentional.",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs and services designed to scale without drama.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#F1F1F1" },
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Schemas and queries that stay fast as data grows.",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "The workflow that keeps everything shippable.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#F1F1F1" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

/* --------------------------------------------------------------------------
   EXPERIENCE — professional timeline
   -------------------------------------------------------------------------- */
export const experience = [
  {
    id: "ifp",
    company: "French Institute of Pondicherry (IFP)",
    role: "Web Development Intern — Wagtail CMS",
    period: "2025",
    type: "Internship",
    description:
      "Worked on maintaining and improving the organization's website using Wagtail CMS, Django, and PostgreSQL, with a focus on content management and search functionality.",
    highlights: [
      "Worked with Wagtail CMS to maintain and enhance the organization's website.",
      "Improved the website's search functionality, especially incorrect search results from the PostgreSQL-backed search.",
      "Added and enhanced content fields/features in the CMS based on website requirements.",
      "Worked with Django/Wagtail and PostgreSQL while making website improvements.",
    ],
  },
  {
    id: "thirnax",
    company: "Thiranax",
    role: "Full Stack Development Intern — Remote",
    period: "2026",
    type: "Internship",
    description:
      "Worked on multiple full-stack web applications, gaining hands-on experience in frontend and backend development, database integration, and version control.",
    highlights: [
      "Developed and worked on multiple web applications during the internship.",
      "Built a Portfolio CMS, E-Commerce Website, Blog Website, and Task Management System.",
      "Worked with Git/GitHub for version control and project development.",
      "Applied frontend and backend technologies to build and improve the applications.",
    ],
  },
];

export const aboutCounters = [
  { id: "projects", value: 4, suffix: "+", label: "Projects Shipped" },
  { id: "internships", value: 2, suffix: "", label: "Internships" },
  { id: "stacks", value: 3, suffix: "", label: "Full Stacks" },
  { id: "commits", value: 200, suffix: "+", label: "Commits" },
];

/* --------------------------------------------------------------------------
   PROJECTS — premium case-study style cards
   -------------------------------------------------------------------------- */
export const projects = [
  
  {
    id: "portfolio-cms",
    title: "Portfolio CMS",
    category: "Content Platform",
    description:
      "A headless content system that lets developers manage portfolio content — projects, skills, experience — without touching code.",
    problem:
      "Updating a hardcoded portfolio required a redeploy for every content change, slowing down iteration.",
    solution:
      "Built a lightweight CMS with a REST API and admin dashboard, decoupling content from the presentation layer entirely.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    githubUrl: "https://github.com/susa2003/portfolio-cms", //https://github.com/susa2003/portfolio-cms
    liveUrl: "https://portfolio-cms-delta-two.vercel.app",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management System",
    category: "Productivity Tool",
    description:
      "A Kanban-style task manager with team boards, due dates, and activity tracking built for small engineering teams.",
    problem:
      "Small teams needed lightweight task tracking without the overhead and cost of enterprise project management tools.",
    solution:
      "Implemented a drag-and-drop board with real-time state sync, activity logs, and per-user task ownership.",
    tech: ["React", "JavaScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/susa2003/task-manager",
    //liveUrl: "https://task-manager-demo.vercel.app",
    featured: false,
  },
  {
    id: "blog-website",
    title: "Blog Website",
    category: "Publishing Platform",
    description:
      "A full-featured blogging platform with markdown authoring, tagging, and a clean, distraction-free reading experience.",
    problem:
      "Writers wanted a fast, ad-free publishing space with full control over their content and presentation.",
    solution:
      "Built a markdown-based CMS with server-side rendering for SEO, tag-based discovery, and a minimal reading UI.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/susa2003/blog",
    //liveUrl: "https://blog-demo.vercel.app",
    featured: false,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    category: "Retail Platform",
    description:
      "A full online storefront with product catalog, cart, checkout flow, and an admin panel for inventory management.",
    problem:
      "Small retailers needed an affordable, customizable storefront instead of locking into a fixed SaaS platform.",
    solution:
      "Built a complete storefront with product search, cart persistence, secure checkout, and an inventory dashboard for admins.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/susa2003/E-commerce",
    //liveUrl: "https://ecommerce-demo.vercel.app",
    featured: false,
  },
];

/* --------------------------------------------------------------------------
   CERTIFICATES
   -------------------------------------------------------------------------- */
export const certificates = [
  {
    id: "cert-ifp",
    title: "Internship Certificate",
    issuer: "French Institute of Pondicherry",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/16ky4NOFSFoqG9lrLgYALtuoVPwn0Qs8d/view?usp=sharing",
  },

  {
    id: "cert-thiranax",
    title: "Full Stack Development Internship",
    issuer: "Thiranax",
    date: "2026",
    credentialUrl: "https://drive.google.com/file/d/17Ojq5_bZfslnDRobF8l6YSU5QxpEssyq/view?usp=sharing",
  },

  {
    id: "cert-lumina",
    title: "Data Mining Internship",
    issuer: "Lumina Datamatics",
    date: "2026",
    credentialUrl: "https://drive.google.com/file/d/1oPmVU1jOQq5PzAkozGYr0soEd7EYshKj/view?usp=sharing",
  },
];

export const externalLinkIcon = FiExternalLink;
