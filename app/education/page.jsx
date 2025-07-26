"use client";
import Image from "next/image";
import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden pt-16 px-4"
    >
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Background"
        fill
        priority
        className="w-full h-full object-cover z-0"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 p-6">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
          <span className="text-4xl text-pink-500 font-semibold">Education</span>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start w-full gap-10 mt-10">
          {/* Cards Section */}
          <div className="w-full md:max-w-[600px] flex flex-col gap-7 items-center px-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full rounded-lg border border-amber-100 flex items-center p-4"
              style={{
                background:
                  "linear-gradient(90deg,rgba(73, 73, 191, 1) 0%, rgba(119, 47, 163, 1) 35%, rgba(45, 41, 120, 1) 100%)",
              }}
            >
              <RiContactsLine size={30} className="mb-6 text-pink-500" />
              <div className="ml-3 text-lg text-amber-50">
                <h1 className="font-bold">BACHELOR DEGREE</h1>
                <p>Umaer Bhasha Institute of Technology</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full rounded-lg border border-amber-100 flex items-center p-4"
              style={{
                background:
                  "linear-gradient(90deg,rgba(73, 73, 191, 1) 0%, rgba(119, 47, 163, 1) 35%, rgba(45, 41, 120, 1) 100%)",
              }}
            >
              <RiContactsLine size={30} className="mb-6 text-pink-500" />
              <div className="ml-3 text-lg text-amber-50">
                <h1 className="font-bold">HIGHER SECONDARY CERTIFICATE</h1>
                <p>Khatoon-Pakistan Government College</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full rounded-lg border border-amber-100 flex items-center p-4"
              style={{
                background:
                  "linear-gradient(90deg,rgba(73, 73, 191, 1) 0%, rgba(119, 47, 163, 1) 35%, rgba(45, 41, 120, 1) 100%)",
              }}
            >
              <RiContactsLine size={30} className="mb-6 text-pink-500" />
              <div className="ml-3 text-lg text-amber-50">
                <h1 className="font-bold">HIGHER SECONDARY CERTIFICATE</h1>
                <p>Khatoon-Pakistan Government College</p>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="w-full md:w-1/2 flex justify-center px-4"
          >
            <Image
              src="/github.png"
              width={500}
              height={500}
              alt="Illustration"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
