import React, { useState, useEffect, useRef } from "react";
import SectionHeading from "../components/Heading";

const images = [
  "https://images.pexels.com/photos/3998425/pexels-photo-3998425.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2035311/pexels-photo-2035311.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3998393/pexels-photo-3998393.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3998427/pexels-photo-3998427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2817022/pexels-photo-2817022.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4663133/pexels-photo-4663133.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2014809/pexels-photo-2014809.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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
      className="dark:bg-black pt-24 text-white relative"
      id="gallery"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-24 text-white">
          <SectionHeading title="GALLERY" />
        </div>

        {isVisible && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Modal for selected image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="relative max-w-4xl w-full px-4">
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Full View"
                className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
