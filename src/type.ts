import type { ReactNode } from "react";

export interface ISeparatorText {
  icon?: boolean;
  content: string | ReactNode;
  className?: HTMLDivElement["className"];
}
