import React, { useState } from 'react';
import { PropertyCard } from '../ui/PropertyCard';
import { PropertyModal } from '../ui/PropertyModal';
import { Button } from '../ui/Button';
import { propertiesData, Property } from '../../data/properties';
export function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Show only the first 3 properties on the homepage
  const featuredProperties = propertiesData.slice(0, 3);
  return <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover our collection of exceptional rental properties
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button href="/properties" variant="outline" size="large" className="px-6">
              View All Properties
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProperties.map(property => <PropertyCard key={property.id} property={property} onViewDetails={handleViewDetails} />)}
        </div>
      </div>
      {/* Property Details Modal */}
      <PropertyModal property={selectedProperty} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>;
}