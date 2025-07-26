"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { FaLink } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Github User Search",
    img: "/github.jpg",
    description:
      "A responsive web app built with Next.js and Tailwind CSS that allows users to search for GitHub profiles by username. It fetches real-time data using the GitHub API and displays user details like avatar, bio, repositories, followers, and more in a clean, modern UI",
  },
  {
    id: 2,
    title: "E-commerce",
    img: "/commerce.png",
    description:
      "A responsive eCommerce website using React JS and Material UI, offering dynamic product rendering and user-friendly navigation. Integrated Redux Toolkit for robust state management of cart and product data.",
  },
  {
    id: 3,
    title: "Quiz App",
    img: "/quizapp.jpg",
    description:
      "A dynamic Quiz App using React.js, Tailwind CSS, and React Router DOM.Integrated real-time quiz questions via Axios from an external API with responsive design and smooth navigation.",
  },
  {
    id: 4,
    title: "Olx Clone",
    img: "/olx.jpg",
    description: "Developed an OLX clone using React JS and Tailwind CSS, implementing dynamic rendering with React Router. Fetched and displayed listings via Axios from a public API, ensuring responsive and intuitive UI.",
  },
  {
    id: 5,
    title: "Card 5",
    img: "https://via.placeholder.com/300x400",
    description: "",
  },
  {
    id: 6,
    title: "Card 6",
    img: "https://via.placeholder.com/300x400",
    description: "",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4); // default for desktop

  // Adjust visible cards based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2); // for mobile
      } else if (window.innerWidth < 768) {
        setVisibleCount(2); // for tablets/larger
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleCards = showAll ? cards : cards.slice(0, visibleCount);

  return (
    <div
      id="projects"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
      className="relative w-full min-h-screen pb-20"
    >
      <div className="flex items-center justify-center  relative ">
        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent absolute top-1/2 left-0 right-0 mx-auto" />
      </div>
      {/* Heading */}
      <div className="flex items-center justify-center mt-15">
        <div className="w-1/15 h-px from-transparent  via-pink-400 to-transparent bg-gradient-to-r"></div>
        <span className="text-4xl text-pink-500 ">Projects</span>
        <div className="w-1/15 h-px from-transparent  via-pink-400 to-transparent bg-gradient-to-r"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 place-items-center">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            
            className="w-64 h-110 rounded-xl overflow-hidden shadow-lg border border-violet-400 relative group"
          >
            {/* Image */}
            <div className="h-[60%]">
              <img
                src={card.img}
                alt="Card Image"
                width={card.id === 2 ? 100 : 150}
                height={card.id === 2 ? 220 : 200}
                className="w-full h-full object-cover  mx-auto"
              />
            </div>
            {/* Description */}
            <div className="h-[40%] p-4 flex flex-col text-center">
              <h2 className="text-lg text-violet-300 font-semibold">
                {card.title}
              </h2>
              <p className="text-xs text-amber-50">{card.description}</p>
              {/* <button className="mt-2 px-3 py-1 text-sm bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                Read More
              </button> */}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-violet-800 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-in-out z-10" />
            <div className="absolute bottom-0 w-full px-6 py-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-center text-white z-20">
              <h3 className="text-xl font-bold mb-5 ">{card.title}</h3>
              <div className="flex items-center justify-center gap-3 ">
                <div className="bg-white text-pink-700 p-3 rounded-full inline-block">
                  <FaGithub size={20} />
                </div>

                <div className="bg-white text-pink-600 p-3 rounded-full inline-block">
                  <VscPreview size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More / Show Less Button */}
      {cards.length > visibleCount && (
        <div className="flex justify-center mt-8 ">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-white text-pink-500 font-semibold rounded shadow hover:bg-pink-500 hover:text-white transition duration-300"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
        
      )}
      
    </div>
  );
};

export default Projects;
