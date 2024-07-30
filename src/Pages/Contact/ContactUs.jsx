import React, { useState } from "react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");
  return (
    <div className="h-screen w-full flex items-start pt-24 justify-center bg-darkWhite dark:bg-darkBlack text-darkBlack dark:text-darkWhite">
      <div className="w-3/4">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide font-sans">
            Contact Us
          </h1>
          <div className="rounded-full w-max text-darkWhite p-3 bg-[#007BB5]">
            <FaLinkedinIn size={30} />
          </div>
        </div>
        <div className="w-full pt-10">
          <form className="w-full flex flex-col gap-7" id="contact-us">
            {/* Name */}
            <div className="w-full flex items-center gap-5">
              <label className="w-1/5 font-semibold" htmlFor="name">
                Name
              </label>
              <div className="w-4/5">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-1 outline-none focus:outline-none border-[1px] border-darkBlack bg-transparent dark:border-darkWhite rounded-md"
                  placeholder="Dony Azof"
                />
              </div>
            </div>
            {/* Email */}
            <div className="w-full flex items-center gap-5">
              <label className="w-1/5 font-semibold" htmlFor="email">
                Eamil
              </label>
              <div className="w-4/5">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-1 outline-none focus:outline-none border-[1px] border-darkBlack bg-transparent dark:border-darkWhite rounded-md"
                  placeholder="donyazof123@gmail.com"
                />
              </div>
            </div>
            {/* Topic */}
            <div className="w-full flex items-center gap-5">
              <label className="w-1/5 font-semibold" htmlFor="topic">
                Topic
              </label>
              <div className="w-4/5">
                <input
                  type="text"
                  name="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full p-1 outline-none focus:outline-none border-[1px] border-darkBlack bg-transparent dark:border-darkWhite rounded-md"
                  placeholder="Topic"
                />
              </div>
            </div>
            {/* Details */}
            <div className="w-full flex items-center gap-5">
              <label className="w-1/5 font-semibold" htmlFor="detail">
                Detail
              </label>
              <div className="w-4/5">
                <input
                  type="text"
                  name="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="w-full p-1 outline-none focus:outline-none border-[1px] border-darkBlack bg-transparent dark:border-darkWhite rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center justify-end w-full">
              <button className="bg-cyan80 text-white rounded-full py-1.5 px-4">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
