import React from 'react';


const healthPackages = [
  {
    id: 1,
    title: "Energy Package",
    tests: "Includes 16 Tests",
    description: "Liver Function Test, 25 OH Cholecalciferol (D2+D3), Vitamin B - 12 Level, Fasting Insulin & Glucose",
    oldPrice: "Rs. 4360",
    newPrice: "Rs. 1500",
    discount: "66% off",
  },
  {
    id: 2,
    title: "Gym Package - TN",
    tests: "Includes 52 Tests",
    description: "Glyco Hemoglobin (HbA1c), Liver Function Test, TSH, Lipid Profile, Urea, Creatinine, Uric Acid, 25...",
    oldPrice: "Rs. 7815",
    newPrice: "Rs. 2899",
    discount: "63% off",
  },
  {
    id: 3,
    title: "Men's Health Check-Basic",
    tests: "Includes 50 Tests",
    description: "Glyco Hemoglobin (HbA1c), Liver Function Test, TSH, Lipid Profile, Urea, Creatinine, Uric Acid, 25...",
    oldPrice: "Rs. 5775",
    newPrice: "Rs. 1999",
    discount: "65% off",
  },
  {
    id: 4,
    title: "Full Body Checkup",
    tests: "Includes 60 Tests",
    description: "Liver Function Test, Kidney Profile, Lipid Profile, Thyroid Panel, Complete Blood Count, Diabetes Test...",
    oldPrice: "Rs. 6499",
    newPrice: "Rs. 2499",
    discount: "62% off",
  },
  {
    id: 5,
    title: "Heart Health Package",
    tests: "Includes 45 Tests",
    description: "Cardiac Risk Markers, Lipid Profile, ECG, Blood Pressure, Complete Blood Count, Diabetes Test...",
    oldPrice: "Rs. 5999",
    newPrice: "Rs. 2299",
    discount: "61% off",
  }
];

const HealthPackages = () => {
  return (
    <div className="w-[95%] mx-auto p-4 sm:p-6 mb-[50px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-900 text-xl sm:text-2xl font-semibold">Popular Health Packages</h2>
      </div>

      {/* Scrollable Container with Hidden Scrollbar */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {healthPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 w-[280px] sm:w-72 flex-shrink-0 border border-gray-200 relative hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-lg font-semibold">
              {pkg.discount}
            </div>
            <h3 className="text-purple-700 font-bold text-lg mt-6">{pkg.title}</h3>
            <p className="text-sm text-purple-500">{pkg.tests}</p>
            <p className="text-xs text-gray-600 mt-2">{pkg.description}</p>
            <p className="text-gray-400 text-sm mt-3 line-through">{pkg.oldPrice}</p>
            <p className="text-gray-900 text-lg font-bold">{pkg.newPrice}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPackages;
