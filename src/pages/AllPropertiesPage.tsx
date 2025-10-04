import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Search, SlidersHorizontal } from 'lucide-react';
import { PropertyCard } from '../components/ui/PropertyCard';
import { PropertyModal } from '../components/ui/PropertyModal';
import { propertiesData, Property } from '../data/properties';
export function AllPropertiesPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [bedroomFilter, setBedroomFilter] = useState<string>('all');
  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Filter properties based on search and filters
  const filteredProperties = propertiesData.filter(property => {
    // Search filter
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || property.location.toLowerCase().includes(searchTerm.toLowerCase()) || property.description.toLowerCase().includes(searchTerm.toLowerCase());
    // Price filter
    let matchesPrice = true;
    if (priceFilter === 'under-100') {
      matchesPrice = property.price < 100;
    } else if (priceFilter === '100-200') {
      matchesPrice = property.price >= 100 && property.price <= 200;
    } else if (priceFilter === '200-300') {
      matchesPrice = property.price > 200 && property.price <= 300;
    } else if (priceFilter === 'over-300') {
      matchesPrice = property.price > 300;
    }
    // Bedroom filter
    let matchesBedrooms = true;
    if (bedroomFilter === 'studio') {
      matchesBedrooms = property.bedrooms === 0;
    } else if (bedroomFilter === '1') {
      matchesBedrooms = property.bedrooms === 1;
    } else if (bedroomFilter === '2') {
      matchesBedrooms = property.bedrooms === 2;
    } else if (bedroomFilter === '3+') {
      matchesBedrooms = property.bedrooms >= 3;
    }
    return matchesSearch && matchesPrice && matchesBedrooms;
  });
  return <div className="pt-16 bg-white w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Properties background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-white mb-6 hover:underline">
              <ChevronLeft size={16} className="mr-1" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore All Our Properties
            </h1>
            <p className="text-xl text-white opacity-90">
              Find the perfect accommodation for your next stay
            </p>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input type="text" placeholder="Search by name, location or features..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center">
                <SlidersHorizontal size={18} className="mr-2 text-gray-600" />
                <span className="text-gray-700 font-medium">Filters:</span>
              </div>
              {/* Price Filter */}
              <select value={priceFilter} onChange={e => setPriceFilter(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="all">Price: Any</option>
                <option value="under-100">Under $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200-300">$200 - $300</option>
                <option value="over-300">Over $300</option>
              </select>
              {/* Bedrooms Filter */}
              <select value={bedroomFilter} onChange={e => setBedroomFilter(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="all">Bedrooms: Any</option>
                <option value="studio">Studio</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3+">3+ Bedrooms</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Properties Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {filteredProperties.length > 0 ? <>
              <p className="text-gray-600 mb-8">
                Showing {filteredProperties.length}{' '}
                {filteredProperties.length === 1 ? 'property' : 'properties'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map(property => <PropertyCard key={property.id} property={property} onViewDetails={handleViewDetails} />)}
              </div>
            </> : <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No properties found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
            </div>}
        </div>
      </section>
      {/* Property Details Modal */}
      <PropertyModal property={selectedProperty} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>;
}