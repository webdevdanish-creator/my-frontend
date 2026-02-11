import Hero from "../components/Hero";
import Header from "../components/Header";
import ServicesTabs from "../components/ServicesTabs";
import FamilyTree from "../components/FamilyTree";
import OurServices from "../components/OurServices";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";




export default function Home() {
  return (
    <>
    <Header />
      <Hero />
      {/* <FamilyTree /> */}
      <ServicesTabs />
      <OurServices />
      <TestimonialSlider />
      <Footer />

    </>
  );
}
