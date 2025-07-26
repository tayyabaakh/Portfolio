// "use client"
import React from 'react'
import Home from './home/page';
import Navbar from './components/Navbar/page';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Education from './education/page';
const page = () => {
  console.log("hey");

  return (
    <>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Education/>
   </>
  )
}

export default page