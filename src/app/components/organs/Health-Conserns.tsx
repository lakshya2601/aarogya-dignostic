"use client"
import React, { useState } from "react";
import { AntiBodyIcon, ArthritisIcon, BloodCellIcon, BloodClottingIcon, BloodGroupIcon, BloodSugarLevel, BoneMarrowIcon, BrainIcon, CaIcon, CancerIcon, ChikungunyaIcon, CholesterolIcon, DiabetsIcon, EnzymeIcon, GeneticIcon, HeartIcon, HemoglobinIcon, HepatitsBIcon, HepatitsCIcon, HepatitsEIcon, HIVIcon, KidneyIcon, LabTestIcon, LiverFunctionIcon, LiverIcon, LungIcon, PaleLiverIcon, PancreasIcon, PregnancyIcon, StoolIcon, SurgicalIcon, TBIcon, ThroatIcon, TyphoidIcon, UrineTestIcon, VitaminB12Icon, VitaminD3Icon, XRayIcon } from "../icons";




const HealthConcerns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  

  
   const concerns = [
      // Blood Tests
      { name: "Albumin", icon: LabTestIcon, type: "blood", description: "Protein level analysis", marketRate: 100, arogyaRate: 50 },
      { name: "Alkaline Phosphatase", icon: LiverIcon, type: "blood", description: "Liver and bone health", marketRate: 200, arogyaRate: 100 },
      { name: "Ammonia", icon: LiverFunctionIcon, type: "blood", description: "Liver function test", marketRate: 800, arogyaRate: 400 },
      { name: "Amylase", icon: PancreasIcon, type: "blood", description: "Pancreatic enzyme test", marketRate: 450, arogyaRate: 225 },
      { name: "Anti HCV", icon: HepatitsCIcon, type: "blood", description: "Hepatitis C test", marketRate: 800, arogyaRate: 400 },
      { name: "Anti HEV", icon: HepatitsEIcon, type: "blood", description: "Hepatitis E test", marketRate: 800, arogyaRate: 400 },
      { name: "Anti TPO", icon: AntiBodyIcon, type: "blood", description: "Thyroid antibody test", marketRate: 1000, arogyaRate: 500 },
      { name: "APTT", icon: BloodClottingIcon, type: "blood", description: "Blood clotting test", marketRate: 400, arogyaRate: 200 },
      { name: "ASO Titre", icon: ThroatIcon, type: "blood", description: "Streptococcus infection test", marketRate: 300, arogyaRate: 150 },
      { name: "Beta HCG", icon: PregnancyIcon, type: "hormonal", description: "Pregnancy test", marketRate: 1000, arogyaRate: 500 },
      { name: "Bilirubin", icon: PaleLiverIcon, type: "blood", description: "Jaundice indicator", marketRate: 180, arogyaRate: 90 },
      { name: "Bleeding Time (BT)", icon: BloodClottingIcon, type: "blood", description: "Blood clotting test", marketRate: 50, arogyaRate: 25 },
      { name: "Blood Group", icon: BloodGroupIcon, type: "blood", description: "Blood type determination", marketRate: 50, arogyaRate: 25 },
      { name: "Blood Sugar FBS", icon: BloodSugarLevel, type: "blood", description: "Fasting blood sugar", marketRate: 50, arogyaRate: 25 },
      { name: "Blood Sugar PPBS", icon: BloodSugarLevel, type: "blood", description: "Postprandial blood sugar", marketRate: 50, arogyaRate: 25 },
      { name: "Blood Sugar RBS", icon: BloodSugarLevel, type: "blood", description: "Random blood sugar", marketRate: 50, arogyaRate: 25 },
      { name: "Blood Urea", icon: KidneyIcon, type: "blood", description: "Kidney function test", marketRate: 130, arogyaRate: 65 },
      { name: "BUN (Blood Urea Nitrogen)", icon: KidneyIcon, type: "blood", description: "Kidney function test", marketRate: 150, arogyaRate: 75 },
      { name: "Calcium", icon: CaIcon, type: "blood", description: "Calcium levels", marketRate: 180, arogyaRate: 90 },
      { name: "Chikungunya Test IgM", icon: ChikungunyaIcon, type: "infection", description: "Chikungunya virus test", marketRate: 1500, arogyaRate: 750 },
      { name: "Clotting Time (CT)", icon: BloodClottingIcon, type: "blood", description: "Blood clotting test", marketRate: 50, arogyaRate: 25 },
      { name: "CPK", icon: LabTestIcon, type: "blood", description: "Creatine phosphokinase test", marketRate: 400, arogyaRate: 200 },
      { name: "CPK-MB", icon: HeartIcon, type: "blood", description: "Cardiac enzyme test", marketRate: 500, arogyaRate: 250 },
      { name: "Creatinine", icon: KidneyIcon, type: "blood", description: "Kidney function test", marketRate: 130, arogyaRate: 65 },
      { name: "CRP (Qualitative)", icon: LabTestIcon, type: "blood", description: "Inflammation test", marketRate: 280, arogyaRate: 140 },
      { name: "CRP (Quantitative)", icon: LabTestIcon, type: "blood", description: "Inflammation marker", marketRate: 400, arogyaRate: 200 },
      { name: "Dengue IgG, IgM, NS1", icon: ChikungunyaIcon, type: "infection", description: "Dengue detection", marketRate: 900, arogyaRate: 450 },
      { name: "Electrolytes (NA, K, CL)", icon: LabTestIcon, type: "blood", description: "Electrolyte balance", marketRate: 350, arogyaRate: 175 },
      { name: "ESR", icon: LabTestIcon, type: "blood", description: "Inflammation marker", marketRate: 60, arogyaRate: 30 },
      { name: "G6PD (Qualitative)", icon: EnzymeIcon, type: "blood", description: "Enzyme deficiency test", marketRate: 300, arogyaRate: 150 },
      { name: "GAMMA GT", icon: LiverIcon, type: "blood", description: "Liver function test", marketRate: 400, arogyaRate: 200 },
      { name: "Glucose Tolerance Test 3", icon: DiabetsIcon, type: "blood", description: "Diabetes test", marketRate: 180, arogyaRate: 90 },
      { name: "Glucose Tolerance Test 5", icon: DiabetsIcon, type: "blood", description: "Diabetes test", marketRate: 260, arogyaRate: 130 },
      { name: "Haemoglobin (Hb)", icon: LabTestIcon, type: "blood", description: "Anemia test", marketRate: 100, arogyaRate: 50 },
      { name: "HB, T&D", icon: HemoglobinIcon, type: "blood", description: "Hemoglobin with typing", marketRate: 160, arogyaRate: 80 },
      { name: "HBA1C", icon: DiabetsIcon, type: "blood", description: "Diabetes monitoring", marketRate: 600, arogyaRate: 300 },
      { name: "HBsAG (ANTIGEN)", icon: HepatitsBIcon, type: "infection", description: "Hepatitis B test", marketRate: 600, arogyaRate: 300 },
      { name: "HBsAG (CARD)", icon: HepatitsBIcon, type: "infection", description: "Hepatitis B rapid test", marketRate: 260, arogyaRate: 130 },
      { name: "HIV 1&2", icon: HIVIcon, type: "infection", description: "HIV test", marketRate: 260, arogyaRate: 130 },
      { name: "IONIZED CALCIUM", icon: CaIcon, type: "blood", description: "Active calcium test", marketRate: 200, arogyaRate: 100 },
      { name: "LIPASE", icon: PancreasIcon, type: "blood", description: "Pancreatic enzyme test", marketRate: 450, arogyaRate: 225 },
      { name: "Lipid Profile", icon: CholesterolIcon, type: "blood", description: "Cholesterol test", marketRate: 500, arogyaRate: 250 },
      { name: "Liver Function Test (LFT)", icon: LiverIcon, type: "blood", description: "Liver health panel", marketRate: 550, arogyaRate: 275 },
      { name: "Malaria Parasite (MP)", icon: ChikungunyaIcon, type: "infection", description: "Malaria test", marketRate: 80, arogyaRate: 40 },
      { name: "MT Test", icon: TBIcon, type: "infection", description: "Tuberculosis test", marketRate: 100, arogyaRate: 50 },
      { name: "Peripheral Smear", icon: BloodCellIcon, type: "blood", description: "Blood cell analysis", marketRate: 250, arogyaRate: 125 },
      { name: "Phosphorus", icon: LabTestIcon, type: "blood", description: "Phosphate level test", marketRate: 250, arogyaRate: 125 },
      { name: "Platelet Count", icon: BloodClottingIcon, type: "blood", description: "Blood clotting component", marketRate: 140, arogyaRate: 70 },
      { name: "Potassium (K+)", icon: LabTestIcon, type: "blood", description: "Electrolyte test", marketRate: 200, arogyaRate: 100 },
      { name: "PT (Prothrombin Time)", icon: BloodClottingIcon, type: "blood", description: "Blood clotting test", marketRate: 260, arogyaRate: 130 },
      { name: "RA (Qualitative)", icon: ArthritisIcon, type: "blood", description: "Rheumatoid arthritis test", marketRate: 180, arogyaRate: 90 },
      { name: "RA (Quantitative)", icon: LabTestIcon, type: "blood", description: "Rheumatoid factor test", marketRate: 400, arogyaRate: 200 },
      { name: "Renal Profile (RFT)", icon: KidneyIcon, type: "blood", description: "Kidney function panel", marketRate: 550, arogyaRate: 275 },
      { name: "Reticulocyte Count", icon: BoneMarrowIcon, type: "blood", description: "Bone marrow function test", marketRate: 300, arogyaRate: 150 },
      { name: "Semen Analysis", icon: LabTestIcon, type: "specialized", description: "Fertility test", marketRate: 300, arogyaRate: 150 },
      { name: "SGOT (AST)", icon: LiverIcon, type: "blood", description: "Liver enzyme test", marketRate: 150, arogyaRate: 75 },
      { name: "SGPT (ALT)", icon: LiverIcon, type: "blood", description: "Liver enzyme test", marketRate: 150, arogyaRate: 75 },
      { name: "Sickling Test", icon: LabTestIcon, type: "blood", description: "Sickle cell test", marketRate: 250, arogyaRate: 125 },
      { name: "Sodium (NA+)", icon: LabTestIcon, type: "blood", description: "Electrolyte test", marketRate: 200, arogyaRate: 100 },
      { name: "Sputum (GRAM & AFB)", icon: TBIcon, type: "infection", description: "Respiratory infection test", marketRate: 300, arogyaRate: 150 },
      { name: "Sputum for AFB", icon: TBIcon, type: "infection", description: "TB bacteria test", marketRate: 250, arogyaRate: 125 },
      { name: "Stool", icon: StoolIcon, type: "specialized", description: "Stool examination", marketRate: 150, arogyaRate: 75 },
      { name: "T&D", icon: BloodCellIcon, type: "blood", description: " Bilirubin levels in the blood", marketRate: 120, arogyaRate: 60 },
      { name: "CBC (Complete Blood Count)", icon: LabTestIcon, type: "blood", description: "General blood health check", marketRate: 250, arogyaRate: 125 },
      { name: "Total Cholesterol", icon: CholesterolIcon, type: "blood", description: "Cholesterol test", marketRate: 150, arogyaRate: 75 },
      { name: "Total Proteins", icon: LabTestIcon, type: "blood", description: "Protein level test", marketRate: 180, arogyaRate: 90 },
      { name: "Uric Acid", icon: KidneyIcon, type: "blood", description: "Gout and kidney function test", marketRate: 150, arogyaRate: 75 },
      { name: "Urine Albumin", icon: KidneyIcon, type: "urine", description: "Kidney function test", marketRate: 50, arogyaRate: 25 },
      { name: "Urine Examination", icon: UrineTestIcon, type: "urine", description: "Urinalysis", marketRate: 50, arogyaRate: 25 },
      { name: "Urine Ketone", icon: DiabetsIcon, type: "urine", description: "Diabetes screening", marketRate: 50, arogyaRate: 25 },
      { name: "Urine Sugar FBS", icon: UrineTestIcon, type: "urine", description: "Fasting urine glucose", marketRate: 30, arogyaRate: 15 },
      { name: "Urine Sugar PPBS", icon: UrineTestIcon, type: "urine", description: "Postprandial urine glucose", marketRate: 30, arogyaRate: 15 },
      { name: "VDRL (Syphilis)", icon: LabTestIcon, type: "infection", description: "Syphilis test", marketRate: 200, arogyaRate: 100 },
      { name: "Widal Test", icon: TyphoidIcon, type: "infection", description: "Typhoid test", marketRate: 150, arogyaRate: 75 },
      { name: "X-Ray", icon: XRayIcon, type: "imaging", description: "Internal analysis", marketRate: 400, arogyaRate: 200 },
      // Hormonal Tests
      { name: "Thyroid Test", icon: ThroatIcon, type: "hormonal", description: "T3, T4, TSH levels", marketRate: 500, arogyaRate: 250 },
      { name: "Vitamin B12", icon: VitaminB12Icon, type: "hormonal", description: "Vitamin B12 levels", marketRate: 1000, arogyaRate: 500 },
      { name: "Vitamin D3", icon: VitaminD3Icon, type: "hormonal", description: "Vitamin D levels", marketRate: 2000, arogyaRate: 1000 },
      { name: "Free TFT", icon: ThroatIcon, type: "hormonal", description: "Thyroid function test", marketRate: 700, arogyaRate: 350 },
    
      // Specialized Tests
      { name: "PFT (Pulmonary Function Test)", icon: LungIcon, type: "specialized", description: "Lung function test", marketRate: 800, arogyaRate: 400 },
      { name: "EEG", icon: BrainIcon, type: "specialized", description: "Brain activity test", marketRate: 2000, arogyaRate: 1000 },
      { name: "HLA B-27", icon: GeneticIcon, type: "specialized", description: "Genetic marker test", marketRate: 2600, arogyaRate: 1300 },
      { name: "CA – 125", icon: CancerIcon, type: "specialized", description: "Ovarian cancer marker", marketRate: 1600, arogyaRate: 800 },
      { name: "Surgical Profile", icon: SurgicalIcon, type: "specialized", description: "Pre-surgical tests", marketRate: 700, arogyaRate: 350 },
      { name: "Anc Profile", icon: PregnancyIcon, type: "specialized", description: "Antenatal checkup", marketRate: 600, arogyaRate: 300 }
  ];
  
  

  const getFilteredAndSortedConcerns = () => {
    let filtered = concerns;

    if (activeFilter !== "all" && activeFilter !== "alphabet") {
      filtered = concerns.filter((concern) => concern.type === activeFilter);
    }

    filtered = filtered.filter((concern) => concern.name.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeFilter === "alphabet") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  };

  const filteredConcerns = getFilteredAndSortedConcerns();

  return (
    <div className="p-8 mx-auto w-full">
      <div className="flex justify-center items-center mb-8 w-full">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent tracking-tight text-center flex items-center gap-2">
          Search by Health Concerns
        </h2>
      </div>

      {/* Search input adjustments for mobile */}
      <div className="mb-6 mx-4 md:mx-[180px]">
        <input
          type="text"
          placeholder="Search Test"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-3 w-full rounded-xl border-2 border-gray-200 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Filter buttons scroll container */}
      <div className="flex overflow-x-auto gap-2 justify-start px-4 pb-4 w-full md:gap-3 md:justify-center md:px-0 scrollbar-hide">
        {[
          'all',
          'blood',
          'hormonal',
          'infection',
          'imaging',
          'specialized',
          'urine',
          'alphabet'
        ].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all md:px-4 md:py-2 md:text-sm ${
              activeFilter === filter ? 'bg-green-100 text-green-600 font-bold' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {filter === 'all' ? 'All Tests' : 
             filter === 'alphabet' ? 'Alphabetical' : 
             `${filter.charAt(0).toUpperCase() + filter.slice(1)} Tests`}
          </button>
        ))}
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 mx-4 md:mx-[100px]">
        {filteredConcerns.slice(0, window.innerWidth < 640 ? 4 : undefined).map((concern, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 text-center bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer md:p-4 md:rounded-2xl hover:shadow-md group hover:scale-102"
          >
            <div className="mb-2 transition-transform duration-300 scale-75 md:scale-100 group-hover:scale-110">
              {concern.icon && <concern.icon />}
            </div>
            <span className="mb-1 text-xs font-semibold text-gray-800 md:text-sm group-hover:text-green-600 line-clamp-2">{concern.name}</span>
            <p className="text-[10px] md:text-[11px] text-gray-500 mb-2 line-clamp-1">{concern.description}</p>
            <div className="flex flex-col items-center">
              <p className="text-[9px] md:text-[10px] text-gray-400 line-through">MRP: ₹{concern.marketRate}</p>
              <p className="text-xs font-bold text-green-600 md:text-sm">Arogya: ₹{concern.arogyaRate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthConcerns;
