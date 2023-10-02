import React from "react";
import Logo from "../SharedLayout/Logo";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import {MdKeyboardArrowLeft} from "react-icons/md"

const LoginForms = () => {
  return (
    <>
      <div className="mt-10 container absolute ml-4 md:hidden text-3xl">
        <MdKeyboardArrowLeft />
      </div>
      <section className="flex flex-col w-full items-center container mx-auto justify-center md:px-4">
        <div className="mt-10 mb-5 container hidden md:flex">
          <Logo />
        </div>

        <div className=" py-10 mx-auto my-auto w-full md:w-7/12 lg:w-5/12 xl:w-4/12">
          <div className="w-10/12 mx-auto hidden md:block lg:w-11/12">
            <p className="text-3xl font-inter text-center font-semibold lg:text-4xl">
              Log in or Sign up
            </p>
            <p className="mt-4 text-center text-grey2 xl:text-lg">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>

          {/* mobile view */}
          <div className="mx-auto mt-10 md:hidden">
            <p className="text-3xl font-inter text-center font-semibold lg:text-4xl">
              Create an Account
            </p>
            <p className="mt-4 text-center text-grey2 xl:text-lg">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>

          <form action="" className="mt-10 mx-auto w-full">
            <div className="space-y-5 w-full">
              <button className="w-full py-2 rounded-xl flex justify-center items-center border border-grey hover:bg-black hover:text-white">
                <p className="flex w-64">
                  <span className="text-2xl items-center mr-5">
                    <FcGoogle />
                  </span>
                  Continue With Google
                </p>
              </button>

              <button className="w-full py-2 rounded-xl flex justify-center items-center border border-grey hover:bg-black hover:text-white">
                <p className="flex w-64">
                  <span className="text-2xl items-center mr-5 text-[#1877F2]">
                    <BsFacebook />
                  </span>
                  Continue With Facebook
                </p>
              </button>
            </div>

            <div className="my-7 px-4 flex items-center">
              <div className="w-full h-0.5 bg-greyStroke"></div>
              <p className="text-md px-2 text-greyStroke">or</p>
              <div className="w-full h-0.5 bg-greyStroke"></div>
            </div>

            <fieldset className="w-full flex flex-col space-y-2">
              <label htmlFor="email" className="text-black">
                Email
              </label>
              <input
                type="email"
                className="w-full py-2 rounded-xl px-3 border border-greyStroke placeholder:text-darkGreyStroke"
                placeholder="Enter your Email Address"
              />
            </fieldset>

            <fieldset className="w-full flex flex-col space-y-2 mt-5">
              <label htmlFor="password" className="text-black">
                Password
              </label>
              <input
                type="password"
                className="w-full py-2 rounded-xl px-3 border border-greyStroke placeholder:text-darkGreyStroke"
                placeholder="Enter your Password"
              />
            </fieldset>

            <button className="mt-8 w-full py-2 text-white bg-primary rounded-xl hidden md:block">
              Sign Up
            </button>

            <button className="mt-8 w-full py-2 text-white bg-primary rounded-xl md:hidden">
              Create Account
            </button>

            <div className="mt-10 flex justify-center md:hidden">
              <Link
                to="/repository"
                className="text-center text-lg underline font-semibold"
              >
                Continue as Guest
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForms;
