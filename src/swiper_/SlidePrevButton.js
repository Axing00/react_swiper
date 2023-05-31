import { React } from "react";
import { useSwiper } from "swiper/react";

// Import Custom Swiper styles
import "./navi_custom.scss";

export default function SlidePrevButton() {
  const swiper = useSwiper();
  // Style Css
  const cusPoint = {
    cursor: "pointer",
  };

  return (
    <div
      className="slide_prev"
      style={cusPoint}
      onClick={() => swiper.slidePrev()}
    >
      prev slide
    </div>
  );
}
