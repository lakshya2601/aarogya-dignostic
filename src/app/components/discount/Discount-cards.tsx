import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const healthPackages = [
  {
    id: 1,
    title: "Energy Package",
    tests: "Includes 16 Tests",
    description: "Liver Function Test, 25 OH Cholecalciferol (D2+D3), Vitamin B - 12 Level, Fasting Insulin & Glucose",
    oldPrice: "Rs. 4360",
    newPrice: "Rs. 1500",
    discount: "66% off",
    image: "/photo-1617633784388-f1818619287b.jpg"  // Add image for energy package
  },
  {
    id: 2,
    title: "Gym Package - TN",
    tests: "Includes 52 Tests",
    description: "Glyco Hemoglobin (HbA1c), Liver Function Test, TSH, Lipid Profile, Urea, Creatinine, Uric Acid, 25...",
    oldPrice: "Rs. 7815",
    newPrice: "Rs. 2899",
    discount: "63% off",
    image: "/images/gym-package.jpg"  // Add image for gym package
  },
  {
    id: 3,
    title: "Men's Health Check-Basic",
    tests: "Includes 50 Tests",
    description: "Glycon Hemoglobin (HbA1c), Liver Function Test, TSH, Lipid Profile, Urea, Creatinine, Uric Acid, 25...",
    oldPrice: "Rs. 5775",
    newPrice: "Rs. 1999",
    discount: "65% off",
    image: "/images/mens-health.jpg"  // Add image for men's health
  },
  {
    id: 4,
    title: "Full Body Checkup",
    tests: "Includes 60 Tests",
    description: "Liver Function Test, Kidney Profile, Lipid Profile, Thyroid Panel, Complete Blood Count, Diabetes Test...",
    oldPrice: "Rs. 6499",
    newPrice: "Rs. 2499",
    discount: "62% off",
    image: "/images/full-body.jpg"  // Add image for full body checkup
  },
  {
    id: 5,
    title: "Heart Health Package",
    tests: "Includes 45 Tests",
    description: "Cardiac Risk Markers, Lipid Profile, ECG, Blood Pressure, Complete Blood Count, Diabetes Test...",
    oldPrice: "Rs. 5999",
    newPrice: "Rs. 2299",
    discount: "61% off",
    image: "/images/heart-health.jpg"  // Add image for heart health
  }
];

const HealthPackages = () => {
  return (
    <div className="content-wrapper w-full bg-[#FFF5F5] py-12">
      <div className="px-4 w-full md:px-6 lg:px-9">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-[#B91C1C]">
            Popular Health Packages
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory">
          {healthPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative w-[300px] md:w-[360px] h-[500px] md:h-[500px] overflow-hidden rounded-2xl group bg-white shadow-lg flex-shrink-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0 md:transition-transform md:duration-700 md:ease-in-out md:group-hover:scale-100 md:scale-110">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Mobile Static Content */}
              <div className="md:hidden absolute w-full bottom-0 bg-[#f16b6b] text-center px-6 py-6">
                <div className="relative">
                  <div className="absolute -top-16 left-0 w-full h-16 bg-[#f16b6b] rounded-t-md">
                    <div className="w-full h-full bg-[#f16b6b] rounded-t-[50%]"></div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {pkg.title}
                  </h3>
                  <p className="mb-2 text-sm text-white/90">{pkg.tests}</p>
                  <p className="mb-3 text-xs text-white/80">{pkg.description}</p>
                  <div className="flex gap-3 justify-center items-center mb-2">
                    <span className="text-sm line-through text-white/60">{pkg.oldPrice}</span>
                    <span className="text-lg font-bold text-white">{pkg.newPrice}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#991B1B]">
                    Save {pkg.discount} Today!
                  </p>
                </div>
              </div>

              {/* Desktop Content with Hover - remains the same */}
              <div className="absolute w-full transition-all duration-700 ease-in-out bottom-0 hidden md:block md:group-hover:translate-y-full md:group-hover:bottom-full bg-[#f16b6b] text-center px-14 py-12 z-10">
                <div className="relative">
                  {/* Curved top edge - remains the same */}
                  <div className="absolute -top-16 md:-top-20 left-0 w-full h-16 md:h-20 bg-[#f16b6b] rounded-t-md">
                    <div className="w-full h-full bg-[#f16b6b] rounded-t-[50%]"></div>
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl md:mb-4">
                    {pkg.title}
                  </h3>
                  <p className="mb-2 text-sm text-white/90">{pkg.tests}</p>
                  <div className="flex gap-3 justify-center items-center">
                    <span className="text-sm line-through text-white/60">{pkg.oldPrice}</span>
                    <span className="text-lg font-bold text-white">{pkg.newPrice}</span>
                  </div>
                </div>
              </div>

              {/* Extra Content (Shows on Hover - Hidden on Mobile) */}
              <div className="absolute bottom-0 w-full h-1/2 bg-[#f16b6b] hidden md:flex items-center justify-center flex-col p-6 text-[#FFF1F1] transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0">
                <p className="mb-4 text-sm text-white/80">{pkg.description}</p>
                <h4 className="text-xl text-center">
                  Save <span className="text-[#ffffff] font-extrabold">{pkg.discount}</span> Today!
                </h4>
              </div>

              {/* Discount Badge - remains the same */}
              <div className="absolute top-4 right-4 bg-[#EF4444] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {pkg.discount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
