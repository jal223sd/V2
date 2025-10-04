import React from 'react';
import { Button } from '../ui/Button';
export function IntroSection() {
  return <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80" alt="Luxury short-term rental property" className="w-full h-full object-cover" />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Welcome to <span className="text-blue-600">StayEase</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At StayEase, we understand that your property is more than just a
              space—it's an investment. Our professional short-term rental
              management service is designed to maximize your returns while
              eliminating the stress of day-to-day operations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 10 years of experience in the hospitality industry,
              we've perfected the art of creating exceptional guest experiences
              that lead to stellar reviews, repeat bookings, and ultimately,
              higher revenue for property owners.
            </p>
            <Button href="/about" variant="primary" size="large" className="text-base px-7 py-3">
              Discover Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>;
}