import React from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import  Default from "../../assets/images/profiledef.jpg"
import { BsChevronDown } from "react-icons/bs";

const NavBar = () => {
  const location = useLocation();
  const isRepository = location.pathname === "/repository";
  const isRepositoryDetails = location.pathname === "/repository/:id"
  return (
    <nav
      className={` py-3 ${
        !isRepository ? "border-b shadow-sm" : null
      } border-lightGrey`}
    >
      <div className="container px-2 mx-auto justify-between items-center flex  lg:px-4">
        <Logo />

        {!isRepository ? (
          <>
            <div className="hidden space-x-10 lg:flex">
              <Link to="#">Features</Link>
              <Link to="#">How It Works</Link>
            </div>
            <Link
              to="/login"
              className="text-lg text-primary font-semibold hidden lg:flex"
            >
              Get Started
            </Link>
          </>
        ) : (
          <>
            <div className="space-x-3 items-center flex">
              <img src={Default} alt="" className="w-8 h-8" />
              <p className="">John Mark</p>
              <BsChevronDown className="text-2xl" />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
