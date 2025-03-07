import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageCarousel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 w-full h-[300px] sm:h-[400px] md:h-[550px]">
      <div className="w-full overflow-hidden h-full rounded-2xl shadow-2xl">
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
              src="/aarogyaLogo.jpg"
              alt="Service 1"
              width={600} 
              height={400} 
              className="object-cover w-full h-full brightness-90 group-hover:brightness-75 transition-all duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Health Checkups</h2>
              <p className="text-lg text-white/90">Comprehensive health screening packages</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] flex items-center justify-center group"
          >
            <Image
              src="/ice-k2-mountain-snow-wallpaper-a3ba63bab8055c3df8f29e536138a231.jpg"
              alt="Service 2"
              width={600} 
              height={400} 
              className="object-cover w-full h-full brightness-90 group-hover:brightness-75 transition-all duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Laboratory Tests</h2>
              <p className="text-lg text-white/90">Advanced diagnostic solutions</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] flex items-center justify-center group"
          >
            <Image
              src="/photo-1617633784388-f1818619287b.jpg"
              alt="Service 3"
              width={600} 
              height={400} 
              className="object-cover w-full h-full brightness-90 group-hover:brightness-75 transition-all duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Specialized Scans</h2>
              <p className="text-lg text-white/90">State-of-the-art imaging services</p>
            </div>
          </motion.div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
