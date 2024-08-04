import React from "react";
import SectionImage from "../../assets/section_2.webp";

const SectionTwo = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex w-3/4 gap-[40px]">
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
    </div>
  );
};

export default SectionTwo;
