import React from "react";
import NavBar from "../SharedLayout/NavBar";
import { BsSearch } from "react-icons/bs";
import VideoCard from "./VideoCard";

const VideoRepository = () => {
  return (
    <>
      <section className="hidden md:block">
        <div className="mt-16">
          <NavBar />
        </div>
        <div className="container mx-auto px-4 mt-10 flex justify-between items-center">
          <div className="flex flex-col space-y-1">
            <p className="text-3xl font-semibold lg:text-4xl">
              Hello, John Mark
            </p>
            <p className="text-black opacity-50 lg:text-lg">
              Here are your recorded videos
            </p>
          </div>

          <div className="w-6/12 flex flex-row items-center lg:w-5/12 xl:w-4/12">
            <button className="text-2xl absolute ml-4">
              <BsSearch className="opacity-25" />
            </button>
            <input
              type="text"
              className="px-14 py-4 bg-[#f5f3f9] w-full rounded-md focus:outline-none focus:ring-2 focus:ring-grey"
              placeholder="Search for a particular video"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 mt-10 border-t-2 py-4 border-[#ececec] py-10">
            <p className="my-5 text-lg opacity-75">Recent Files</p>
          <VideoCard />
        </div>
      </section>
    </>
  );
};

export default VideoRepository;
