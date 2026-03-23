import type { ReactElement } from "react";
import type { RedirectBtn, USDTLine } from "./type";

import { Button, Typography } from "@/components";
import SvgIcons from "@/components/svg-icons/SvgIcons";
import HeaderImage from "@/assets/headerImage.webp";
import { redirectInfo, usdtLine } from "./utils";
import { ChevronRight } from "lucide-react";

const NavHeader = () => {
  return (
    <header className="shadow-sm flex justify-between">
      <SvgIcons name="ic_svg_vip" className="h-[7dvh] w-1/4 ml-5" />
      <div className="h-[7dvh] w-1/2 flex gap-3 items-center justify-end pr-2">
        <Button className="relative p-1 px-5 rounded-full w-30 bg-[#F2F2F2] justify-end">
          <SvgIcons name="ic_svg_event" className="size-11 absolute left-2" />
          <p className="text-lg text-black">活动</p>
        </Button>
        <Button className="relative p-1 px-5 rounded-full w-30 bg-[#F2F2F2] justify-end">
          <SvgIcons name="ic_svg_event" className="size-11 absolute left-2" />
          <p className="text-lg text-black">活动</p>
        </Button>
      </div>
    </header>
  );
};

const DedicatedLine = ({ contents }: USDTLine) => {
  const { title, ping } = contents;
  return (
    <section className="p-1 px-3 md:px-5 w-full rounded-xl bg-white shadow-uniform space-y-1 md:space-y-3">
      <div className="flex items-center justify-between text-black text-xs md:text-2xl">
        <div className="flex gap-3">
          <Typography className="text-nowrap " icon>
            {title}
          </Typography>
          <Typography contentClass="text-green-600 border-l pl-2 border-black/20">
            {ping}
          </Typography>
        </div>
        <Typography className="pl-3 justify-end w-1/2">
          <div className="p-[0.187rem] bg-blue-900 rounded-xl">
            <Button className="bg-linear-to-t from-[#1E3F8F] via-button to-[#3A66D4] text-xs md:text-2xl p-1.5 md:pl-4 rounded-lg border-[0.100rem] border-blue-300">
              立即进入 <ChevronRight className="size-5 md:size-7" />
            </Button>
          </div>
        </Typography>
      </div>
    </section>
  );
};

const RedirectButton = ({ items }: RedirectBtn) => {
  const { title, subTitle, image } = items;
  return (
    <div className="flex justify-center border-b-4 border-text bg-white  shadow-uniform rounded-lg w-full py-1">
      <div className="flex items-center w-[60%] md:w-1/2 gap-3">
        <SvgIcons className="size-8 md:size-10" name={image} />
        <div>
          <p className="text-nowrap text-lg md:text-2xl text-button font-bold tracking-wider">
            {title}
          </p>
          <p className="text-nowrap text-[9px] text-slate-400">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

const Landing = (): ReactElement => {
  const renderTopLinks = () => {
    return (
      <div className="bg-white space-y-1 p-2 rounded-lg">
        <p className="tex-sm text-slate-400 text-nowrap">
          6F.VIP润豐国际官方声明：本平台所有系统与游戏产品均采用官方真实
        </p>
        <div className="space-y-3 md:space-y-5">
          <DedicatedLine contents={usdtLine[0].contents} />
          <DedicatedLine contents={usdtLine[1].contents} />
        </div>
      </div>
    );
  };
  return (
    <div className="max-w-xl mx-auto space-y-3 md:space-y-5">
      <NavHeader />
      <section>
        <img className="h-[30dvh] w-full" src={HeaderImage} alt="header" />
      </section>
      <main className="px-5">
        <div className="space-y-3 md:space-y-5 p-px overflow-hidden bg-linear-to-b from-slate-400/20 from-25% via-slate-400/10 to-white rounded-lg">
          {renderTopLinks()}
        </div>
        <div className="p-2 space-y-3 md:space-y-5">
          <section>
            <Button
              variant="ghost"
              className="shadow-uniform bg-button w-full h-full py-3 rounded-lg text-base md:text-2xl"
            >
              Retest
            </Button>
          </section>
          <section className="space-y-3 md:space-y-5">
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
