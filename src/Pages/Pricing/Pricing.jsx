import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaSearch, FaMicrochip } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Pricing = () => {
  return (
    <div className="w-full min-h-screen flex justify-center text-darkBlack bg-darkWhite dark:text-white dark:bg-darkBlack">
      <div className="w-[90%] md:w-4/5 pt-20 md:pt-28 pb-10 md:pb-28">
        {/* Heading */}
        <div className="">
          <h1 className="text-xl font-bold tracking-wide font-sans">Pricing</h1>
        </div>
        {/* Pricing */}
        <div className="w-full hidden md:!grid border-b pb-6 border-b-black dark:border-b-white grid-cols-3 gap-1 pt-10">
          {/* Zimuth Pricing */}
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-bold">Zimuth</h1>
            <button className="bg-cyan100 hover:bg-[#2db3ae] px-4 py-1 transition-all rounded-full text-white">
              Try Now
            </button>
          </div>
          {/* Zimuth Pro Pricing */}
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-bold">Zimuth Pro</h1>
            <div className="flex flex-col gap-2.5">
              <button className="bg-cyan100 hover:bg-[#2db3ae] px-4 py-1 transition-all rounded-full text-white">
                20 USD/month
              </button>
              <button className="bg-cyan100 hover:bg-[#2db3ae] px-4 py-1 transition-all rounded-full text-white">
                210 USD/year
              </button>
            </div>
          </div>
          {/* Zimuth Enterprise Pricing */}
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-bold">Zimuth Enterprise</h1>
            <button className="bg-cyan100 hover:bg-[#2db3ae] px-4 py-1 transition-all rounded-full text-white">
              Contact Us
            </button>
          </div>
        </div>
        {/* Pricing Details */}
        <div className="w-full hidden md:!grid grid-cols-3 gap-1 pt-10">
          {/* Zimuth */}
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col gap-3 items-center">
              <IoDocumentTextOutline size={27} />
              <h1 className="text-sm flex flex-col text-center">
                10 results/search,
                <span>2 searches/day with ads</span>
              </h1>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <FaSearch size={27} />
              <h1 className="text-sm">Bing, CORE</h1>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <FaMicrochip size={27} />
              <h1 className="text-sm">Llama_cpp/Llama 3​</h1>
            </div>
          </div>
          {/* Zimuth Pro*/}
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col gap-3 items-center">
              <IoDocumentTextOutline size={27} />
              <h1 className="text-sm flex flex-col text-center">
                30 results/search,
                <span>unlimited searches/day without ads</span>
              </h1>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <FaSearch size={27} />
              <h1 className="text-sm">Bing, CORE, Google, Baidu, BASE</h1>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <FaMicrochip size={27} />
              <h1 className="text-sm">Llama_cpp/Llama 3</h1>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <GrDocument size={27} />
              <h1 className="text-sm">Search result export</h1>
            </div>
          </div>
          {/* Zimuth Enterprise*/}
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col gap-3 items-center">
              <IoDocumentTextOutline className="opacity-0" size={27} />
              <h1 className="text-sm flex flex-col text-center">
                30 results/search,
                <span>unlimited searches/day without ads</span>
              </h1>
            </div>
          </div>
        </div>

        <Swiper
          centeredSlides={true}
          speed={1000}
          loop={true}
          spaceBetween={7}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          modules={[Pagination, Autoplay, Navigation]}
          navigation={true}
          pagination={true}
          className="w-full flex h-[70vh] md:hidden mt-5"
        >
          {/* Slide 1 */}
          <SwiperSlide className="w-full rounded-3xl text-center text-darkWhite bg-[#22262b] py-10 px-2">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-2 border-b border-b-black pb-3 dark:border-b-black">
                <h1 className="font-bold">Zimuth</h1>
                <button className="bg-cyan100 hover:bg-[#2db3ae] px-4 py-1 transition-all rounded-full text-white">
                  Try Now
                </button>
              </div>
              <div className="grid grid-cols-2 gap-5 gap-y-14">
                <div className="flex flex-col gap-3 items-center">
                  <IoDocumentTextOutline size={27} />
                  <h1 className="text-sm flex flex-col text-center">
                    10 results/search,
                    <span>2 searches/day with ads</span>
                  </h1>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <FaSearch size={27} />
                  <h1 className="text-sm">Bing, CORE</h1>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <FaMicrochip size={27} />
                  <h1 className="text-sm">Llama_cpp/Llama 3​</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="w-full rounded-3xl text-center text-darkWhite bg-[#22262b] py-10 px-2">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-6">
                <h1 className="font-bold">Zimuth Pro</h1>
                <div className="flex flex-col gap-2.5">
                  <button className="bg-cyan100 hover:bg-[#2db3ae] px-4 py-1 transition-all rounded-full text-white">
                    20 USD/month
                  </button>
                  <button className="bg-cyan100 hover:bg-[#2db3ae] px-4 py-1 transition-all rounded-full text-white">
                    210 USD/year
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 gap-y-14">
                <div className="flex flex-col gap-3 items-center">
                  <IoDocumentTextOutline size={27} />
                  <h1 className="text-sm flex flex-col text-center">
                    30 results/search,
                    <span>unlimited searches/day without ads</span>
                  </h1>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <FaSearch size={27} />
                  <h1 className="text-sm">Bing, CORE, Google, Baidu, BASE</h1>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <FaMicrochip size={27} />
                  <h1 className="text-sm">Llama_cpp/Llama 3</h1>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <GrDocument size={27} />
                  <h1 className="text-sm">Search result export</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide className="w-full rounded-3xl text-center text-darkWhite bg-[#22262b] py-10 px-2">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-6">
                <h1 className="font-bold">Zimuth Enterprise</h1>
                <button className="bg-cyan100 hover:bg-[#2db3ae] px-4 py-1 transition-all rounded-full text-white">
                  Contact Us
                </button>
              </div>
              <div className="w-full text-center">
                <div className="flex flex-col items-center gap-12">
                  <div className="flex flex-col gap-3 items-center">
                    <IoDocumentTextOutline className="opacity-0" size={27} />
                    <h1 className="text-sm flex flex-col text-center">
                      30 results/search,
                      <span>unlimited searches/day without ads</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Pricing;
