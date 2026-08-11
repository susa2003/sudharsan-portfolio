/**
 * cn — lightweight className combiner.
 *
 * Accepts strings, arrays, and objects (key kept when value is truthy),
 * filters out falsy values, and joins the rest with a single space.
 * Deliberately dependency-free (no clsx/tailwind-merge) to keep the
 * bundle lean for a portfolio-scale project.
 *
 * @example
 * cn("btn", isActive && "btn-active", { "btn-disabled": disabled })
 */
export function cn(...inputs) {
  const classes = [];

  for (const input of inputs) {
    if (!input) continue;

    const type = typeof input;

    if (type === "string" || type === "number") {
      classes.push(input);
    } else if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) classes.push(inner);
    } else if (type === "object") {
      for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key) && input[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}

export default cn;
