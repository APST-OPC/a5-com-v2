import useEmblaCarousel from "embla-carousel-react";
import BannerImage from "@/assets/headerImage.webp";
import Autoplay from "embla-carousel-autoplay";

const BannerCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: "center",
      axis: "x",
      loop: true,
      dragFree: false,
    },
    [Autoplay({ delay: 3000 })],
  );

  return (
    <div className="overflow-hidden w-full">
      <div ref={emblaRef}>
        <div className="flex">
          {[1, 2, 3].map((item) => (
            <div className="flex-[0_0_100%] relative" key={item}>
              <img
                className="w-full h-full object-contain"
                src={BannerImage}
                alt={`banner-${item.toString()}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
