import React, { useState, useEffect } from "react";
import { IoLinkOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import Vid from "../../assets/images/banner3.jpg";
import axios from "axios";

const VideoCard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://screen-record-api.onrender.com/api"
        );
        console.log(response.data);
      } catch (err) {
        console.error("There was a problem fetching the data:", err);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pb-44 lg:grid-cols-2 2xl:grid-cols-3 gap-8 md:pb-0">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <Link
            to=""
            key={index}
            className="border-[1.5px] pb-5 border-grey bg-[#FBFBFB] rounded-xl mt-4 mx-auto w-full md:border-[#ececec] md:shadow-lg"
          >
            <div className="border-[1.5px] border-grey mx-auto mt-3 w-11/12 h-56 rounded-xl md:border-0">
              <img
                src={Vid}
                alt=""
                className="rounded-xl w-full h-full object-cover"
              />
              <div className="px-3 py-1 absolute bg-[#B6B3C6] font-semibold rounded-lg ml-2 -mt-10 opacity-75">
                00:34
              </div>
              3
            </div>

            <div className="mx-auto w-11/12">
              <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-1">
                  <p className="mt-2 font-semibold line-clamp-2">
                    How to post new adverts on WhatsApp
                  </p>
                  <p className="text-sm text-[#928FAB]">2 days ago</p>
                </div>

                <div className="space-x-3 text-2xl flex">
                  <IoLinkOutline />
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default VideoCard;
