import type { ReactElement } from "react";

import { SvgIcons } from "@/components/ui";
import {
  LandingHeader,
  RetestButton,
  RedirectButton,
  DedicatedLine,
  BannerCarousel,
  LandingFooter,
} from "@/components";
import WebBackground from "@/assets/web_background.webp";
import { redirectInfo, usdtLine } from "./utils";
import Marquee from "react-fast-marquee";

const Landing = (): ReactElement => {
  const renderTopLinks = () => {
    return (
      <div className="px-5 rounded-lg">
        <div className="flex w-full gap-2 items-center">
          <SvgIcons name="ic_svg_bell" className="size-10" />
          <div className="text-base text-slate-600 overflow-hidden ">
            <Marquee>
              6F.VIP润豐国际官方声明：本平台所有系统与游戏产品均采用官方真实
            </Marquee>
          </div>
        </div>
        <div className="space-y-3">
          <DedicatedLine contents={usdtLine[0].contents} />
          <DedicatedLine contents={usdtLine[1].contents} />
        </div>
      </div>
    );
  };

  const redirectBtnList = () => {
    return (
      <section className="space-y-3">
        {redirectInfo.map(({ items }, index) => (
          <RedirectButton key={index} items={items} />
        ))}
      </section>
    );
  };
  const renderBottomLinks = () => {
    return (
      <div className="px-5 space-y-3">
        <RetestButton />
        {redirectBtnList()}
      </div>
    );
  };
  return (
    <div
      className="h-dvh max-w-lg mx-auto"
      style={{
        background: `url(${WebBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full relative">
        <LandingHeader />
        <main className="space-y-3 pb-30 h-[92%] overflow-y-auto">
          <BannerCarousel />
          {renderTopLinks()}
          {renderBottomLinks()}
          <LandingFooter />
        </main>
      </div>
    </div>
  );
};

export default Landing;
