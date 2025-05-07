import React from 'react'
import { Link } from 'react-router-dom'
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-[5rem] font-mono">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">kalling.Tech</h2>
          <p className="text-sm text-gray-400">Crafting web experiences that inspire.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold mb-1">Quick Links</h3>
          <ul className="flex flex-col gap-1 text-sm">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/Projects" className="hover:text-gray-400">Projects</Link></li>
            <li><Link to="/Services" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="/Contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Icons (optional) */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold mb-1">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-end text-lg">
            <a href="https://www.instagram.com/code_craft417" target='_blank' className="hover:text-gray-400"><RiInstagramFill/></a>
            <a href="https://linkedin.com/in/ayush-chouhan-31a064222" target='_blank' className="hover:text-gray-400"><FaLinkedin/></a>
            
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />
      <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} kalling.Tech. All rights reserved.</p>
    </footer>
  )
}
