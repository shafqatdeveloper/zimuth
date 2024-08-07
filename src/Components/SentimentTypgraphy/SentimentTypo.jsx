import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";

const data = [
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
];

const SentimentTypo = () => {
  return (
    <Box className="w-full h-full overflow-y-auto overflow-x-hidden text-darkBlack">
      <Timeline position="alternate">
        {data.map((item, index) => (
          <TimelineItem key={index}>
            {index % 2 === 0 ? (
              <TimelineOppositeContent>
                <span
                  className="text-xs "
                  style={{ textDecoration: "underline" }}
                >
                  {item.date}
                </span>
                <p className="text-sm text-pretty">{item.text}</p>
              </TimelineOppositeContent>
            ) : (
              <TimelineContent>
                <span
                  className="text-xs"
                  style={{ textDecoration: "underline" }}
                >
                  {item.date}
                </span>
                <p className="text-sm text-pretty">{item.text}</p>
              </TimelineContent>
            )}
            <TimelineSeparator>
              <TimelineDot />
              {index < data.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            {index % 2 === 0 ? (
              <TimelineContent />
            ) : (
              <TimelineOppositeContent />
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default SentimentTypo;
