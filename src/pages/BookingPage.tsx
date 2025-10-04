import React, { useState } from 'react';
import { Calendar, Users, MessageSquare, Check } from 'lucide-react';
// Sample property data
const properties = [{
  id: 1,
  name: 'Modern Downtown Loft',
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
  price: 125
}, {
  id: 2,
  name: 'Luxury Beachfront Villa',
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 350
}, {
  id: 3,
  name: 'Cozy Mountain Retreat',
  image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  price: 200
}];
export function BookingPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    propertyId: '',
    specialRequests: ''
  });
  // Form submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  // Handle property selection
  const handlePropertySelect = (propertyId: number) => {
    setFormData(prev => ({
      ...prev,
      propertyId: propertyId.toString()
    }));
    // Clear property error
    if (formErrors.propertyId) {
      setFormErrors(prev => ({
        ...prev,
        propertyId: ''
      }));
    }
  };
  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.checkIn) {
      errors.checkIn = 'Check-in date is required';
    }
    if (!formData.checkOut) {
      errors.checkOut = 'Check-out date is required';
    } else if (formData.checkIn && new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      errors.checkOut = 'Check-out date must be after check-in date';
    }
    if (!formData.propertyId) {
      errors.propertyId = 'Please select a property';
    }
    return errors;
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Submit form
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        propertyId: '',
        specialRequests: ''
      });
      // Scroll to top of form
      window.scrollTo({
        top: document.getElementById('booking-form')?.offsetTop || 0,
        behavior: 'smooth'
      });
    }, 1500);
  };
  return <div className="pt-16 bg-white w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Booking background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book Your Stay
            </h1>
            <p className="text-xl text-white opacity-90">
              Select your dates, property, and complete your booking in minutes.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Properties Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map(property => <div key={property.id} className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border ${formData.propertyId === property.id.toString() ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-100'}`} onClick={() => handlePropertySelect(property.id)} role="button" tabIndex={0} aria-pressed={formData.propertyId === property.id.toString()}>
                <div className="h-48 overflow-hidden">
                  <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {property.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="text-blue-600 font-bold">
                      ${property.price}
                      <span className="text-gray-500 font-normal text-sm">
                        /night
                      </span>
                    </div>
                    <button type="button" onClick={e => {
                  e.stopPropagation();
                  handlePropertySelect(property.id);
                }} className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${formData.propertyId === property.id.toString() ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                      {formData.propertyId === property.id.toString() ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
          {formErrors.propertyId && <p className="text-red-500 text-center mt-4 font-medium">
              {formErrors.propertyId}
            </p>}
        </div>
      </section>
      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              {isSubmitted ? <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Thank You!
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Your booking request has been received. We'll contact you
                    shortly to confirm.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="px-6 py-2.5 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-md">
                    Make Another Booking
                  </button>
                </div> : <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Complete Your Booking
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below to request your booking.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Personal Information */}
                      <div className="space-y-6 md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                          Personal Information
                        </h3>
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Full Name *
                          </label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg transition-colors ${formErrors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`} required />
                          {formErrors.name && <p className="mt-1 text-sm text-red-500">
                              {formErrors.name}
                            </p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email Address *
                          </label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg transition-colors ${formErrors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`} required />
                          {formErrors.email && <p className="mt-1 text-sm text-red-500">
                              {formErrors.email}
                            </p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone Number (optional)
                          </label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                        </div>
                      </div>
                      {/* Booking Details */}
                      <div className="space-y-6 md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                          Booking Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Check-in Date *
                            </label>
                            <div className="relative">
                              <Calendar size={18} className="absolute top-3.5 left-4 text-gray-500" />
                              <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className={`w-full pl-12 pr-4 py-3 border rounded-lg transition-colors ${formErrors.checkIn ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`} required />
                            </div>
                            {formErrors.checkIn && <p className="mt-1 text-sm text-red-500">
                                {formErrors.checkIn}
                              </p>}
                          </div>
                          <div>
                            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1.5">
                              Check-out Date *
                            </label>
                            <div className="relative">
                              <Calendar size={18} className="absolute top-3.5 left-4 text-gray-500" />
                              <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} min={formData.checkIn ? new Date(new Date(formData.checkIn).getTime() + 86400000).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]} className={`w-full pl-12 pr-4 py-3 border rounded-lg transition-colors ${formErrors.checkOut ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`} required />
                            </div>
                            {formErrors.checkOut && <p className="mt-1 text-sm text-red-500">
                                {formErrors.checkOut}
                              </p>}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Number of Guests *
                          </label>
                          <div className="relative">
                            <Users size={18} className="absolute top-3.5 left-4 text-gray-500" />
                            <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-no-repeat bg-right" style={{
                          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                          backgroundPosition: 'right 0.5rem center',
                          backgroundSize: '1.5em 1.5em'
                        }} required>
                              {[...Array(10)].map((_, i) => <option key={i + 1} value={i + 1}>
                                  {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                                </option>)}
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* Special Requests */}
                      <div className="md:col-span-2">
                        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Special Requests (optional)
                        </label>
                        <div className="relative">
                          <MessageSquare size={18} className="absolute top-3.5 left-4 text-gray-500" />
                          <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={4} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Let us know if you have any special requests or requirements..." />
                        </div>
                      </div>
                    </div>
                    {/* Trust Badges */}
                    <div className="flex justify-center items-center space-x-6 border-t border-b border-gray-200 py-6 my-6">
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">Secure Form</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">
                          Fast Confirmation
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">
                          24/7 Support
                        </span>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <button type="submit" disabled={isLoading} className="px-8 py-3.5 bg-blue-600 text-white rounded-md font-medium text-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto min-w-[200px] flex items-center justify-center hover:shadow-lg">
                        {isLoading ? <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </> : 'Confirm Booking'}
                      </button>
                    </div>
                  </form>
                </>}
            </div>
          </div>
        </div>
      </section>
    </div>;
}