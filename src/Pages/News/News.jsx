import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import dummyImg1 from "../../assets/about-carousel-img-1.jpg";
import dummyImg2 from "../../assets/about-carousel-img-2.jpg";
import dummyImg3 from "../../assets/about-carousel-img-3.jpg";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="h-full w-full bg-darkWhite text-darkBlack dark:bg-darkBlack dark:text-darkWhite pb-32">
      <div className="w-full h-full flex pt-24 justify-center">
        <div className="w-3/4">
          {/* Heading */}
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wide font-sans">News</h1>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/company/searcher-ai/"}
              className="rounded-full w-max text-darkWhite p-3 bg-[#007BB5]"
            >
              <FaLinkedinIn size={30} />
            </Link>
          </div>
          {/* News */}
          <div className="flex flex-col pt-10 gap-7">
            {/* News 1 */}
            <div className="flex gap-8 pt-6">
              <h6 className="text-sm">07-31-2024</h6>
              <div className="flex flex-col gap-5">
                <h1 className="font-bold tracking-wide">Headline</h1>
                <img
                  src={dummyImg1}
                  alt="Dummy Image 1"
                  className="w-32 h-32"
                />
              </div>
              <p className="self-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus ut ratione maxime.
              </p>
            </div>
            {/* News 2 */}
            <div className="flex gap-8 pt-6">
              <h6 className="text-sm">07-31-2024</h6>
              <div className="flex flex-col gap-5">
                <h1 className="font-bold tracking-wide">Headline</h1>
                <img
                  src={dummyImg2}
                  alt="Dummy Image 1"
                  className="w-32 h-32"
                />
              </div>
              <p className="self-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus ut ratione maxime.
              </p>
            </div>
            {/* News 3 */}
            <div className="flex gap-8 pt-6">
              <h6 className="text-sm">07-31-2024</h6>
              <div className="flex flex-col gap-5">
                <h1 className="font-bold tracking-wide">Headline</h1>
                <img
                  src={dummyImg3}
                  alt="Dummy Image 1"
                  className="w-32 h-32"
                />
              </div>
              <p className="self-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus ut ratione maxime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
