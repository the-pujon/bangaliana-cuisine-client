import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Header.scss";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Chef1 from "../../assets/Banner/Chef1.jpg";
import Chef2 from "../../assets/Banner/Chef2.jpg";
import Chef3 from "../../assets/Banner/Chef3.jpg";

import SlidersCard from "../slidersCard/SlidersCard";
import "swiper/css/effect-creative";

export default function Header() {
  return (
    <div id="Home" className="header">
      <Swiper
        spaceBetween={0}
        speed={2000}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlidersCard image={Chef1} />
        </SwiperSlide>
        <SwiperSlide>
          <SlidersCard image={Chef2} />
        </SwiperSlide>
        <SwiperSlide>
          <SlidersCard image={Chef3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
