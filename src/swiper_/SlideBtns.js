import { React } from "react";
import { useSwiper } from "swiper/react";

// Import Custom Swiper styles
import "./SlideBtns.scss";

export default function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <>
      <div className="slide_btns slide_prev" onClick={() => swiper.slidePrev()}>
        prev slide
      </div>
      <div className="slide_btns slide_next" onClick={() => swiper.slideNext()}>
        next slide
      </div>
    </>
  );
}
