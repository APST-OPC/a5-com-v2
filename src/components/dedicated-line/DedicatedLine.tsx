import type { USDTLine } from "@/page/landing/type";
import { Button, Typography } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const DedicatedLine = ({ contents }: USDTLine) => {
  const { title } = contents;
  const fakePing = (10 + Math.random() * 90).toFixed(0);
  const [ping, setPing] = useState(`${fakePing}ms`);

  useEffect(() => {
    setTimeout(() => {
      setPing(`${fakePing}ms`);
    }, 5000);
  }, [fakePing, ping]);
  return (
    <section className="p-1 px-3 md:px-5 w-full rounded-xl bg-white shadow-uniform space-y-1 md:space-y-3">
      <div className="flex items-center justify-between text-black text-base md:text-xl">
        <div className="flex gap-3">
          <Typography className="text-nowrap" icon>
            {title}
          </Typography>
          <Typography contentClass="text-green-600 border-l pl-2 border-black/20">
            {ping}
          </Typography>
        </div>
        <Typography className="pl-3 justify-end">
          <Button
            variant="ghost"
            className="relative overflow-hidden w-fit bg-full bg-center p-3 bg-[url('@/assets/retest_bg.webp')] rounded-xl text-text"
          >
            立即进入 <ChevronRight className="size-5" />
          </Button>
        </Typography>
      </div>
    </section>
  );
};

export { DedicatedLine };
