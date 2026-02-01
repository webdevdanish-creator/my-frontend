// import { useState } from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion"
import { useEffect, useState } from "react"



const services = [
  { id: 1, title: "WRITE IT", image: "/src/assets/images/service.png" },
  { id: 2, title: "TRANSLATE IT", image: "/src/assets/images/service.png" },
  { id: 3, title: "VOICE IT", image: "/src/assets/images/service.png" },
  { id: 4, title: "SHARE IT", image: "/src/assets/images/service.png" },
];

// export default function OurServices() {
//   const [active, setActive] = useState(null);

export default function CardGallery({ items }) {
  const [active, setActive] = useState(null)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

  return (
    <section className="py-20 lg:py-30 md:py-24 bg-[url('/src/assets/images/service-bg.png')] bg-no-repeat bg-bottom bg-contain" >
      <div className="container mx-auto px-2 md:px-3">

        {/* Heading */}
        <div className="text-center lg:mb-16 md:mb-8 mb-[24px]">
          <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold text-primary">
            Our Services
          </h2>
          <p className="mt-4 xl:text-2xl 2xl:text-[28px] font2 lg:text-xl md:text-lg text-primary">
            Comprehensive storytelling solutions for every need
          </p>
        </div>

        {/* SERVICES CARDS */}
        <div
          className="flex flex-wrap flex-row  gap-1 md:gap-1 2xl:h-[420px] md:h-[280px] lg:h-auto"
          onMouseLeave={() => setActive(null)}
        >
          {services.map((item) => {
            const isActive = active === item.id;
            const isIdle = active === null;
            return (
              <motion.div
                key={item.id}
                // onMouseEnter={() => setActive(item.id) }
                // animate={{
                //   flex:
                //     isIdle ? 1 : isActive ? 2 : 0.66,
                // }}
                // transition={{ duration: 0.4, ease: "easeInOut" }}
                /* ✅ Desktop hover only */
            onMouseEnter={isDesktop ? () => setActive(item.id) : undefined}
            onMouseLeave={isDesktop ? () => setActive(null) : undefined}

            /* ✅ Disable animation on mobile */
            animate={
              isDesktop
                ? { flex: isIdle ? 1 : isActive ? 2 : 0.66 }
                : false
            }

            transition={
              isDesktop
                ? { duration: 0.4, ease: "easeInOut" }
                : undefined
            }
                className="relative w-[calc(50%-2px)] h-[260px] lg:h-[300px] xl:h-[440px] lg:rounded-2xl rounded-lg overflow-hidden cursor-pointer bg-secondary card-gallery"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className={` absolute inset-0  ${isActive ? 'bg-primary/30' : 'bg-primary/90'}`} ></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 md:p-2">
                  <h3 className="text-white text-center text-3xl xl:text-2xl 2xl:text-3xl lg:text-xl text-lg font-semibold">
                    {item.title}
                  </h3>

                  <button className={`mt-4 ${isActive ? 'bg-primary' : 'bg-secondary w-max'} text-white xl:text-lg text-base px-4 py-2 rounded-md absolute bottom-10 left-[50%] translate-x-[-50%]  `}>
                    MORE DETAILS
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-10 lg:mt-15 md:mt-8">
          <button className="bg-primary hover:bg-secondary 2xl:text-2xl xl:text-xl  text-white px-8 py-3 rounded-lg">
            VIEW ALL SERVICES
          </button>
        </div>

        {/* PART 2 */}
        <BottomCards />

      </div>
    </section>
  );
}


function BottomCards() {
  return (
    <div className="lg:mt-32 mt-15 grid sm:grid-cols-2 2xl:gap-12 gap-4">
      
      {/* Card 1 */}
      <div className="bg-secondary lg:rounded-[32px] lg:p-6 text-white p-2 rounded-[18px]">
        <div className="image-wrapper">
        <img
          src="src/assets/images/service-prt2-1.png"
          alt=""
          className="rounded-2xl mb-6"
        />
        </div>

        <div className="content-wrapper">
        <h3 className="xl:text-4xl lg:text-2xl text-xl font-bold">
          Give The Gift Of Memory <br />
          The Gift That Keeps On Giving
        </h3>

        <p className="mt-4 md:mt-2 font2 xl:text-xl md:text-base font-light text-white">
          Because moments fade, but stories live forever. Easy Speak Stories helps you capture your memories, wisdom, and life experiences in your own voice so they never get lost. Preserve your legacy in a secure digital space your family can cherish for generations.
        </p>

        <button className="mt-6 2xl:text-2xl xl:text-xl bg-primary px-6 py-3 rounded-md uppercase">
          START RECORDING TODAY
        </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-secondary lg:rounded-[32px] lg:p-6 text-white p-2 rounded-[18px]">
        <div className="image-wrapper">
        <img
          src="src/assets/images/service-prt2-2.png"
          alt=""
          className="rounded-2xl mb-6"
        />
        </div>

        <div className="content-wrapper">
        <h3 className="xl:text-4xl lg:text-2xl text-xl font-bold">
          Family Collaboration A Story<br />Shared Across Generations.
        </h3>

        <p className="mt-4 xl:text-xl font2 font-light text-white">
          Because moments fade, but stories live forever. Easy Speak Stories helps you capture your memories, wisdom, and life experiences in your own voice so they never get lost. Preserve your legacy in a secure digital space your family can cherish for generations.
        </p>

        <button className="mt-6 2xl:text-2xl xl:text-xl md:text-base bg-primary px-6 py-3 rounded-md uppercase">
          Invite Family Members
        </button>
        </div>
      </div>

    </div>
  );
}

