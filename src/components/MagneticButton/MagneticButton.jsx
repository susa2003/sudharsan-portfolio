import { cloneElement, isValidElement } from "react";
import { useMagnetic } from "../../hooks/useMagnetic";

/**
 * MagneticButton
 * ----------------------------------------------------------------------------
 * Wraps a single interactive child (button/link/Button component) and gives
 * it the "magnetic" pull-toward-cursor micro-interaction on hover. Kept as
 * a separate wrapper (rather than baked into Button) so any element —
 * social icons, the resume link, etc. — can opt in without prop drilling.
 *
 * @param {number} strength - magnetic pull strength, 0–1 (default 0.35)
 */
function MagneticButton({ children, strength = 0.35, className }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(strength);

  if (!isValidElement(children)) return children;

  return (
    <span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ display: "inline-block", transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {cloneElement(children)}
    </span>
  );
}

export default MagneticButton;
