import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/outline';
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaPinterestP,
//   FaYoutube,
// } from 'react-icons/fa'

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>



export default function Footer() {
  return (
    <footer className="relative bg-primary">

      {/* CTA SECTION */}
      <div className="relative bg-secondary text-white text-center lg:pt-15 md:pb-15 pb-11 pt-15 overflow-hidden cta-sec">
        {/* Curved Shape */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-40 bg-secondary rounded-t-full" /> */}

        <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold">
          Start Your Free Trial Today
        </h2>

        <p className="mt-4 md:mt-2 xl:text-4xl font2 lg:text-2xl">
          Your Memories Deserve To Be Heard
        </p>

        <div>
        <button className="relative lg:mt-8 mt-4 bg-primary hover:opacity-85 2xl:text-2xl xl:text-xl lg:text-lg md:text-base px-8 py-4 md:px-5 md:py-2 xl:py-4 xl:px-7 rounded-md text-white font-semibold">
          BEGIN MY STORY
        </button>
        </div>

        <p className="xl:mt-7 xl:text-2xl font2 lg:mt-6 mt-5 opacity-90">
          No Credit Card Required – Cancel Anytime.
        </p>
      </div>

      {/* MAIN FOOTER */}
      <div className=" text-white lg:pt-32 md:pt-15 lg:pt-12 md:pt-5 pt-12 ">

        {/* LOGO + DESCRIPTION */}
        <div className="container mx-auto px-6 text-center">
          <img
            src="src/assets/images/footer-logo.png"
            alt="Easy Speak Stories"
            className="mx-auto max-w-[250px] xl:w-[180px] lg:w-[130px] md:w-[110px] sm:w[120px] w-[90px] mb-6"
          />

          <p className="max-w-6xl font2 capitalize mx-auto 2xl:text-xl sm:text-xs md-text-base, lg:text-lg leading-relaxed text-white">
            the digital storytelling platform that makes it simple to record, translate, and share your life story. Your children and grandchildren can add their own chapters, creating a living, multilingual family history archive. It’s the gift that keeps on giving—"powered by AI voice cloning to capture and protect your legacy."
          </p>
        </div>


        {/* NAV LINKS */}
        <div className="border-t border-white/20 mt-12">
          <div className="container mx-auto px-6 py-8 flex flex-wrap justify-center lg:gap-8 gap-x-4 gap-y-2 2xl:text-xl sm:text-xs">
            {[
              "Home",
              "How It Works",
              "Subscription Plans",
              "Enterprise Solution",
              "FAQs",
              "Privacy Policy",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-secondary lg:text-base xl:text-lg transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="border-t border-white/20 copyright">
          <div className="container mx-auto lg:px-6 lg:py-8 px-3 py-4 flex flex-wrap lg:grid md:grid-cols-3 gap-y-8 gap-x-0 md:gap-0 md:gap-y-10 items-center text-sm">

            {/* Contact */}
            <div className="text-center order-1 w-full">
              <p className="font-semibold 2xl:text-2xl mb-2 ">Contact Details</p>
              <div className='cnt flex xl:sgap-24 gap-15 justify-center'>
              <p className='items-center flex gap-1 text-xs xl:text-base'><MapPinIcon className="w-5 h-5 sm:w-4 sm:h-4" /> Dummy Address</p>
              <p className='items-center flex gap-1 text-xs xl:text-base'><EnvelopeIcon className="w-5 h-5 sm:w-4 sm:h-4" /> <a href="mailto:dummy@domain.com">dummy@domain.com</a></p>
              <p className='items-center flex gap-1 text-xs xl:text-base'><PhoneIcon className="w-5 h-5 sm:w-4 sm:h-4" /> <a href="tel:+0123 456 789">+0123 456 789</a></p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center font2 order-3 text-xs xl:text-base lg:order-2 w-full ">
              © 2026 Easy Speak Stories. All Rights Reserved
            </div>

            {/* Social */}
            {/* <div className="text-center order-2 lg:order-3 w-full sm:w-[50%] lg:w-full md:text-right social-ic">
              <p className="font-semibold mb-2 2xl:text-2xl text-start sm:text-end">Our Social Media</p>
              <div className="flex justify-start sm:justify-end gap-4 xl:text-xl text-base">
                <a href="#" aria-label="Facebook">
                    <FaFacebookF className="text-white hover:text-secondary transition" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter className="text-white hover:text-secondary transition" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FaInstagram className="text-white hover:text-secondary transition" />
                  </a>
                  <a href="#" aria-label="Pinterest">
                    <FaPinterestP className="text-white hover:text-secondary transition" />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <FaYoutube className="text-white hover:text-secondary transition" />
                  </a>
              </div>
            </div> */}

          </div>
        </div>

      </div>
    </footer>
  );
}
