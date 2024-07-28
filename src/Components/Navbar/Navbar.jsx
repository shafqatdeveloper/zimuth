import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BlackLogo from "../../assets/logo_horizontal_black_circle.png";
import WhiteLogo from "../../assets/logo_horizontal_white_circle.png";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaRegNewspaper, FaUserCircle } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useContext(ThemeContext);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-darkWhite dark:bg-darkBlack text-sm shadow-md fixed w-full z-20 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-16 w-auto"
                src={theme === "dark" ? WhiteLogo : BlackLogo}
                alt="Logo"
              />
            </div>
          </div>
          <div className="hidden  md:flex md:items-center md:space-x-10">
            <Link
              to="/about-us"
              className="text-darkBlack dark:text-darkWhite hover:text-gray-900 flex items-center gap-1"
            >
              <RiErrorWarningFill />
              About Us
            </Link>
            <Link
              to="/news"
              className="text-darkBlack dark:text-darkWhite hover:text-gray-900 flex items-center gap-1"
            >
              {" "}
              <FaRegNewspaper />
              News
            </Link>
            <Link
              to="/pricing"
              className="text-darkBlack dark:text-darkWhite hover:text-gray-900 flex items-center gap-1"
            >
              {" "}
              <IoPricetags />
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-darkBlack dark:text-white">
              <FaUserCircle />
              <Link to="/login" className="">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
