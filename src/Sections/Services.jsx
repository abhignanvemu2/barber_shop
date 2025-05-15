import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';
import ReviewCard from '@/components/Card';
import BeardCut from "../assets/Images/beardCut.jpg";
import HairCut from "../assets/Images/haircut.jpg";
import Premium from "../assets/Images/premium.jpg";
import Animation from '@/components/Animation';

const services = [
  {
    heading: "HAIR CUT",
    about: "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    image: HairCut,
  },
  {
    heading: "BEARD SERVICES",
    about: "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    image: BeardCut,
  },
  {
    heading: "PREMIUM SERVICES",
    about: "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    image: Premium,
  },
];

const Services = () => {
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
      className="dark:bg-black  pt-24 text-white relative h-1/2"
      id="services"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-24 text-white">
          <SectionHeading title="SERVICES" />
        </div>
    {/* Paragraph content */}
    <p className="relative z-10 text-2xl leading-10 pb-12 dark:text-white text-black">
      Professional barbering services to keep you looking sharp <br />
      for everyday confidence or special occasions.
    </p>
 <Animation/>
 <div className="flex flex-col lg:flex-row justify-between gap-10 xl:px-24 h-full py-12 items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ease-in-out ${
                isVisible
                  ? `opacity-100 translate-y-0 delay-[${index * 200}ms]`
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <ReviewCard
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

export default Services;
