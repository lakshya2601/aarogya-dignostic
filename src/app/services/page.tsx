"use client";
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/Footer';

// SVG Icons for Service Cards
const DiagnosticIcon = () => (
  <svg className="w-12 h-12 text-[#325818] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const HomeCollectionIcon = () => (
  <svg className="w-12 h-12 text-[#325818] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const HealthPackageIcon = () => (
  <svg className="w-12 h-12 text-[#325818] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);

const OnlineReportIcon = () => (
  <svg className="w-12 h-12 text-[#325818] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
  </svg>
);

const ExpertConsultationIcon = () => (
  <svg className="w-12 h-12 text-[#325818] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const EmergencyServicesIcon = () => (
  <svg className="w-12 h-12 text-[#325818] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="mt-[120px] w-[95%] max-w-7xl mx-auto p-6 space-y-16">
        {/* Services Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#325818] via-[#41691b] to-[#789e1f]"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#325818]/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#789e1f]/5 rounded-full blur-3xl"></div>
          
          <h1 className="text-5xl font-bold mb-10 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent text-center">
            Our Services
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Diagnostic Tests"
              description="Comprehensive range of diagnostic tests with accurate and timely results."
              icon={<DiagnosticIcon />}
            />
            <ServiceCard
              title="Home Collection"
              description="Convenient sample collection service at your doorstep."
              icon={<HomeCollectionIcon />}
            />
            <ServiceCard
              title="Health Packages"
              description="Customized health check-up packages for different age groups and needs."
              icon={<HealthPackageIcon />}
            />
            <ServiceCard
              title="Online Reports"
              description="Access your test reports online anytime, anywhere."
              icon={<OnlineReportIcon />}
            />
            <ServiceCard
              title="Expert Consultation"
              description="Get expert advice from our qualified healthcare professionals."
              icon={<ExpertConsultationIcon />}
            />
            <ServiceCard
              title="Emergency Services"
              description="24/7 emergency testing services available."
              icon={<EmergencyServicesIcon />}
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#325818]/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#789e1f]/5 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <ValueCard
              title="Customer First"
              description="Prioritizing patient needs and satisfaction in everything we do."
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              }
            />

            <ValueCard
              title="Ethics & Integrity"
              description="Maintaining highest standards of professional ethics and integrity."
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              }
            />

            <ValueCard
              title="Quality"
              description="Delivering accurate and reliable diagnostic services."
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              }
            />

            <ValueCard
              title="Accountability"
              description="Taking responsibility for our actions and results."
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              }
            />

            <ValueCard
              title="Empathy & Compassion"
              description="Understanding and caring for our patients' needs."
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              }
            />
          </div>
        </div>

        {/* Network Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#325818]/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#789e1f]/5 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
            Our Network
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <NetworkCard number="50+" text="Clinical Laboratories" />
            <NetworkCard number="200+" text="Collection Centers" />
            <NetworkCard number="1M+" text="Patients Served" />
            <NetworkCard number="10+" text="Years of Excellence" />
          </div>
        </div>
      </div>
      <div className="mt-16 w-full">
        <Footer />
      </div>
    </div>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#325818]/5 to-[#789e1f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-[#325818] group-hover:text-[#41691b] transition-colors duration-300 text-center">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">{description}</p>
    </div>
  );
};

const ValueCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl border border-[#325818]/10 hover:bg-[#325818]/10 transition-all duration-300 group hover:shadow-lg">
      <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
        <svg className="w-10 h-10 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-[#325818] mb-3 group-hover:text-[#41691b]">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700">{description}</p>
    </div>
  );
};

const NetworkCard = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-[#325818] to-[#789e1f] text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <span className="text-5xl font-bold mb-3">{number}</span>
      <span className="text-center text-lg">{text}</span>
    </div>
  );
};

export default ServicesPage;