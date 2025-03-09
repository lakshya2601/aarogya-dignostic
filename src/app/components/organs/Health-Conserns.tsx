import React, { useState } from 'react';

const HealthConcerns = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const concerns = [
    // Blood Tests
    { name: 'Complete Blood Count', icon: '🩸', type: 'blood', description: 'Basic blood cell analysis' },
    { name: 'Blood Sugar Test', icon: '📊', type: 'blood', description: 'Glucose level measurement' },
    { name: 'Hemoglobin Test', icon: '🔴', type: 'blood', description: 'Hb level check' },
    { name: 'Lipid Profile', icon: '💉', type: 'blood', description: 'Cholesterol and triglycerides test' },
    { name: 'Liver Function', icon: '🫁', type: 'blood', description: 'Liver enzyme analysis' },
    { name: 'Kidney Function', icon: '🫘', type: 'blood', description: 'Renal function assessment' },
    { name: 'Thyroid Profile', icon: '⚕️', type: 'blood', description: 'T3, T4, TSH analysis' },
    { name: 'HbA1c Test', icon: '📈', type: 'blood', description: 'Glycated hemoglobin test' },
    { name: 'Electrolytes Test', icon: '⚡', type: 'blood', description: 'Na, K, Cl levels' },
    { name: 'CRP Test', icon: '🔬', type: 'blood', description: 'Inflammation marker' },
    { name: 'ESR Test', icon: '📊', type: 'blood', description: 'Inflammation indicator' },
    { name: 'Vitamin Tests', icon: '💊', type: 'blood', description: 'Vitamin D & B12 levels' },
    { name: 'Iron Profile', icon: '🔋', type: 'blood', description: 'Iron deficiency check' },
    { name: 'D-Dimer Test', icon: '🔬', type: 'blood', description: 'Blood clot test' },
    { name: 'PT & INR', icon: '⏱️', type: 'blood', description: 'Blood clotting time' },
    
    // Hormonal Tests
    { name: 'Insulin Test', icon: '📈', type: 'hormonal', description: 'Insulin level measurement' },
    { name: 'Cortisol', icon: '⚡', type: 'hormonal', description: 'Stress hormone analysis' },
    { name: 'Prolactin', icon: '👶', type: 'hormonal', description: 'Milk hormone test' },
    { name: 'Testosterone', icon: '🔄', type: 'hormonal', description: 'Male hormone test' },
    { name: 'Estrogen', icon: '♀️', type: 'hormonal', description: 'Female hormone test' },
    { name: 'FSH', icon: '🔬', type: 'hormonal', description: 'Fertility hormone' },
    { name: 'LH', icon: '🔬', type: 'hormonal', description: 'Ovulation hormone' },
    
    // Cancer Screening
    { name: 'PSA Test', icon: '🎗️', type: 'cancer', description: 'Prostate cancer screening' },
    { name: 'CA-125', icon: '🔍', type: 'cancer', description: 'Ovarian cancer marker' },
    { name: 'CA 19-9', icon: '🔬', type: 'cancer', description: 'Pancreatic cancer marker' },
    { name: 'CEA Test', icon: '🔬', type: 'cancer', description: 'Cancer antigen test' },
    { name: 'PAP Smear', icon: '🔬', type: 'cancer', description: 'Cervical cancer screening' },
    { name: 'BRCA Test', icon: '🧬', type: 'cancer', description: 'Breast cancer gene test' },
    
    // Infection Tests
    { name: 'COVID-19', icon: '🦠', type: 'infection', description: 'RTPCR & Antigen test' },
    { name: 'Dengue', icon: '🦟', type: 'infection', description: 'NS1 Antigen test' },
    { name: 'Malaria', icon: '🦟', type: 'infection', description: 'Parasite detection' },
    { name: 'Typhoid', icon: '🔬', type: 'infection', description: 'Widal test' },
    { name: 'HIV', icon: '🔬', type: 'infection', description: 'AIDS screening test' },
    { name: 'Hepatitis', icon: '🔬', type: 'infection', description: 'HBV & HCV screening' },
    { name: 'TB Test', icon: '🫁', type: 'infection', description: 'Tuberculosis screening' },
    
    // Imaging Tests
    { name: 'X-Ray', icon: '📸', type: 'imaging', description: 'Radiological imaging' },
    { name: 'Ultrasound', icon: '🔊', type: 'imaging', description: 'Sound wave imaging' },
    { name: 'MRI Scan', icon: '🔄', type: 'imaging', description: 'Magnetic resonance imaging' },
    { name: 'CT Scan', icon: '🖥️', type: 'imaging', description: '3D body scanning' },
    { name: 'Mammography', icon: '📷', type: 'imaging', description: 'Breast imaging' },
    { name: 'ECG', icon: '❤️', type: 'imaging', description: 'Heart activity recording' },
    { name: 'Echo', icon: '💓', type: 'imaging', description: 'Heart ultrasound' },
    { name: 'TMT', icon: '🏃', type: 'imaging', description: 'Stress test' },
    
    // Specialized Tests
    { name: 'BMD', icon: '🦴', type: 'specialized', description: 'Bone density scan' },
    { name: 'PFT', icon: '🫁', type: 'specialized', description: 'Lung function test' },
    { name: 'Sleep Study', icon: '😴', type: 'specialized', description: 'Sleep pattern analysis' },
    { name: 'Holter Monitor', icon: '📱', type: 'specialized', description: '24-hr heart monitoring' },
    { name: 'Allergy Panel', icon: '🤧', type: 'specialized', description: 'Allergy testing' },
    { name: 'Genetic Tests', icon: '🧬', type: 'specialized', description: 'DNA analysis' }
  ];

  const getFilteredAndSortedConcerns = () => {
    let filtered = concerns;
    
    // Apply type filter
    if (activeFilter !== 'all' && activeFilter !== 'alphabet') {
      filtered = concerns.filter(concern => concern.type === activeFilter);
    }

    // Apply search filter
    filtered = filtered.filter(concern =>
      concern.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply alphabetical sorting if needed
    if (activeFilter === 'alphabet') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  };

  const filteredConcerns = getFilteredAndSortedConcerns();






  return (
<div className="w-full mx-auto p-8">
<div className="flex justify-center items-center mb-8 w-full">
    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent tracking-tight text-center">
      Search by Health Concerns
    </h2>
  </div>

  <div className="mb-8 space-y-6 md:mx-[200px]">
    <div className="relative">
      <input
        type="text"
        placeholder="Search Test"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        className="w-full px-6 py-4 pl-12 pr-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base transition-all duration-300 placeholder-gray-400 hover:border-green-300"
      />
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-hover:text-green-500"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 19L13.8 13.8M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    

    <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 hide-scrollbar w-full justify-center">
      <button
        onClick={() => setActiveFilter('blood')}
        className={`px-6 py-2.5 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${activeFilter === 'blood' ? 'bg-green-100 text-green-600 shadow-md font-bold' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 font-normal'}`}
      >
        Blood Tests
      </button>
      <button
        onClick={() => setActiveFilter('hormonal')}
        className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${activeFilter === 'hormonal' ? 'bg-green-100 text-green-600 font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-normal'}`}
      >
        Hormonal Tests
      </button>
      <button
        onClick={() => setActiveFilter('cancer')}
        className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${activeFilter === 'cancer' ? 'bg-green-100 text-green-600 font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-normal'}`}
      >
        Cancer Screening
      </button>
      <button
        onClick={() => setActiveFilter('infection')}
        className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${activeFilter === 'infection' ? 'bg-green-100 text-green-600 font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-normal'}`}
      >
        Infection Tests
      </button>
      <button
        onClick={() => setActiveFilter('imaging')}
        className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${activeFilter === 'imaging' ? 'bg-green-100 text-green-600 font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-normal'}`}
      >
        Imaging Tests
      </button>
      <button
        onClick={() => setActiveFilter('specialized')}
        className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${activeFilter === 'specialized' ? 'bg-green-100 text-green-600 font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-normal'}`}
      >
        Specialized Tests
      </button>
      <button
        onClick={() => setActiveFilter('alphabet')}
        className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${activeFilter === 'alphabet' ? 'bg-green-100 text-green-600 font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 font-normal'}`}
      >
        Alphabetical
      </button>
    </div>
  </div>
   
   <div className="flex justify-center w-full mb-8">
    <button
      onClick={() => setActiveFilter('all')}
      className="text-green-600 hover:text-green-700 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-green-50"
    >
      Show All
    </button>
  </div>


  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6  md:mx-[200px]">
    {filteredConcerns.map((concern, index) => (
      <div
        key={index}
        className="bg-white p-4 md:p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center space-y-2 md:space-y-3 border border-gray-100 cursor-pointer group hover:scale-105 hover:border-green-100"
      >
        <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">{concern.icon}</span>
        <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">{concern.name}</span>
        <p className="text-xs md:text-sm text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">{concern.description}</p>
      </div>
    ))}
  </div>
</div>
    
  );
};

export default HealthConcerns;
