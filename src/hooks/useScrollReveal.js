import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * ----------------------------------------------------------------------------
 * Thin IntersectionObserver wrapper that flips `isVisible` to true the first
 * time an element enters the viewport, then disconnects (one-shot reveal —
 * matches premium site behavior where content doesn't re-hide on scroll-up).
 *
 * @param {Object} options
 * @param {number} options.threshold - fraction of element visible to trigger (default 0.15)
 * @param {string} options.rootMargin - IntersectionObserver rootMargin (default "0px 0px -80px 0px")
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = "0px 0px -80px 0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the user prefers reduced motion, reveal immediately — no observer needed.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

export default useScrollReveal;
