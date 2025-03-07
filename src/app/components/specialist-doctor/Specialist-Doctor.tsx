import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    image: "/doctor-image.jpg",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Dermatologist",
    image: "/doctor-image.jpg",
  },
  {
    id: 3,
    name: "Dr. Alex Johnson",
    specialty: "Neurologist",
    image: "/doctor-image.jpg",
  },
];

const SpecialistDoctorsCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Consult a Specialist Doctor
      </h2>

      <div className="flex flex-col space-y-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="w-full bg-[linear-gradient(90deg,_rgba(50,88,24,1)_0%,_rgba(120,158,31,0.16)_51%)] rounded-xl shadow-lg p-6 flex items-center"
          >
            {/* Doctor Details */}
            <div className="text-white flex-1 pl-6">
              <h3 className="text-3xl font-bold">{doctor.name}</h3>
              <p className="mt-2 text-lg opacity-90">{doctor.specialty}</p>
            </div>

            {/* Doctor Image */}
            <div className="flex-1 relative w-full max-w-xs">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SpecialistDoctorsCarousel;
