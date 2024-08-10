import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaExpandAlt } from "react-icons/fa";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ThemeContext } from "../Context/ThemeContext";

const CustomShape = (props) => {
  const { cx, cy, fill } = props;
  return <circle cx={cx} cy={cy} r={3} fill={fill} />;
};

const ScatterPlot = ({sentimentGraphData}) => {
  const [expandSection, setExpandSection] = useState(false);
  const { theme } = useContext(ThemeContext);

  const chartColors = {
    bg: theme === "dark" ? "#31363f" : "#FAFAFA",
    text: theme === "dark" ? "#FAFAFA" : "#31363f",
    grid: theme === "dark" ? "#444" : "#ccc",
    tooltipBg: theme === "dark" ? "#FAFAFA" : "#fff",
    tooltipText: theme === "dark" ? "#FAFAFA" : "#000",
  };

  return (
    <div className="w-full relative">
      <h1 className="text-sm pl-3 py-2">Sentiment</h1>
      <div className="absolute top-2.5 right-2.5 z-10">
        <FaExpandAlt
          onClick={() => setExpandSection(true)}
          className="text-gray-500 dark:text-darkWhite cursor-pointer"
        />
      </div>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart
            margin={{ top: 20, right: 10, bottom: 20, left: -30 }}
            style={{ backgroundColor: chartColors.bg }}
          >
            <CartesianGrid stroke={chartColors.grid} />
            <XAxis
              type="number"
              dataKey="x"
              name="Time"
              unit=""
              domain={[0, 9]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              tick={{ fontSize: 10, fill: chartColors.text }} // Adjust font size and color here
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Sentiment"
              unit=""
              domain={[0, 20]}
              ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
              tick={{ fontSize: 10, fill: chartColors.text }} // Adjust font size and color here
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{
                backgroundColor: chartColors.tooltipBg,
                color: chartColors.tooltipText,
              }}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontSize: "8px",
                color: chartColors.text, // Adjust legend text color
                gap: "4px",
                paddingLeft: "40px",
              }}
            />
            {["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"].map(
              (group, index) => (
                <Scatter
                  key={group}
                  pointSize={1}
                  name={group}
                  data={sentimentGraphData.filter((d) => d.group === group)}
                  fill={
                    ["#DC3545", "#FFC107", "#28A745", "#007BFF", "#6610F2"][
                      index
                    ]
                  }
                  shape={<CustomShape />}
                />
              )
            )}
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {expandSection && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="relative bg-white w-11/12 h-5/6 rounded-md shadow-md shadow-black/30 flex flex-col justify-center items-center p-6"
            style={{ backgroundColor: chartColors.bg }}
          >
            <AiOutlineClose
              onClick={() => setExpandSection(false)}
              className="cursor-pointer absolute top-4 right-4 text-gray-500 dark:text-darkWhite z-50"
            />
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart
                margin={{ top: 20, right: 10, bottom: 20, left: -30 }}
                style={{ backgroundColor: chartColors.bg }}
              >
                <CartesianGrid stroke={chartColors.grid} />
                <XAxis
                  type="number"
                  dataKey="x"
                  name="Time"
                  unit=""
                  domain={[0, 9]}
                  ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                  tick={{ fontSize: 10, fill: chartColors.text }} // Adjust font size and color here
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="Sentiment"
                  unit=""
                  domain={[0, 20]}
                  ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                  tick={{ fontSize: 10, fill: chartColors.text }} // Adjust font size and color here
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  contentStyle={{
                    backgroundColor: chartColors.tooltipBg,
                    color: chartColors.tooltipText,
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: chartColors.text, // Adjust legend text color
                    gap: "20px",
                  }}
                />
                {["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"].map(
                  (group, index) => (
                    <Scatter
                      key={group}
                      pointSize={1}
                      name={group}
                      data={sentimentGraphData.filter((d) => d.group === group)}
                      fill={
                        ["#DC3545", "#FFC107", "#28A745", "#007BFF", "#6610F2"][
                          index
                        ]
                      }
                      shape={<CustomShape />}
                    />
                  )
                )}
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScatterPlot;
