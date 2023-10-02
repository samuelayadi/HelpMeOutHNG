import React from "react";
import Featured from "../assets/images/featured.jpg";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { ImLoop2 } from "react-icons/im";

const FeaturedSection = () => {
  return (
    <section className="">
      <div className="h-12 w-full bg-gray"></div>
      <main className="container mx-auto px-4 py-16">
        <p className="text-center font-bold text-3xl xl:text-4xl">Features</p>
        <p className="text-md xl:text-lg text-black text-center opacity-75 mt-2">
          Key Highlights of Our Extension
        </p>
        <div className="flex-col justify-between flex space-y-10 items-center mt-16 lg:flex-row lg:space-x-10 lg:space-y-0">
          <div className="flex flex-col space-y-8">
            <div className="flex space-x-4">
              <div className="px-2 h-9 rounded-full flex items-center justify-center text-white text-xl bg-primary">
                <BsFillRecordCircleFill />
              </div>
              <div className="">
                <p className="font-inter text-2xl text-primary font-semibold">
                  Simple Screen Recording
                </p>
                <p className="mt-1 text-md xl:text-lg opacity-75">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="px-2 h-9 rounded-full flex items-center justify-center text-white text-xl bg-primary">
                <PiPaperPlaneTiltFill />
              </div>
              <div className="">
                <p className="font-inter text-2xl text-primary font-semibold">
                  Easy-to-Share URL
                </p>
                <p className="mt-1 text-md xl:text-lg opacity-75">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="px-2 h-9 rounded-full flex items-center justify-center text-white text-xl bg-primary">
                <ImLoop2 />
              </div>
              <div className="">
                <p className="font-inter text-2xl text-primary font-semibold">
                  Revisit Recordings
                </p>
                <p className="mt-1 text-md xl:text-lg opacity-75">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>

          <img src={Featured} alt="" className="w-full rounded-lg shadow lg:w-1/2" />
        </div>
      </main>
    </section>
  );
};

export default FeaturedSection;
