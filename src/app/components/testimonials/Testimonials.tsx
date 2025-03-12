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
    name: "रवि वर्मा",
    image: "/testimonial1.jpg",
    text: "सेवा उत्कृष्ट थी और स्टाफ बहुत ही सहयोगी था। होम सैंपल कलेक्शन की सुविधा ने इसे और भी आसान बना दिया।",
    rating: 5,
    date: "2024-03-10",
    service: "संपूर्ण स्वास्थ्य जाँच"
  },
  {
    id: 2,
    name: "सुषमा त्रिपाठी",
    image: "/testimonial2.jpg",
    text: "परिणाम समय पर और सटीक मिले। स्टाफ बहुत ही पेशेवर और सहायक था।",
    rating: 5,
    date: "2024-03-08",
    service: "मधुमेह परीक्षण"
  },
  {
    id: 3,
    name: "अर्जुन राठौर",
    image: "/testimonial3.jpg",
    text: "क्लिनिक बहुत साफ-सुथरा था और रिपोर्ट समय पर मिली। ऑनलाइन रिपोर्ट एक्सेस करना बहुत आसान था।",
    rating: 4,
    date: "2024-03-05",
    service: "थायरॉइड प्रोफाइल"
  },
  {
    id: 4,
    name: "नीता वर्मा",
    image: "/testimonial4.jpg",
    text: "डायग्नोस्टिक सेंटर की सेवाएं बहुत ही अच्छी थीं। कर्मचारी मददगार और अनुभवी थे।",
    rating: 5,
    date: "2024-03-03",
    service: "एलिवर टेस्ट"
  },
  {
    id: 5,
    name: "विक्रम चौहान",
    image: "/testimonial5.jpg",
    text: "होम कलेक्शन सेवा बहुत सुविधाजनक रही। रिपोर्ट भी सही समय पर मिली।",
    rating: 5,
    date: "2024-03-01",
    service: "रक्त परीक्षण"
  },
  {
    id: 6,
    name: "आरती शर्मा",
    image: "/testimonial6.jpg",
    text: "पूरी प्रक्रिया बहुत सहज और व्यवस्थित थी। बुकिंग से लेकर रिपोर्ट प्राप्त करने तक कोई समस्या नहीं हुई।",
    rating: 4,
    date: "2024-02-28",
    service: "स्वास्थ्य पैकेज"
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
          const nextPosition = prevPosition + 0.02;
          if (nextPosition >= 100) {
            return 0;
          }
          return nextPosition;
        });
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <div className="p-6 px-0 mx-auto mb-12 w-full">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
        हमारे रोगियों के अनुभव
      </h2>
      
      <div className="relative overflow-hidden h-[280px]">
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
              <div className="flex justify-center items-center mr-4 w-12 h-12 text-green-600 bg-gradient-to-br from-green-100 to-green-200 rounded-full">
                <span className="text-lg font-semibold">{testimonial.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-green-600">{testimonial.service}</p>
              </div>
            </div>
            
            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => (
                <span 
                  key={index} 
                  className={`text-xl ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                >
                  ★
                </span>
              ))}
            </div>
            
            <p className="mb-4 italic text-gray-600 line-clamp-3">{testimonial.text}</p>
            
            <div className="text-sm text-gray-400">
              {new Date(testimonial.date).toLocaleDateString('hi-IN', {
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