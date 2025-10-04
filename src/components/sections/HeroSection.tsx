import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
// Array of hero images
const heroImages = ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'];
export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative h-screen w-full">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black opacity-60" />
            <img src={image} alt={`Luxury rental property ${index + 1}`} className="w-full h-full object-cover" />
          </div>)}
      </div>
      {/* Content */}
      <div className="relative h-full w-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Professional Short-Term Rentals Made Easy
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto font-light">
            Maximize your property's potential with our expert management
            services. We handle everything so you don't have to.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button href="/booking" variant="primary" size="large" className="text-lg px-8 py-3.5 hover:transform hover:scale-105">
              Book Now
            </Button>
            <Button href="/about" variant="outline" size="large" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3.5 hover:transform hover:scale-105">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      {/* Image Navigation Dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
        {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </section>;
}