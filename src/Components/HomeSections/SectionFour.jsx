import React, { useContext } from "react";
import SectionImage from "../../assets/section_4.webp";
import { ThemeContext } from "../Context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SectionFour = () => {
  return (
    <div className="w-full h-full flex items-center justify-center pb-20 md:pb-40">
      <div className="md:!flex w-3/4 gap-[40px] hidden">
        <div className="w-2/4 flex justify-start items-start">
          <img src={SectionImage} alt="Section" className="w-full h-auto" />
        </div>
        <div className="w-2/4 flex flex-col justify-center pl-16">
          <h1 className="text-3xl flex flex-col font-semibold mb-7">
            Keeping your data <span>yours and yours alone</span>
          </h1>
          <h3 className="italic font-semibold mb-7">
            What if AI respected your privacy?
          </h3>
          <p className="text-sm w-11/12 text-pretty">
            <span>Zimuth has a strict no-user data sale policy:</span>
            we never sell your search or chat data. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
            volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
            sed.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[40px] md:hidden">
        <div className="flex px-5 flex-col justify-center">
          <h1 className="text-2xl flex flex-col font-semibold mb-7">
            Keeping your data <span>yours and yours alone</span>
          </h1>
          <h3 className="italic font-semibold mb-7">
            What if AI respected your privacy?
          </h3>
          <span>Zimuth has a strict no-user data sale policy:</span>
          we never sell your search or chat data. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
          volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
          sed.
        </div>
        <div className="md:w-2/4 w-full flex justify-center md:justify-start ">
          <img src={SectionImage} alt="Section" className="w-3/4 sm:w-2/4 md:w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
