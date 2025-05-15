import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';
import PricingCard from '@/components/PricingCard';
import BeardCut from "../assets/Images/beardcut.jpg";
import HairCut from "../assets/Images/haircut.jpg";
import Premium from "../assets/Images/premium.jpg";
import Animation from '@/components/Animation';

 const services = [
  {
    heading: "CLASSIC SERVICES",
    price: "25$",
    image: HairCut,
    features: [
      "Unlimited Haircuts",
      "Free Hair Products",
      "Exclusive Discounts",
      "Priority Booking"
    ]
  },
  {
    heading: "PREMIUM SERVICES",
    price: "35$",
    image: BeardCut,
    features: [
      "Haircut + Beard Trim",
      "Personal Stylist",
      "Exclusive Discounts",
      "Priority Booking"
    ]
  },
  {
    heading: "PACKAGES",
    price: "50$",
    image: Premium,
    features: [
      "All-Inclusive Services",
      "Grooming Kit",
      "Free Hair Spa",
      "VIP Priority Booking"
    ]
  }
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
      className="dark:bg-black pt-24 text-white relative h-1/2"
      id="services"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-24 text-white">
          <SectionHeading title="SERVICES PRICING" />
        </div>
    {/* Paragraph content */}
    <p className="relative z-10 text-2xl leading-10 pb-12">
     Choose from our range of professional barbering services.
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
              <PricingCard
                image={service.image}
                heading={service.heading}
                price={service.price}
                features={service.features}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
