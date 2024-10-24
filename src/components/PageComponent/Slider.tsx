import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
const Slider = () => {
    return (
        <>
            <div>
{/* <div className="swiper">
  <div className="swiper-wrapper">
    <div className="swiper-slide">Slide 1</div>
    <div className="swiper-slide">Slide 2</div>
    <div className="swiper-slide">Slide 3</div>
    ...
  </div>
  <div className="swiper-pagination"></div>

  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>

  <div className="swiper-scrollbar"></div>
</div> */}
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
            </div>
        </>
    );
};

export default Slider;