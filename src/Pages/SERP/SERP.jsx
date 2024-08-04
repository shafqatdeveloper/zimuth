import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Scatter3DChart from "../../Components/Chart3D/ScatteredChart3D";
import { IoMdSettings } from "react-icons/io";
import Summary from "../../Components/SummariesSREP/Summary";
import { FaRegFileImage, FaUncharted } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import ImageSection from "../../Components/ImageSection/ImageSection";
import VideoSection from "../../Components/ImageSection/VideoSection";
import {
  PiChartLineBold,
  PiChartScatterLight,
  PiTreeStructureFill,
} from "react-icons/pi";
import TreeChart from "../../Components/TeeChart/TreeChart";
import ScatteredChart from "../../Components/Chart2D/ScatteredChart";
import SentimentTypo from "../../Components/SentimentTypgraphy/SentimentTypo";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SERP = () => {
  const [selectedPageType, setSelectedPageType] = useState("Technical");
  const [showMenu, setShowMenu] = useState(false);
  const [showImagesSection, setShowImagesSection] = useState(true);
  const [show3DChartSection, setShow3DChartSection] = useState(true);
  const [showSentimentSection, setShowSentimentSection] = useState(true);
  const [selectedImageSection, setSelectedImageSection] = useState("image");
  const [sentimentSectionSelected, setSentimentSectionSelected] =
    useState("typography");
  const [selected3DChartSection, setSelected3DChartSection] =
    useState("3dChart");
  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };
  const query = useQuery();
  const searchText = query.get("q");
  return (
    <div className="h-full w-full flex justify-center text-darkBlack bg-darkWhite dark:text-darkWhite dark:bg-darkBlack pt-16">
      <div className="w-4/5 pt-5">
        {/* form */}
        <div className="w-2/4">
          <form className="w-full">
            <div className="w-full border flex justify-between items-center px-2 border-darkBlack dark:border-darkWhite rounded-md">
              <input
                type="text"
                className="w-full p-1 outline-none focus:outline-none bg-transparent"
                placeholder="/"
              />
              <IoMdSettings />
            </div>
          </form>
        </div>
        {/* Technical and Acedamic Section */}
        <div className="mt-4 w-full relative pb-14 border-b border-b-darkBlack">
          {/* Page Selector */}
          <div className="flex items-center gap-5 border-b border-b-cyan80 pb-[0.3px]">
            <button
              onClick={() => setSelectedPageType("Technical")}
              className={
                selectedPageType === "Technical" &&
                "text-cyan80 border-b-2 border-b-cyan80 py-2"
              }
            >
              Technical
            </button>
            <button
              onClick={() => setSelectedPageType("Acedamic")}
              className={
                selectedPageType === "Acedamic" &&
                "text-cyan80 border-b-2 border-b-cyan80 py-2"
              }
            >
              Acedamic
            </button>
          </div>
          {/* Page Content */}
          <div className="w-full flex justify-between pt-6">
            {/* Typography */}
            <div className="w-5/6">
              <h1 className="text-3xl font-semibold tracking-wide pb-8">
                Synopsis
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
                magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                amet.
              </p>
              <ol className="text-sm list-disc pl-5 py-5">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem. Donec placerat nisl magna, et
                  faucibus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, Aliquam at porttitor sem. Aliquam
                  erat volutpat. Donec placerat nisl magna, et faucibus arcu.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at porttitor sem. Aliquam erat volutpat. Donec
                  placerat.
                </li>
                <li>
                  Pagesconsectetur adipiscing elit. Aliquam at porttitor sem.
                </li>
              </ol>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem.
              </p>
            </div>
            {/* Search Settings */}
            <div className="relative" onMouseLeave={handleMouseLeave}>
              <div className="pr-4">
                <button
                  onMouseEnter={handleMouseEnter}
                  className="text-gray-500"
                >
                  <IoMdSettings size={23} />
                </button>
              </div>
              <div
                className={
                  showMenu
                    ? "absolute right-3 top-7 rounded-xl text-xs mt-2 w-max  bg-white border border-gray-500 shadow-2xl font-medium text-gray-500 z-10 opacity-100 transition-all duration-300"
                    : "absolute right-3 top-7 rounded-xl text-xs mt-2 w-max  bg-white border border-gray-500 shadow-2xl font-medium text-gray-500 z-10 opacity-0 transition-all duration-300"
                }
              >
                <ul className="p-2 flex flex-col gap-1">
                  <li className="flex items-center">
                    <input type="checkbox" id="option1" className="mr-2" />
                    <label htmlFor="Disable grouped display">
                      Disable grouped display
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" id="option1" className="mr-2" />
                    <label htmlFor="Disable technicality priortization">
                      Disable technicality priortization
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" id="option1" className="mr-2" />
                    <label htmlFor="toggle site summaries">
                      Toggle site summaries
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" id="option1" className="mr-2" />
                    <label htmlFor="Show synopsis as paragraph">
                      Show synopsis as paragraph
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" id="option1" className="mr-2" />
                    <label htmlFor="show site summaries as paragraph">
                      show site summaries as paragraph
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            {/* Read More */}
            <button className="text-gray-500 text-sm font-medium absolute bottom-1 right-2">
              Read More
            </button>
          </div>
        </div>
        {/* Summaries about Generic Corporation and Generic Corporation Sites */}
        <div className="w-full flex items-start gap-1 pt-8">
          <div className="w-3/4">
            <Summary />
          </div>
          <div className="w-1/4 bg-white rounded-lg border mb-10">
            {/* Images Section */}
            <div
              className={
                showImagesSection ? "w-full border-gray-500" : "hidden"
              }
            >
              {/* Controls */}
              <div className="flex items-center justify-between py-1 text-gray-600 border-b border-b-gray-600">
                <div className="flex items-center gap-8 px-2">
                  <h1>Images</h1>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSelectedImageSection("image")}
                      className={
                        selectedImageSection === "image"
                          ? "bg-gray-200 p-1 rounded-sm"
                          : "p-1"
                      }
                    >
                      <FaRegFileImage />
                    </button>
                    <div className="bg-gray-600 w-[0.8px] h-6"></div>
                    <button
                      onClick={() => setSelectedImageSection("video")}
                      className={
                        selectedImageSection === "video"
                          ? "bg-gray-200 p-1 rounded-sm"
                          : "p-1"
                      }
                    >
                      <FaVideo />
                    </button>
                  </div>
                </div>
                <button
                  className="pr-2"
                  onClick={() => setShowImagesSection(false)}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="border-b border-b-gray-600">
                {selectedImageSection === "image" ? (
                  <ImageSection />
                ) : (
                  <VideoSection />
                )}
              </div>
            </div>
            {/* 3D Chart Section */}
            <div
              className={
                show3DChartSection ? "w-full border-gray-500" : "hidden"
              }
            >
              {/* Controls */}
              <div className="flex items-center justify-between py-1 text-gray-600 border-b border-b-gray-600">
                <div className="flex items-center gap-8 px-2">
                  <h1>Sites Map</h1>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSelected3DChartSection("3dChart")}
                      className={
                        selected3DChartSection === "3dChart"
                          ? "bg-gray-200 p-1 rounded-sm"
                          : "p-1"
                      }
                    >
                      <FaUncharted />
                    </button>
                    <div className="bg-gray-600 w-[0.8px] h-6"></div>
                    <button
                      onClick={() => setSelected3DChartSection("tree")}
                      className={
                        selected3DChartSection === "tree"
                          ? "bg-gray-200 p-1 rounded-sm"
                          : "p-1"
                      }
                    >
                      <PiTreeStructureFill />
                    </button>
                  </div>
                </div>
                <button
                  className="pr-2"
                  onClick={() => setShow3DChartSection(false)}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="h-[350px]">
                {selected3DChartSection === "3dChart" ? (
                  <Scatter3DChart />
                ) : (
                  <TreeChart />
                )}
              </div>
            </div>
            {/* Sentiment Section */}
            <div
              className={
                showSentimentSection ? "w-full border-gray-500" : "hidden"
              }
            >
              {/* Controls */}
              <div className="flex items-center justify-between py-1 text-gray-600 border-b border-b-gray-600">
                <div className="flex items-center gap-8 px-2">
                  <h1>Sentiment</h1>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSentimentSectionSelected("typography")}
                      className={
                        sentimentSectionSelected === "typography"
                          ? "bg-gray-200 p-1 rounded-sm"
                          : "p-1"
                      }
                    >
                      <PiChartScatterLight />
                    </button>
                    <div className="bg-gray-600 w-[0.8px] h-6"></div>
                    <button
                      onClick={() => setSentimentSectionSelected("chart")}
                      className={
                        sentimentSectionSelected === "chart"
                          ? "bg-gray-200 p-1 rounded-sm"
                          : "p-1"
                      }
                    >
                      <PiChartLineBold />
                    </button>
                  </div>
                </div>
                <button
                  className="pr-2"
                  onClick={() => setShowSentimentSection(false)}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="h-[350px] w-full">
                {sentimentSectionSelected === "typography" ? (
                  <SentimentTypo />
                ) : (
                  <ScatteredChart />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SERP;
