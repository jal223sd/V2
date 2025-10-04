import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Wifi, MapPin, Bed, Bath, Car, Star, Award, ThumbsUp } from 'lucide-react';
import { Button } from './Button';
import { Property } from '../../data/properties';
interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}
export function PropertyModal({
  property,
  isOpen,
  onClose
}: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  // Reset image index when property changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [property]);
  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && property) {
        setCurrentImageIndex(prev => prev === 0 ? property.images.length - 1 : prev - 1);
      } else if (e.key === 'ArrowRight' && property) {
        setCurrentImageIndex(prev => prev === property.images.length - 1 ? 0 : prev + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, property, onClose]);
  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  // Handle image navigation
  const nextImage = () => {
    if (!property) return;
    setCurrentImageIndex(prev => prev === property.images.length - 1 ? 0 : prev + 1);
  };
  const prevImage = () => {
    if (!property) return;
    setCurrentImageIndex(prev => prev === 0 ? property.images.length - 1 : prev - 1);
  };
  // Determine if property is popular based on rating
  const isPopular = property?.rating && property.rating >= 4.8;
  // Determine if property is new (placeholder logic - could be based on real data)
  const isNew = property?.id && property.id > 4;
  if (!property || !isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop without blur */}
      <div className="absolute inset-0 bg-black/80 transition-opacity duration-300" onClick={onClose} />
      {/* Modal */}
      <div ref={modalRef} className="bg-white rounded-xl shadow-lg w-full max-w-5xl max-h-[90vh] overflow-hidden" style={{
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale' // Better text rendering in Firefox
    }} role="dialog" aria-modal="true" aria-labelledby="property-modal-title">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2.5 text-gray-800 transition-colors shadow-md" aria-label="Close modal">
          <X size={22} />
        </button>
        <div className="flex flex-col lg:flex-row max-h-[90vh]">
          {/* Left side - Image Gallery */}
          <div className="lg:w-1/2 h-72 sm:h-96 lg:h-auto lg:max-h-[90vh] relative">
            <img src={property.images[currentImageIndex]} alt={`${property.title} - image ${currentImageIndex + 1}`} className="w-full h-full object-cover" style={{
            transform: 'translateZ(0)'
          }} />
            {/* Image Navigation */}
            <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-4">
              <button onClick={prevImage} className="bg-white hover:bg-gray-100 rounded-full p-3 text-gray-800 transition-colors shadow-md" aria-label="Previous image">
                <ChevronLeft size={22} />
              </button>
              <div className="bg-black/70 text-white px-4 py-2 rounded-full text-base font-medium">
                {currentImageIndex + 1} / {property.images.length}
              </div>
              <button onClick={nextImage} className="bg-white hover:bg-gray-100 rounded-full p-3 text-gray-800 transition-colors shadow-md" aria-label="Next image">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
          {/* Right side - Content */}
          <div className="lg:w-1/2 p-6 md:p-8 overflow-y-auto bg-white">
            {/* Property Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-3">
                <h2 id="property-modal-title" className="text-2xl md:text-3xl font-bold text-gray-800" style={{
                textRendering: 'optimizeLegibility'
              }}>
                  {property.title}
                </h2>
                {/* Rating */}
                <div className="flex items-center bg-blue-50 px-3 py-2 rounded-md ml-4">
                  <Star size={18} className="text-yellow-500 fill-current" />
                  <span className="ml-1.5 text-gray-700 font-semibold text-base">
                    {property.rating}
                  </span>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center text-gray-700 mb-3 text-base">
                <MapPin size={18} className="mr-2 text-blue-600 flex-shrink-0" />
                <span className="font-medium">{property.location}</span>
              </div>
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {isPopular && <div className="inline-flex items-center bg-amber-100 text-amber-800 text-sm px-3 py-1.5 rounded-full font-medium">
                    <Award size={14} className="mr-1.5 flex-shrink-0" />
                    Most Popular
                  </div>}
                {isNew && <div className="inline-flex items-center bg-green-100 text-green-800 text-sm px-3 py-1.5 rounded-full font-medium">
                    New Listing
                  </div>}
              </div>
            </div>
            {/* Property Highlights */}
            <div className="bg-blue-50 p-5 rounded-lg mb-6 border border-blue-100">
              <h3 className="text-base font-semibold text-blue-800 mb-2 uppercase tracking-wider">
                Property Highlights
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {property.description}
              </p>
            </div>
            {/* Key Details */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <ThumbsUp size={18} className="mr-2 text-blue-600 flex-shrink-0" />
                Key Details
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-4">
                <div className="flex items-center">
                  <Bed size={20} className="mr-3 text-blue-600 flex-shrink-0" />
                  <span className="text-base">
                    {property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} Bedroom${property.bedrooms > 1 ? 's' : ''}`}
                  </span>
                </div>
                <div className="flex items-center">
                  <Bath size={20} className="mr-3 text-blue-600 flex-shrink-0" />
                  <span className="text-base">
                    {property.bathrooms} Bathroom
                    {property.bathrooms > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="flex items-center">
                  <Car size={20} className="mr-3 text-blue-600 flex-shrink-0" />
                  <span className="text-base">
                    {property.parking ? 'Parking Available' : 'No Parking'}
                  </span>
                </div>
                <div className="flex items-center">
                  <Wifi size={20} className="mr-3 text-blue-600 flex-shrink-0" />
                  <span className="text-base">
                    {property.wifi ? 'Free Wi-Fi' : 'No Wi-Fi'}
                  </span>
                </div>
              </div>
            </div>
            {/* Full Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                About This Property
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {property.fullDescription}
              </p>
            </div>
            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Amenities
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {property.amenities.map((amenity, index) => <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-2.5"></div>
                    <span className="text-base">{amenity}</span>
                  </li>)}
              </ul>
            </div>
            {/* Host Notes */}
            <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-200">
              <h3 className="text-base font-semibold text-gray-800 mb-2 uppercase tracking-wider">
                Host Notes
              </h3>
              <p className="text-gray-700 text-base italic">
                "This property is perfect for{' '}
                {property.bedrooms > 2 ? 'families' : 'couples'} looking to
                enjoy the{' '}
                {property.location.includes('Beach') || property.location.includes('Lake') ? 'water and relaxation' : property.location.includes('Mountain') ? 'mountain views and outdoor activities' : 'local attractions and city life'}
                . Please contact us for any special requests!"
              </p>
            </div>
            {/* Price and Booking */}
            <div className="flex justify-between items-center pt-5 mt-6 border-t border-gray-200">
              <div>
                <div className="text-blue-600 font-bold text-2xl">
                  ${property.price}
                  <span className="text-gray-500 font-normal text-base ml-1">
                    /night
                  </span>
                </div>
                <div className="text-gray-600 text-base">
                  Includes taxes & fees
                </div>
              </div>
              <Button href="/booking" variant="primary" size="large" className="px-8 py-3.5 text-lg font-medium shadow-md">
                Reserve Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}