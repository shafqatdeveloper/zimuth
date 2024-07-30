import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import { ThemeContext } from "./Components/Context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="relative">
      <Navbar />
      <button
        onClick={toggleTheme}
        className="flex items-center absolute z-20 left-3 bottom-3 justify-center text-darkBlack dark:text-white rounded-md"
      >
        {theme === "dark" ? (
          <MdOutlineLightMode size={20} />
        ) : (
          <IoMoonOutline size={20} />
        )}
      </button>
      <div
        style={{ fontSize: "0.5rem", lineHeight: "0.75rem" }}
        className="absolute bottom-3 right-4 flex items-center text-darkBlack dark:text-darkWhite gap-2 font-semibold"
      >
        <Link to={"/contact-us"}>Contact us</Link>
        <Link to={"/terms-and-conditons"}>Terms and Conditons</Link>
        <h1>&copy; Searcher Inc. 2024.</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
