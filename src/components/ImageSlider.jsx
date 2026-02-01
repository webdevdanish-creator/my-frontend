import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ImageSlider() {
  return (
    <div className="max-w-5xl mx-auto py-16">
      <Swiper slidesPerView={3} spaceBetween={20} centeredSlides>
        {[1,2,3,4].map(i => (
          <SwiperSlide key={i}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={`/images/img${i}.jpg`} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
