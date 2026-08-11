import { useCallback, useRef } from "react";

/**
 * useMagnetic
 * ----------------------------------------------------------------------------
 * Gives an element a subtle "magnetic" pull toward the cursor on hover,
 * the signature interaction on premium product sites (Vercel, Raycast).
 *
 * @param {number} strength - 0–1, how strongly the element follows the cursor.
 * @returns {{ ref: React.RefObject, onMouseMove: Function, onMouseLeave: Function }}
 *
 * Respects prefers-reduced-motion by no-op'ing the transform when the user
 * has requested reduced motion.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const onMouseMove = useCallback(
    (e) => {
      if (prefersReducedMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate3d(${relX * strength}px, ${relY * strength}px, 0)`;
    },
    [strength, prefersReducedMotion]
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

export default useMagnetic;
