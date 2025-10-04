import React, { lazy } from 'react';
import { ContactForm } from '../components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
export function ContactPage() {
  return <div className="pt-16 bg-white w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="Contact background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white opacity-90">
              Have questions about our services? Get in touch with our team
              today.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information and Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-600">
                      123 Rental Street
                      <br />
                      Cityville, State 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Monday-Friday, 9am-5pm EST
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">info@stayease.com</p>
                    <p className="text-gray-500 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday-Friday: 9am-5pm
                      <br />
                      Saturday: 10am-2pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215272253035!2d-73.98670242346496!3d40.757978871397186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" title="StayEase Office Location"></iframe>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                What areas do you service?
              </h3>
              <p className="text-gray-600">
                We currently manage properties in downtown Cityville, Beachtown,
                and Mountain View areas. Contact us to check if we service your
                specific location.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                What are your management fees?
              </h3>
              <p className="text-gray-600">
                Our management fees typically range from 15-25% depending on the
                property location, size, and services required. We'll provide a
                custom quote after assessing your property.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                How quickly can you start managing my property?
              </h3>
              <p className="text-gray-600">
                Once we've completed the property assessment and signed the
                management agreement, we can typically have your property listed
                and ready for bookings within 1-2 weeks.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Do I need to furnish my property?
              </h3>
              <p className="text-gray-600">
                Yes, short-term rentals need to be fully furnished. We can
                provide guidance on furnishing requirements and even offer our
                furnishing service for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
}