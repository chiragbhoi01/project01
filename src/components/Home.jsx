import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Category, silder1, silder2, silder3, silder4 } from "../index"; 

export default function Home() {
  // Swiper settings
  const swiperSettings = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    spaceBetween: 50,
    slidesPerView: 1, // Change to 1 for a single slide view
    navigation: true,
    pagination: { clickable: true },
    
  };

  return (
    <>
    <Swiper {...swiperSettings} className='flex w-10/11 my-2'>
      <SwiperSlide>
        <Link to='/'>
        <img src={silder1} alt="Slide 1" className="w-full h-auto object-cover" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
        <img src={silder2} alt="Slide 2" className="w-full h-auto object-cover" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
        <img src={silder3} alt="Slide 3" className="w-full h-auto object-cover" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to='/'>
        <img src={silder4} alt="Slide 4" className="w-full h-auto object-cover" />
        </Link>
      </SwiperSlide>
      
      
    </Swiper>
    <Category/>
    </>
  );
}