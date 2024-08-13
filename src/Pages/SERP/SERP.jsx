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
import SearchResult from "../../Components/SearchResults/SearchResult";
import SearchResultTwo from "../../Components/SearchResults/SearchResultTwo";
import Synopsis from "../../Components/Synopsis/Synopsis";
import dummyImage from '../../assets/about-carousel-img-1.jpg'
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// Function to generate random points
const generateRandomPoints = (
  groupSize,
  minX,
  maxX,
  minY,
  maxY,
  minZ,
  maxZ
) => {
  return Array.from({ length: groupSize }, () => ({
    x: Math.random() * (maxX - minX) + minX,
    y: Math.random() * (maxY - minY) + minY,
    z: Math.random() * (maxZ - minZ) + minZ,
  }));
};

const result = {
  synopsis: {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet.",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Donec placerat nisl magna, et faucibus.",
      "Lorem ipsum dolor sit amet, Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat.",
      "Pagesconsectetur adipiscing elit. Aliquam at porttitor sem."
    ],
    finalComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem."
  },
  genericSummary: {
    wordCount: 500,
    fleschKinkaid: "90/100",
    subjectivity: "0.4/1",
    polarity: "-0.9/[-1.1]", info: [
      "Webpages summarizing the operations, mission, history and products of Generic Corporation"
    ],
    summary: [
      "Founded in 2001 by generic founder, generic corporation is a generic country industry company",
      "Generic Corporation was founded by Generic Founder with the generic mission of doing generic thing",
      "Generic text line for testing with additional length",
      "Generic testing text line"
    ]
  },
  images: [
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
    { img: dummyImage, description: "Stock image of some BS" },
  ],
  videos: [
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
    { video: "https://www.youtube.com/embed/dQw4w9WgXcQ", source: "Youtube- Dave", title: "Stock video Title" },
  ],
  searchResult: {
    wordCount: 500,
    fleschKinkaid: "90/100",
    subjectivity: "0.4/1",
    polarity: "-0.9/[-1.1]", info: [
      "Webpages summarizing the operations, mission, history and products of Generic Corporation"
    ],
    summary: [
      "Founded in 2001 by generic founder, generic corporation is a generic country industry company",
      "Generic Corporation was founded by Generic Founder with the generic mission of doing generic thing",
      "Generic text line for testing with additional length",
      "Generic testing text line"
    ],
    date: "Sptember 11,2001"
  },
  sitesMapChart: [
    {
      group: "Group 1",
      color: "red",
      points: generateRandomPoints(9, 3, 8, 1, 6, 1, 7),
    },
    {
      group: "Group 2",
      color: "orange",
      points: generateRandomPoints(9, 3, 8, 1, 6, 1, 7),
    },
    {
      group: "Group 3",
      color: "yellow",
      points: generateRandomPoints(9, 3, 8, 1, 6, 1, 7),
    },
    {
      group: "Group 4",
      color: "cyan",
      points: generateRandomPoints(9, 3, 8, 1, 6, 1, 7),
    },
    {
      group: "Group 5",
      color: "blue",
      points: generateRandomPoints(9, 3, 8, 1, 6, 1, 7),
    },
  ],
  treeData: {
    name: "Outdoor Spring Activities",
    children: [
      {
        name: "Gardening",
        children: [
          { name: "Planting flowers" },
          { name: "Starting a vegetable garden" },
          { name: "Preparing garden beds" },
        ],
      },
      {
        name: "Outdoor Sports",
        children: [
          { name: "Cycling" },
          { name: "Hiking" },
          {
            name: "Running",
            children: [
              { name: "Planting flowers" },
              { name: "Starting a vegetable garden" },
              { name: "Preparing garden beds" },
            ],
          },
        ],
      },
      {
        name: "Picnicking",
        children: [{ name: "Location ideas" }, { name: "Picnic essentials" }],
      },
      {
        name: "Birdwatching",
        children: [{ name: "Equipment" }, { name: "Popular bird species" }],
      },
    ],
  },
  timeLine: [
    {
      date: "22/05/2024",
      text: "Generic Corp is dissolved by Generic Moron for generic reasons",
    },
    {
      date: "22/05/2024",
      text: "Generic Corp is dissolved by Generic Moron for generic reasons",
    },
    {
      date: "22/05/2024",
      text: "Generic Corp is dissolved by Generic Moron for generic reasons",
    },
    {
      date: "22/05/2024",
      text: "Generic Corp is dissolved by Generic Moron for generic reasons",
    },
  ],
  sentimentGraphData: [
    { x: 1, y: 0, group: "Group 1" },
    { x: 2, y: 12, group: "Group 1" },
    { x: 3, y: 8, group: "Group 1" },
    { x: 4, y: 6, group: "Group 1" },
    { x: 5, y: 12, group: "Group 1" },
    { x: 6, y: 8, group: "Group 1" },
    { x: 7, y: 12, group: "Group 1" },
    { x: 8, y: 4, group: "Group 1" },
    { x: 1.2, y: 2.5, group: "Group 2" },
    { x: 2.3, y: 1.7, group: "Group 2" },
    { x: 3.8, y: 9.6, group: "Group 2" },
    { x: 4.1, y: 7.4, group: "Group 2" },
    { x: 5.5, y: 5.3, group: "Group 2" },
    { x: 6.7, y: 13.8, group: "Group 2" },
    { x: 7.9, y: 17.6, group: "Group 2" },
    { x: 8.4, y: 13.1, group: "Group 2" },
    { x: 1.5, y: 3.4, group: "Group 3" },
    { x: 2.6, y: 5.7, group: "Group 3" },
    { x: 3.9, y: 8.3, group: "Group 3" },
    { x: 4.4, y: 11.9, group: "Group 3" },
    { x: 5.8, y: 9.2, group: "Group 3" },
    { x: 6.1, y: 7.5, group: "Group 3" },
    { x: 7.3, y: 13.6, group: "Group 3" },
    { x: 8.7, y: 5.8, group: "Group 3" },
    { x: 1.4, y: 2.8, group: "Group 4" },
    { x: 2.9, y: 4.5, group: "Group 4" },
    { x: 3.3, y: 6.7, group: "Group 4" },
    { x: 4.8, y: 10.9, group: "Group 4" },
    { x: 5.1, y: 12.3, group: "Group 4" },
    { x: 6.4, y: 7.8, group: "Group 4" },
    { x: 7.5, y: 5.6, group: "Group 4" },
    { x: 8.2, y: 8.9, group: "Group 4" },
    { x: 1.7, y: 7.5, group: "Group 5" },
    { x: 2.8, y: 11.2, group: "Group 5" },
    { x: 3.4, y: 15.6, group: "Group 5" },
    { x: 4.6, y: 9.3, group: "Group 5" },
    { x: 5.2, y: 5.1, group: "Group 5" },
    { x: 6.3, y: 3.7, group: "Group 5" },
    { x: 7.8, y: 13.4, group: "Group 5" },
    { x: 8.9, y: 19.8, group: "Group 5" },
    { x: 1.1, y: 0.9, group: "Group 6" },
    { x: 2.2, y: 3.8, group: "Group 6" },
    { x: 3.7, y: 6.5, group: "Group 6" },
    { x: 4.3, y: 9.7, group: "Group 6" },
    { x: 5.4, y: 12.6, group: "Group 6" },
    { x: 6.6, y: 15.9, group: "Group 6" },
    { x: 7.2, y: 18.3, group: "Group 6" },
    { x: 8.5, y: 19.6, group: "Group 6" },
  ]
}


const SERP = () => {
  const [selectedPageType, setSelectedPageType] = useState("Technical");
  const [showMenu, setShowMenu] = useState(false);
  const [showImagesSection, setShowImagesSection] = useState(true);
  const [show3DChartSection, setShow3DChartSection] = useState(true);
  const [showSentimentSection, setShowSentimentSection] = useState(true);
  const [readMoreEnabled, setReadMoreEnabled] = useState(false);
  const [selectedImageSection, setSelectedImageSection] = useState("image");
  const [sentimentSectionSelected, setSentimentSectionSelected] =
    useState("typography");
  const [selected3DChartSection, setSelected3DChartSection] =
    useState("3dChart");
  const [sectionsExpaned, setsectionsExpaned] = useState(true);
  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };
  const query = useQuery();
  const searchText = query.get("q");
  const handleSectionsExpand = (newState) => {
    setsectionsExpaned(newState);
  };
  return (
    <div className="min-h-screen w-full flex justify-center text-darkBlack bg-darkWhite dark:text-darkWhite dark:bg-darkBlack pt-24">
      <div className="w-[90%] md:w-4/5 pt-5">
        {/* form */}
        <div className="w-full sm:w-3/5 md:w-2/5">
          <form className="w-full">
            <div className="w-full border flex justify-between items-center px-2 border-darkBlack bg-white dark:bg-[#22262b] dark:border-darkWhite rounded-md">
              <input
                type="text"
                className="w-full p-2 outline-none focus:outline-none bg-transparent"
                placeholder="/"
              />
              <IoMdSettings />
            </div>
          </form>
        </div>
        {/* Technical and Acedamic Section */}
        <div className="mt-4 w-full relative pb-14 border-b border-b-darkBlack dark:border-b-darkWhite">
          {/* Page Selector */}
          <div className="flex items-center gap-5 border-b border-b-cyan80 pb-[0.3px]">
            <button
              onClick={() => setSelectedPageType("Technical")}
              className={
                selectedPageType === "Technical"
                  ? "text-cyan80 border-b-2 border-b-cyan80 py-2.5 transition-all"
                  : "py-2.5 border-b border-b-transparent transition-all"
              }
            >
              Technical
            </button>
            <button
              onClick={() => setSelectedPageType("Acedamic")}
              className={
                selectedPageType === "Acedamic"
                  ? "text-cyan80 border-b-2 border-b-cyan80 py-2.5 transition-all"
                  : "py-2.5 border-b border-b-transparent transition-all"
              }
            >
              Acedamic
            </button>
          </div>
          {/* Page Content */}
          <div>
            <div
              className={`w-full flex justify-between pt-6 `}
            >
              {/* Typography */}
              <div className="w-5/6">
                <h1 className="text-3xl font-semibold tracking-wide pb-8">
                  Synopsis
                </h1>
                <Synopsis synopsis={result.synopsis} />
              </div>
              {/* Search Settings */}
              <div className="relative" onMouseLeave={handleMouseLeave}>
                <div className="pr-4">
                  <button
                    onClick={() => {
                      if (window.innerWidth < 768 && showMenu) {
                        handleMouseLeave()
                      } else if (window.innerWidth < 768) {
                        handleMouseEnter()
                      }
                    }}
                    onMouseEnter={handleMouseEnter}
                    className="text-gray-500 dark:text-gray-300"
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
              <button
                onClick={() => setReadMoreEnabled(!readMoreEnabled)}
                className="text-gray-500 dark:text-gray-300 text-sm font-medium absolute bottom-1 right-2"
              >
                {readMoreEnabled ? "Read Less" : "Read More"}
              </button>
            </div>
            {
              readMoreEnabled && <div className="w-5/6 opacity-0">
                <h1 className="text-3xl font-semibold tracking-wide pb-8">
                  Synopsis
                </h1>
                <Synopsis synopsis={result.synopsis} />
              </div>
            }
          </div>
        </div>
        {/* Summaries about Generic Corporation and Generic Corporation Sites */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-7 pt-6">
          <div className="w-full lg:w-3/4 pb-32">
            <Summary
              genericSummary={result.genericSummary}
              sectionsExpaned={sectionsExpaned}
              handleSectionsExpand={handleSectionsExpand}
            />
            {sectionsExpaned && (
              <>
                <SearchResult searchResult={result.searchResult} sectionsExpaned={sectionsExpaned} />
              </>
            )}
            <SearchResultTwo genericSummary={result.genericSummary} searchResult={result.searchResult} />
          </div>
          <div className="w-full lg:w-1/4 bg-darkWhite dark:bg-darkBlack text-darkBlack dark:text-darkWhite rounded-lg border border-gray-400 shadow-md shadow-gray-300 dark:shadow-gray-600 mb-28">
            {/* Images Section */}
            <div
              className={
                showImagesSection ? "w-full border-gray-500" : "hidden"
              }
            >
              {/* Controls */}
              <div className="flex items-center justify-between py-1  border-b border-b-gray-600">
                <div className="flex items-center gap-8 px-2">
                  <h1>Images</h1>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSelectedImageSection("image")}
                      className={
                        selectedImageSection === "image"
                          ? "bg-gray-200 dark:bg-black p-1 rounded-sm"
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
                          ? "bg-gray-200 dark:bg-black p-1 rounded-sm"
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
                  <ImageSection images={result.images} />
                ) : (
                  <VideoSection videos={result.videos} />
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
              <div className="flex items-center justify-between py-1 border-b border-b-gray-600">
                <div className="flex items-center gap-8 px-2">
                  <h1>Sites Map</h1>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSelected3DChartSection("3dChart")}
                      className={
                        selected3DChartSection === "3dChart"
                          ? "bg-gray-200 dark:bg-black p-1 rounded-sm"
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
                          ? "bg-gray-200 dark:bg-black p-1 rounded-sm"
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
                  <Scatter3DChart chartData={result.sitesMapChart} />
                ) : (
                  <TreeChart treeData={result.treeData} />
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
              <div className="flex items-center justify-between py-1 border-b border-t border-t-gray-600 border-b-gray-600">
                <div className="flex items-center gap-8 px-2">
                  <h1>Sentiment</h1>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSentimentSectionSelected("typography")}
                      className={
                        sentimentSectionSelected === "typography"
                          ? "bg-gray-200 dark:bg-black p-1 rounded-sm"
                          : "p-1"
                      }
                    >
                      <PiChartScatterLight />
                    </button>
                    <div className="bg-gray-600  w-[0.8px] h-6"></div>
                    <button
                      onClick={() => setSentimentSectionSelected("chart")}
                      className={
                        sentimentSectionSelected === "chart"
                          ? "bg-gray-200 p-1 dark:bg-black rounded-sm"
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
                  <SentimentTypo timeLine={result.timeLine} />
                ) : (
                  <ScatteredChart sentimentGraphData={result.sentimentGraphData} />
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
