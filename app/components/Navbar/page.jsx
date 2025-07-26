"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="bg-transparent fixed top-4 left-0 w-full  px-8 py-4 z-20  text-white flex justify-between items-center">
      <div className="text-2xl font-bold sm:mr-30 md:ml-20 text-[#16f2b3]"><a href="#home">TAYYABA</a></div>
      {/* large screens */}
      <div className="hidden md:flex space-x-6 mr-10  ">
        <Link href={"#home"} className="hover:text-pink-500 transition-all duration-300">Home</Link>
        <Link href={"#about"} className="hover:text-pink-500 transition-all duration-300 ">About</Link>
        <Link href={"#skills"} className="hover:text-pink-500 transition-all duration-300">Skills</Link>
        <Link href={"#projects"} className="hover:text-pink-500 transition-all duration-300">Projects</Link>
        <Link href={"#education"} className="hover:text-pink-500 transition-all duration-300">Education</Link>
        <Link href={""} className="hover:text-pink-500 transition-all duration-300">Contact</Link>
      </div>
      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* small screen drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 backdrop-blur-3xl bg-opacity-80 text-white flex flex-col items-center justify-center py-4 space-y-9 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href={""}  className="hover:underline hover:text-pink-500 transition-all duration-300" >Home</Link>
        <Link href={""}  className="hover:underline hover:text-pink-500 transition-all duration-300">About</Link>
        <Link href={""}  className="hover:underline hover:text-pink-500 transition-all duration-300">Skills</Link>
        <Link href={""}  className="hover:underline hover:text-pink-500 transition-all duration-300">Projects</Link>
        <Link href={""}  className="hover:underline hover:text-pink-500 transition-all duration-300">Achievement</Link>
        <Link href={""}  className="hover:underline hover:text-pink-500 transition-all duration-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
