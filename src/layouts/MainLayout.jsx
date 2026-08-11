import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import { navLinks, owner } from "../data/portfolioData";

/**
 * MainLayout
 * ----------------------------------------------------------------------------
 * Page shell shared by the entire site:
 *  - Skip-to-content link (accessibility — keyboard users can bypass nav)
 *  - Sticky glass navbar that gains a solid backdrop after scroll
 *  - Mobile slide-down menu with focus-safe close on link click
 *  - <main> landmark wrapping all section children
 *  - Footer
 *
 * @param {React.ReactNode} children - the section components (Hero, About, ...)
 */
function MainLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div id="top" className="relative min-h-screen bg-bg">
      <a
        href="#main-content"
        className="sr-only-focusable fixed left-4 top-4 z-[100] rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-bg"
      >
        Skip to content
      </a>

      {/* -------------------------------------------------------------- NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <Container>
          <div
            className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              isScrolled ? "glass-surface" : "bg-transparent"
            }`}
          >
            <a
              href="#top"
              className="font-display text-lg font-bold tracking-tight text-text-primary"
              aria-label={`${owner.name} — home`}
            >
              Sudharsan<span className="text-primary">.</span>
            </a>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Button href="#contact" variant="secondary" size="sm">
                Let&rsquo;s Talk
              </Button>
            </div>

            <button
              type="button"
              className="glass-surface flex h-10 w-10 items-center justify-center rounded-xl text-text-primary md:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <Container className="pt-3">
                <nav aria-label="Mobile" className="glass-surface rounded-2xl p-5">
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block rounded-lg px-3 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-primary"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="#contact"
                    variant="primary"
                    size="md"
                    className="mt-3 w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Let&rsquo;s Talk
                  </Button>
                </nav>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content">{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;
