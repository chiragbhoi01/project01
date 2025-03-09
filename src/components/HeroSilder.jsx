import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  BannerBanglesCollection,
  BannerChokers,
  BannerEarrings,
  BannerHasli,
  BannerNecklace
} from "../image";



export default function HeroSlider() {
  // Swiper settings
  const swiperSettings = {
    modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    spaceBetween: 50,
    slidesPerView: 1, // Change to 1 for a single slide view
    navigation: true,
    pagination: { clickable: true },
    autoplay: {
      delay: 2000, // 2 seconds delay between slides
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <Swiper {...swiperSettings} className="flex w-10/11 my-2">
        <SwiperSlide>
          <Link to="/">
            <img
              src={BannerBanglesCollection}
              alt="Slide 1"
              className="w-full h-auto object-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              src={BannerChokers}
              alt="Slide 2"
              className="w-full h-auto object-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              src={BannerEarrings}
              alt="Slide 3"
              className="w-full h-auto object-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/necklase">
            <img
              src={BannerNecklace}
              alt="Slide 4"
              className="w-full h-auto object-cover"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              src={BannerHasli}
              alt="Slide 4"
              className="w-full h-auto object-cover"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
