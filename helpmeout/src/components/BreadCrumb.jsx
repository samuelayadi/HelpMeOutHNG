import React from "react";
import { Link } from "react-router-dom";
import {FiChevronRight} from "react-icons/fi"

const BreadCrumb = () => {
  return (
    <div className="hidden md:flex">
      <div className="flex flex-row space-x-4 items-center">
        <div className="flex flex-row items-center space-x-1">
          <Link to="/" className="text-black opacity-50">Home</Link>
           <p className="">/</p>
        </div>

        <div className="flex flex-row items-center space-x-1">
          <Link to="/repository" className="text-black opacity-50">Recent Videos</Link>
           <p className="">/</p>
        </div>

        <div className="flex flex-row items-center space-x-1">
          <Link to="#" className="text-primary">How to create a Facebook Ad Listing</Link>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
