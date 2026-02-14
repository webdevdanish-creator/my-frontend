import { fadeUp } from "../animations/fadeUp";


import { motion } from 'framer-motion'


const cards = [
  {  border_clr: "border_clr1", icon:"src/assets/images/preserve-legacy.svg", title: "Preserve Your Legacy", desc: "Safeguard important stories, knowledge and experiences so that they live on for future generations" },
  {  border_clr: "border_clr2", icon:"src/assets/images/stronger-community.svg", title: "Stronger Community Connections", desc: "Bring people and generations together through shared stories" },
  {  border_clr: "border_clr3", icon:"src/assets/images/private-secure.svg", title: "Private And Secure", desc: "Ensure confidential narratives are stored safety with full control and trusted protection" },
]

const bgClasses = [
  'border_clr1',
  'border_clr2',
  'border_clr3',
  'border_clr4',
]

export default function Enterprise() {
  return (
    <section className="py-20 enterprise">
      <div className="container mx-auto md:px-6 px-1 enterprise-cards pt-15 sm:pt-30 ">
                    <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold text-center text-primary leading-tight">Why Enterprises Choose Easy Speak Stories</h2>
            
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-3 gap-2 md:gap-2 xl:gap-[3.5%] mt-7 lg:mt-15 md:mt-10 md:mb-0 ">
                      {cards.map((card, i) => (
                        <motion.div
                          key={i}
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="visible"
                          className={` ${bgClasses[i % bgClasses.length]} mx-auto p-[2px] h-[260px] sm:h-[450px] md:h-[250px] lg:h-[340px] xl:h-[400px] 2xl:h-[470px] rounded-xl shadow text-center cards`}
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
  );
}
