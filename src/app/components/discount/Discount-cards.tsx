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
    description: "Glycon Hemoglobin (HbA1c), Liver Function Test, TSH, Lipid Profile, Urea, Creatinine, Uric Acid, 25...",
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
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">Popular Health Packages</h2>
      </div>

      {/* Scrollable Container with Hidden Scrollbar */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {healthPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-xl shadow-lg p-6 w-[280px] sm:w-72 flex-shrink-0 border border-gray-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-[380px]">            <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold transform group-hover:scale-105 transition-transform duration-300">
              {pkg.discount}
            </div>
            <div className="flex-1">
              <h3 className="text-[#325818] font-bold text-xl mt-6 group-hover:text-[#41691b] transition-colors duration-300">{pkg.title}</h3>
              <p className="text-sm text-[#789e1f] font-medium">{pkg.tests}</p>
              <p className="text-sm text-gray-600 mt-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">{pkg.description}</p>
              <div className="mt-4 space-y-1">
                <p className="text-gray-400 text-sm line-through">{pkg.oldPrice}</p>
                <p className="text-[#325818] text-2xl font-bold group-hover:text-[#41691b] transition-colors duration-300">{pkg.newPrice}</p>
              </div>
            </div>
            <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-[#325818] to-[#789e1f] text-white rounded-lg font-medium opacity-90 hover:opacity-100 transition-opacity duration-300">Book Now</button>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPackages;
