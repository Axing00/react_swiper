import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();
  // Style Css
  const cusPoint = {
    cursor: "pointer",
  };

  return (
    <div
      className="swiper-button-next"
      style={cusPoint}
      onClick={() => swiper.slideNext()}
    >
      next slide
    </div>
  );
}
