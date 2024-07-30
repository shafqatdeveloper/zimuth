import React, { useContext } from "react";
import SectionImage from "../../assets/section_4.webp";
import { ThemeContext } from "../Context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SectionFour = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative  text-darkBlack">
      <div className="flex w-4/5">
        <div className="w-2/4 flex justify-end">
          <img src={SectionImage} alt="Section" className="w-3/4 h-auto" />
        </div>
        <div className="w-2/4 flex flex-col justify-center pl-14">
          <h1 className="text-3xl flex flex-col font-semibold mb-7">
            Keeping your data <span>yours and yours alone</span>
          </h1>
          <h3 className="italic font-semibold mb-7">
            What if AI respected your privacy?
          </h3>
          <p className="text-sm w-4/5 text-pretty flex flex-col">
            <span>Zimuth has a strict no-user data sale policy:</span>
            we never sell your search or chat data. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat
            volutpat. Donec placerat nisl magna, et faucibus arcu condimentum
            sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
