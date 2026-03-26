import type { RedirectBtn } from "@/page/landing/type";

const RedirectButton = ({ items }: RedirectBtn) => {
  const { title, subTitle, image } = items;
  return (
    <div className="flex justify-center border-b-4 border-[#D2D2E2] bg-white  shadow-uniform rounded-lg w-full py-1 cursor-pointer">
      <div className="flex items-center w-[70%] md:w-1/2 gap-2">
        <img src={image} className="size-7 md:size-9" alt={`svg-${title}`} />
        <div>
          <p className="text-nowrap text-lg text-button font-bold tracking-wider">
            {title}
          </p>
          <p className="text-nowrap text-[9px] text-slate-400">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export { RedirectButton };
