import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">StayEase</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About Us" />
            <NavLink to="/contact" label="Contact" />
          </nav>
          {/* Book Now Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/booking" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 hover:shadow-md">
              Book Now
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-5">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/about" label="About Us" />
            <MobileNavLink to="/contact" label="Contact" />
            <Link to="/booking" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition-all duration-300 text-center mt-2">
              Book Now
            </Link>
          </div>
        </div>}
    </header>;
}
function NavLink({
  to,
  label
}: {
  to: string;
  label: string;
}) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return <Link to={to} className={`font-medium text-base transition-colors duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
      {label}
    </Link>;
}
function MobileNavLink({
  to,
  label
}: {
  to: string;
  label: string;
}) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return <Link to={to} className={`font-medium py-2 text-lg transition-colors duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
      {label}
    </Link>;
}