import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../components/Heading';

const About = () => {
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
        <div ref={sectionRef} className="bg-black pt-24 text-white relative" id="about">
            <div className="container mx-auto px-4 md:px-6 transition-all duration-1000 ease-in-out">
                <div className="py-24 text-white relative">
                    <div className="container mx-auto">
                        <SectionHeading title="ABOUT" />
                    </div>
                </div>

                <div
                    className={`flex flex-col md:flex-row pt-8 justify-between gap-10 transform transition-all duration-1000  ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <p className="text-2xl max-w-lg text-left text-[#F0F0F080] leading-10">
                        Welcome to Fama Barber Shop & Beauty Salon! We are dedicated to providing you
                        with the best grooming and beauty services in town. Our team of experienced
                        professionals is here to ensure you look and feel your best.
                    </p>
                    <p className="text-2xl max-w-lg text-left leading-10">
                        We take pride in our attention to detail and personalized service, ensuring
                        each client leaves looking and feeling their best. Our skilled barbers
                        combine traditional techniques with modern trends to create custom styles
                        that suit each individual's personality and lifestyle.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
