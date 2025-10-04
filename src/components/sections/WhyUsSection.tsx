import React from 'react';
import { Shield, Star, Clock, Briefcase, Home, MessageSquare } from 'lucide-react';
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
function Feature({
  icon,
  title,
  description
}: FeatureProps) {
  return <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 h-full">
      <div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>;
}
export function WhyUsSection() {
  const features = [{
    icon: <Shield size={32} strokeWidth={1.75} />,
    title: 'Trusted Management',
    description: 'We treat your property with the same care and attention we would give our own homes.'
  }, {
    icon: <Star size={32} strokeWidth={1.75} />,
    title: '5-Star Experiences',
    description: 'Our properties consistently receive top ratings from satisfied guests.'
  }, {
    icon: <Home size={32} strokeWidth={1.75} />,
    title: 'Prime Locations',
    description: "We operate in the most desirable neighborhoods to maximize your property's potential."
  }, {
    icon: <Clock size={32} strokeWidth={1.75} />,
    title: '24/7 Support',
    description: 'Our team is always available to address any concerns from you or your guests.'
  }, {
    icon: <Briefcase size={32} strokeWidth={1.75} />,
    title: 'Professional Cleaning',
    description: 'Our rigorous cleaning protocols ensure your property is always guest-ready.'
  }, {
    icon: <MessageSquare size={32} strokeWidth={1.75} />,
    title: 'Guest Screening',
    description: "We carefully vet all guests to ensure they'll treat your property with respect."
  }];
  return <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
            Why Choose <span className="text-blue-600">StayEase</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We take the hassle out of short-term rentals, allowing you to enjoy
            the benefits without the stress.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />)}
        </div>
      </div>
    </section>;
}