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
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
        Diagnostic Test Packages
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            {pkg.popularTests && (
              <div className="bg-orange-500 text-white text-sm px-4 py-1 absolute right-0 top-4 -rotate-45 transform translate-x-4">
                Popular
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Included Tests:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {pkg.tests.map((test, index) => (
                    <li key={index}>{test}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Preparation Instructions:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {pkg.preparationInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-gray-400 line-through">₹{pkg.price}</span>
                  <span className="text-2xl font-bold text-gray-800 ml-2">₹{pkg.discountedPrice}</span>
                </div>
                <span className="text-sm text-gray-600">Report in {pkg.reportTime}</span>
              </div>
              
              <button 
                onClick={() => window.location.href = '/book-test'}
                type="button"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
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