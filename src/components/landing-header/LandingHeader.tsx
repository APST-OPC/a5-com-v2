import { Button } from "@/components/ui";
import EventIcon from "@/assets/svg/ic_svg_event.svg";
import ChatIcon from "@/assets/svg/ic_svg_chat.svg";

const FlippingNavIcon = () => {
  return (
    <div className="perspective w-full">
      <div className="relative w-full h-full preserve-3d flip-animation">
        <div className="absolute inset-0 backface-hidden flex items-center justify-center rotate-45">
          <div className="-rotate-45">
            <h1 className="text-2xl md:text-3xl -ml-22 md:-ml-32 gold-text tracking-tighter font-black overflow-hidden pr-2">
              6F.VIP
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center">
          <div>
            <h1 className="text-2xl md:text-3xl -ml-2 md:-ml-13 gold-text tracking-tighter font-black overflow-hidden pr-2 flex items-center gap-2">
              6F.VIP <span className="text-xl md:text-2xl">润豐國際</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
const LandingHeader = () => {
  return (
    <nav className="shadow-sm flex justify-between h-[8%] bg-white">
      <FlippingNavIcon />
      <div className="h-full w-1/2 flex gap-3 items-center justify-end pr-2">
        <Button className="bg-[#E2E8F0] hover:bg-[#d2d2d2]/70 py-1 px-2 md:px-4 rounded-full gap-2">
          <img src={EventIcon} className="size-5 md:size-8" />
          <p className=" text-black">活动</p>
        </Button>
        <Button className="bg-[#E2E8F0] hover:bg-[#d2d2d2]/70 py-1 px-2 md:px-4 rounded-full gap-2">
          <img src={ChatIcon} className="size-5 md:size-8" />
          <p className=" text-black">客服</p>
        </Button>
      </div>
    </nav>
  );
};

export { LandingHeader };
