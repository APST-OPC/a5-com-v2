import type { IconName } from "@/components/ui/svg-icons/utils";

interface LineContent {
  title: string;
  ping: string;
  link: string;
}
interface RedirectContent {
  title: string;
  image: IconName;
  subTitle: string;
}
export interface USDTLine {
  contents: LineContent;
}
export interface RedirectBtn {
  items: RedirectContent;
}
