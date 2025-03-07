import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Aarogya Diagnostics</h2>
          <p className="text-sm text-gray-400 leading-relaxed">Trusted healthcare diagnostics across multiple locations, delivering excellence in medical testing services.</p>
          <div className="pt-2">
            <p className="text-lg font-semibold text-gray-300">Call Us:</p>
            <p className="text-orange-400 text-2xl font-bold hover:text-orange-300 transition-colors duration-300">+91 99070 93524</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Policies</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/terms" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                Refund & Cancellation
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Follow Us</h3>
          <div className="flex space-x-5">
            <Link href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex justify-center items-center">
        &copy; {new Date().getFullYear()} &nbsp;
        <span className="font-extrabold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
          Aarogya Diagnostics
        </span>
        &nbsp; All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
