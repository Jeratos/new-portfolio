import React from "react";
import { NavLink } from "react-router-dom";
import Sliding from "./sliding";
import about from '../../images/landing/about.jpg'
import skills from '../../images/landing/skills.jpg'

export default function Home() {
  return (
    <>
      <main className="mx-4 mt-20 sm:mx-6 md:mx-10 lg:mx-10">
        <div className="flex flex-col lg:flex-row justify-around mt-5 gap-10">
          {/* Sliding Section */}
          <div className="w-full lg:w-1/2 h-[20rem] sm:h-[25rem] md:h-[30rem] relative">
            <Sliding />
          </div>

          {/* Text Section */}
          <div className="text-center self-center tracking-wider w-full lg:w-1/2 ">
            <h1 className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.7rem] font-bold bg-gradient-300 overflow-hidden">
              Hello my name is <strong>Ayush Singh Chouhan</strong>
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-300 overflow-hidden">
              and I’m a <strong>Web Developer</strong>
            </h1>

            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
              <NavLink
                to="/Services"
                className="relative overflow-hidden rounded-[10px] px-4 py-2 font-bold text-white bg-gradient-to-r from-[#c3c3c3] to-[#4a4a4a] group w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4a4a4a] to-[#c3c3c3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </NavLink>

              <NavLink
                to="/Contact"
                className="relative overflow-hidden rounded-[10px] px-4 py-2 font-bold text-white bg-gradient-to-r from-[#c3c3c3] to-[#4a4a4a] group w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Order Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4a4a4a] to-[#c3c3c3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </NavLink>
            </div>
          </div>
        </div>

{/* about section  */}
<div className="mt-[5rem] px-4 sm:px-6 lg:px-8">
  {/* About Me Section */}
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:p-2 w-full md:w-[60%]  order-2 md:order-1">
      <h2 className="font-bold text-xl text-white">About me:</h2>
      <p className="pt-5 leading-7 max-sm:text-center lg:text-left mb-5 text-gray-300">
        Hello! I'm <strong>Ayush Singh Chouhan</strong>, a MERN stack
        developer who loves turning creative ideas into fully functional
        web experiences. I'm passionate about clean code, responsive
        design, and building web apps that are both beautiful and
        blazing fast.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

      <NavLink
                to="/Projects"
                className=" relative overflow-hidden rounded-[10px] px-4 py-2 font-bold text-white bg-gradient-to-r from-[#c3c3c3] to-[#4a4a4a] group w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4a4a4a] to-[#c3c3c3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </NavLink>

      </div>
    </div>
    <div className="w-full md:w-[40%] order-1 md:order-2 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
      <img 
        src={about} 
        alt="About me" 
        className="rounded-2xl w-full object-cover h-[200px] md:h-[400px] opacity-70"
      />   
    </div>
  </div>
  
  {/* Skills Section */}
  <div className="mt-[5rem] mb-5">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Image first on mobile, then ordered based on screen size */}
      <div className="w-full  md:w-[40%] order-1">
        <img 
          src={skills} 
          alt="Skills" 
          className="rounded-2xl w-full object-cover h-[200px] md:h-[400px] opacity-60 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        />   
      </div>
      {/* Text content second on mobile, first on md+ screens */}
      <div className="p-2 w-full md:w-[60%] order-2 md:order-1">
        <h2 className="font-bold mx-2 text-xl text-white">what I can do:</h2>
        <ul className="text-gray-300 leading-7 space-y-2 mt-4 md:mt-0 mb-5 max-sm:text-center lg:text-left">
          <li>Design & develop modern, responsive websites using React & Tailwind CSS.</li>
          <li>Build full-stack applications with MongoDB, Express, React, and Node.js.</li>
          <li>Create clean, maintainable, and reusable components.</li>
          <li>Integrate APIs and work with RESTful services.</li>
          <li>Optimize performance and improve SEO for web projects.</li>
        </ul>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 lg:justify-start">
        <NavLink
                to="/Services"
                className=" relative overflow-hidden rounded-[10px] px-4 py-2 font-bold text-white bg-gradient-to-r from-[#c3c3c3] to-[#4a4a4a] group w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Go To Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4a4a4a] to-[#c3c3c3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </NavLink>

        </div>
      </div>
    </div>
  </div>
</div>
      </main>
    </>
  );
}
