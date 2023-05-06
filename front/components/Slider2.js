import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const slideImages = [
  {
    url: 'MODELLA-1.jpg',
  },
  {
    url: 'MODELLA-3.jpg',
  },
  {
    url: 'MODELLA-5.jpg',
  },
];

export default function Slideshow({ divRef1, divRef0 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative lg:w-screen xl:w-2/3 3xl:w-3/4 5xl:w-[1000px] z-50 h-[400px] overflow-hidden xl:h-full">
      {slideImages.map((slideImage, index) => (
        <div
        key={index}
        className="h-[400px] xl:h-screen absolute inset-0 object-cover object-center"
        style={{
          backgroundImage: `url(${slideImage.url})`,
          backgroundSize: 'cover',
          opacity: index === currentSlide ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
        >
        </div>
      ))}
    </div>
  );
}