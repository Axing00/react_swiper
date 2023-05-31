import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();
  // Style Css
  const cusPoint = {
    cursor: "pointer",
  };

  return (
    <div
      className="swiper-button-prev"
      style={cusPoint}
      onClick={() => swiper.slidePrev()}
    >
      prev slide
    </div>
  );
}
