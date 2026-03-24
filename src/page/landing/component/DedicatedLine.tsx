import type { USDTLine } from "@/page/landing/type";
import { Button, Typography } from "@/components";
import { ChevronRight } from "lucide-react";

export const DedicatedLine = ({ contents }: USDTLine) => {
  const { title, ping } = contents;
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
        <Typography className="pl-3 justify-end w-1/2">
          <div className="p-[0.187rem] bg-blue-900 rounded-xl">
            <Button className="bg-linear-to-t from-[#1E3F8F] via-button to-[#3A66D4] text-base md:text-xl p-1.5 md:pl-4 rounded-lg border-[0.100rem] border-blue-300">
              立即进入 <ChevronRight className="size-5 md:size-7" />
            </Button>
          </div>
        </Typography>
      </div>
    </section>
  );
};

export default DedicatedLine;
