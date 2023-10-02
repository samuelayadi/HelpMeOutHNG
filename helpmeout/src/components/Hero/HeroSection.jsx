import React from 'react'
import {FiArrowRight} from "react-icons/fi"
import ImgCluster from './ImgCluster';

const HeroSection = () => {
  return (
    <section className="mt-16 mb-32 px-2 container mx-auto lg:px-4">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="space-y-6 mx-auto w-full md:w-9/12 lg:w-7/12">
          <p className="text-3xl font-bold sm:text-5xl xl:text-6xl xl:w-10/12">
            Show Them Don't just Tell
          </p>
          <p className="text-lg text-black opacity-75 mt-6 font-inter">
            Help your friends and loved ones by creating and sending video on
            how to get things done on a website
          </p>
          <button className="flex mt-10 px-10 py-2 rounded-lg text-white bg-primary items-center font-inter">
            Install HelpMeOut
            <span className="ml-4 text-xl">
              <FiArrowRight />
            </span>
          </button>
        </div>

        <div className='md:mt-14 lg:mt-8 hidden md:block'>
          <ImgCluster />
        </div>
      </div>
    </section>
  );
}

export default HeroSection