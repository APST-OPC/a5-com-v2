interface LineContent {
  title: string;
  link: string;
}
interface RedirectContent {
  title: string;
  image: string;
  subTitle: string;
}
export interface USDTLine {
  contents: LineContent;
}
export interface RedirectBtn {
  items: RedirectContent;
}
