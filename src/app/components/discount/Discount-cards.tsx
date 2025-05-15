import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const healthPackages = [
  {
    id: 1,
    title: "Basic Health Package",
    tests: "Total Tests: 42",
    description: "CBC, FBS, Creatinine, Urea, Cholesterol, SGPT, Calcium, Sodium, Potassium, Chloride, Urine",
    oldPrice: "Rs. 1500",
    newPrice: "Rs. 700",
    discount: "53% off",
    image: "/ChatGPT Image Apr 11, 2025, 01_43_22 PM.png"
  },
  {
    id: 2,
    title: "Regular Health Package",
    tests: "Total Tests: 47",
    description: "CBC, FBS, PPBS, Creatinine, Urea, Uric Acid, Calcium, Sodium, Potassium, Chloride, Cholesterol, SGPT, SGOT, Thyroid Profile, Urine",
    oldPrice: "Rs. 2500",
    newPrice: "Rs. 1000",
    discount: "60% off",
    image: "/ChatGPT Image Apr 11, 2025, 01_43_27 PM.png"
  },
  {
    id: 3,
    title: "Complete Health Package",
    tests: "Total Tests: 66",
    description: "CBC, FBS, PPBS, HBA1C, Uric Acid, Calcium, Lipid Profile, Renal Profile, Liver Profile, Thyroid Profile, Urine",
    oldPrice: "Rs. 3500",
    newPrice: "Rs. 1500",
    discount: "57% off",
    image: "/ChatGPT Image Apr 11, 2025, 01_47_40 PM.png"
  },
  {
    id: 4,
    title: "Full Body Health Package",
    tests: "Total Tests: 68",
    description: "CBC, FBS, PPBS, HBA1C, Uric Acid, Calcium, Vitamin B, Lipid Profile, Renal Profile, Liver Profile, Thyroid Profile, Urine, ECG",
    oldPrice: "Rs. 4500",
    newPrice: "Rs. 2000",
    discount: "56% off",
    image: "/ChatGPT Image Apr 11, 2025, 01_43_37 PM.png"
  },
  {
    id: 5,
    title: "Anemia Package",
    tests: "Total Tests: 24",
    description: "Iron Level, Iron TIBC, Ferritin, Transferrin Saturation, CBC, Vitamin B12, Vitamin D, Folic Acid, Thyroid, Sickling Test",
    oldPrice: "Rs. 8500",
    newPrice: "Rs. 3500",
    discount: "59% off",
    image: "/ChatGPT Image Apr 11, 2025, 01_43_41 PM.png"
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
  className="object-contain object-top bg-white" // or use bg-[#FFF5F5] to match the card background
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
