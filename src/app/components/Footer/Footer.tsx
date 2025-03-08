import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const defaultLocation = "22.6013,75.3025"; // Dhar, M.P. coordinates

  const handleMapClick = () => {
    window.open(`https://www.google.com/maps?q=${defaultLocation}`, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a4011] via-[#325818] to-[#789e1f] text-white py-16 px-6 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/window.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Aarogya Diagnostics</h2>
          <p className="text-sm text-gray-100 leading-relaxed">Trusted healthcare diagnostics across multiple locations, delivering excellence in medical testing services.</p>
          <div className="pt-2">
            <p className="text-lg font-semibold text-gray-100">Emergency Helpline:</p>
            <p className="text-white text-2xl font-bold hover:text-gray-200 transition-colors duration-300">+91 99070 93524</p>
          </div>
          <div className="flex space-x-5 pt-4">
            <Link href="https://facebook.com" target="_blank" className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                <span className="mr-2 text-white">→</span> <div className="text-white">About Us</div>
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                <span className="mr-2 text-white">→</span> <div className="text-white">Our Services</div>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                <span className="mr-2 text-white">→</span> <div className="text-white">Contact Us</div>
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                <span className="mr-2 text-white">→</span> <div className="text-white">Careers</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Policies</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/terms" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                <span className="mr-2 text-white">→</span> <div className="text-white">Terms & Conditions</div>
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                <span className="mr-2 text-white">→</span> <div className="text-white">Privacy Policy</div>
              </Link>
            </li>
            <li>
              <Link href="/refund" className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                <span className="mr-2 text-white">→</span> <div className="text-white">Refund & Cancellation</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Find Us</h3>
          <div 
            onClick={handleMapClick}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative h-[200px] group"
          >
            <Image
              src="/map.png"
              alt="Our Location"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-lg">
                Click here to locate us
              </span>
            </div>
          </div>
          <address className="text-sm text-white/80 not-italic">
            Dhar, M.P.
          </address>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/70 text-sm flex justify-center items-center">
        &copy; {new Date().getFullYear()} &nbsp;
        <span className="font-extrabold text-white hover:text-gray-200 transition-colors duration-300">
          Aarogya Diagnostics
        </span>
        &nbsp; All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;


