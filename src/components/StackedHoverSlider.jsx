// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// // import { useRef } from 'react'
// import { useState, useRef, useEffect } from 'react'

// import 'swiper/css'

// const slides = [
//   { id: 1, image: 'src/assets/images/hero-1.png', title: 'Slide One' },
//   { id: 2, image: 'src/assets/images/hero-2.png', title: 'Slide Two' },
//   { id: 3, image: 'src/assets/images/hero-3.png', title: 'Slide Three' },
//   { id: 4, image: 'src/assets/images/hero-4.png', title: 'Slide Four' },
//   { id: 5, image: 'src/assets/images/hero-1.png', title: 'Slide Five' },
//   { id: 6, image: 'src/assets/images/hero-2.png', title: 'Slide Two' },
//   { id: 7, image: 'src/assets/images/hero-3.png', title: 'Slide Three' },
//   { id: 8, image: 'src/assets/images/hero-4.png', title: 'Slide Four' },
// ]


// export default function Carousel() {
//   const swiperRef = useRef(null)
//   const heroRef = useRef(null)
// const [isVisible, setIsVisible] = useState(true)
// const lastScrollY = useRef(0)

// useEffect(() => {
//   const heroEl = heroRef.current
//   if (!heroEl) return

//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       const currentScrollY = window.scrollY
//       const scrollingDown = currentScrollY > lastScrollY.current
//       lastScrollY.current = currentScrollY

//       // 🔽 Scrolling DOWN → fade out at 50%
//       if (scrollingDown && entry.intersectionRatio <= 0.5) {
//         setIsVisible(false)
//       }

//       // 🔼 Scrolling UP → fade in at 100%
//       if (!scrollingDown && entry.intersectionRatio === 1) {
//         setIsVisible(true)
//       }
//     },
//     {
//       threshold: [0, 0.5, 1],
//     }
//   )

//   observer.observe(heroEl)

//   return () => observer.disconnect()
// }, [])


//   return (
//     <div
//       className={`hero-slider-wrapper overflow-hidden  mt-5 pt-20 transition-all duration-700 ease-in-out
//     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
//   `}
//       onMouseEnter={() => swiperRef.current?.autoplay.start()}
//       onMouseLeave={() => swiperRef.current?.autoplay.stop()}
//     >
//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView={4}
//         spaceBetween={-60}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper
//           swiper.autoplay.stop()
//         }}
//         className="custom-swiper hero-slider"
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           640: {
//             slidesPerView: 2,
//             spaceBetween: -20,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: -60,
//           },
//         }}
//       >
        
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="slide-card">
//               <img
//                 src={slide.image}
//                 className="w-full h-full object-cover rounded-2xl"
//               />

              
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useRef, useState, useEffect } from 'react'


import 'swiper/css'

// ✅ IMPORT IMAGES (Vite-safe)
import hero1 from '/src/assets/images/hero-1.png'
import hero2 from '/src/assets/images/hero-2.png'
import hero3 from '/src/assets/images/hero-3.png'
import hero4 from '/src/assets/images/hero-4.png'

const slides = [
  { id: 1, image: hero1, title: 'Slide One' },
  { id: 2, image: hero2, title: 'Slide Two' },
  { id: 3, image: hero3, title: 'Slide Three' },
  { id: 4, image: hero4, title: 'Slide Four' },
  { id: 5, image: hero1, title: 'Slide Five' },
  { id: 6, image: hero2, title: 'Slide Six' },
  { id: 7, image: hero3, title: 'Slide Seven' },
  { id: 8, image: hero4, title: 'Slide Eight' },
]

export default function Carousel() {
  const swiperRef = useRef(null)
  const heroRef = useRef(null)

  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  const [isDesktop, setIsDesktop] = useState(
  window.innerWidth >= 768
)

  // ✅ Scroll fade logic
  useEffect(() => {
  // ❌ Disable scroll fade on mobile
  if (!isDesktop) {
    setIsVisible(true) // ensure visible
    return
  }

  const heroEl = heroRef.current
  if (!heroEl) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > lastScrollY.current
      lastScrollY.current = currentScrollY

      // Scroll down → fade out
      if (scrollingDown && entry.intersectionRatio <= 0.5) {
        setIsVisible(false)
      }

      // Scroll up → fade in
      if (!scrollingDown && entry.intersectionRatio >= 0.5) {
        setIsVisible(true)
      }
    },
    { threshold: [0, 0.5, 0.5, 1] }
  )

  observer.observe(heroEl)

  return () => observer.disconnect()
  }, [isDesktop])

  return (
    <div
      ref={heroRef} // ✅ IMPORTANT
      className={`hero-slider-wrapper overflow-hidden mt-20 lg:mt-15
        transition-all duration-500 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
      `}
      onMouseEnter={() => swiperRef.current?.autoplay.start()}
      onMouseLeave={() => swiperRef.current?.autoplay.stop()}
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={0}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        onSwiper={(swiper) => {
          swiperRef.current = swiper
          swiper.autoplay.stop() // stop initially
        }}
        className="custom-swiper hero-slider"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-card relative h-[260px] rounded-2xl overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}




function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 768
  )

  useEffect(() => {
    const handleResize = () =>
      setIsDesktop(window.innerWidth >= 768)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isDesktop
}
