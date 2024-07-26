import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { ThemeContext } from "../Context/ThemeContext";
import Img1 from "../../assets/carousel-img-1.jpg";
import Img2 from "../../assets/carousel-img-2.jpg";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick, theme } = props;
  return (
    <SlArrowRight
      className={`${className} scale-125`}
      style={{
        ...style,
        display: "block",
        color: theme === "dark" ? "white" : "black",
        position: "absolute",
        top: "-18%",
        right: "50px",
        scale: "",
        zIndex: 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { className, style, onClick, theme } = props;
  return (
    <SlArrowLeft
      className={`${className} scale-125`}
      style={{
        ...style,
        display: "block",
        color: theme === "dark" ? "white" : "black",
        position: "absolute",
        top: "-18%",
        left: "80%",
        zIndex: 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const { theme } = useContext(ThemeContext);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow theme={theme} />,
    prevArrow: <PrevArrow theme={theme} />,
  };

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
    <div className="container w-4/5 mx-auto relative mt-20">
      <h2 className="text-start text-2xl mb-8">AI Search, Re-imagined</h2>
      <div className="relative">
        <Slider {...settings}>
          {/* Slides */}
          {carouselSlides.map((slide, index) => {
            return (
              <div key={index} className="px-2">
                <div className="relative">
                  <img
                    src={slide.slideImg}
                    alt={slide.slideHeading}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
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
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
