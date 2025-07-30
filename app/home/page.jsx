"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
// import Button from "../components/button";
import { IoMdContact } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";


const Home = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-5 md:px-20 py-20 md:py-0 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />
    {/* <div className="flex justify-center md:justify-start absolute top-7 left-1/2 md:left-40 lg:left-50 transform -translate-x-1/2 md:transform-none z-10 ">
        <h1 className="text-[#16f2b3] text-3xl font-bold">TAYYABA</h1>
      </div> */}
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hello,
            <br />I'm <span className="text-pink-500">TAYYABA AKHTER</span>
            <br />
            <span className="text-[#16f2b3] text-2xl md:text-3xl">
              <Typewriter
                words={["SOFTWARE DEVELOPER", "FREELANCER", "TECH ENTHUSIAST"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-3xl text-pink-500 my-6">
            <Link href="https://www.linkedin.com/in/tayyaba-akhter-704149290/" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/tayyabaakh" target="_blank">
              <FaSquareGithub />
            </Link>
            <Link href="https://www.facebook.com/tayyaba.akhter.12" target="_blank">
              <FaFacebookSquare />
            </Link>
          </div>

          {/* Buttons */}
       <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
  {/* Contact Me Button */}
  <Link
    href="https://github.com/tayyabaakh"
    className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1.5px] rounded-full hover:from-pink-500 hover:to-violet-600 transition-all duration-300"
  >
    <Link href={'#contact'} className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 md:px-5 md:py-2 text-xs sm:text-sm md:text-base font-semibold text-white bg-[#0d1224] rounded-full border-none transition-all duration-300 hover:gap-3">
      <span>Contact Me</span>
      <IoMdContact />
    </Link>
  </Link>

  {/* Download Resume Button */}
  <Link
    target="blank"
    href="https://drive.google.com/file/d/1HMVzX1EZ82mbt6mObb9YfgxajRGJ9MeL/view?usp=drive_link"
  
    className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1.5px] rounded-full hover:from-pink-500 hover:to-violet-600 transition-all duration-300"
  >
    <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 md:px-5 md:py-2 text-xs sm:text-sm md:text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-500 rounded-full border-none transition-all duration-300 hover:gap-3">
      <span>Download Resume</span>
      <FaDownload />
    </button>
  </Link>
</div>

        </div>

        {/* Portfolio Image - Visible on all screens */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[300px]  md:w-[430px] md:h-[430px] ">
            <Image
              src="/portfolio1.gif"
              alt="Tayyaba Akhter"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;