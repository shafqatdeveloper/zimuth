import React from "react";
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

const data = [
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
];

const CustomShape = (props) => {
  const { cx, cy, fill } = props;
  return <circle cx={cx} cy={cy} r={3} fill={fill} />; // r={2} sets the radius to 2 pixels
};
const ScatterPlot = () => {
  return (
    <div className="w-full">
      <h1 className="text-sm pl-3 py-2">Sentiment</h1>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart margin={{ top: 20, right: 10, bottom: 20, left: -30 }}>
            <CartesianGrid />
            <XAxis
              type="number"
              dataKey="x"
              name="Time"
              unit=""
              domain={[0, 9]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              tick={{ fontSize: 10 }} // Adjust font size here
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Sentiment"
              unit=""
              domain={[0, 20]}
              ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
              tick={{ fontSize: 10 }} // Adjust font size here
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontSize: "8px",
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
                  data={data.filter((d) => d.group === group)}
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
  );
};

export default ScatterPlot;
