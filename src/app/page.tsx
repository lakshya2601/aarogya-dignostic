"use client"
import { useEffect, useState } from "react";
import LoadingScreen from "./components/Loading-Screen/LoadingScreen";
import Navbar from "./components/Navbar/navbar";
import MovingCards from "./components/cards/moving-cards";
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
      <div className="mt-[120px]">
        {/* <h1 className="font-serif text-7xl font-extrabold bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
          Aarogya Diagnostic
        </h1> */}
      </div> 
    <MovingCards/>
    <SideButton/>
    </div>
  );
}
