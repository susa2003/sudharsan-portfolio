import { socialLinks } from "../../data/portfolioData";
import Button from "../Button/Button";
import MagneticButton from "../MagneticButton/MagneticButton";
import { cn } from "../../utils/cn";

/**
 * SocialIcons
 * ----------------------------------------------------------------------------
 * Renders the social link row (GitHub / LinkedIn / Email) sourced from
 * `data/portfolioData.js`. Used in Hero, Footer, and Contact — a single
 * definition keeps links consistent if socials ever change.
 *
 * @param {"sm"|"md"} size
 * @param {boolean} magnetic - wrap each icon in the magnetic hover effect
 */
function SocialIcons({ size = "md", magnetic = true, className }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map(({ id, label, href, icon }) => {
        const button = (
          <Button
            href={href}
            variant="icon"
            size={size}
            icon={icon}
            aria-label={label}
            title={label}
          />
        );

        return magnetic ? (
          <MagneticButton key={id} strength={0.4}>
            {button}
          </MagneticButton>
        ) : (
          <span key={id}>{button}</span>
        );
      })}
    </div>
  );
}

export default SocialIcons;
