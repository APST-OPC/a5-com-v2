import type { IconName } from "./utils";

interface SvgIconProps {
  name: IconName;
  className: string;
}

export const SvgIcons = (props: SvgIconProps) => {
  const { name, className, ...rest } = props;

  return (
    <svg {...rest} aria-hidden="true" className={className}>
      <use href={`#icon-${name}`} />
    </svg>
  );
};

export default SvgIcons;
