import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ThemeContext } from "../Context/ThemeContext";
import Img1 from "../../assets/carousel-img-1.jpg";
import Img2 from "../../assets/carousel-img-2.jpg";
import { Link } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Carousel = () => {
  const { theme } = useContext(ThemeContext);

  const carouselSlides = [
    {
      slideImg: Img1,
      slideHeading: "Efficiency",
      slideDesc: "Avoid Duplication and Content farms.",
      slideLink: "/link",
    },
    {
      slideImg: Img2,
      slideHeading: "Efficiency",
      slideDesc: "Avoid Duplication and Content farms.",
      slideLink: "/link",
    },
    {
      slideImg: Img1,
      slideHeading: "Efficiency",
      slideDesc: "Avoid Duplication and Content farms.",
      slideLink: "/link",
    },
    {
      slideImg: Img2,
      slideHeading: "Efficiency",
      slideDesc: "Avoid Duplication and Content farms.",
      slideLink: "/link",
    },
    {
      slideImg: Img1,
      slideHeading: "Efficiency",
      slideDesc: "Avoid Duplication and Content farms.",
      slideLink: "/link",
    },
  ];

  return (
    <div className="w-full relative pt-20 flex items-center justify-end">
      <div className="w-[90%]">
        <h2 className="text-start text-3xl font-semibold mb-12">
          AI Search, Re-imagined
        </h2>
        <div className="absolute top-20 mt-0.5 right-52 flex space-x-4 text-gray-500 ">
          <div className="swiper-button-prev cursor-pointer">
            <MdOutlineKeyboardArrowLeft size={45} className="pointer-expand" />
          </div>
          <div className="swiper-button-next cursor-pointer">
            <MdOutlineKeyboardArrowRight size={45} className="pointer-expand" />
          </div>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}ƒ
            spaceBetween={17}
            slidesPerView={3.5}
            direction="horizontal"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {carouselSlides.map((slide, index) => (
              <SwiperSlide key={index} className="py-4">
                <div className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.025] hover:z-10">
                  <img
                    src={slide.slideImg}
                    alt={slide.slideHeading}
                    className="w-full h-[33rem] object-cover"
                  />
                  <div className="absolute inset-0 bg-white/20 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white">{slide.slideHeading}</h3>
                      <p className="text-xl font-bold text-white">
                        {slide.slideDesc}
                      </p>
                    </div>
                    <Link
                      to={slide.slideLink}
                      className="self-end hover:scale-125 transition-all duration-300"
                    >
                      <CgArrowRight
                        size={34}
                        className="text-white pointer-expand"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
