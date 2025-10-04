import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Button } from './Button';
import { Property } from '../../data/properties';
interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}
export function PropertyCard({
  property,
  onViewDetails
}: PropertyCardProps) {
  const {
    image,
    title,
    location,
    rating,
    price,
    description
  } = property;
  return <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 h-full flex flex-col">
      {/* Property Image */}
      <div className="h-60 overflow-hidden">
        <img src={property.images[0]} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
      </div>
      {/* Property Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded-md">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-700 font-medium text-sm">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex items-center mb-4 text-gray-600">
          <MapPin size={16} className="mr-1.5" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-gray-600 mb-5 line-clamp-2 text-sm flex-grow">
          {description}
        </p>
        <div className="flex justify-between items-center pt-2 border-t border-gray-100 mt-auto">
          <div className="text-blue-600 font-bold text-lg">
            ${price}
            <span className="text-gray-500 font-normal text-sm">/night</span>
          </div>
          <Button variant="outline" size="small" className="text-sm" onClick={() => onViewDetails(property)}>
            View Details
          </Button>
        </div>
      </div>
    </div>;
}