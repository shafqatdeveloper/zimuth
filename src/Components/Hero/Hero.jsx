import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import whiteLogo from "../../assets/logo_vertical_white.png";
import blackLogo from "../../assets/logo_vertical_black.png";
import { ThemeContext } from "../Context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { HiCube } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";

const trendingTopics = [
  "trending topic 1",
  "trending topic 2",
  "trending topic 3",
];

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const { theme } = useContext(ThemeContext);
  const [searchText, setSearchText] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      navigate(`/search?q=${searchText}`);
    }
  };

  return (
    <div className="w-full h-screen flex pt-24 justify-center bg-transparent text-darkBlack dark:bg-darkBlack dark:text-white">
      <div className="flex w-full flex-col items-center">
        <img
          src={theme === "dark" ? whiteLogo : blackLogo}
          alt="Zimuth"
          className="h-52 w-auto"
        />
        <div className="lg:w-3/5 flex items-center justify-center">
          <div
            onMouseEnter={() => setIsInputFocused(true)}
            onMouseLeave={() => setIsInputFocused(false)}
            className="w-4/5 flex items-center justify-center flex-col"
          >
            <div className="flex w-full items-center gap-2">
              {trendingTopics.map((topic, index) => {
                return (
                  <p
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/search?q=${topic}`);
                    }}
                    key={index}
                    className="cursor-pointer"
                  >
                    <motion.div
                      className="py-1 px-2 rounded-3xl capitalize bg-gradient-to-br from-[#99f1ee] via-[#dffffe] dark:via-[#015452] dark:text-darkWhite to-[#edecec] dark:to-[#1e1e1e] text-darkBlack"
                      initial={{ opacity: 0 }}
                      animate={
                        isInputFocused ? { x: 0, opacity: 1 } : { opacity: 0 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: (index + 1) * 0.1,
                      }}
                    >
                      {topic}
                    </motion.div>
                  </p>
                );
              })}
            </div>
            <div className="pt-2 w-full flex flex-col items-center gap-3">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full p-3 rounded-full outline-none focus:outline-none dark:bg-[#22262b] dark:placeholder-darkWhite bg-gray-200"
                placeholder="/ type something here"
              />
              <p className="text-xs text-darkBlack">
                Zimuth may make mistakes. Check important info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
