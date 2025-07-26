import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
    id="about"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
      className="py-40 px-
      10"
    >
        
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Text Section */}
        
        <div className="md:w-1/2 md:ml- sm:p-10">
        
          <h1 className="text-pink-500 font-bold text-4xl pb-6 sm:text-center lg:text-left">Who I am?</h1>
          <p className="text-amber-50 leading-7 sm:text-center lg:text-left">
            Hi, I'm <b className="text-[#16f2b3]">Tayyaba Akhter</b>, a passionate Computer Science undergraduate
            with a strong enthusiasm for programming and self-driven learning.
            I thrive on exploring new technologies and building creative digital
            solutions. My primary expertise lies in <b>JavaScript</b>, and I actively work
            with modern technologies like <b>React.js</b>, <b>Next.js</b>, <b>Firebase</b>, and
            <b> React Native</b> for both web and mobile app development.
            Beyond coding, I have a growing interest in project management and
            am currently exploring how to combine technical skills with effective team
            leadership and planning. I'm currently open to freelancing
            opportunities and job roles that align with my skill set and passion
            for innovation.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/pinkTheme-girl.svg"
            width={300}
            height={300}
            alt="Illustration"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
