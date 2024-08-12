import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import BlackLogo from "../../assets/logo_horizontal_black_circle.png";
import WhiteLogo from "../../assets/logo_horizontal_white_circle.png";
import { FaRegNewspaper, FaUserCircle } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { ThemeContext } from "../Context/ThemeContext";
import { IoIosInformationCircle } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useContext(ThemeContext);
  const [mobileMenu, setMobileMenu] = useState(false)
  const locaton = useLocation()

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
      className={`bg-darkWhite dark:bg-[#22262b] flex items-center justify-center text-sm shadow-md fixed w-full z-20 transition-transform duration-300 text-darkBlack dark:text-darkWhite ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="w-full md:!w-5/6">
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
            <div className="hidden md:!flex items-center gap-10">
              <Link
                to="/about-us"
                className="text-darkBlack dark:text-darkWhite hover:bg-gray-200 p-2 dark:hover:bg-gray-700 rounded-xl flex items-center gap-1 transition-all duration-300"
              >
                <IoIosInformationCircle />
                About Us
              </Link>
              <Link
                to="/news"
                className="text-darkBlack dark:text-darkWhite hover:bg-gray-200 p-2 dark:hover:bg-gray-700 rounded-xl flex items-center gap-1 transition-all duration-300"
              >
                <FaRegNewspaper />
                News
              </Link>
              <Link
                to="/pricing"
                className="text-darkBlack dark:text-darkWhite hover:bg-gray-200 p-2 dark:hover:bg-gray-700 rounded-xl flex items-center gap-1 transition-all duration-300"
              >
                <IoPricetags />
                Pricing
              </Link>
            </div>
            <div className="hidden md:!flex items-center gap-4 w-40 justify-center">
              <Link
                to="/login"
                className="flex items-center gap-1 text-darkBlack dark:text-white"
              >
                <FaUserCircle />
                Login
              </Link>
            </div>

            <div onClick={() => setMobileMenu(!mobileMenu)} className={`md:hidden p-1 ${mobileMenu && "bg-gray-200 dark:bg-black rounded-md p-1"} mr-4`}>
              <HiMenuAlt3 size={22} />
            </div>
          </div>
        </div>
      </nav>
      <div className={mobileMenu ? "absolute top-16 left-0 bg-black/60 backdrop-blur-3xl h-[60vh] w-full transition-all duration-300" : "absolute top-16 left-[-100%] bg-black/60 backdrop-blur-3xl h-[60vh] transition-all duration-300 w-full"}>
        <div className="w-full flex flex-col" >
          <Link
            to="/about-us"
            onClick={() => setMobileMenu(false)}
            className={`p-2 ${locaton.pathname === "/about-us" ? "bg-cyan80 text-darkBlack" : "text-darkWhite"} p-4 flex items-center gap-1 transition-all duration-300`}
          >
            <IoIosInformationCircle />
            About Us
          </Link>
          <Link
            to="/news"
            onClick={() => setMobileMenu(false)}
            className={`p-2 ${locaton.pathname === "/news" ? "bg-cyan80 text-darkBlack" : "text-darkWhite"} p-4 flex items-center gap-1 transition-all duration-300`}
          >
            <FaRegNewspaper />
            News
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMobileMenu(false)}
            className={`p-2 ${locaton.pathname === "/pricing" ? "bg-cyan80 text-darkBlack" : "text-darkWhite"} p-4 flex items-center gap-1 transition-all duration-300`}
          >
            <IoPricetags />
            Pricing
          </Link>
          <Link
            to="/login"
            onClick={() => setMobileMenu(false)}
            className={`p-2 ${locaton.pathname === "/login" ? "bg-cyan80 text-darkBlack" : "text-darkWhite"} p-4 flex items-center gap-1 transition-all duration-300`}
          >
            <FaUserCircle />
            Login
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
