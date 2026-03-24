import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import SvgIcons from "@/components/svg-icons/SvgIcons";

interface ISeparatorText {
  icon?: boolean;
  children: string | ReactNode;
  className?: HTMLDivElement["className"];
  contentClass?: HTMLParagraphElement["className"];
}

const Typography = (props: ISeparatorText) => {
  const { children, className, icon = false, contentClass } = props;
  const asChild = typeof children !== "string";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {icon && <SvgIcons name="ic_svg_token" className="size-7 md:size-10" />}
      {asChild ? children : <p className={contentClass}>{children}</p>}
    </div>
  );
};

export { Typography };
