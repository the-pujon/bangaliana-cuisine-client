import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/foods/Begun_Bhaja.jpg";
import img2 from "../../assets/foods/chicken-vuna.jpg";
import img3 from "../../assets/foods/Fish-Kalia.jpg";
import img4 from "../../assets/foods/Bengali-Fish-Fry.jpg";
import img5 from "../../assets/foods/Fuchka+(2).jpg";
import img6 from "../../assets/foods/Khichuri.jpg";
import img7 from "../../assets/foods/Shrimp-Curry.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import MenuCard from "../MenuCard/MenuCard";

export default function Menu() {
  return (
    <div>
      <p className="text-white text-center font-semibold text-5xl">Our Menu</p>
      <div className="bg-black/50 p-0 md:p-20  my-10">
        <div className="flex items-center justify-center">
          <Swiper
            //className="w-1/2 bg-black"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="w-1/2  flex items-center justify-center">
              <MenuCard img={img1} name="Begun Vaji" price="70" />
            </SwiperSlide>
            <SwiperSlide className="w-1/2 flex items-center justify-center">
              <MenuCard img={img2} name="Chicken Vuna" price="200" />
            </SwiperSlide>
            <SwiperSlide className="w-1/2 flex items-center justify-center">
              <MenuCard img={img3} name="Fish Kalia" price="300" />
            </SwiperSlide>
            <SwiperSlide className="w-1/2 flex items-center justify-center">
              <MenuCard img={img4} name="Fish Fry" price="100" />
            </SwiperSlide>
            <SwiperSlide className="w-1/2 flex items-center justify-center">
              <MenuCard img={img5} name="Fuchka" price="100" />
            </SwiperSlide>
            <SwiperSlide className="w-1/2 flex items-center justify-center">
              <MenuCard img={img6} name="Khichuri" price="300" />
            </SwiperSlide>
            <SwiperSlide className="w-1/2 flex items-center justify-center">
              <MenuCard img={img7} name="Shrimp Curry" price="400" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
