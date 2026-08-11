import { cn } from "../../utils/cn";

/**
 * Container
 * ----------------------------------------------------------------------------
 * Consistent max-width + responsive horizontal padding wrapper. Every
 * section body should be wrapped in this rather than hand-rolling padding,
 * keeping the content column aligned across the entire page (mobile → 4K).
 *
 * @param {"div"|"section"|"article"} as - element type to render (default "div")
 * @param {string} size - "default" (1280px) | "narrow" (960px) | "wide" (1440px)
 */
function Container({ as: Tag = "div", size = "default", className, children, ...rest }) {
  const sizeMap = {
    narrow: "max-w-3xl",
    default: "max-w-7xl",
    wide: "max-w-[1600px]",
  };

  return (
    <Tag
      className={cn(
        "w-full mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16",
        sizeMap[size] ?? sizeMap.default,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Container;
