import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; // Correct react-router package import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BannerData from "../../public/images/HeroSilder/BannerData"; // Ensure this path is correct

export default function HeroSlider() {
  // Swiper settings
  const swiperSettings = {
    modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    spaceBetween: 50,
    slidesPerView: 1, // Single slide per view
    navigation: true,
    pagination: { clickable: true },
    autoplay: {
      delay: 2000, // 2 seconds delay between slides
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <Swiper {...swiperSettings} className="flex mx-auto w-full sm:w-10/12 lg:w-11/12 my-2">
        {Object.values(BannerData).map((banner, index) => (
          <SwiperSlide key={index}>
            <Link to="/">
              <img
                src={banner}
                alt={`banner-${index}`}
                className="object-cover w-full h-60 sm:h-80 md:h-96 lg:h-112 xl:h-128"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
