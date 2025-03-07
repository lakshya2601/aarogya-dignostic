"use client";
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/Footer';


const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <div className="mt-[120px] w-[95%] mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
          About Aarogya Diagnostic
        </h1>
        <div className="space-y-6 text-gray-700">
          <p>
            Welcome to Aarogya Diagnostic, your trusted partner in healthcare diagnostics. 
            We are committed to providing accurate, timely, and comprehensive diagnostic services 
            to help you make informed decisions about your health.
          </p>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#325818]">Our Mission</h2>
            <p>
              To deliver exceptional diagnostic services with precision and care, making quality 
              healthcare accessible to all. We strive to be at the forefront of medical 
              diagnostics through continuous innovation and adherence to international standards.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#325818]">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>State-of-the-art diagnostic equipment</li>
              <li>Highly qualified and experienced medical professionals</li>
              <li>Quick and accurate test results</li>
              <li>Convenient home collection services</li>
              <li>Competitive and transparent pricing</li>
              <li>Wide network of collection centers</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-[#325818]">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accuracy and Reliability</li>
              <li>Patient-Centric Approach</li>
              <li>Ethical Practices</li>
              <li>Innovation and Technology</li>
              <li>Continuous Improvement</li>
            </ul>
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
                  <img src="/photo-1552072804-3ba9555a8a74.jpg" alt="Modern Diagnostic Center" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">State-of-the-art Facilities</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px]">
                  <img src="/photo-1617633784388-f1818619287b.jpg" alt="Advanced Laboratory" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">Advanced Laboratory</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px]">
                  <img src="/doctor-image.jpg" alt="Expert Medical Team" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">Expert Medical Team</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px]">
                  <img src="/photo-1552072804-3ba9555a8a74.jpg" alt="Modern Equipment" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">Modern Equipment</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group cursor-pointer w-[300px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px]">
                  <img src="/photo-1617633784388-f1818619287b.jpg" alt="Research Lab" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">Research Lab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default AboutPage;