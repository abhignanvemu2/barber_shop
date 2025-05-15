import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainImage from './assets/Images/hero.jpg';
import About from './Sections/About';
import Services from './Sections/Services';
import Commitment from './Sections/Commitment';
import Testimonals from './Sections/Testimonals';
import ServicePricing from './Sections/ServicePricing';
// import InfiniteScrollText from './Sections/InfiniteScrollTest';
import { ScrollingTextMarquee } from "./Sections/ScrollingTextMarquee"
import Gallery from './Sections/Gallery';
import Barbers from './Sections/Barbers';
import Location from './Sections/Location';
import { AccordionDemo } from './components/Accortion';
import Faq from './Sections/Faq';
import Contact from './Sections/Contact';

function App() {
  return (
    <>
      <img
        src={MainImage}
        alt="Hero"
        className="absolute top-0 right-0 w-full md:w-3/5 h-dvh object-cover z-0"
      />

      <div className="relative z-10 h-dvh flex items-center pl-10" id='home'>
        <div className="w-2/5 opacity-0 slide-fade-in animation-delay-1000 big-shoulders text-6xl md:text-8xl text-primary font-bold text-balance md:text-nowrap text-left ">
          <h1>
            Fama Barber Shop
          </h1>
          <h1>
            & Beauty Salon
          </h1>
          <p className="text-lg md:text-2xl text-[#D1D1D1] font-normal mt-4 dm-sans">
            "Costly compared to other barbershops with better haircuts."
          </p>
          <button className='cursor-pointer bg-primary text-black rounded-lg md:w-auto px-2 py-1 text-lg dm-sans md:mx-1 font-medium transition-all w-50 duration-300  hover:scale-105'>
            Our Services
          </button>

          <button className=' cursor-pointer outline-2 outline-[#E0F11F] text-primary rounded-lg font-medium px-2 py-1 text-lg dm-sans w-50 md:w-auto md:mx-4 transition-all duration-300 hover:scale-105'>
            Book Now
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
          <a href="#about">
            <div className="w-12 h-12 rounded-full border-2 border-[#E0F11F] flex items-center justify-center cursor-pointer hover:bg-primary transition-all duration-300 group animate-pulse-scale">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary group-hover:text-black transition-all duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 16l-6-6h12z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full z-50 opacity-0 fade-in animation-delay-2000">
        <Navbar />
      </div>
      <About/>
      <Services/>
      <Commitment/>
      <Testimonals/>
       <ScrollingTextMarquee reverse/>
      <ServicePricing/>
      <Gallery/>
      <Barbers/>
      <Location/>
     <Faq/>
     <Contact/>
       <ScrollingTextMarquee/>
<footer className="bg-black text-white py-10">
      

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-left text-sm text-gray-400">
        © {new Date().getFullYear()} Fama Barber Shop and Beauty Salon. All rights reserved.
      </div>
    </footer>
    </>
  );
}

export default App;
