import React from "react";
import dummyImage from "../../assets/about-carousel-img-1.jpg";
import { FaGoogle } from "react-icons/fa";
import "./ImageSection.css";

const VideoSection = ({videos}) => {
  return (
    <div className="w-full p-2 grid grid-cols-2 gap-x-2 gap-y-1 h-52 overflow-auto">
      {videos.map((singleVideo, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-1 h-28"
            style={{ fontSize: "0.55rem", lineHeight: "0.6rem" }}
          >
            <iframe
              width="100%"
              height="80px"
              src={singleVideo.video}
              title="Dummy YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
            <span className="flex items-center gap-1.5">
              <FaGoogle />
              {singleVideo.source}
            </span>
            <p>{singleVideo.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VideoSection;
