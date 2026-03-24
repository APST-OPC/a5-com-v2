import { Button } from "@/components";
import { SvgIcons } from "@/components/svg-icons/SvgIcons";
import { cn } from "@/lib/utils";

export const NavHeader = () => {
  const buttonClass = cn(
    "relative h-[4dvh] rounded-full w-26 bg-[#d2d2d2] px-5 justify-end",
    "hover:bg-[#d2d2d2]/70",
  );
  return (
    <header className="shadow-sm flex justify-between">
      <SvgIcons name="ic_svg_vip" className="h-[7dvh] w-1/4 ml-5" />
      <div className="h-[7dvh] w-1/2 flex gap-3 items-center justify-end pr-2">
        <Button className={buttonClass}>
          <SvgIcons
            name="ic_svg_event"
            className="size-[4.1dvh] absolute left-2"
          />
          <p className=" text-black">活动</p>
        </Button>
        <Button className={buttonClass}>
          <SvgIcons
            name="ic_svg_chat"
            className="size-[4.1dvh] absolute left-2"
          />
          <p className=" text-black">客服</p>
        </Button>
      </div>
    </header>
  );
};

export default NavHeader;
