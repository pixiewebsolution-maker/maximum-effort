'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCarouselProps {
  images: string[];
  altPrefix: string;
}

export default function ProductCarousel({ images, altPrefix }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[calc(100vh-8rem)] max-h-[800px] group overflow-hidden bg-gray-100 rounded-xl">
      {/* Images container */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full shrink-0 relative bg-gray-100 flex items-center justify-center">
            <img 
              src={src}
              alt={`${altPrefix} Image ${index + 1}`}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </div>

      {/* Arrows (show on hover on desktop, always on mobile) */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center shadow-md md:opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center shadow-md md:opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
