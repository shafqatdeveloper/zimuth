import React from "react";
import Hero from "../../Components/Hero/Hero";
import HeroCarousel from "../../Components/HeroCarousel/HeroCarousel";

const Home = () => {
  return (
    <div className="h-full w-full bg-darkWhite dark:bg-darkBlack text-darkBlack dark:text-white">
      <Hero />
      <HeroCarousel />
    </div>
  );
};

export default Home;
