"use client";
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/Footer';


const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <div className="mt-[120px] w-[95%] mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Diagnostic Tests"
            description="Comprehensive range of diagnostic tests with accurate and timely results."
          />
          <ServiceCard
            title="Home Collection"
            description="Convenient sample collection service at your doorstep."
          />
          <ServiceCard
            title="Health Packages"
            description="Customized health check-up packages for different age groups and needs."
          />
          <ServiceCard
            title="Online Reports"
            description="Access your test reports online anytime, anywhere."
          />
          <ServiceCard
            title="Expert Consultation"
            description="Get expert advice from our qualified healthcare professionals."
          />
          <ServiceCard
            title="Emergency Services"
            description="24/7 emergency testing services available."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-3 text-[#325818]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesPage;