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
      <MovingCards />
        <HealthPackages />
        <HealthConcerns />
        <SideButton />
        <Testimonials />
        <SpecialistDoctorCard />
      
      <Footer />

    </div>
  );
}
