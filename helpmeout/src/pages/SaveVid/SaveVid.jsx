import React from "react";
import NavBar from "../../components/SharedLayout/NavBar";
import Footer from "../../components/SharedLayout/Footer";
import { Link } from "react-router-dom";
import { BsFacebook, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import { GoCopy } from "react-icons/go";
import Transcript from "../../components/Transcript";
import Vid from "../../assets/images/banner3.jpg";
import { FiPlayCircle } from "react-icons/fi";
import {BiVolumeLow} from "react-icons/bi"
import {IoSettingsOutline} from "react-icons/io5"

const SaveVid = () => {
  return (
    <>
      <section className="">
        <div className="">
          <NavBar />
        </div>
        <main className="mt-14 pb-10 container mx-auto px-2 lg:px-4">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex flex-col space-y-10 w-full lg:w-1/2">
              <p className="text-3xl font-bold">Your Video is Ready!</p>

              <div className="flex flex-col space-y-2">
                <p className="text-[#727272]">Name</p>
                <div className="flex space-x-3 text-primary items-center mt-1">
                  <p className="text-xl text-primary font-semibold">
                    Untitled_Video_20232509
                  </p>
                  <button className="text-2xl">
                    <PiNotePencil />
                  </button>
                </div>
              </div>

              <fieldset className="w-full flex items-center">
                <input
                  type="text"
                  className="px-4 py-3 bg-[#f1f0f5] w-full rounded-md pr-24 focus:outline-none focus:ring-2 focus:ring-grey"
                  placeholder="Enter email of receiver"
                />
                <button className="bg-[#605C84] px-4 py-1.5 -ml-20 rounded-md text-white">
                  Send
                </button>
              </fieldset>

              <div className="space-y-2">
                <p className="text-lg font-semibold">Video Url</p>
                <div className="px-2 py-2 bg-[#f1f0f5] rounded-md flex items-center bg-[#fafafa] border border-[#929292] justify-between w-full">
                  <div className="w-7/12 overflow-hidden xl:w-8/12">
                    <p className="opacity-75 line-clamp-1">
                      https://samuelayadi.netlify.app/
                    </p>
                  </div>
                  <button className="px-6 py-1 border border-[#605C84] rounded text-[#605C84] flex items-center text-sm z-50 bg-white">
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

            <div className="space-y-10 w-full flex flex-col  lg:border-l border-[#cfcfcf] lg:w-1/2">
              <div className="mx-auto  lg:w-10/12">
                <div className="w-full h-72 border-grey rounded-xl border mx-auto">
                  <img
                    src={Vid}
                    alt=""
                    className="object-cover w-full h-60 rounded-t-xl"
                  />
                  <div className="flex px-6 justify-between mt-2 items-center">
                    <p className="text mt-3 text-[#939393]">0:30 / 3:00</p>
                    <div className="flex space-x-6">
                      <button className="flex flex-col w-10 items-center justify-center">
                        <span className="text-lg">
                          <FiPlayCircle />
                        </span>
                        <p className="text-xs">Play</p>
                      </button>

                      <button className="flex flex-col w-10 items-center justify-center">
                        <span className="text-lg">
                          <BiVolumeLow />
                        </span>
                        <p className="text-xs">Volume</p>
                      </button>

                      <button className="flex flex-col w-10 items-center justify-center">
                        <span className="text-lg">
                          <IoSettingsOutline />
                        </span>
                        <p className="text-xs">Settings</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-16">
                  <Transcript />
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="flex-col space-y-7 justify-center py-10 bg-[#fafafa]">
          <div className="w-full justify-center mx-auto sm:w-10/12 md:w-8/12 lg:w-5/12">
            <p className="text-lg font-semibold text-center w-full">
              To ensure the availability and privacy of your video, we recommend
              saving it to your account
            </p>
          </div>

          <div className="flex justify-center">
            <button className="px-7 py-2 rounded-lg text-sm bg-primary text-white">
              Save Video
            </button>
          </div>

          <div className="justify-center flex">
            <p className="text-[#7E7E7E] font-semibold text-lg">
              Don't have an account?{" "}
              <Link className="text-primary" to="/login">
                Create account
              </Link>
            </p>
          </div>
        </section>
        <div className="mt-16">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default SaveVid;
