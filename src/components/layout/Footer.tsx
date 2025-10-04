import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">StayEase</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional short-term rental management services for property
              owners looking to maximize their investment.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={22} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="text-blue-400 mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center">
                <span className="text-blue-400 mr-2">•</span> Property
                Management
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="text-blue-400 mr-2">•</span> Guest
                Communication
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="text-blue-400 mr-2">•</span> Cleaning &
                Maintenance
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="text-blue-400 mr-2">•</span> Listing
                Optimization
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-blue-400" />
                <p className="text-gray-300">
                  123 Rental Street, Cityville, State 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-blue-400" />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-blue-400" />
                <p className="text-gray-300">info@stayease.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} StayEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}