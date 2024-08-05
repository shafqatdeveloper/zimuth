import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import dummyImg1 from "../../assets/about-carousel-img-1.jpg";
import dummyImg2 from "../../assets/about-carousel-img-2.jpg";
import dummyImg3 from "../../assets/about-carousel-img-3.jpg";

const News = () => {
  const [newsItems, setNewsItems] = useState([
    {
      date: "07-31-2024",
      headline: "Headline",
      img: dummyImg1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ut ratione maxime.",
    },
    {
      date: "07-31-2024",
      headline: "Headline",
      img: dummyImg2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ut ratione maxime.",
    },
    {
      date: "07-31-2024",
      headline: "Headline",
      img: dummyImg3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ut ratione maxime.",
    },
  ]);
  const [hasMore, setHasMore] = useState(true);
  const newsContainerRef = useRef(null);

  const fetchMoreNews = () => {
    // Simulate an API call to fetch more news items
    setTimeout(() => {
      const newItems = [
        {
          date: "07-31-2024",
          headline: "Headline",
          img: dummyImg1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ut ratione maxime.",
        },
        {
          date: "07-31-2024",
          headline: "Headline",
          img: dummyImg2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ut ratione maxime.",
        },
        {
          date: "07-31-2024",
          headline: "Headline",
          img: dummyImg3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ut ratione maxime.",
        },
      ];

      setNewsItems((prevNewsItems) => [...newItems, ...prevNewsItems]);
      if (newsItems.length >= 20) {
        setHasMore(false);
      }

      if (newsContainerRef.current) {
        newsContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1500);
  };

  useEffect(() => {
    // Initial load
    fetchMoreNews();
  }, []);

  return (
    <div className="h-full w-full bg-darkWhite text-darkBlack dark:bg-darkBlack dark:text-darkWhite pb-32">
      <div className="w-full h-full flex pt-24 justify-center">
        <div className="w-4/5">
          {/* Heading */}
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wide font-sans">News</h1>
            <div className="flex items-center gap-3">
              <Link
                target="_blank"
                to={"https://www.facebook.com"}
                className="rounded-full w-max text-darkWhite "
              >
                <FaFacebookF
                  size={34}
                  className="bg-[#007BB5] rounded-full p-1"
                />
              </Link>
              <Link
                target="_blank"
                to={"https://www.instagram.com"}
                className="rounded-full w-max text-darkWhite "
              >
                <FaInstagram
                  size={34}
                  className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-full p-1"
                />
              </Link>
              <Link
                target="_blank"
                to={"https://www.twitter.com"}
                className="rounded-full w-max text-darkWhite "
              >
                <FaXTwitter size={34} className="bg-black rounded-full p-1" />
              </Link>
            </div>
          </div>
          {/* News */}
          <div ref={newsContainerRef}>
            <InfiniteScroll
              dataLength={newsItems.length}
              next={fetchMoreNews}
              hasMore={hasMore}
              loader={<h4 className="text-center text-xl py-4">Loading...</h4>}
              endMessage={
                <p className="text-center text-xl py-4">No more news</p>
              }
            >
              <div className="flex flex-col pt-10 gap-7">
                {newsItems.map((item, index) => (
                  <div>
                    <h1 className="font-bold pl-44 tracking-wide">
                      {item.headline}
                    </h1>
                    <div className="flex gap-8 xl:gap-12 pt-6" key={index}>
                      <h6 className="text-xs min-w-24">{item.date}</h6>
                      <div className="flex flex-col gap-5">
                        <img
                          src={item.img}
                          alt="News Image"
                          className="w-32 h-32"
                        />
                      </div>
                      <p className="self-start">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
