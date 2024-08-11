import React from "react";
import SectionImage from "../../assets/section_2.webp";

const SectionTwo = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="hidden md:!flex w-3/4 gap-[40px]">
        <div className="w-2/4 flex justify-start items-start">
          <img src={SectionImage} alt="Section" className="w-[92%] h-auto" />
        </div>
        <div className="w-2/4 flex flex-col justify-center pl-16">
          <h1 className="text-3xl font-semibold">Results,</h1>
          <h1 className="text-3xl font-semibold mb-7">sorted and summarized</h1>
          <h3 className="italic font-semibold mb-7">
            What if AI did research the proper way?
          </h3>
          <p className="text-sm w-11/12 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            reiciendis ad, inventore excepturi sapiente sunt iste porro tenetur
            magnam eum veniam voluptatem quas corporis amet quos obcaecati
            cupiditate voluptates debitis consequuntur nisi earum asperiores?
            Animi.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[40px] md:hidden">
        <div className="flex px-5 flex-col justify-center">
          <h1 className="text-3xl font-semibold">Results, sorted and summarized</h1>
          <h3 className="italic font-semibold mb-7 mt-3">
            What if AI did research the proper way?
          </h3>
          <p className="text-sm w-full text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            reiciendis ad, inventore excepturi sapiente sunt iste porro tenetur
            magnam eum veniam voluptatem quas corporis amet quos obcaecati
            cupiditate voluptates debitis consequuntur nisi earum asperiores?
            Animi.
          </p>
        </div>
        <div className="md:w-2/4 w-full flex justify-center md:justify-start ">
          <img src={SectionImage} alt="Section" className="w-3/4 sm:w-2/4 md:w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
