import React from 'react';
import { Button } from '../components/ui/Button';
export function AboutPage() {
  return <div className="pt-16 bg-white w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80" alt="Office background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About StayEase
            </h1>
            <p className="text-xl text-white opacity-90">
              We're a team of short-term rental experts dedicated to maximizing
              your property's potential.
            </p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                StayEase was founded in 2015 by a group of property owners who
                were frustrated with the existing short-term rental management
                options. We believed there had to be a better way to manage
                properties that balanced maximizing income with providing
                exceptional guest experiences.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started as a small operation managing a handful of
                properties has grown into a trusted service managing over 200
                properties across multiple cities. Our success is built on our
                commitment to treating each property as if it were our own and
                ensuring that both owners and guests have seamless, positive
                experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be one of the highest-rated short-term
                rental management companies, with a team of dedicated
                professionals who are passionate about what they do.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="StayEase office" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600">
              To provide property owners with peace of mind and increased
              returns through exceptional short-term rental management services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 14 4-4" />
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Maximize Revenue
              </h3>
              <p className="text-gray-600">
                Our dynamic pricing strategies and marketing expertise ensure
                your property generates the highest possible income.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Simplify Management
              </h3>
              <p className="text-gray-600">
                We handle everything from guest communication to maintenance,
                allowing you to enjoy truly passive income.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ensure Quality
              </h3>
              <p className="text-gray-600">
                Our rigorous cleaning and maintenance protocols keep your
                property in excellent condition for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  How do you ensure my property is well-maintained?
                </h3>
                <p className="text-gray-600">
                  We conduct thorough inspections before and after each guest
                  stay, with professional cleaning services following our
                  detailed checklist. Our local maintenance team addresses any
                  issues promptly, and we perform quarterly deep cleans and
                  preventative maintenance checks.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  What happens if there's damage to my property?
                </h3>
                <p className="text-gray-600">
                  We require all guests to agree to strict house rules and
                  provide a security deposit. Additionally, we have
                  comprehensive insurance coverage for all properties we manage.
                  In the rare event of damage, our team handles the entire
                  claims process, so you don't have to worry.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  How much more can I earn with short-term rentals?
                </h3>
                <p className="text-gray-600">
                  While results vary by location and property type, our clients
                  typically see 20-40% higher returns compared to traditional
                  long-term rentals. We'd be happy to provide a personalized
                  revenue projection for your specific property during a
                  consultation.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  How quickly will my property be booked?
                </h3>
                <p className="text-gray-600">
                  Most properties begin receiving bookings within days of
                  listing. We optimize listings across multiple platforms and
                  use dynamic pricing strategies to maximize both occupancy
                  rates and nightly rates based on seasonal demand, local
                  events, and market trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free property assessment and revenue
              projection.
            </p>
            <Button href="/contact" variant="primary" size="large" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>;
}