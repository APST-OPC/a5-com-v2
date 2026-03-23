import type { ReactNode } from "react";
import Token from "@/assets/tokenIcon.png";
import { cn } from "@/lib/utils";

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
      {icon && <img src={Token} className="size-5 md:size-10" />}
      {asChild ? children : <p className={contentClass}>{children}</p>}
    </div>
  );
};

export { Typography };
