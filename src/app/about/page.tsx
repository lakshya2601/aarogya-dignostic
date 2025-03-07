"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/Footer';

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

const AboutPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTeamMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.role === activeFilter);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <div className="mt-[120px] w-[95%] mx-auto p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#325818] via-[#41691b] to-[#789e1f]"></div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent text-center">
          About Aarogya Diagnostic
        </h1>
        <div className="space-y-8 text-gray-700">
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto hover:text-gray-900 transition-colors duration-300">
            Welcome to Aarogya Diagnostic, your trusted partner in healthcare diagnostics. 
            We are committed to providing accurate, timely, and comprehensive diagnostic services 
            to help you make informed decisions about your health.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#325818] flex items-center">
              <span className="mr-2">🎯</span> Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              To deliver exceptional diagnostic services with precision and care, making quality 
              healthcare accessible to all. We strive to be at the forefront of medical 
              diagnostics through continuous innovation and adherence to international standards.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#325818] flex items-center">
              <span className="mr-2">✨</span> Why Choose Us?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
              <li className="flex items-center space-x-2 hover:text-[#325818] transition-colors duration-300">
                <span className="text-[#789e1f]">•</span>
                <span>State-of-the-art diagnostic equipment</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-[#325818] transition-colors duration-300">
                <span className="text-[#789e1f]">•</span>
                <span>Highly qualified and experienced medical professionals</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-[#325818] transition-colors duration-300">
                <span className="text-[#789e1f]">•</span>
                <span>Quick and accurate test results</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-[#325818] transition-colors duration-300">
                <span className="text-[#789e1f]">•</span>
                <span>Convenient home collection services</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-[#325818] transition-colors duration-300">
                <span className="text-[#789e1f]">•</span>
                <span>Competitive and transparent pricing</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-[#325818] transition-colors duration-300">
                <span className="text-[#789e1f]">•</span>
                <span>Wide network of collection centers</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#325818] flex items-center">
              <span className="mr-2">💫</span> Our Values
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-2">
                <span className="text-[#789e1f] font-bold">•</span>
                <span>Accuracy and Reliability</span>
              </li>
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-2">
                <span className="text-[#789e1f] font-bold">•</span>
                <span>Patient-Centric Approach</span>
              </li>
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-2">
                <span className="text-[#789e1f] font-bold">•</span>
                <span>Ethical Practices</span>
              </li>
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-2">
                <span className="text-[#789e1f] font-bold">•</span>
                <span>Innovation and Technology</span>
              </li>
              <li className="p-4 rounded-lg bg-gray-50 hover:bg-[#325818]/10 transition-colors duration-300 flex items-center space-x-2">
                <span className="text-[#789e1f] font-bold">•</span>
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
            <div key={member.id} className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
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

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#325818]">Our Facilities</h2>
        <div className="overflow-x-auto pb-6 scrollbar-hide">
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
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">State-of-the-art Facilities</p>
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
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Advanced Laboratory</p>
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
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Expert Medical Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
     
  );
};

export default AboutPage;