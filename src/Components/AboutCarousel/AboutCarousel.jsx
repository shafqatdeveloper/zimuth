import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import carouselImg1 from "../../assets/about-carousel-img-1.jpg";
import carouselImg2 from "../../assets/about-carousel-img-2.jpg";
import carouselImg3 from "../../assets/about-carousel-img-3.jpg";
import carouselImg4 from "../../assets/about-carousel-img-4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./customSwiper.css";

const aboutCarouselSlides = [
  {
    heading: "Search More Efficiently than Ever",
    description:
      "Avoid browsing repeating sites and content farms with Zimuth's unprecedented site-grouping algorithm",
    slideImg: carouselImg1,
  },
  {
    heading: "Granularity and Context",
    description:
      "Summaries from dozens of grouped and contextualised sources and multiple search Engines",
    slideImg: carouselImg2,
  },
  {
    heading: "Browse Objectively and Accurately",
    description:
      "Searcher’s proprietary algorithms allow you to identify systemic bias mathematically.",
    slideImg: carouselImg3,
  },
  {
    heading: "Safety and Secure Searching",
    description:
      "Search privately across multiple engines, bypassing censorship, algorithmic manipulation and illicit tracking.",
    slideImg: carouselImg4,
  },
];

const AboutCarousel = () => {
  return (
    <div className="relative py-7 w-full flex flex-col gap-12 items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-transparent h-[80vh] bg-blend-normal"></div>{" "}
      {/* Overlay */}
      <Swiper
        spaceBetween={25}
        centeredSlides={true}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        slidesPerView={1.1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        navigation={true}
        className="mySwiper w-[95%]"
      >
        {aboutCarouselSlides.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="w-full h-[80vh] rounded-3xl">
              <img
                src={slide.slideImg}
                alt={slide.heading}
                className="w-full rounded-3xl h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex gap-6 flex-col rounded-3xl justify-center items-center bg-black/40 bg-opacity-50">
                <h1 className="text-white text-4xl font-semibold">
                  {slide.heading}
                </h1>
                <p className="text-white w-2/4 pt-3 text-center">
                  {slide.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-white text-black rounded-full">
                  Try now
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-2/4">
        <h1 className="text-4xl font-semibold text-center text-darkWhite pt-28">
          Visualize changes in sentiment. Map information across time.
        </h1>
      </div>
    </div>
  );
};

export default AboutCarousel;
