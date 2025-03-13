import React from 'react';

interface TestPackage {
  id: number;
  name: string;
  description: string;
  tests: string[];
  price: number;
  discountedPrice: number;
  popularTests: boolean;
  preparationInstructions: string[];
  reportTime: string;
}

const testPackages: TestPackage[] = [
  {
    id: 1,
    name: 'Complete Health Checkup',
    description: 'Comprehensive health screening with 50+ essential parameters',
    tests: ['Complete Blood Count', 'Liver Function Test', 'Kidney Function Test', 'Lipid Profile', 'Thyroid Profile', 'Blood Sugar Test'],
    price: 4999,
    discountedPrice: 3499,
    popularTests: true,
    preparationInstructions: ['12 hours fasting required', 'Early morning sample collection recommended', 'Avoid heavy meals the night before'],
    reportTime: '24-48 hours'
  },
  {
    id: 2,
    name: 'Diabetes Care Package',
    description: 'Comprehensive diabetes screening and monitoring tests',
    tests: ['Fasting Blood Sugar', 'HbA1c', 'Kidney Function Test', 'Lipid Profile'],
    price: 2999,
    discountedPrice: 1999,
    popularTests: true,
    preparationInstructions: ['8-12 hours fasting required', 'Early morning sample collection recommended'],
    reportTime: '24 hours'
  },
  {
    id: 3,
    name: 'Heart Health Package',
    description: 'Essential tests for cardiovascular health assessment',
    tests: ['Lipid Profile', 'ECG', 'Cardiac Risk Markers', 'Blood Pressure Check'],
    price: 3499,
    discountedPrice: 2499,
    popularTests: false,
    preparationInstructions: ['12 hours fasting required', 'Avoid caffeine before ECG'],
    reportTime: '24-36 hours'
  }
];

const TestPackages: React.FC = () => {
  return (
    <div className="w-[95%] mx-auto p-6 mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#EF4444]">
        Diagnostic Test Packages
      </h2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testPackages.map((pkg) => (
          <div key={pkg.id} className="overflow-hidden bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            {pkg.popularTests && (
              <div className="absolute right-0 top-4 px-4 py-1 text-sm text-white bg-orange-500 transform -rotate-45 translate-x-4">
                Popular
              </div>
            )}
            
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-800">{pkg.name}</h3>
              <p className="mb-4 text-gray-600">{pkg.description}</p>
              
              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-gray-700">Included Tests:</h4>
                <ul className="space-y-1 list-disc list-inside text-gray-600">
                  {pkg.tests.map((test, index) => (
                    <li key={index}>{test}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-gray-700">Preparation Instructions:</h4>
                <ul className="space-y-1 list-disc list-inside text-gray-600">
                  {pkg.preparationInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-gray-400 line-through">₹{pkg.price}</span>
                  <span className="ml-2 text-2xl font-bold text-gray-800">₹{pkg.discountedPrice}</span>
                </div>
                <span className="text-sm text-gray-600">Report in {pkg.reportTime}</span>
              </div>
              
              <button 
                onClick={() => window.location.href = '/book-test'}
                type="button"
                className="py-2 w-full text-white bg-green-600 rounded-lg transition-colors duration-200 hover:bg-green-700"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPackages;