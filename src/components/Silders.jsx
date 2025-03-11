import React from "react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Reusable component to display a Swiper with a set of images
function Silders({ images,  BannerTittle ,backgroundImage }) {
  return (
    <div>
      <div
        id="bgBannerImage"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use backgroundImage for better clarity
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "500px",
          position: "relative", // Make sure the background is positioned properly
        }}
      >
        {/* Semi-transparent overlay for better text/image contrast */}

        {/* Title for the banner */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-white text-3xl md:text-4xl font-bold z-10">
          {BannerTittle}
        </div>

        {/* Swiper component with centered items */}
        <div className="flex items-center h-full relative z-10">
          <Swiper
            slidesPerView={1} // Default to 1 slide for mobile
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000, // Auto-play delay in milliseconds
              disableOnInteraction: false, // Continue autoplay after user interactions
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides for small screens
              },
              768: {
                slidesPerView: 3, // 3 slides for medium screens
              },
              1024: {
                slidesPerView: 4, // 4 slides for larger screens
              },
            }}
          >
            {images.map((list, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={list.image}
                  alt={list.name}
                  className="w-auto m-auto h-80 object-cover rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Silders;