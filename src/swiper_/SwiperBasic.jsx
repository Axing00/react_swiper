import "../style.scss";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Defalut Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
// Import Custom Swiper styles
import "./CustomNavi.scss";

// Import Swiper styles
import "./SwiperBasic.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

// Import SlideNextButton component
import SlideNextButton from "./SlideNextButton.js";
import SlidePrevButton from "./SlidePrevButton.js";

function SwiperBasic() {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="first_Swiper"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div>Current slide is {isActive ? "액션!" : "액션없음!"}</div>
          )}
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <div>
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}
export default SwiperBasic;
