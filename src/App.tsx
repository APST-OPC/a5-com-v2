import type { ReactElement } from "react";
import HeaderImage from "@/assets/headerLink.png";
import Token from "@/assets/tokenIcon.png";
import type { ISeparatorText } from "./type";
import { cn } from "./utils/helpers";

const NavHeader = () => {
  return (
    <header className="shadow-uniform">
      <img src={HeaderImage} alt="redirect-header" className="h-1/2 w-full" />
    </header>
  );
};

const SeperatorText = ({
  content,
  className,
  icon = false,
}: ISeparatorText) => {
  return (
    <div className={cn("flex items-center gap-2 px-3 max-w-1/4", className)}>
      {icon && <img src={Token} className="size-10" />}
      {typeof content === "string" ? <p>{content}</p> : content}
    </div>
  );
};

const DedicatedLine = () => {
  return (
    <section className="px-3 py-5 rounded-xl flex items-center bg-white text-black shadow-uniform text-2xl">
      <SeperatorText icon content="USDT Dedicated Line 1" />
      <SeperatorText
        content={
          <p className="text-green-600 text-[24px] p-3 border-x border-black/10">
            45ms
          </p>
        }
      />
      <SeperatorText content="5a615.com" />
      <SeperatorText content="5a615.com" />
    </section>
  );
};

const App = (): ReactElement => {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <NavHeader />
      <main className="px-5">
        <DedicatedLine />
      </main>
    </div>
  );
};

export default App;
