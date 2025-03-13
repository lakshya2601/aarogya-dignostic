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
    <div className="w-full px-[60px] p-6">
      <h2 className="flex justify-center text-3xl font-bold mb-6 bg-gradient-to-r from-[#ff7b7b] via-[#ff9494] to-[#ffb5b5] bg-clip-text text-transparent">
        Our Specialist Doctors
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="group  rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#ff7b7b]/20"
          >
            <div className="overflow-hidden relative w-full h-48">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6 bg-gradient-to-r from-[#ff7b7b] to-[#ff9494]">
              <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300">
                {doctor.name}
              </h3>
              <p className="text-lg font-medium text-white/90">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistDoctorsCarousel;
