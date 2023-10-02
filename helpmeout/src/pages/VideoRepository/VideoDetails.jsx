import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../components/SharedLayout/Logo";
import { Link } from "react-router-dom";
import Default from "../../assets/images/profiledef.jpg";
import { BsChevronDown, BsTelegram, BsWhatsapp } from "react-icons/bs";
import BreadCrumb from "../../components/BreadCrumb";
import { GoCopy } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import clipboardCopy from "clipboard-copy";

import Vid from "../../assets/images/banner3.jpg";

const VideoDetails = () => {
  const { id } = useParams();
  const [video, setVideo]= useState({})

  useEffect(()=>{
    fetch("https://screen-record-api.onrender.com/api")
    .then((res)=>res.json())
    .then((data)=> setVideo(data.data[id-1]))
  })

  const copyVideoLink = () => {
    clipboardCopy(video.path);
  };

  console.log(video)
  return (
    <>
      <section className="container px-2 mx-auto lg:px-4">
        <div className="">
          <nav className={` py-3 "border-b shadow-sm" border-lightGrey mt-10`}>
            <div className=" justify-between items-center flex">
              <Logo />
              <>
                <div className="space-x-3 items-center flex">
                  <video
                    src={Default}
                    alt=""
                    className="w-8 h-8 hidden md:block"
                  />
                  <p className="">John Mark</p>
                  <BsChevronDown className="text-2xl hidden md:block" />
                </div>
              </>
            </div>
          </nav>

          <div className="mt-5">
            <BreadCrumb />
          </div>

          <div className="border-[1.5px] p-3 border-grey bg-[#FBFBFB] rounded-xl mt-4 mx-auto w-full md:border-[#ececec] md:shadow-md mt-10">
            <div className="border-[1.5px] border-grey mx-auto w-full h-96 xl:h-[500px] rounded-xl md:border-0">
              <iframe
                src={video.path}
                alt=""
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex justify-between mt-10 flex-col space-y-6 md:space-x-6 md:flex-row md:space-y-0">
            <fieldset className="w-full flex items-center lg:w-5/12">
              <input
                type="text"
                className="px-4 py-4 bg-[#f1f0f5] w-full rounded-md pr-24 focus:outline-none focus:ring-2 focus:ring-grey"
                placeholder="Enter email of receiver"
              />
              <button className="bg-[#bfbece] px-4 py-2 -ml-20 rounded-lg text-white">
                Send
              </button>
            </fieldset>

            <div className="px-2 py-2 bg-[#f1f0f5] rounded-md flex items-center bg-[#fafafa] border border-[#929292] justify-between md:w-6/12 ">
              <div className="w-7/12 overflow-hidden xl:w-8/12">
                <p className="opacity-75 line-clamp-1">
                  {video.path}
                </p>
              </div>
              <button className="px-6 py-1 border border-primary rounded flex items-center text-sm z-50 bg-white" onClick={copyVideoLink}>
                <GoCopy />
                <p className="ml-3">Copy </p>
              </button>
            </div>
          </div>

          <div className="my-10">
            <p className="font-semibold text-lg">Share your Video</p>
            <div className="mt-5 flex gap-5 flex-wrap">
              <button className="px-4 py-1 rounded border border-[#adabb4] flex items-center">
                <BsFacebook className="text-[#1979f9]" />
                <p className="ml-3">Facebook </p>
              </button>

              <button className="px-4 py-1 rounded border border-[#adabb4] flex items-center">
                <BsWhatsapp className="text-[#61dd8f]" />
                <p className="ml-3">Whatsapp </p>
              </button>

              <button className="px-4 py-1 rounded border border-[#adabb4] flex items-center">
                <BsTelegram className="text-[#2ca6e4]" />
                <p className="ml-3">Telegram </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoDetails;
