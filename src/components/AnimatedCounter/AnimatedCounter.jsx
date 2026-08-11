import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * AnimatedCounter
 * ----------------------------------------------------------------------------
 * Animates a number counting up from 0 to `value` once it scrolls into
 * view, using a Framer Motion spring for a natural deceleration curve
 * (rather than a linear setInterval count). Fires once via `useInView`.
 *
 * @param {number} value - target integer to count up to
 * @param {string} suffix - appended after the number (e.g. "+")
 * @param {number} duration - approximate animation duration in seconds
 */
function AnimatedCounter({ value, suffix = "", duration = 1.8, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
