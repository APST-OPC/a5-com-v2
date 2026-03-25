import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import BannerImage1 from "@/assets/carousel/header_1.webp";
import BannerImage2 from "@/assets/carousel/header_2.webp";
import BannerImage3 from "@/assets/carousel/header_3.webp";
import BannerImage4 from "@/assets/carousel/header_4.webp";
import BannerImage5 from "@/assets/carousel/header_5.webp";

interface CarouselHeaderList {
  image: string;
}

const carouselHeaderList: CarouselHeaderList[] = [
  { image: BannerImage1 },
  { image: BannerImage2 },
  { image: BannerImage3 },
  { image: BannerImage4 },
  { image: BannerImage5 },
];

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
          {carouselHeaderList.map(({ image }, index) => (
            <div className="flex-[0_0_100%] relative" key={index}>
              <img
                className="w-full h-full object-contain"
                src={image}
                alt={`banner-${index.toString()}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { BannerCarousel };
