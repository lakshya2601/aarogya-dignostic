"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white p-10 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 border border-gray-100 hover:shadow-2xl transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Corporate Office Information */}
          <div className="transform transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-4xl font-bold mb-10 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent tracking-tight animate-gradient">Contact Us</h2>
            <div className="mb-8 bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-16 before:h-1 before:bg-gradient-to-r before:from-[#325818] before:to-[#789e1f] pb-4">Corporate Office</h3>
              <div className="space-y-6">
                <p className="flex items-start group hover:text-[#325818] transition-all duration-300 transform hover:translate-x-2">
                  <span className="mr-3 text-xl group-hover:scale-125 transition-transform duration-300 text-[#325818]">📍</span>
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">No. 7, Industrial Estate, Opp. to World Trade Center,Perungudi, Chennai - 600 096, Tamil Nadu, India</span>
                </p>
                <p className="flex items-center group hover:text-[#325818] transition-all duration-300 transform hover:translate-x-2">
                  <span className="mr-3 text-xl group-hover:scale-125 transition-transform duration-300 text-[#325818]">📞</span>
                  <a href="tel:+919700369700" className="text-[#325818] hover:text-[#789e1f] transition-colors duration-300 font-medium">+91 9700369700</a>
                </p>
                <p className="flex items-center group hover:text-[#325818] transition-all duration-300 transform hover:translate-x-2">
                  <span className="mr-3 text-xl group-hover:scale-125 transition-transform duration-300 text-[#325818]">✉️</span>
                  <a href="mailto:info@neubergdiagnostics.com" className="text-[#325818] hover:text-[#789e1f] transition-colors duration-300 font-medium">info@neubergdiagnostics.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="transform transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-4xl font-bold mb-10 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent tracking-tight animate-gradient">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                  required
                />
              </div>
              <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                  required
                />
              </div>
              <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                  required
                />
              </div>
              <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-b from-[#325818] to-[#789e1f] text-white py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-lg hover:shadow-xl hover:from-[#41691b] hover:to-[#325818] relative overflow-hidden group"
              >
                <span className="relative z-10">Send An Enquiry</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#325818] to-[#789e1f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;