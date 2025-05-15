import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';
import BarberCard from '@/components/BarberCardd';

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

const Barbers = () => {
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

  return (
    <div
      ref={sectionRef}
      className="bg-black pt-24 text-white relative h-1/2"
      id="services"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-24 text-white">
          <SectionHeading title="OUR BARBERS" />
        </div>
   
 
 <div className="flex flex-col md:flex-row  justify-between gap-10 px-6 md:px-24 h-full py-12 items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ease-in-out ${
                isVisible
                  ? `opacity-100 translate-y-0 delay-[${index * 200}ms]`
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <BarberCard
                image={service.image}
                heading={service.heading}
                about={service.about}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Barbers;
