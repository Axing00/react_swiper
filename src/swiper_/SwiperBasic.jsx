import "../style.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import Imgs folder
import SlideImg00 from "../imgs/img00.jpg";
import SlideImg01 from "../imgs/img01.jpg";
import SlideImg02 from "../imgs/img02.jpg";
import SlideImg03 from "../imgs/img03.jpg";

/* ++++++++++++++++++++ Swiper.JS ++++++++++++++++++++ */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Defalut Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
// import "swiper/scss/navigation";

// Import Swiper styles
import "./SwiperBasic.scss";

// import required modules
import { Pagination, EffectFade } from "swiper";

// Import SlideBtns component
import SlideBtns from "./SlideBtns.js";

function SwiperBasic() {
  let [images, setImages] = useState([
    SlideImg00,
    SlideImg01,
    SlideImg02,
    SlideImg03,
  ]);
  let altTexts = ["이미지 0", "이미지 1", "이미지 2", "이미지 3"];

  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, EffectFade]}
        effect="fade"
        className="first_Swiper"
      >
        {images.map((images, index) => {
          return (
            <SwiperSlide>
              <Link to="#">
                <img src={images} alt={altTexts[index]} />
              </Link>
            </SwiperSlide>
          );
        })}

        <SlideBtns />
      </Swiper>
    </div>
  );
}
export default SwiperBasic;
