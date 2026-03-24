import { Button } from "@/components";
import RetestBg from "@/assets/retest_bg.webp";

export const RetestButton = () => {
  return (
    <Button variant="ghost" className="relative overflow-hidden w-full p-3">
      <img
        src={RetestBg}
        className="object-cover absolute inset-0 h-full w-full"
        alt="btn-bg"
        loading="eager"
        decoding="async"
      />
      <p className="z-10 text-sm md:text-2xl">Retest</p>
    </Button>
  );
};

export default RetestButton;
