import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ThemeContext } from "../Context/ThemeContext";
import Img1 from "../../assets/carousel-img-1.jpg";
import Img2 from "../../assets/carousel-img-2.jpg";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
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
    {
      slideImg: Img2,
      slideHeading: "Efficiency",
      slideDesc: "Avoid Duplication and Content farms.",
      slideLink: "/link",
    },
  ];

  return (
    <div className="container w-[87%] mx-auto relative mt-20 text-darkBlack">
      <h2 className="text-start text-3xl font-semibold mb-8 relative">
        AI Search, Re-imagined
        <div className="absolute top-0 right-48 flex space-x-8 text-gray-400 ">
          <div className="swiper-button-prev cursor-pointer">
            <MdOutlineKeyboardArrowLeft size={45} />
          </div>
          <div className="swiper-button-next cursor-pointer">
            <MdOutlineKeyboardArrowRight size={45} />
          </div>
        </div>
      </h2>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          loop={true}
          slidesPerView={3.5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {carouselSlides.map((slide, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <div className="relative rounded-lg overflow-hidden">
                <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                  <img
                    src={slide.slideImg}
                    alt={slide.slideHeading}
                    className="rounded-lg shadow-lg w-full h-[25rem] object-cover"
                  />
                  <div className="absolute top-0 left-0 p-6 h-full bg-gradient-to-b from-black/40 to-transparent text-white rounded-lg w-full">
                    <h3 className="text-xl font-bold">{slide.slideHeading}</h3>
                    <p>{slide.slideDesc}</p>
                    <Link to={slide.slideLink}>
                      <CgArrowRight
                        size={24}
                        className="absolute bottom-4 right-4 text-white"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
