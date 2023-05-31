import "../style.scss";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Defalut Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
// import "swiper/scss/navigation";

// Import Swiper styles
import "./SwiperBasic.scss";

// import required modules
import { Pagination } from "swiper";

// Import SlideNextButton component
// import SlideNextButton from "./SlideNextButton.js";
// import SlidePrevButton from "./SlidePrevButton.js";
import SlideBtns from "./SlideBtns.js";

function SwiperBasic() {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination]}
        className="first_Swiper"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <a href="#none">
              Current slide is {isActive ? "액션!" : "액션없음!"}
            </a>
          )}
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
      <SlideBtns />
    </div>
  );
}
export default SwiperBasic;
