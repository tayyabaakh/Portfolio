"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed  left-0 w-full px-8 py-7 z-20 text-white flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="text-2xl font-bold sm:mr-30 md:ml-20 text-[#16f2b3]">
        <a href="#home">TAYYABA</a>
      </div>

      {/* Large screens */}
      <div className="hidden md:flex space-x-6 mr-10">
        <Link href="#home" className="hover:text-pink-500 transition-all duration-300">Home</Link>
        <Link href="#about" className="hover:text-pink-500 transition-all duration-300">About</Link>
        <Link href="#skills" className="hover:text-pink-500 transition-all duration-300">Skills</Link>
        <Link href="#projects" className="hover:text-pink-500 transition-all duration-300">Projects</Link>
        <Link href="#education" className="hover:text-pink-500 transition-all duration-300">Education</Link>
        <Link href="#contact" className="hover:text-pink-500 transition-all duration-300">Contact</Link>
      </div>

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-10 md:hidden" onClick={closeMenu} />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 backdrop-blur-3xl bg-black/80 text-white flex flex-col items-center justify-center py-4 space-y-9 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="#home" className="hover:underline hover:text-pink-500 transition-all duration-300" onClick={closeMenu}>Home</Link>
        <Link href="#about" className="hover:underline hover:text-pink-500 transition-all duration-300" onClick={closeMenu}>About</Link>
        <Link href="#skills" className="hover:underline hover:text-pink-500 transition-all duration-300" onClick={closeMenu}>Skills</Link>
        <Link href="#projects" className="hover:underline hover:text-pink-500 transition-all duration-300" onClick={closeMenu}>Projects</Link>
        <Link href="#education" className="hover:underline hover:text-pink-500 transition-all duration-300" onClick={closeMenu}>Education</Link>
        <Link href="#contact" className="hover:underline hover:text-pink-500 transition-all duration-300" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
