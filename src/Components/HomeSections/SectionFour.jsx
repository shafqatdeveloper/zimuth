import React, { useContext } from "react";
import SectionImage from "../../assets/section_4.webp";
import { ThemeContext } from "../Context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SectionFour = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
      <button
        onClick={toggleTheme}
        className="flex items-center absolute z-20 left-3 bottom-3 justify-center text-darkBlack  rounded-md"
      >
        {theme === "dark" ? (
          <MdOutlineLightMode size={20} />
        ) : (
          <IoMoonOutline size={20} />
        )}
      </button>
      <div
        style={{ fontSize: "0.5rem", lineHeight: "0.75rem" }}
        className="absolute bottom-3 right-4 flex items-center gap-2 font-semibold"
      >
        <Link to={"/contact-us"}>Contact us</Link>
        <Link to={"/terms-and-conditons"}>Terms and Conditons</Link>
        <h1>&copy; Searcher Inc. 2024.</h1>
      </div>
    </div>
  );
};

export default SectionFour;
