import type { ReactElement } from "react";
import type { USDTLine } from "./type";
import HeaderImage from "@/assets/headerLink.png";
import { Button, Typography } from "@/components";
import { usdtLine } from "./utils";

const NavHeader = () => {
  return (
    <header className="shadow-sm">
      <img src={HeaderImage} alt="redirect-header" className="h-1/2 w-full" />
    </header>
  );
};

const DedicatedLine = ({ contents }: USDTLine) => {
  const { title, link, ping } = contents;
  return (
    <section className="flex items-center justify-between text-black text-xs md:text-2xl">
      <Typography className="w-1/3" icon>
        {title}
      </Typography>
      <Typography contentClass="text-green-600 p-2 md:p-3 border-x border-black/10">
        {ping}
      </Typography>
      <Typography className="p-2 md:p-3 border-r w-1/3 border-black/10 justify-center">
        {link}
      </Typography>
      <Typography className="pl-3 justify-center">
        <Button className="bg-linear-to-t from-button to-button-secondary text-xs md:text-2xl p-2 md:p-4 rounded-lg md:rounded-2xl">
          Enter Now
        </Button>
      </Typography>
    </section>
  );
};

const Landing = (): ReactElement => {
  return (
    <div className="max-w-3xl mx-auto space-y-3 md:space-y-5">
      <NavHeader />
      <main className="px-5 space-y-3 md:space-y-5">
        <section className="p-3 md:px-5 w-full rounded-xl bg-white shadow-uniform space-y-1 md:space-y-3">
          <DedicatedLine contents={usdtLine[0].contents} />
          <div className="w-full border-b border-black/10" />
          <DedicatedLine contents={usdtLine[1].contents} />
        </section>
        <section>
          <Button className="bg-button-secondary w-full h-full py-3 md:py-5 rounded-2xl text-base md:text-2xl">
            Retest
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Landing;
