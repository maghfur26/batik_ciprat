import Swiper from "swiper/bundle";
import { useEffect } from "react";
import "swiper/css/bundle";

const Carosel = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      centeredSlides: true,
      effect: "coverflow",
      loop: true,
      coverflowEffect: {
        rotate: 100,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 4000,
      }
    });
  }, []);

  return (
    <div className="swiper w-full h-[350px] md:h-[450px]">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img className="thumb w-full h-[350px] md:h-[450px] object-cover" src="https://source.unsplash.com/random/?shoes" alt="" />
        </div>
        <div className="swiper-slide">
          <img className="thumb w-full h-[350px] md:h-[450px] object-cover" src="https://source.unsplash.com/random/dress" alt="" />
        </div>
        <div className="swiper-slide">
          <img className="thumb w-full h-[350px] md:h-[450px] object-cover" src="https://source.unsplash.com/random/?jaket" alt="" />
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default Carosel;
