import React, { useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  date: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    image: "/testimonial1.jpg",
    text: "Excellent service and very professional staff. The home collection service was very convenient, and I received my reports on time.",
    rating: 5,
    date: "2024-03-10",
    service: "Full Body Checkup"
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "/testimonial2.jpg",
    text: "Very satisfied with the quality of service. The staff was courteous and the facility was clean and well-maintained.",
    rating: 5,
    date: "2024-03-08",
    service: "Diabetes Screening"
  },
  {
    id: 3,
    name: "Amit Patel",
    image: "/testimonial3.jpg",
    text: "Prompt service and accurate results. The online report access feature is very convenient. Highly recommended!",
    rating: 4,
    date: "2024-03-05",
    service: "Thyroid Profile"
  },
  {
    id: 4,
    name: "Meera Reddy",
    image: "/testimonial4.jpg",
    text: "The diagnostic center's attention to detail and professionalism is commendable. Their state-of-the-art equipment and expert technicians ensure reliable results.",
    rating: 5,
    date: "2024-03-03",
    service: "MRI Scan"
  },
  {
    id: 5,
    name: "Suresh Menon",
    image: "/testimonial5.jpg",
    text: "Excellent experience with the home collection service. The phlebotomist was skilled and professional. Got my reports within the promised time.",
    rating: 5,
    date: "2024-03-01",
    service: "Blood Tests"
  },
  {
    id: 6,
    name: "Anita Singh",
    image: "/testimonial6.jpg",
    text: "Very impressed with their online booking system and report delivery. The entire process was smooth and hassle-free.",
    rating: 4,
    date: "2024-02-28",
    service: "Health Package"
  }
];

const Testimonials: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        setPosition((prevPosition) => {
          const nextPosition = prevPosition + 0.05;
          if (nextPosition >= 100) {
            return 0;
          }
          return nextPosition;
        });
      }
    }, 10);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <div className="w-[95%] mx-auto p-6 mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
        What Our Patients Say
      </h2>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-[2000ms] ease-linear"
          style={{
            transform: `translateX(-${position}%)`,
            width: `${(duplicatedTestimonials.length * 400) + (duplicatedTestimonials.length * 24)}px`
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div 
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-[400px] bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full mr-4 flex items-center justify-center text-green-600">
                <span className="text-lg font-semibold">{testimonial.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-green-600">{testimonial.service}</p>
              </div>
            </div>
            
            <div className="mb-4 flex">
              {[...Array(5)].map((_, index) => (
                <span 
                  key={index} 
                  className={`text-xl ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                >
                  ★
                </span>
              ))}
            </div>
            
            <p className="text-gray-600 mb-4 line-clamp-3 italic">{testimonial.text}</p>
            
            <div className="text-sm text-gray-400">
              {new Date(testimonial.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;