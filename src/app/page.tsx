"use client"
import { useEffect, useState } from "react";
import LoadingScreen from "./components/Loading-Screen/LoadingScreen";
import Navbar from "./components/Navbar/navbar";
import MovingCards from "./components/cards/moving-cards";

import Footer from "./components/Footer/Footer";
import HealthConcerns from "./components/organs/Health-Conserns";
import HealthPackages from "./components/discount/Discount-cards";
import SpecialistDoctorCard from "./components/specialist-doctor/Specialist-Doctor";
import Testimonials from "./components/testimonials/Testimonials";
import SideButton from "./components/SideButtons/side-button";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating a loading state
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <div className="mt-[120px] w-full">
        {/* <h1 className="text-center font-serif text-5xl md:text-7xl font-extrabold bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent mb-8">
          Aarogya Diagnostic
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Your trusted partner in healthcare diagnostics, providing accurate and timely results.
        </p> */}
      </div>
      <MovingCards />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HealthPackages />
        <HealthConcerns />
        <SideButton />
        <Testimonials />
        <SpecialistDoctorCard />
      </div>
      <Footer />

    </div>
  );
}
