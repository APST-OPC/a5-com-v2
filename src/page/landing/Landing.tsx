import type { ReactElement } from "react";

import { SvgIcons } from "@/components";
import {
  NavHeader,
  RetestButton,
  RedirectButton,
  DedicatedLine,
} from "./component";
import HeaderImage from "@/assets/headerImage.webp";
import { redirectInfo, usdtLine } from "./utils";

const Landing = (): ReactElement => {
  const renderTopLinks = () => {
    return (
      <div className="bg-white space-y-1 p-3 rounded-lg">
        <p className="tex-sm text-slate-400 text-nowrap flex gap-1 items-center justify-center animate-marquee">
          <span>
            <SvgIcons name="ic_svg_bell" className="size-5" />
          </span>
          6F.VIP润豐国际官方声明：本平台所有系统与游戏产品均采用官方真实
        </p>
        <div className="space-y-3">
          <DedicatedLine contents={usdtLine[0].contents} />
          <DedicatedLine contents={usdtLine[1].contents} />
        </div>
      </div>
    );
  };
  return (
    <div className="max-w-lg w-full h-full mx-auto space-y-3">
      <NavHeader />
      <img
        className="h-full w-full object-contain"
        src={HeaderImage}
        alt="header"
        loading="eager"
      />
      <main className="px-2">
        <div className="space-y-3 p-px overflow-hidden bg-linear-to-b from-slate-400/20 from-25% via-slate-400/10 to-white rounded-lg">
          {renderTopLinks()}
        </div>
        <div className="p-3 space-y-3">
          <RetestButton />
          <section className="space-y-3">
            {redirectInfo.map(({ items }, index) => (
              <RedirectButton key={index} items={items} />
            ))}
          </section>
          <section className="flex w-full justify-center items-center gap-2">
            <SvgIcons name="ic_svg_vip" className="h-15 md:h-20 w-25 md:w-35" />
            <div className="border-l border-[#B88F4D] h-5"></div>
            <SvgIcons
              name="ic_svg_logo"
              className="h-15 md:h-20 w-25 md:w-35"
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Landing;
