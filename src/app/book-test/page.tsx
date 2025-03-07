"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/Footer';


const BookTestPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    testType: '',
    preferredDate: '',
    preferredTime: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <div className="mt-[120px] w-[95%] mx-auto p-8 bg-white rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-95 border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent tracking-tight">
          Book a Test
        </h1>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <label className="block text-gray-700 mb-3 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                required
              />
            </div>
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <label className="block text-gray-700 mb-3 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                required
              />
            </div>
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <label className="block text-gray-700 mb-3 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                required
              />
            </div>
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <label className="block text-gray-700 mb-3 font-medium">Test Type</label>
              <select
                name="testType"
                value={formData.testType}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                required
              >
                <option value="">Select Test Type</option>
                <option value="blood">Blood Test</option>
                <option value="urine">Urine Test</option>
                <option value="covid">COVID-19 Test</option>
                <option value="thyroid">Thyroid Profile</option>
                <option value="diabetes">Diabetes Profile</option>
              </select>
            </div>
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <label className="block text-gray-700 mb-3 font-medium">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                required
              />
            </div>
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <label className="block text-gray-700 mb-3 font-medium">Preferred Time</label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md"
                required
              />
            </div>
          </div>
          <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <label className="block text-gray-700 mb-3 font-medium">Address for Sample Collection</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={4}
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#325818] focus:border-transparent transition-all duration-300 placeholder-gray-400 hover:border-[#789e1f] text-gray-700 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm hover:shadow-md resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#325818] to-[#789e1f] text-white py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-lg hover:shadow-xl hover:from-[#41691b] hover:to-[#325818]"
          >
            Book Test
          </button>
        </form>
      </div>
   
      <Footer />
    </div>
  );
};

export default BookTestPage;