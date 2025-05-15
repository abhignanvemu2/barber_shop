import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SectionHeading = ({ title }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex items-center" onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
            <div className="flex">
                <h2
                    className="text-3xl font-semibold text-left text-primary leading-none tracking-wide big-shoulders mr-8 uppercase"
                  
                >
                    {title}
                </h2>
            </div>

            <div className="flex-1">
                <div className="relative">
                    {/* Full gray base line */}
                    <div
                        className="h-[4px] dark:bg-[#333333] bg-gray-500 w-full absolute top-1/2 -translate-y-1/2 rounded-full"
                        
                    />

                    {/* Always-visible small yellow line at end */}
                    <div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 h-1 dark:bg-[#E1F11F] bg-primary rounded-full transition-all duration-500 ease-in-out`}
                        style={{ width: isHovered ? '6rem' : '1.5rem' }} // Expands on hover
                    />
                </div>
            </div>

            <div
                className={`transition-all duration-500 ease-in-out ml-8
                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
                <ArrowRight className="text-primary" size={32} strokeWidth={2} />
            </div>
        </div>
    );
};

export default SectionHeading;
