import React from 'react';
import { Button } from '../ui/Button';
export function CtaSection() {
  return <section className="py-20 md:py-28 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Ready to Maximize Your Rental Property's Potential?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">
            Join hundreds of property owners who trust StayEase with their
            short-term rental management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button href="/contact" variant="primary" size="large" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg hover:shadow-xl">
              Contact Us Today
            </Button>
            <Button href="/about" variant="outline" size="large" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>;
}