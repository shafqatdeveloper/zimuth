import React from "react";
import SectionImage from "../../assets/section_2.webp";

const SectionTwo = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-cyan20 text-darkBlack">
      <div className="flex w-4/5">
        <div className="w-2/5 flex justify-center">
          <img src={SectionImage} alt="Section" className="w-full h-auto" />
        </div>
        <div className="w-3/5 pl-20 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Results,</h1>
          <h1 className="text-3xl font-semibold mb-7">sorted and summarized</h1>
          <h3 className="italic font-semibold mb-7">
            What if AI did research the proper way?
          </h3>
          <p className="text-sm w-4/5 flex flex-col">
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
