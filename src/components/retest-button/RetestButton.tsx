import { Button } from "@/components/ui";

const RetestButton = () => {
  return (
    <Button
      variant="ghost"
      className="relative overflow-hidden w-full bg-full bg-center p-3 bg-[url('@/assets/retest_bg.webp')] rounded-xl shadow-uniform"
    >
      <p className="z-10 text-sm md:text-lg">重新检测</p>
    </Button>
  );
};

export { RetestButton };
