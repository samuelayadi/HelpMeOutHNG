import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { LuGalleryVertical } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";

const VideoRepository = () => {
  return (
    <>
      <section className="container mx-auto mt-6 ">
        {/* For Mobile */}
        <div className="flex justify-between items-center md:hidden">
          <p className="text-2xl font-semibold">Hello Jack</p>
          <button className="text-3xl">
            <IoSettingsOutline />
          </button>
        </div>

        <div className="mt-6 flex flex-col space-y-6 md:hidden">
          <p className="text-lg font-semibold">Recent Activity</p>
          <VideoCard />
        </div>

        {/* page footer section */}
        <section className="fixed bottom-0 w-full md:hidden">
          <div className="flex justify-end container pt-4">
            <button className="px-5 h-10 text-lg rounded-lg bg-primary text-white flex items-center">
              <span className="mr-4 text-2xl">
                <HiOutlineVideoCamera />
              </span>
              Start recording
            </button>
          </div>

          <footer className="border-t mt-6 border-lightGrey bg-white">
            <div className=" container py-3 flex justify-around">
              <Link
                to=""
                className="flex justify-center items-center flex-col space-y-1 text-primary"
              >
                <span className="text-2xl">
                  <LuGalleryVertical />
                </span>
                <p className="text-sm font-semibold">Repository</p>
              </Link>

              <Link
                to=""
                className="flex justify-center items-center flex-col space-y-1 text-grey"
              >
                <span className="text-2xl">
                  <BiSearch />
                </span>
                <p className="text-sm font-semibold">Search</p>
              </Link>

              <Link
                to=""
                className="flex justify-center items-center flex-col space-y-1 text-grey"
              >
                <span className="text-2xl">
                  <PiDotsThreeOutlineDuotone />
                </span>
                <p className="text-sm font-semibold">More</p>
              </Link>
            </div>
          </footer>
        </section>
      </section>
    </>
  );
};

export default VideoRepository;
