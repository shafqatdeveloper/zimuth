import React, { useContext } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import { ThemeContext } from "./Components/Context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import ContactUs from "./Pages/Contact/ContactUs";
import News from "./Pages/News/News";
import Pricing from "./Pages/Pricing/Pricing";
import TermsAndConditions from "./Pages/TermsAndConditons/TermsAndConditions";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div className="relative">
      <Navbar />
      <button
        onClick={toggleTheme}
        className={
          location.pathname === "/"
            ? "flex items-center absolute z-20 left-3 bottom-3 justify-center text-darkBlack rounded-md"
            : "flex items-center absolute z-20 left-3 bottom-3 justify-center text-darkBlack dark:text-white rounded-md"
        }
      >
        {theme === "dark" ? (
          <MdOutlineLightMode size={20} />
        ) : (
          <IoMoonOutline size={20} />
        )}
      </button>
      <div
        style={{ fontSize: "0.5rem", lineHeight: "0.75rem" }}
        className={
          location.pathname === "/"
            ? "absolute bottom-3 right-4 flex items-center text-darkBlack gap-2 font-semibold z-10"
            : "absolute bottom-3 right-4 flex items-center text-darkBlack dark:text-darkWhite gap-2 font-semibold z-10"
        }
      >
        <Link to={"/contact-us"}>Contact us</Link>
        <Link to={"/terms-and-conditions"}>Terms and Conditons</Link>
        <h1>&copy; Searcher Inc. 2024.</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
};

export default App;
