import { fadeUp } from "../animations/fadeUp";
import Carousel from "../components/StackedHoverSlider";

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const cards = [
  {  border_clr: "border_clr1", icon:"src/assets/images/card-icn-1.png", title: "Subscription", desc: "Users choose from  personal, family, or global legacy tiers with clear  feature access." },
  {  border_clr: "border_clr2", icon:"src/assets/images/card-icn-2.png", title: "Upload Story", desc: "Record, write, or upload your stories directly into our platform, or use AI-powered voice cloning to bring back the voices of loved ones." },
  {  border_clr: "border_clr3", icon:"src/assets/images/card-icn-3.png", title: "Translation & Editing", desc: "AI-enhanced editing Sites and instant multilingual translation in 150+ languages for global accessibility." },
  {  border_clr: "border_clr4", icon:"src/assets/images/card-icn-4.png", title: "Archival & Sharing", desc: "Stories stored in secure, access-controlled archives with options for succession and public/private sharing." },
];

const words = ['Voices', 'Moments', 'History', 'Legacies']
const leftVariant = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

const rightVariant = {
  hidden: { x: 60, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}


const bgClasses = [
  'border_clr1',
  'border_clr2',
  'border_clr3',
  'border_clr4',
]


export default function Hero() {
  return (
    <section className="relative overflow-hidden section1 pt-7.5 pb-20 sm:pb-28 lg:pb-28 md:pb-15">
      
      {/* TOP CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 text-center slider-container">

        {/* Heading */}
        <AnimatedHeading />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 sm:mt-6 2xl:text-[28px] font2 lg:text-lg sm:text-base lg:2xl  text-primary mx-auto"
        >
          The Digital Storytelling Platform
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="btn-wrap mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 text-base 2xl:text-2xl xl:text-xl sm:text-lg"
        >
          <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90">
            Start Your Story
          </button>

          <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-secondary hover:border-secondary hover:text-white transition">
            View Plans
          </button>
        </motion.div>

        {/* Social Icons */}
       {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="sm:mt-10 md:mt-14 mt-8 flex flex-wrap justify-center gap-3 sm:gap-14 lg:gap-14 md:gap-10 2xl:gap-20"
        >
          {[
            "src/assets/images/whatsapp.svg",
            "src/assets/images/microsoft.svg",
            "src/assets/images/snapchat.svg",
            "src/assets/images/twitch.svg",
            "src/assets/images/payoneer.svg",
            "src/assets/images/android.svg",
          ].map((item) => (
            <a key={item} href="#">
              <img
                src={item}
                alt=""
                className="h-10 sm:h-12 md:h-12 lg:h-14 2xl:h-15 xl:h-12  w-auto opacity-80 hover:opacity-100 transition"
              />
            </a>
          ))}
        </motion.div>*/}

        {/* Slider */}
        <div className="">
          <Carousel />
        </div>
      </div>

      {/* OVERVIEW SECTION */}
            <div className="container mx-auto md:px-6 px-1 hero-cards pt-15 sm:pt-30 ">
              <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold text-center text-primary leading-tight">Overview</h2>
      
              <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-3 gap-2 md:gap-2 xl:gap-[3.5%] mt-7 lg:mt-15 md:mt-10 md:mb-0 ">
                {cards.map((card, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className={` ${bgClasses[i % bgClasses.length]} p-[2px] h-[260px] sm:h-[450px] md:h-[250px] lg:h-[340px] xl:h-[400px] 2xl:h-[470px] rounded-xl shadow text-center cards`}
                  >
                    <div className="p-2 lg:p-5  card-inner mx-auto" >
                    <img className="mx-auto lg:w-32 md:w-20 sm:w-40 w-20" src={card.icon} alt="" />
                    <h3 className="text-primary font-bold 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-xl text-base -mt-4">{card.title}</h3>
                    <p className="text-primary font2 2xl:text-lg md:text-xs sm:text-sm lg:text-base text-xs mt-0 lg:mt-2">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
    </section>
  )
}





export function AnimatedHeading() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    const firstDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length)
      }, 2000)
    }, 1000)

    return () => {
      clearTimeout(firstDelay)
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl font-bold flex flex-wrap justify-center gap-2 text-center 
     leading-tight -mx-[30px]"
    >
      {/* LEFT */}
      <span className="text-primary left-text w-full md:w-fit ">
        Preserving Stories
      </span>

      {/* CENTER */}
      {/* ANIMATED WORD */}
       <span className="relative inline-block h-[1.2em] w-[6em] center-text text-center">
         <AnimatePresence mode="wait">
            <span
            className=" text-secondary whitespace-nowrap "
          >
            - {words[index]} -
          </span>
        </AnimatePresence>
      </span>

      {/* RIGHT */}
      <span className="text-primary right-text w-full md:w-fit">
        Memories Forever
      </span>
    </h1>
  )
}
