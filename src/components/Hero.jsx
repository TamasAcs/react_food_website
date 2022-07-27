import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/bundle';
import "swiper/css/pagination";
import "swiper/css/navigation";

import Slide1 from "./Slide1";
import { Link } from 'react-scroll';
import useMediaQuery, { breakPoints } from "../hooks/useMediaQuery";

function Hero() {
  
  const isDesktop = useMediaQuery(breakPoints.xl);
  return (
    <div
      name="home"
      className="grid grid-cols-6 md:grid-cols-14 gap-x-[32px] bg-[#0c0b08] px-[1rem] md:px-[0.5rem] pb-[150px] overflow-hidden"
    >
      {isDesktop ? 
      <div className="col-start-2 col-end-2 items-center flex flex-row -rotate-90 gap-[40px] text-white">
        <Link to="menu" smooth={true} duration={500} className="cursor-pointer">
          #Bar
        </Link>
        <Link to="menu" smooth={true} duration={500} className="cursor-pointer">
          #Restaurant
        </Link>
      </div> : null}

<div className="col-start-1 md:col-start-3 col-end-13 my-auto">
      <Swiper
        pagination={{
          type: "fraction"
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-[50px] md:mt-0 md:h-[650px] !pb-[50px]"
      >
        <SwiperSlide><Slide1/></SwiperSlide>
        <SwiperSlide><Slide1/></SwiperSlide>
        <SwiperSlide><Slide1/></SwiperSlide>
      </Swiper>
    </div>
    {isDesktop ? 
      <div className="col-start-13 col-end-14 flex flex-col gap-[24px] items-center mt-auto">
        <div className="w-[1px] h-[61px] bg-[#dcca87]"/>
        <p className="fontFam text-[#dcca87]">SCROLL</p>
      </div> : null}

    </div>
  );
}

export default Hero;
