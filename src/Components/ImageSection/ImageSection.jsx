import React from "react";
import dummyImage from "../../assets/about-carousel-img-1.jpg";
import { FaGoogle } from "react-icons/fa";
import "./ImageSection.css";

const ImageSection = () => {
  const imagesData = [
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
    { img: dummyImage },
  ];
  return (
    <div className="w-full p-3 grid grid-cols-2 gap-x-2 gap-y-0 h-[230px] overflow-auto">
      {imagesData.map((singleImg, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-1 h-28"
            style={{ fontSize: "0.55rem", lineHeight: "0.6rem" }}
          >
            <img src={singleImg.img} alt="" className="h-[70px] rounded-sm" />
            <span className="flex items-center gap-1.5">
              <FaGoogle />
              Google
            </span>
            <p>Stock image of some BS</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSection;
