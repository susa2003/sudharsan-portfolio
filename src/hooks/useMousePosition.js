import { useEffect, useState } from "react";

/**
 * useMousePosition
 * ----------------------------------------------------------------------------
 * Tracks the viewport-relative mouse position. Used to drive cursor-reactive
 * glow effects (e.g. GlassCard spotlight, Hero aurora parallax).
 *
 * Returns { x, y } in pixels, defaulting to the viewport center before the
 * first mouse event fires (avoids a jarring 0,0 flash on load).
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}

export default useMousePosition;
