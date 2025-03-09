"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/Footer';
import SideButton from '../components/SideButtons/side-button';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "doctors",
    position: "Chief Medical Officer",
    image: "/doctor-image.jpg",
    description: "Specializes in diagnostic medicine with over 15 years of experience."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "doctors",
    position: "Senior Pathologist",
    image: "/doctor-image.jpg",
    description: "Expert in laboratory medicine and molecular diagnostics."
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "nurses",
    position: "Head Nurse",
    image: "/doctor-image.jpg",
    description: "Leads the nursing team with dedication and compassion."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "management",
    position: "Operations Director",
    image: "/doctor-image.jpg",
    description: "Ensures smooth functioning of all diagnostic services."
  }
];

const WhyChooseUsIcons = {
  equipment: (
    <svg className="w-6 h-6 text-[#789e1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  professionals: (
    <svg className="w-6 h-6 text-[#789e1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  results: (
    <svg className="w-6 h-6 text-[#789e1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  home: (
    <svg className="w-6 h-6 text-[#789e1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  pricing: (
    <svg className="w-6 h-6 text-[#789e1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  network: (
    <svg className="w-6 h-6 text-[#789e1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

const ValuesIcons = {
  accuracy: (
    <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  patient: (
    <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  ethics: (
    <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  innovation: (
    <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  improvement: (
    <svg className="w-8 h-8 text-[#325818] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
};

const AboutPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTeamMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.role === activeFilter);

  return (
    <div className="min-h-screen">
    <div className="flex flex-col items-center justify-center w-full">
      <Navbar />
      <div className="mt-[100px] w-[95%] max-w-7xl mx-auto p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#325818] via-[#41691b] to-[#789e1f] animate-gradient-x rounded-t-4xl"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#325818]/5 via-[#41691b]/5 to-[#789e1f]/5 blur-3xl transform -skew-y-6 scale-150 animate-pulse-slow"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 md:h-[55px] sm:mb-10 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent text-center tracking-tight animate-gradient-x">
              About Aarogya Diagnostic
            </h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-[#325818] via-[#41691b] to-[#789e1f] rounded-full transform transition-all duration-300 hover:scale-x-110"></div>
            </div>
            <div className="space-y-8 text-gray-700">
              <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto hover:text-gray-900 transition-colors duration-300 font-light">
                Welcome to Aarogya Diagnostic, your trusted partner in healthcare diagnostics. 
                We are committed to providing accurate, timely, and comprehensive diagnostic services 
                to help you make informed decisions about your health.
              </p>
            </div>
          </div>
        </div>
          <div className="bg-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-[#325818] flex items-center">
              <span className="mr-3 text-2xl">🎯</span> Our Mission
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
              To deliver exceptional diagnostic services with precision and care, making quality 
              healthcare accessible to all. We strive to be at the forefront of medical 
              diagnostics through continuous innovation and adherence to international standards.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm mt-8">
            <h2 className="text-3xl font-bold mb-6 text-[#325818] flex items-center">
              <span className="mr-3 text-2xl">✨</span> Why Choose Us?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#325818]/5 transition-all duration-300 group">
                {WhyChooseUsIcons.equipment}
                <span>State-of-the-art diagnostic equipment</span>
              </li>
              <li className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#325818]/5 transition-all duration-300 group">
                {WhyChooseUsIcons.professionals}
                <span>Highly qualified and experienced medical professionals</span>
              </li>
              <li className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#325818]/5 transition-all duration-300 group">
                {WhyChooseUsIcons.results}
                <span>Quick and accurate test results</span>
              </li>
              <li className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#325818]/5 transition-all duration-300 group">
                {WhyChooseUsIcons.home}
                <span>Convenient home collection services</span>
              </li>
              <li className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#325818]/5 transition-all duration-300 group">
                {WhyChooseUsIcons.pricing}
                <span>Competitive and transparent pricing</span>
              </li>
              <li className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#325818]/5 transition-all duration-300 group">
                {WhyChooseUsIcons.network}
                <span>Wide network of collection centers</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl mt-8">
            <h2 className="text-3xl font-bold mb-6 text-[#325818] flex items-center">
              <span className="mr-3 text-2xl">💫</span> Our Values
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#325818]/10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                  {ValuesIcons.accuracy}
                </div>
                <span>Accuracy and Reliability</span>
              </li>
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#325818]/10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                  {ValuesIcons.patient}
                </div>
                <span>Patient-Centric Approach</span>
              </li>
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#325818]/10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                  {ValuesIcons.ethics}
                </div>
                <span>Ethical Practices</span>
              </li>
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#325818]/10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                  {ValuesIcons.innovation}
                </div>
                <span>Innovation and Technology</span>
              </li>
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#325818]/10 rounded-full flex items-center justify-center group-hover:bg-[#325818] transition-all duration-300">
                  {ValuesIcons.improvement}
                </div>
                <span>Continuous Improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-[#325818] text-center">Our Team</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-sm ${activeFilter === 'all' ? 'bg-[#325818] text-white shadow-[#325818]/20' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#325818]'}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('doctors')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-sm ${activeFilter === 'doctors' ? 'bg-[#325818] text-white shadow-[#325818]/20' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#325818]'}`}
          >
            Doctors
          </button>
          <button
            onClick={() => setActiveFilter('nurses')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-sm ${activeFilter === 'nurses' ? 'bg-[#325818] text-white shadow-[#325818]/20' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#325818]'}`}
          >
            Nurses
          </button>
          <button
            onClick={() => setActiveFilter('management')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-medium shadow-sm ${activeFilter === 'management' ? 'bg-[#325818] text-white shadow-[#325818]/20' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#325818]'}`}
          >
            Management
          </button>
        </div>
      
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeamMembers.map((member) => (
            <div key={member.id} className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-opacity-75">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#325818] mb-2 group-hover:text-[#41691b] transition-colors duration-300">{member.name}</h3>
                    <p className="text-sm font-medium text-[#789e1f]">{member.position}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full text-xs font-medium bg-[#325818]/10 text-[#325818] capitalize">{member.role}</span>
                </div>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#325818]">Our Facilities</h2>
        <div className="overflow-x-auto pb-6 scrollbar-hide w-full flex justify-center">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 min-w-max">
            <style jsx global>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
                -webkit-overflow-scrolling: touch;
              }
            `}</style>
            <div className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px]">
              <Image
                src="/photo-1552072804-3ba9555a8a74.jpg"
                alt="Modern Diagnostic Center"
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <p className="text-[#325818] text-lg font-semibold bg-white/80 px-6 py-3 rounded-lg shadow-lg">State-of-the-art Facilities</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px]">
              <Image
                src="/photo-1617633784388-f1818619287b.jpg"
                alt="Advanced Laboratory"
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <p className="text-[#325818] text-lg font-semibold bg-white/80 px-6 py-3 rounded-lg shadow-lg">Advanced Laboratory</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px]">
              <Image
                src="/doctor-image.jpg"
                alt="Expert Medical Team"
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <p className="text-[#325818] text-lg font-semibold bg-white/80 px-6 py-3 rounded-lg shadow-lg">Expert Medical Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideButton />
      <Footer/>
    </div>
     
  );
};

export default AboutPage;