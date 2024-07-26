import React, { useContext } from "react";
import SectionImage from "../../assets/section_4.webp";
import { ThemeContext } from "../Context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SectionFour = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-full h-screen relative flex items-center justify-center  text-darkBlack">
      <div className="flex w-4/5">
        <div className="w-2/5 flex justify-center">
          <img src={SectionImage} alt="Section" className="w-full h-auto" />
        </div>
        <div className="w-3/5 pl-20 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold mb-7">
            Keeping your data yours and yours alone
          </h1>
          <h3 className="italic font-semibold mb-7">
            What if AI respected your privacy?
          </h3>
          <p className="text-sm w-4/5 flex flex-col">
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
          <MdOutlineLightMode size={24} />
        ) : (
          <IoMoonOutline size={24} />
        )}
      </button>
      <div className="absolute bottom-3 right-4 flex items-center gap-5 text-xs font-semibold">
        <Link to={"/contact-us"}>Contact us</Link>
        <Link to={"/terms-and-conditons"}>Terms and Conditons</Link>
        <h1>&copy; Searcher Inc. 2024.</h1>
      </div>
    </div>
  );
};

export default SectionFour;
