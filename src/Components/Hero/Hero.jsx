import React, { useContext, useState } from "react";
import whiteLogo from "../../assets/logo_vertical_white.png";
import blackLogo from "../../assets/logo_vertical_black.png";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import { HiCube } from "react-icons/hi2";

const trendingTopics = [
  "trending topic 1",
  "trending topic 2",
  "trending topic 3",
];

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-full h-screen flex pt-24 justify-center">
      <div className="flex w-full flex-col items-center">
        <img
          src={theme === "dark" ? whiteLogo : blackLogo}
          alt="Zimuth"
          className="h-32 w-auto"
        />
        <div className="w-3/4 lg:w-2/4">
          <div className="flex items-center gap-2">
            {trendingTopics.map((topic, index) => {
              return (
                <Link
                  key={index}
                  className="py-1 px-2 rounded-3xl capitalize bg-gradient-to-br from-[#99f1ee] via-[#dffffe] dark:via-[#015452] dark:text-darkWhite to-[#ffffff] dark:to-[#1e1e1e] text-darkBlack"
                >
                  {topic}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 flex flex-col items-center gap-2">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-3 rounded-full outline-none focus:outline-none dark:bg-[#202020] dark:placeholder-darkWhite bg-white"
              placeholder="/ type something here"
            />
            <p className="text-xs">
              Zimuth may make mistakes. Check important info.
            </p>
          </div>
          {/* Boxes */}
          <div className="w-full grid mt-4 grid-cols-2 gap-3">
            {/* Box 1 */}
            <div className="bg-white dark:bg-black rounded-xl px-3 py-5  flex flex-col gap-2">
              <div className="bg-darkBlue w-max p-1 rounded-md text-darkCyan">
                <HiCube size={25} />
              </div>
              <h1 className="font-bold">
                Global Financial Market reacts to US Debt Ceiling Agreement
              </h1>
              <p className="text-xs">
                Global financial markets surged following the announcement of a
                last-minute deal to raise the US debt ceiling, averting a....
              </p>
            </div>
            {/* Box 2 */}
            <div className="bg-white dark:bg-black rounded-xl px-3 py-5  flex flex-col gap-2">
              <div className="bg-black dark:bg-darkBlack w-max p-1 rounded-md text-darkCyan">
                <HiCube size={25} />
              </div>
              <h1 className="font-bold">
                Global Financial Market reacts to US Debt Ceiling Agreement
              </h1>
              <p className="text-xs">
                Global financial markets surged following the announcement of a
                last-minute deal to raise the US debt ceiling, averting a....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
