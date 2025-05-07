import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo/logo1.png';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Services', path: '/Services' },
    { name: 'Contact', path: '/Contact' }
  ]

  // Scroll effect using useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`font-mono fixed z-50  left-0 right-0 text-white px-6 md:px-[1rem] lg:gap-60  flex justify-around items-center transition-all duration-300 ${
        isScroll ? 'bg-[#0000009a]  md:w-[85%] max-sm:w-[100%] sm:w-[95%]  mx-auto top-1 rounded-2xl backdrop-blur-sm py-2 shadow-md' : 'bg-black py-4 top-0'
      }`}
    >
      <Link to="/" className=''>
        <div className="flex gap-3 items-center ">
          <img src={logo} alt="logo" className="w-20 h-8" fill/>
          <h1 className="font-bold text-xl monda">kalling.Tech</h1>
        </div>
      </Link>

      {/* Hamburger menu button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation */}
      <nav
        className={`${
          isMenuOpen ? 'block z-20' : 'hidden'
        } md:block absolute md:static top-[70px] left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 px-6 md:px-0 py-4 md:py-0">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`nav-cumtom-btn-style ${
                location.pathname === link.path ? 'active' : ''
              }`}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
