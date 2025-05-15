import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';
import { TestimonialCarousel} from '@/components/Carousel';

const testimonials = [
    {
        name: "John D.",
        quote:
            "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
        rating: 5,
    },
    {
        name: "Priya S.",
        quote:
            "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
        rating: 4.5,
    },
    {
        name: "Marcus L.",
        quote:
            "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
        rating: 5,
    },
    {
        name: "Aarav K.",
        quote:
            "They’re quick and know exactly what I want. Highly recommend! I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
        rating: 4,
    },
]


const Testimonals = () => {
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
      className="dark:bg-black pt-12 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-24">
          <SectionHeading title="TESTIMONALS" />
        </div>
 {/* Paragraph content */}
 <h1 className='big-shoulders text-4xl font-semibold text-primary'>CLIENTS SAYS</h1>
        <div
          className={`flex flex-col md:flex-row justify-between gap-10 transition-all duration-1000 transform py-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
    <TestimonialCarousel testimonials={testimonials}/>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
