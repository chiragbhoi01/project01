import React from "react";
import Slider from "react-slick";
import silder1 from '../assets/image/silder1.jpg';
import silder2 from '../assets/image/silder2.png';
import silder3 from '../assets/image/silder3.png';
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Optional: Enable autoplay
        autoplaySpeed: 3000, // Optional: Set autoplay speed
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='slider-container w-[70%] mx-auto mb-20 mt-5'>
            <Slider {...settings}>
                <div className="flex justify-center h-full">
                    <img src={silder1} alt="Slide 1" className="slider-image w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex justify-center h-full">
                    <img src={silder2} alt="Slide 2" className="slider-image w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex justify-center h-full">
                    <img src={silder3} alt="Slide 3" className="slider-image w-full h-full object-cover rounded-lg" />
                </div>
            </Slider>
        </div>
    );
}

// Custom Next Arrow Component
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 text-black`} // Change text color here
            style={{ ...style, display: "block", zIndex: 1 }}
            onClick={onClick}
        >
            <span className="text-black">&#10095;</span> {/* Right arrow symbol */}
        </div>
    );
}

// Custom Prev Arrow Component
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 text-black`} // Change text color here
            style={{ ...style, display: "block", zIndex: 1 }}
            onClick={onClick}
        >
            <span className="text-black">&#10094;</span> {/* Left arrow symbol */}
        </div>
    );
}

export default HeroSlider;