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
      <div className="mt-[120px] w-[95%] mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
          Book a Test
        </h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Test Type</label>
              <select
                name="testType"
                value={formData.testType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <div>
              <label className="block text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Preferred Time</label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Address for Sample Collection</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#325818] to-[#789e1f] text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity duration-200"
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