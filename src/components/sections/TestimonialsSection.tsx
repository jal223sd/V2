import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}
export function TestimonialsSection() {
  const testimonials: Testimonial[] = [{
    id: 1,
    name: 'Sarah Johnson',
    role: 'Property Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    quote: 'StayEase has transformed my rental property into a consistent source of income. Their attention to detail and guest management is impeccable.',
    rating: 5
  }, {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    quote: "I've worked with several property management companies, and StayEase is by far the most professional and responsive. My properties have never performed better.",
    rating: 5
  }, {
    id: 3,
    name: 'Rebecca Torres',
    role: 'Vacation Home Owner',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    quote: 'StayEase handles everything from guest communication to maintenance issues. I can finally enjoy passive income without the daily headaches.',
    rating: 5
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  const currentTestimonial = testimonials[currentIndex];
  return <section className="py-20 md:py-28 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what property owners have to
            say about working with us.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-blue-100">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-blue-100">
              <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20L10 0H20L15 20H5L0 20ZM20 20L30 0H40L35 20H25L20 20Z" fill="currentColor" />
              </svg>
            </div>
            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row items-center gap-10 mt-4">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-50 shadow-md">
                <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={22} className={`${i < currentTestimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                </div>
                <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-6 leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 flex space-x-3">
              <button onClick={prevTestimonial} className="p-2.5 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors" aria-label="Previous testimonial">
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button onClick={nextTestimonial} className="p-2.5 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors" aria-label="Next testimonial">
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-300'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
        </div>
      </div>
    </section>;
}