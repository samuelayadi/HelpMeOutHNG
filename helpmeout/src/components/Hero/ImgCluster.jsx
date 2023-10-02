import React from "react";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";

const ImgCluster = () => {
  return (
    <>
      <div className="pattern absolute w-[250px] h-72 ml-[510px] md:-mt-12 lg:-mt-20 md:ml-[300px] lg:ml-[420px] xl:ml-[600px]"></div>
      <div className="flex flex-row relative justify-end float-right items-center mt-10 gap-6 lg:mt-0 w-10/12 z-50 bg-white">
        <div className="flex flex-col gap-6 h-full">
          <img src={Banner1} alt="" className="rounded-md w-[450px] h-full" />
          <img src={Banner2} alt="" className="rounded-md w-[450px] h-full" />
        </div>
        <div className="h-full flex justify-end">
          <img src={Banner3} alt="" className="rounded-md w-[450px] h-full" />
        </div>
      </div>
      <div className="pattern2 absolute w-[250px] h-72 ml-8 mt-28 lg:mt-36 2xl:mt-56"></div>
    </>
  );
};

export default ImgCluster;
