import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import tst1 from "/src/assets/images/testimonial1.jpg"
import tst2 from "/src/assets/images/testimonial2.jpg"
import tst3 from "/src/assets/images/testimonial3.jpg"

const testimonials = [
  {
    quote:
      "“This tool helped us preserve legacy stories in a way text never could. The voice feature added deep emotional value to our storytelling projects",
    name: "Nathan",
    image: tst1,
  },
  {
    quote:
      "“We used the platform for memorial and heritage content and the results wereincredibly powerful. It allowed us to recreate voices responsibly for storytelling",
    name: "Joseph.",
    image: tst2,
  },
  {
    quote:
      "“From writing to voice narration, this AI streamlined to our entire storytelling workflow. It enabled us to deliver meaningful, voice-led experiences that strengthened emotional connection and engagement”",
    name: "Henry",
    image: tst3,
  },
];

export default function TestimonialSlider() {
  return (
    <section id="testimonial" className="lg:py-32 sm:py-20 py-10 relative">
      <div className="container mx-auto px-6">

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          // autoplay={{
          //   delay: 4500,        // ⏱ Auto-slide delay (ms)
          //   disableOnInteraction: false,
          // }}
          speed={800}            // 🎯 Slide transition speed (ms)
          loop={true}
          className="relative"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 gap-y-10 items-center test-slide">

                {/* LEFT CONTENT */}
                <div>
                  <img src="src/assets/images/quote1.png" alt="" />

                  <h3 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg font-regular text-primary capitalize leading-[1.2em]">
                    <span className="font-black text-primary">What Our Storytellers Say</span> <br />
                    <span>{item.quote} <img src="src/assets/images/quote2.png" alt="" className="md:h-[24px]" /></span>
                  </h3>

                  <div className="mt-8">
                    <p className="font-bold text-primary 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl">{item.name}</p>
                    <p className="text-primary font-light 2xl:text-xl md:text-sm text-sx">{item.role}</p>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="avatar"
                    />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CUSTOM NAVIGATION */}
        <button className="testimonial-prev text-primary absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition">
          ‹
        </button>

        <button className="testimonial-next text-primary absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition">
          ›
        </button>

      </div>
    </section>
  );
}
