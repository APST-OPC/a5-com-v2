import { Button } from "@/components";
import { SvgIcons } from "@/components/svg-icons/SvgIcons";

const FlippingNavIcon = () => {
  return (
    <div className="perspective w-1/2">
      <div className="relative w-full h-full preserve-3d flip-animation">
        <div className="absolute inset-0 backface-hidden flex items-center justify-center rotate-45">
          <div className="-rotate-45">
            <h1 className="text-3xl gold-text font-black overflow-hidden">
              6F.VIP
            </h1>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center">
          <div>
            <SvgIcons name="ic_svg_logo" className="ml-5 h-full w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const LandingHeader = () => {
  return (
    <nav className="shadow-sm flex justify-between h-[8%] bg-white">
      <FlippingNavIcon />
      <div className="h-full w-1/2 flex gap-3 items-center justify-end pr-2">
        <Button className="bg-[#E2E8F0] hover:bg-[#d2d2d2]/70 py-1 px-4 rounded-full gap-2">
          <SvgIcons name="ic_svg_event" className="size-8" />
          <p className=" text-black">活动</p>
        </Button>
        <Button className="bg-[#E2E8F0] hover:bg-[#d2d2d2]/70 py-1 px-4 rounded-full gap-2">
          <SvgIcons name="ic_svg_chat" className="size-8" />
          <p className=" text-black">客服</p>
        </Button>
      </div>
    </nav>
  );
};

export default LandingHeader;
