import React from 'react'
import BrandWhite from "../../assets/images/logowhite.jpg"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="w-screen bg-primary text-white">
        <div className="container mx-auto px-4 py-16 flex flex-col space-y-14 items-start justify-between md:flex-row md:space-y-0">
          <div className="flex flex-row space-x-2 items-center">
            <img src={BrandWhite} alt="" className="w-10" />
            <p className="text-md text-white font-semibold font-inter">
              HelpMeOut
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="font-semibold">Menu</p>
            <Link to="">Home</Link>
            <Link to="">Converter</Link>
            <Link to="">How It Works</Link>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="font-semibold">About us</p>
            <Link to="">About</Link>
            <Link to="">Contact Us</Link>
            <Link to="">Privacy Policy</Link>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="font-semibold">Screen Record</p>
            <Link to="">Browser Window</Link>
            <Link to="">Desktop</Link>
            <Link to="">Application</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer