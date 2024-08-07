import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BlackLogo from "../../assets/logo_horizontal_black_circle.png";
import WhiteLogo from "../../assets/logo_horizontal_white_circle.png";
import { FaRegNewspaper, FaUserCircle } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { ThemeContext } from "../Context/ThemeContext";
import { IoIosInformationCircle } from "react-icons/io";

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
    <div
      className={`bg-darkWhite dark:bg-[#22262b] flex items-center justify-center text-sm shadow-md fixed w-full z-20 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-5/6">
        <div className="w-full">
          <div className="flex w-full justify-between h-16 items-center">
            <div className="flex">
              <Link to={"/"} className="flex items-center">
                <img
                  className="h-16 w-auto"
                  src={theme === "dark" ? WhiteLogo : BlackLogo}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex items-center gap-10">
              <Link
                to="/about-us"
                className="text-darkBlack dark:text-darkWhite hover:bg-gray-300 p-2 dark:hover:bg-gray-700 rounded-xl flex items-center gap-1"
              >
                <IoIosInformationCircle />
                About Us
              </Link>
              <Link
                to="/news"
                className="text-darkBlack dark:text-darkWhite hover:bg-gray-300 p-2 dark:hover:bg-gray-700 rounded-xl flex items-center gap-1"
              >
                <FaRegNewspaper />
                News
              </Link>
              <Link
                to="/pricing"
                className="text-darkBlack dark:text-darkWhite hover:bg-gray-300 p-2 dark:hover:bg-gray-700 rounded-xl flex items-center gap-1"
              >
                <IoPricetags />
                Pricing
              </Link>
            </div>
            <div className="flex items-center gap-4 w-40 justify-center">
              <Link
                to="/login"
                className="flex items-center gap-1 text-darkBlack dark:text-white"
              >
                <FaUserCircle />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
