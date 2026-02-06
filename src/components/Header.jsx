import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { World } from '../components/svgs/tab1.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <div className="container mx-auto px-2 py-2 sm:px-2.5 sm:py-2.5 flex lg:flex-nowrap md:flex-wrap items-center justify-between gap-y-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2 md:order-1 ">
          <div className="sm:w-[100px] w-[80px] xl:w-[150px] 2xl:w-[170px] flex items-center justify-center">
            
            <img src={`src/assets/images/logo.png`} alt="Story" className="w-full h-full object-cover" />
          </div>
          
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-20 xl:gap-15 lg:gap-10 md:gap-8 md:order-3 lg:order-2 md:w-full lg:w-auto justify-center text-lg md:text-lg text-primary font-bold">
          {["Home", "How It Works", "Subscription Plan", "Enterprise Solution"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-secondary text-base xl:text-lg transition"
            >
              {item}
            </a>
          ))}
        </nav>

          <div className="flex gap-5 md:order-2 lg:order-3">
        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="lang border border-primary text-primary rounded-lg hover:bg-secondary hover:border-secondary sm:px-7 px-5 sm:py-3 py-2  hover:text-white">
           <World />
          </button>
          <button className="hidden md:block text-base md:text-lg border bg-primary border-primary text-white rounded-lg hover:text-primary hover:bg-transparent px-4 py-2">
            Sign In
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-primary"
        >
          ☰
        </button>
      </div>

      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t text-primary">
          {["Home", "How It Works", "Plans", "Enterprise"].map((item) => (
            <a
              key={item}
              href="/"
              className="block px-6 py-3 hover:bg-accent "
            >
              {item}
            </a>
          ))}
          <a className="block  px-6 py-3 hover:bg-accent" href="">Sign In</a>
        </div>
      )}
      
    </motion.header>
  );
}
