import React from "react";
import Hero from "../../Components/Hero/Hero";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import SectionOne from "../../Components/HomeSections/SectionOne";
import SectionTwo from "../../Components/HomeSections/Sectiontwo";
import SectionThree from "../../Components/HomeSections/SectionThree";
import SectionFour from "../../Components/HomeSections/SectionFour";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div className="h-full w-full  text-darkBlack dark:text-white bg-darkWhite">
      <div className="pt-8">
        <Hero />
        <AnimatePresence>
          {inView && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 1 }}
              className="absolute left-1/2 transform -translate-x-1/2 h-[1px] border-b-[1.5px] border-cyan80"
            />
          )}
        </AnimatePresence>
        <div className="dark:bg-gradient-to-b from-darkWhite via-[#7263b0] to-[#251760] text-darkBlack">
          <div ref={ref} className="w-full">
            <HeroCarousel />
          </div>
          <div className="dark:text-white">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
