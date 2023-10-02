import React from 'react'
import {BiChevronDown} from "react-icons/bi"

const Transcript = () => {
  return (
    <>
      <p className="text-2xl font-semibold">Transcript</p>
      <button className="px-4 py-1 flex items-center border border-[#CFCFCF] text-[#CFCFCF] rounded-lg mt-5">
        English
        <span className="text-2xl ml-4">
          <BiChevronDown />
        </span>
      </button>

      <div className="mt-10">
        <div className="flex flex-col space-y-6">
          <div className="flex space-x-6">
            <p className="">0.01</p>
            <p className="">
              First step, Open Facebook on yor desktop or your Mobile device and
              Locate marketplace In the left hand menu or at the top of the{" "}
            </p>
          </div>

          <div className="flex space-x-6">
            <p className="">0.03</p>
            <p className="">
              First step, Open Facebook on yor desktop or your Mobile device and
              Locate marketplace In the left hand menu or at the top of the{" "}
            </p>
          </div>

          <div className="flex space-x-6">
            <p className="">0.09</p>
            <p className="">
              First step, Open Facebook on yor desktop or your Mobile device and
              Locate marketplace In the left hand menu or at the top of the{" "}
            </p>
          </div>

          <div className="flex space-x-6 text-[#cfcfcf]">
            <p className="">0.14</p>
            <p className="">
              First step, Open Facebook on yor desktop or your Mobile device and
              Locate marketplace In the left hand menu or at the top of the{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transcript