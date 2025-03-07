"use client";
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/Footer';


const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <div className="mt-[120px] w-[95%] mx-auto p-6 space-y-12">
        {/* Services Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#325818] via-[#41691b] to-[#789e1f]"></div>
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent text-center">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Values Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-[#325818]/10 transition-all duration-300 group">
              <div className="w-16 h-16 mb-4 bg-[#325818] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#325818] mb-2 group-hover:text-[#41691b]">Customer First</h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700">Prioritizing patient needs and satisfaction in everything we do.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-[#325818]/10 transition-all duration-300 group">
              <div className="w-16 h-16 mb-4 bg-[#325818] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#325818] mb-2 group-hover:text-[#41691b]">Ethics & Integrity</h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700">Maintaining highest standards of professional ethics and integrity.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-[#325818]/10 transition-all duration-300 group">
              <div className="w-16 h-16 mb-4 bg-[#325818] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#325818] mb-2 group-hover:text-[#41691b]">Quality</h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700">Delivering accurate and reliable diagnostic services.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-[#325818]/10 transition-all duration-300 group">
              <div className="w-16 h-16 mb-4 bg-[#325818] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#325818] mb-2 group-hover:text-[#41691b]">Accountability</h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700">Taking responsibility for our actions and results.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-[#325818]/10 transition-all duration-300 group">
              <div className="w-16 h-16 mb-4 bg-[#325818] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#325818] mb-2 group-hover:text-[#41691b]">Empathy & Compassion</h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700">Understanding and caring for our patients&apos; needs.</p>
            </div>
          </div>
        </div>

        {/* Network Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
            Our Network
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-[#325818] to-[#789e1f] text-white">
              <span className="text-4xl font-bold mb-2">50+</span>
              <span className="text-center">Clinical Laboratories</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-[#325818] to-[#789e1f] text-white">
              <span className="text-4xl font-bold mb-2">200+</span>
              <span className="text-center">Collection Centers</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-[#325818] to-[#789e1f] text-white">
              <span className="text-4xl font-bold mb-2">1M+</span>
              <span className="text-center">Patients Served</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-gradient-to-br from-[#325818] to-[#789e1f] text-white">
              <span className="text-4xl font-bold mb-2">10+</span>
              <span className="text-center">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-opacity-75 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#325818]/5 to-[#789e1f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h3 className="text-xl font-semibold mb-4 text-[#325818] group-hover:text-[#41691b] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
  );
};

export default ServicesPage;