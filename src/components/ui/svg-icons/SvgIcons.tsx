import type { IconName } from "./utils";

interface SvgIconProps {
  name: IconName;
  className: string;
}

const SvgIcons = (props: SvgIconProps) => {
  const { name, className, ...rest } = props;

  return (
    <svg {...rest} aria-hidden="true" className={className}>
      <use href={`#icon-${name}`} xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export { SvgIcons };
