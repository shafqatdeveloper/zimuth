import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaSearch, FaMicrochip } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";

const Pricing = () => {
  return (
    <div className="w-full h-full flex justify-center text-darkBlack bg-darkWhite dark:text-white dark:bg-darkBlack">
      <div className="w-3/4 py-28">
        {/* Heading */}
        <div className="">
          <h1 className="text-xl font-bold tracking-wide font-sans pl-6">
            Pricing
          </h1>
        </div>
        {/* Pricing */}
        <div className="w-full grid border-b pb-6 border-b-black dark:border-b-white grid-cols-3 gap-1 pt-10">
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
        <div className="w-full grid grid-cols-3 gap-1 pt-10">
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
      </div>
    </div>
  );
};

export default Pricing;
