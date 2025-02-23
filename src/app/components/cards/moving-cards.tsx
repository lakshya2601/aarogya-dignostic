import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ImageCarousel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 w-full h-[550px]">
      <div className="w-full overflow-hidden h-full">
        <Carousel
          showThumbs={true}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={2000}
        >
          <div className="relative w-full h-[550px] flex items-center justify-center">
            <Image
              src="/aarogyaLogo.jpg"
              alt="Service 1"
              width={600} 
              height={400} 
              className="object-cover w-full h-full"
            />
            {/* <p className="legend bg-green-500 text-black p-2">Health Checkups</p> */}
          </div>
          <div className="relative w-full h-[550px] flex items-center justify-center">
            <Image
              src="/ice-k2-mountain-snow-wallpaper-a3ba63bab8055c3df8f29e536138a231.jpg"
              alt="Service 2"
              width={600} 
              height={400} 
              className="object-cover w-full h-full"
            />
            {/* <p className="legend bg-green-500 text-black p-2">Laboratory Tests</p> */}
          </div>
          <div className="relative w-full h-[550px] flex items-center justify-center">
            <Image
              src="/photo-1617633784388-f1818619287b.jpg"
              alt="Service 3"
              width={600} 
              height={400} 
              className="object-cover w-full h-full"
            />
            {/* <p className="legend bg-green-500 text-black p-2">Specialized Scans</p> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
