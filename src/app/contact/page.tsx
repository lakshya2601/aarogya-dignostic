"use client";
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import SideButton from '../components/SideButtons/side-button';


const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Navbar />
      <div className="mt-[120px] mb-10">
        <Contact />
      </div>
      <SideButton />
      <Footer />
    </div>
  );
};

export default ContactPage;