import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation} from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation";
import { icon1, icon2, icon3, icon4 } from '../components/svgs/tab1.jsx'
import FamilyTree from "../components/FamilyTree.jsx"
import eclipse from "/src/assets/images/steps-ellipse.png";
import step1 from "/src/assets/images/steps1-img.png";
import step2 from "/src/assets/images/steps2-img.png";
import step3 from "/src/assets/images/steps3-img.png";
import step4 from "/src/assets/images/steps4-img.png";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';




const tabs = [
  {
    id: "step1",
    icon: icon1,
    label: "Begin With Simple Prompts",
    step: "Step1:",
    title: "Begin With Simple Prompts",
    desc: "Start with gentle, guided questions that help you open up naturally. No script, no pressure, just speak from the heart as memories come to you.We help you find the words even when you’re not sure where to begin.",
    image: step1,
  },
  {
    id: "step2",
    icon:icon2,
    label: "Bring Your Story to Life",
    step: "Step2:",
    title: "Bring Your Story to Life",
    desc: "We translate, edit, and enhance recordings while preserving the original voice.",
    image: step2,
  },
  {
    id: "step3",
    icon:icon3,
    label: "Invite Your Family",
    step: "Step3:",
    title: "Invite Your Family",
    desc: "Secure digital archiving with private sharing for family and generations.",
    image: step3,
  },
  {
    id: "step4",
    icon:icon4,
    label: "Preserve Your Voice Forever",
    step: "Step4:",
    title: "Preserve Your Voice Forever",
    desc: "Secure digital archiving with private sharing for family and generations.",
    image: step4,
  },
];


export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [activeIndex, setActiveIndex] = useState(0)

  const swiperRef = useRef(null)
  const sectionRef = useRef(null)

  const isLockedRef = useRef(false)
  const wheelTimeoutRef = useRef(null)

  /* -------------------------
     Detect section in viewport
  --------------------------*/
  useEffect(() => {
    const checkPosition = () => {
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const visible =
        rect.top < windowHeight * 0.7 &&
        rect.bottom > windowHeight * 0.3

      isLockedRef.current = visible
    }

    window.addEventListener("scroll", checkPosition)
    checkPosition()

    return () => window.removeEventListener("scroll", checkPosition)
  }, [])

  /* -------------------------
     Scroll → Tab Switching
  --------------------------*/

  useEffect(() => {
  const lockScroll = () => {
    document.body.style.overflow = "hidden"
  }

  const unlockScroll = () => {
    document.body.style.overflow = ""
  }

  const handleWheel = (e) => {
    if (!isLockedRef.current) return

    // Prevent rapid switching
    if (wheelTimeoutRef.current) return

    wheelTimeoutRef.current = setTimeout(() => {
      wheelTimeoutRef.current = null
    }, 500)

    /* SCROLL DOWN */
    if (e.deltaY > 0) {
      if (activeIndex < tabs.length - 1) {
        e.preventDefault()
        lockScroll()

        const next = activeIndex + 1
        setActiveIndex(next)
        setActiveTab(tabs[next])
        swiperRef.current?.slideTo(next)
      } else {
        unlockScroll()
      }
    }

    /* SCROLL UP */
    else {
      if (activeIndex > 0) {
        e.preventDefault()
        lockScroll()

        const prev = activeIndex - 1
        setActiveIndex(prev)
        setActiveTab(tabs[prev])
        swiperRef.current?.slideTo(prev)
      } else {
        unlockScroll()
      }
    }
  }

  window.addEventListener("wheel", handleWheel, { passive: false })

  return () => {
    window.removeEventListener("wheel", handleWheel)
    document.body.style.overflow = ""
  }
}, [activeIndex])


  return (
    <section id="steps" className="pt-20 lg:pt-32">
      <div className="container mx-auto">

        {/* Heading */}
        <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold text-primary capitalize  leading-[1.4em] text-center">
          Creating A Family Legacy<br />Every family carries
        </h2>

        {/* Family tree */}
        <FamilyTree />

        {/* Tabs */}
        <div className="mt-12 flex justify-center gap-0 sm:gap-3 flex-wrap lg:px-6 px-3 mb-4">
          {tabs.map((tab, index) => {
            const Icon = tab.icon

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab)
                  setActiveIndex(index)
                  swiperRef.current?.slideTo(index)
                }}
                className={`sm:px-1 px-3 sm:py-1 py-3 font2 uppercase sm:w-auto lg:px-3 lg:py-2 2xl:text-[20px] xl:text-[17px] lg:text-[16px] md:text-base w-full font-regular transition flex gap-2 md:gap-1 items-center
                ${
                  activeIndex === index
                    ? "text-primary fill-primary"
                    : "text-second hover:text-secondary fill-second hover:fill-secondary"
                }`}
              >
                <Icon />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* ⭐ IMPORTANT — SCROLL LOCK WRAPPER */}
        <div className="relative" ref={sectionRef}>

          <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".tab-next",
            prevEl: ".tab-prev",
          }}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex)
              setActiveTab(tabs[swiper.activeIndex])
            }} 
            className="relative"
          >
            {tabs.map((tab) => (
              <SwiperSlide key={tab.id}>

                {/* Tab Content */}
                <div
                  className="grid grid-cols-1 tab-cont gap-6 md:gap-2 items-center
                  xl:py-20 py-10 sm:py-7 md:py-17 lg:px-6 px-3"
                  style={{
                    backgroundImage: `url(${eclipse})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "35% 0%",
                  }}
                >
                  {/* TEXT */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-second font-bold xl:text-4xl lg:text-3xl text-2xl">
                        {activeTab.step}
                      </h3>

                      <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl capitalize font-bold text-primary mt-4 md:mt-2">
                        {activeTab.title}
                      </h2>

                      <p className="mt-6 font2 md:mt-3 xl:text-xl lg:text-[22px] md:text-base text-primary font-light">
                        {activeTab.desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* IMAGE */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab.image}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={activeTab.image}
                        alt={activeTab.label}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

           {/* CUSTOM NAVIGATION */}
           <div className="btn-wrapper">
                <button className="tab-prev tab-btn text-primary hover:text-secondary transition">
                  <HiOutlineArrowNarrowLeft />
                </button>
                <span className="text-secondary font-semibold text-lg">
                  {activeIndex + 1}
                  <span className="text-primary "> / {tabs.length}</span>
                </span>
                <button className="tab-next tab-btn text-primary hover:text-secondary transition">
                  <HiOutlineArrowNarrowRight />
                </button>
                </div>

        </div>

      </div>
    </section>
  )
}
