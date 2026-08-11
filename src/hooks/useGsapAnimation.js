import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * useGsapAnimation
 * ----------------------------------------------------------------------------
 * Scopes a GSAP animation callback to a container ref using gsap.context(),
 * ensuring all tweens/ScrollTriggers created inside are automatically
 * reverted on unmount — prevents animation leaks across route/section
 * re-renders, which is the #1 source of GSAP + React bugs.
 *
 * @param {(context: { container: HTMLElement, gsap: typeof gsap }) => void} callback
 * @param {Array} deps - dependency array, same semantics as useEffect
 * @returns {React.RefObject} ref to attach to the animation's container element
 *
 * @example
 * const containerRef = useGsapAnimation(({ container }) => {
 *   gsap.from(container.querySelectorAll(".reveal-item"), {
 *     y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out",
 *   });
 * }, []);
 */
export function useGsapAnimation(callback, deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      callback({ container: containerRef.current, gsap });
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

export default useGsapAnimation;
