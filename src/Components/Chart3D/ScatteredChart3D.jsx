import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineClose,
} from "react-icons/ai";
import { FaExpandAlt } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Plot from "react-plotly.js";
import { ThemeContext } from "../Context/ThemeContext";

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

// Dummy JSON data
const dummyData = [
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
];

// Component to render a 3D scatter plot
const ScatterPlot3D = () => {
  const [data, setData] = useState([]);
  const [expandSection, setExpandSection] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Transform the dummy JSON data into the format required by Plotly
    const plotData = dummyData.map((group) => ({
      type: "scatter3d",
      mode: "markers",
      x: group.points.map((p) => p.x),
      y: group.points.map((p) => p.y),
      z: group.points.map((p) => p.z),
      marker: { color: group.color, size: 5 },
      name: group.group,
    }));
    setData(plotData);
  }, []);

  // Layout configuration for Plotly
  const lightLayout = {
    scene: {
      xaxis: {
        title: { text: "Technicality", font: { size: 9 } },
        range: [3, 8],
      },
      yaxis: {
        title: { text: "Engagement", font: { size: 9 } },
        range: [1, 6],
      },
      zaxis: {
        title: { text: "Recentness", font: { size: 9 } },
        range: [1, 7],
      },
      camera: {
        eye: { x: 3.2, y: -2, z: 1.8 }, // Adjust these values to zoom out further
        center: { x: 0, y: 0, z: 0 },
      },
    },
    autosize: true,
    margin: { l: 0, r: 0, b: 0, t: 0 },
    legend: {
      x: 0,
      y: 1,
      orientation: "v",
      xanchor: "left",
      yanchor: "top",
      font: {
        size: 11, // Adjust the font size here
      },
    },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
  };

  // Dark mode layout
  const darkLayout = {
    ...lightLayout,
    scene: {
      ...lightLayout.scene,
      xaxis: {
        ...lightLayout.scene.xaxis,
        title: {
          ...lightLayout.scene.xaxis.title,
          font: { color: "white", size: 9 },
        },
        tickfont: { color: "white" },
        gridcolor: "gray",
        zerolinecolor: "gray",
      },
      yaxis: {
        ...lightLayout.scene.yaxis,
        title: {
          ...lightLayout.scene.yaxis.title,
          font: { color: "white", size: 9 },
        },
        tickfont: { color: "white" },
        gridcolor: "gray",
        zerolinecolor: "gray",
      },
      zaxis: {
        ...lightLayout.scene.zaxis,
        title: {
          ...lightLayout.scene.zaxis.title,
          font: { color: "white", size: 9 },
        },
        tickfont: { color: "white" },
        gridcolor: "gray",
        zerolinecolor: "gray",
      },
    },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    legend: {
      ...lightLayout.legend,
      font: { color: "white", size: 11 },
    },
  };

  const layout = theme === "dark" ? darkLayout : lightLayout;

  return (
    <div
      className="relative"
      style={{
        width: "100%",
        height: "350px",
      }}
    >
      <div className="absolute top-2.5 right-2.5 z-10">
        <FaExpandAlt
          onClick={() => setExpandSection(true)}
          className="text-gray-500 dark:text-darkWhite cursor-pointer"
        />
      </div>
      <Plot
        data={data}
        layout={layout}
        config={{ responsive: true, displayModeBar: false }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      />
      <div
        style={{ fontSize: "0.55rem", lineHeight: "0.6rem" }}
        className={`flex flex-col gap-0.5 font-medium absolute bottom-4 right-2 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <span className="flex items-center gap-1">
          <AiOutlineArrowRight />
          Technicality
        </span>
        <span className="flex items-center gap-1">
          <AiOutlineArrowUp />
          Engagement
        </span>
        <span className="flex items-center gap-1">
          <GoArrowUpRight />
          Recentness
        </span>
      </div>
      {expandSection && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`relative ${
              theme === "dark" ? "bg-darkBlack" : "bg-darkWhite"
            } w-11/12 h-5/6 rounded-md shadow-md shadow-black/30 flex flex-col justify-center items-center p-6`}
          >
            <AiOutlineClose
              onClick={() => setExpandSection(false)}
              className="cursor-pointer absolute top-4 right-4 text-darkBlack dark:text-darkWhite z-50"
            />
            <Plot
              data={data}
              layout={layout}
              config={{ responsive: true, displayModeBar: false }}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              }}
            />
            <div
              className={`flex flex-col gap-0.5 absolute bottom-4 right-2 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <span className="flex items-center gap-1">
                <AiOutlineArrowRight />
                Technicality
              </span>
              <span className="flex items-center gap-1">
                <AiOutlineArrowUp />
                Engagement
              </span>
              <span className="flex items-center gap-1">
                <GoArrowUpRight />
                Recentness
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScatterPlot3D;
