import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const defaultLocation = "22.59615946586736, 75.3044999433552"; // Dhar, M.P. coordinates

  const handleMapClick = () => {
    window.open(`https://www.google.com/maps?q=${defaultLocation}`, '_blank');
  };

  return (
    <footer className="overflow-hidden relative px-6 py-16 w-full text-gray-800 bg-gradient-to-br from-white via-pink-50 to-pink-100">
      <div className="absolute inset-0 bg-[url('/window.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="grid relative grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-5 lg:gap-12">
        <div className="space-y-6 lg:col-span-2">
          <h2 className="text-3xl font-bold text-[#EF4444]">Aarogya Diagnostics</h2>
          <p className="text-sm leading-relaxed text-gray-600">Trusted healthcare diagnostics across multiple locations, delivering excellence in medical testing services.</p>
          <div className="pt-2">
            <p className="text-lg font-semibold text-gray-700">Emergency Helpline:</p>
            <p className="text-2xl font-bold text-pink-600 transition-colors duration-300 hover:text-pink-700">+91 99070 93524</p>
          </div>
          <div className="flex pt-4 space-x-5">
            <Link href="https://facebook.com" target="_blank" className="text-gray-600 transition-all duration-300 transform hover:text-pink-600 hover:scale-110">
              <i className="text-xl fab fa-facebook-f"></i>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-gray-600 transition-all duration-300 transform hover:text-pink-600 hover:scale-110">
              <i className="text-xl fab fa-twitter"></i>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-600 transition-all duration-300 transform hover:text-pink-600 hover:scale-110">
              <i className="text-xl fab fa-instagram"></i>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-600 transition-all duration-300 transform hover:text-pink-600 hover:scale-110">
              <i className="text-xl fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-pink-600 hover:translate-x-1">
                <span className="mr-2 text-pink-500">→</span> <div className="text-gray-700">About Us</div>
              </Link>
            </li>
            <li>
              <Link href="/services" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-pink-600 hover:translate-x-1">
                <span className="mr-2 text-pink-500">→</span> <div className="text-gray-700">Our Services</div>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-pink-600 hover:translate-x-1">
                <span className="mr-2 text-pink-500">→</span> <div className="text-gray-700">Contact Us</div>
              </Link>
            </li>
            <li>
              <Link href="/careers" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-pink-600 hover:translate-x-1">
                <span className="mr-2 text-pink-500">→</span> <div className="text-gray-700">Careers</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Policies</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/terms" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-pink-600 hover:translate-x-1">
                <span className="mr-2 text-pink-500">→</span> <div className="text-gray-700">Terms & Conditions</div>
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-pink-600 hover:translate-x-1">
                <span className="mr-2 text-pink-500">→</span> <div className="text-gray-700">Privacy Policy</div>
              </Link>
            </li>
            <li>
              <Link href="/refund" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-pink-600 hover:translate-x-1">
                <span className="mr-2 text-pink-500">→</span> <div className="text-gray-700">Refund & Cancellation</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Find Us</h3>
          <div 
            onClick={handleMapClick}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative h-[200px] group"
          >
            <Image
              src="/map.png"
              alt="Our Location"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex absolute inset-0 justify-center items-center bg-black/30">
              <span className="px-4 py-2 font-semibold text-white rounded-lg bg-black/50">
                Click here to locate us
              </span>
            </div>
          </div>
          <address className="text-sm not-italic text-gray-600">
            Dhar, M.P.
          </address>
        </div>
      </div>
      
      <div className="flex justify-center items-center pt-8 mt-12 text-sm text-center text-gray-600 border-t border-pink-200">
        &copy; {new Date().getFullYear()} &nbsp;
        <span className="font-extrabold text-pink-600 transition-colors duration-300 hover:text-pink-700">
          Aarogya Diagnostics
        </span>
        &nbsp; All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;


