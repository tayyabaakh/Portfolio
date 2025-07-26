import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const Skills = () => {
    
  return (
    <>
         <div className="flex items-center justify-center  relative">
            <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent absolute top-1/2 left-0 right-0 mx-auto" />
            </div>

    <div id='skills' className="w-full min-h-screen"
       style={{background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
        }}>
            
            
            {/* heading */}
          <div className="flex items-center justify-center pt-40">
            <div className='w-1/15 h-px from-transparent  via-pink-400 to-transparent bg-gradient-to-r'></div>
                <span className='text-4xl text-pink-500 '>Skills</span>
            <div className='w-1/15 h-px from-transparent  via-pink-400 to-transparent bg-gradient-to-r'></div>
         </div>
         {/* scrollable skills section */}
         <div className='p-30 '>
            <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction='left'
             > 
                <div className='flex gap-6'>
                <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} className='w-40 h-40   rounded overflow-hidden flex-shrink-0 '>
                  <Image
                  src={'/html.png'}
                  alt='react'
                  width={130}
                  height={130}
                  className='ml-4'
                  />
                  <h1 className='text-center font-bold text-amber-50'>HTML</h1>
                </div>
                <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} className='w-40 h-40  rounded overflow-hidden flex-shrink-0'>
                  <Image
                  src={'/css.svg'}
                  width={90}
                  height={90}
                  className="flex items-center justify-center mt-5 ml-10"
                  />
                  <h1 className='text-center font-bold text-amber-50 mt-2'>CSS</h1>

                </div>
                <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} className='w-40 h-40 bg-gray-200 rounded overflow-hidden flex-shrink-0'>
                  <Image
                  src={'/javascript.png'}
                  width={120}
                  height={120}
                  className="mt-1 ml-5"
                  />
                  <h1 className='text-center font-bold text-amber-50 mb-7 '>JavaScript</h1>

                </div>
                <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} className='w-40 h-40 bg-gray-200 rounded overflow-hidden flex-shrink-0'>
                  <Image
                  src={'/react.png'}
                  width={150}
                  height={150}
                  className="mt-10"
                  />
                  <h1 className='text-center font-bold text-amber-50 mb-7 '>React.js</h1>

                </div>

                <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} className='w-40 h-40 bg-gray-200 rounded overflow-hidden flex-shrink-0'>
                 
                  <Image
                  src={'/tailwind.png'}
                  width={100}
                  height={100}
                  className=" mt-10 ml-8"
                  />
                  <h1 className='text-center font-bold text-amber-50 mt-3 '>Tailwind css</h1>

                </div>
                <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} className='w-40 h-40 bg-gray-200 rounded overflow-hidden flex-shrink-0 '> 
                  <Image
                  src={'/nextjs.png'}
                  width={120}
                  height={130}
                  className="mt-6 ml-5"
                  />
                  <h1 className='text-center font-bold text-amber-50 mb-4 '>Next js</h1>

                </div>
                 <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} className='w-40 h-40 bg-yellow-200 rounded overflow-hidden flex-shrink-0 '> 
                  <Image
                  src={'/reactnative.png'}
                  width={100}
                  height={100}
                  className="mt-6 ml-6"
                  />
                <h1 className='text-center font-bold text-amber-50 mb-4 '>ReactNative</h1>


                </div>
                 <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}} className='w-40 h-40 bg-yellow-200 rounded overflow-hidden flex-shrink-0 '> 
                  <Image
                  src={'/firebase.png'}
                  width={120}
                  height={120}
                  className="ml-5"
                  />
                <h1 className='text-center font-bold text-amber-50 mb-4 '>Firebase</h1>

                </div>
                <br />
                </div>
            </Marquee>
         </div>
      

         
    </div>
    </>
  )
}

export default Skills