import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [detail, setDetail] = useState("");
  return (
    <div className="min-h-screen w-full flex items-start py-24 justify-center bg-darkWhite dark:bg-darkBlack text-darkBlack dark:text-darkWhite">
      <div className="w-4/5">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide font-sans">
            Contact Us
          </h1>
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
              <button className="bg-cyan100 hover:bg-[#2db3ae] transition-all text-white rounded-full py-1.5 px-4">
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
