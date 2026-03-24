import { SvgIcons } from "@/components";
const LandingFooter = () => {
  return (
    <footer className="flex h-[8%] w-full justify-center items-center gap-2 bg-white">
      <SvgIcons name="ic_svg_vip" className="h-full w-30" />
      <div className="border-l border-[#B88F4D] h-5"></div>
      <SvgIcons name="ic_svg_logo" className="h-full w-30" />
    </footer>
  );
};

export default LandingFooter;
