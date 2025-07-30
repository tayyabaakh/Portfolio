import React from 'react'
import Form from './form'
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import Image from 'next/image';
import ContactForm from './form';
// import ContactForm from './contact-form';
const Contact = () => {
  return (
    <section
      id='contact'
      className="relative w-full min-h-screen flex flex-col items-start justify-start overflow-hidden pb-5 px-10 "
      style={{
        background:
          'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(3, 7, 18, 1) 100%)',
      }}
    >
      <div className="flex items-center justify-center mt-7 w-full">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
        <span className="text-4xl text-pink-500 font-semibold px-4">Contact</span>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
      </div>

      {/* Wrapper to control alignment */}
      <div className="w-full flex flex-col lg:flex-row  mt-5 justify-center items-center ">
        <ContactForm />
      {/* personal info */}
      <div className="lg:w-3/4 ml-6 mt-30 sm:ml-10 ">
      <div className='flex flex-col'>         
         <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span className='text-amber-50'>{'tayyabaakhter189@gmail.com'}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span className='text-amber-50'>
                {'+92334-3422416'}
              </span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span className='text-amber-50'>
                {'Gulshan-e-Iqbal,Karachi'}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={'https://github.com/tayyabaakh'}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={'https://www.linkedin.com/in/tayyaba-akhter-704149290/'}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={'https://x.com/akh_tayyaba_'}>
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
  
            <Link target="_blank" href={'https://www.facebook.com/tayyaba.akhter.12'}>
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            </div>

          </div>
        </div>
        <div className=' mt-34'>
        <Image
        alt=''
        src={'/contact.png'}
        width={800}
        height={160}
        />
        </div>
        </div>
    </section>
  )
}

export default Contact
