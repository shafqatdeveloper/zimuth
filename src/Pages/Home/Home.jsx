import React, { useContext } from "react";
import Hero from "../../Components/Hero/Hero";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";
import SectionOne from "../../Components/HomeSections/SectionOne";
import SectionTwo from "../../Components/HomeSections/Sectiontwo";
import SectionThree from "../../Components/HomeSections/SectionThree";
import SectionFour from "../../Components/HomeSections/SectionFour";
import "./Home.css";

const Home = () => {
  return (
    <div className="h-full w-full bg-darkWhite dark:bg-darkBlack text-darkBlack dark:text-white">
      <Hero />
      <HeroCarousel />
      <div className="gradient-background">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
};

export default Home;
