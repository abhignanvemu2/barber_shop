import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';
import BarberCard from '@/components/BarberCardd';
import { MapPin, Phone } from "lucide-react"; 
const services = [
  {
    heading: "Jason Rodriguez",
    about: "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    heading: "Marcus Williams",
    about: "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "Terrence Jackson",
    about: "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const address = "500 N Bell Ave #109, Denton, TX 76209, United States";
  const mapsLink = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;
  return (
    <div
      ref={sectionRef}
      className="dark:bg-black pt-24 text-white relative h-1/2"
      id="services"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-24 text-white">
          <SectionHeading title="LOCATION" />
        </div>
   
 
 <section className=" py-10 px-4 md:px-10">

      {/* Embedded Google Map */}
      <div className="w-full h-[350px] mb-6">
        <iframe
          title="Google Map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Address and Open Link */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex items-center gap-2 text-lg  text-gray-800 dark:text-white">
          <MapPin className="text-primary" />
          <span className='font-medium'>{address}</span>
        </div>
        <div className='flex font-bold justify-center items-center gap-2 text-lg  text-gray-800 dark:text-white'>

          <Phone className="text-primary " /> <p className='font-medium'>+1 940-612-9127</p>
        </div>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
      </div>
    </div>
  );
};

export default Location;
