import Link from "next/link";
import React from "react";
import { PhoneLogo, WhatsAppLogo } from "../icons";

const SideButton: React.FC = () => {
  return (
    <div className="fixed right-4 w-[80px] h-[160px] z-50 bg-white/30 backdrop-blur-3xl text-white rounded-full flex flex-col gap-1 items-center justify-center shadow-lg p-2">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919907093524?text=I%20would%20like%20to%20inquire%20about%20check-up"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="w-12 h-12 rounded-full text-white text-lg flex items-center justify-center border border-green-600"
          aria-label="Contact on WhatsApp"
        >
          <WhatsAppLogo className="size-24" />
        </button>
      </Link>
      <span className="text-[10px] text-white">Get Support</span>

      {/* Phone Button */}
      <Link href="tel://91-9907093524">
        <button
          className="w-12 h-12 rounded-full text-white text-lg flex items-center justify-center"
          aria-label="Call Us"
        >
          <PhoneLogo className="size-24" />
        </button>
      </Link>
      <span className="text-[10px] text-white">Call Us</span>
    </div>
  );
};

export default SideButton;
