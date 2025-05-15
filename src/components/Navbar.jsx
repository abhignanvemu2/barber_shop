import React, { useState } from 'react';
import ThemeChange from './ThemeChange';

const Navbar = () => {
  // State to control the menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='px-5 pt-5 max-w-[1280px] mx-auto'>
      <header>
        <nav className="navbar flex justify-between bg-white/10 backdrop-blur-md items-center  md:p-3 rounded-4xl">
          <div className="navbar__logo hidden md:block">
            <h1 className='big-shoulders text-2xl text-primary font-bold pl-4 hidden md:block'>Logo</h1>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="block md:hidden">
            <button
              className="text-primary p-2"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <a className="text-md hover:text-primary" href="#home">Home</a>
            <a className="text-md hover:text-primary" href="#about">About</a>
            <a className="text-md hover:text-primary" href="#services">Services</a>
            <a className="text-md hover:text-primary" href="#gallery">Gallery</a>
            <a className="text-md hover:text-primary" href="#contact">Contact</a>
          </div>

          {/* Mobile Menu (Toggle visibility) */}
          <div
            className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-[#111111] text-white p-5 rounded-lg transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}
          >
            {/* Close Icon */}
            <button 
              className="absolute top-5 right-5 text-primary text-3xl"
              onClick={toggleMenu}
            >
              &times;
            </button>

            <a className="block text-md hover:text-primary py-2" href="#home" onClick={toggleMenu}>Home</a>
            <a className="block text-md hover:text-primary py-2" href="#about" onClick={toggleMenu}>About</a>
            <a className="block text-md hover:text-primary py-2" href="#services" onClick={toggleMenu}>Services</a>
            <a className="block text-md hover:text-primary py-2" href="#gallery" onClick={toggleMenu}>Gallery</a>
            <a className="block text-md hover:text-primary py-2" href="#contact" onClick={toggleMenu}>Contact</a>
          </div>

          <div className="flex items-center pr-3 md:pr-0">
            <ThemeChange />
            <button className="bg-gray-500 cursor-pointer text-primary px-4 py-1 rounded-full ml-4 dm-sans ">
              DM ME
            </button>
            
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
