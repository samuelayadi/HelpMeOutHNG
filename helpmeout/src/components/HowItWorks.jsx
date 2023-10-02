import React from 'react'
import HowItWorksImg from '../assets/images/howitworks.jpg'

const HowItWorks = () => {
  return (
    <>
      <section className="">
        <div className="h-12 w-full bg-gray"></div>
        <main className="container mx-auto px-4 py-16">
          <p className="text-center font-bold text-3xl xl:text-4xl">
            How It Works
          </p>
          <div className="flex flex-col items-center md:flex-row md:space-x-10">
            <div className="space-y-6 justify-center mt-10">
              <div className="flex justify-center mx-auto items-center w-10 h-10 bg-primary rounded-full text-white">
                <p className="text-lg">1</p>
              </div>
              <p className="font-inter text-center text-2xl font-semibold mt-10 text-primary">
                Record Screen
              </p>
              <p className=" text-md opacity-75 text-center xl:text-lg ">
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>
              <img
                src={HowItWorksImg}
                alt=""
                className="shadow-lg rounded-lg"
              />
            </div>

            <div className="space-y-6 justify-center mt-10">
              <div className="flex justify-center mx-auto items-center w-10 h-10 bg-primary rounded-full text-white">
                <p className="text-lg">2</p>
              </div>
              <p className="font-inter text-center text-2xl font-semibold mt-10 text-primary">
                Share Your Recording
              </p>
              <p className=" text-md opacity-75 text-center xl:text-lg ">
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>
              <img
                src={HowItWorksImg}
                alt=""
                className="shadow-lg rounded-lg"
              />
            </div>

            <div className="space-y-6 justify-center mt-10">
              <div className="flex justify-center mx-auto items-center w-10 h-10 bg-primary rounded-full text-white">
                <p className="text-lg">3</p>
              </div>
              <p className="font-inter text-center text-2xl font-semibold mt-10 text-primary">
                Learn Efortlessly
              </p>
              <p className=" text-md opacity-75 text-center xl:text-lg ">
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
              <img
                src={HowItWorksImg}
                alt=""
                className="shadow-lg rounded-lg"
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default HowItWorks