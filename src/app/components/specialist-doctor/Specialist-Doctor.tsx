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
  {
    id: 4,
    name: "Dr. Sarah Wilson",
    specialty: "Pediatrician",
    image: "/doctor-image.jpg",
  },
  {
    id: 5,
    name: "Dr. Michael Chen",
    specialty: "Orthopedic Surgeon",
    image: "/doctor-image.jpg",
  },
  {
    id: 6,
    name: "Dr. Emily Brown",
    specialty: "Psychiatrist",
    image: "/doctor-image.jpg",
  },
  {
    id: 7,
    name: "Dr. Robert Taylor",
    specialty: "Ophthalmologist",
    image: "/doctor-image.jpg",
  },
  {
    id: 8,
    name: "Dr. Lisa Anderson",
    specialty: "Endocrinologist",
    image: "/doctor-image.jpg",
  },
  {
    id: 9,
    name: "Dr. David Miller",
    specialty: "Pulmonologist",
    image: "/doctor-image.jpg",
  }
];

const SpecialistDoctorsCarousel = () => {
  return (
    <div className="w-[95%] mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-l from-[#325818] via-[#41691b] to-[#789e1f] bg-clip-text text-transparent">
        Consult a Specialist Doctor
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
          >
            {/* Doctor Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Doctor Details */}
            <div className="p-6 bg-gradient-to-r from-[#325818] to-[#789e1f]">
              <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-300">
                {doctor.name}
              </h3>
              <p className="text-lg text-white/90 font-medium">{doctor.specialty}</p>
              <button className="mt-4 px-6 py-2 bg-white text-[#325818] rounded-lg font-semibold transition-all duration-300 hover:bg-opacity-90 hover:shadow-md">
                Book Appointment
              </button>
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
