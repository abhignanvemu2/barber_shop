import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';
import Animation from '@/components/Animation';

const cardData = [
  {
    title: 'USER',
    subtitle: 'Expert Barbers',
    description:
      'At Fama Barber Shop & Beauty Salon, we are committed to providing our clients with the highest quality grooming and beauty services. Our team of skilled',
  },
  {
    title: 'SCISSORS',
    subtitle: 'Premium Tools & Products',
    description:
      "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.",
  },
  {
    title: 'HOME',
    subtitle: 'Classic Barbershop Experience',
    description:
      'Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.',
  },
];

const Commitment = () => {
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

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="dark:bg-black  pt-12 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-24">
          <SectionHeading title="COMMITMENT" />
        </div>
 {/* Paragraph content */}
 <h1 className='big-shoulders text-4xl font-semibold text-primary'>WHY US</h1>
    <p className="relative z-10 text-2xl leading-10 pb-12">
     What makes us the premier barbershop in Denton, TX.
    </p>
 <Animation/>
        <div
          className={`flex flex-col md:flex-row justify-between gap-10 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {cardData.map(({ title, subtitle, description }, index) => (
            <div
              key={index}
              className="rounded-lg p-6 text-black cursor-pointer bg-primary transition hover:scale-[1.02] duration-300 text-left"
            >
              <h1 className="font-semibold font-primary text-4xl big-shoulders dark:text-gray-400 text-white">
                {title}
              </h1>
              <h3 className="font-semibold dark:text-gray-700 text-gray-100 text-2xl py-2">
                {subtitle}
              </h3>
              <p className="text-lg dm-sans dark:text-black text-gray-900">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
