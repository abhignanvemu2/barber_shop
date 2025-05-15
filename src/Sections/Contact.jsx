import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';
import BarberCard from '@/components/BarberCardd';
import ContactSection from '@/components/AppointmentForm';


const Contact = () => {
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
          <SectionHeading title="Contact" />
        </div>
   <ContactSection/>
 
      </div>
    </div>
  );
};

export default Contact;
