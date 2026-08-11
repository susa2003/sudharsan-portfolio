import Container from "../Container/Container";
import SocialIcons from "../SocialIcons/SocialIcons";
import { owner, navLinks } from "../../data/portfolioData";

/**
 * Footer
 * ----------------------------------------------------------------------------
 * Closing section of the page: brand mark, quick nav, socials, and a
 * copyright line. Kept visually quiet (no aurora/glass) so it reads as a
 * calm full stop after the Contact CTA rather than competing with it.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-glass bg-bg-elevated/60">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#top"
            className="font-display text-xl font-bold tracking-tight text-text-primary"
          >
            Sudharsan<span className="text-primary">.</span>
          </a>
          <p className="mt-2 max-w-xs text-sm text-text-muted">
             Full Stack Developer, building premium web
            experiences.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialIcons size="sm" magnetic={false} />
      </Container>

      <Container className="border-t border-border-glass py-6">
        <p className="text-center text-xs text-text-muted sm:text-left">
          © {year} {owner.name}. All rights reserved. Built with React &amp; a lot of coffee.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
