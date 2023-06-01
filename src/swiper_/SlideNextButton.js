import { React } from "react";
import { useSwiper } from "swiper/react";

// Import Custom Swiper styles
import "./SlideBtns.scss";

export default function SlideNextButton() {
  const swiper = useSwiper();
  // Style Css
  const cusPoint = {
    cursor: "pointer",
  };

  return (
    <div
      className="slide_next"
      style={cusPoint}
      onClick={() => swiper.slideNext()}
    >
      next slide
    </div>
  );
}
