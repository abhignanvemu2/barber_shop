import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';

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
      className="bg-black pt-12 text-white relative overflow-hidden"
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
 <div className="relative text-center pt-24">
  {/* Animated Sparkle SVG */}
  <svg
    className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10"
    viewBox="0 0 512 512"
    fill="#D9E300"
    style={{
      animation: 'scalePulse 2s ease-in-out infinite',
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 0C277 106 406 139 512 160C406 181 277 215 256 320C235 215 106 181 0 160C106 139 235 106 256 0Z" />
  </svg>


  {/* Animation keyframes */}
  <style jsx>{`
    @keyframes scalePulse {
      0%, 100% {
        transform: translateX(-50%) scale(1);
      }
      50% {
        transform: translateX(-50%) scale(1.5);
      }
    }
  `}</style>
</div>
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
              <h1 className="font-semibold font-primary text-4xl big-shoulders text-gray-400">
                {title}
              </h1>
              <h3 className="font-semibold font-secondary text-2xl py-2">
                {subtitle}
              </h3>
              <p className="text-lg dm-sans">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
