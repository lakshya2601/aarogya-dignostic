import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageCarousel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 w-full h-[300px] sm:h-[400px] md:h-[550px]">
      <div className="overflow-hidden w-full h-full rounded-2xl shadow-2xl">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3000}
          showArrows={true}
          swipeable={true}
          emulateTouch={true}
          transitionTime={1000}
          className="rounded-2xl"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] flex items-center justify-center group"
          >
            <Image
              src="/banner.jpg"
              alt="Service 1"
              width={600} 
              height={400} 
              className="object-center w-full h-full brightness-90 transition-all duration-500 group-hover:brightness-75"
            />
            <div className="flex absolute inset-0 flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/30">
              <h2 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Health Checkups</h2>
              <p className="text-lg text-white/90">Comprehensive health screenings for early detection and prevention</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] flex items-center justify-center group"
          >
            <Image
              src="/KV.jpg"
              alt="Service 2"
              width={600} 
              height={400} 
              className="object-cover w-full h-full brightness-90 transition-all duration-500 group-hover:brightness-75"
            />
            <div className="flex absolute inset-0 flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/30">
              <h2 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Laboratory Tests</h2>
              <p className="text-lg text-white/90">Advanced testing facilities with quick and accurate results</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] flex items-center justify-center group"
          >
            <Image
              src="/Firefly A modern medical clinic room with a patient sitting calmly in a reclining chair, wearing an .jpg"
              alt="Service 3"
              width={600} 
              height={400} 
              className="object-cover w-full h-full brightness-90 transition-all duration-500 group-hover:brightness-75"
            />
            <div className="flex absolute inset-0 flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/30">
              <h2 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Specialized Scans</h2>
              <p className="text-lg text-white/90">High-precision diagnostic imaging for accurate diagnosis</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] flex items-center justify-center group"
          >
            <Image
              src="/ChatGPT Image Apr 9, 2025, 06_06_08 PM.png"
              alt="Service 3"
              width={600} 
              height={400} 
              className="object-cover w-full h-full brightness-90 transition-all duration-500 group-hover:brightness-75"
            />
            <div className="flex absolute inset-0 flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/30">
              <h2 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Specialized Scans</h2>
              <p className="text-lg text-white/90">Modern imaging technology with expert interpretation</p>
            </div>
          </motion.div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
