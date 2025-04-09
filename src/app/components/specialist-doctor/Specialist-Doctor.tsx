import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: "Dr. Dinesh Chouksey",
    specialty: "Consultant, Neurology",
    expertise: "Stroke, Epilepsy, Parkinson's Disease & Movement Disorders, Headache, Migraine, Dementia, Alzheimer's disease Multiple Sclerosis, Myasthenia Gravis, Neuropathy, Myopathy, Vertigo, Syncope with Autonomic Dysfunction",
    qualifications: "MD (Medicine), DM (Neurology)",
    department: "Neurosciences",
    experience: "18 Years",
    gender: "Male",
    languages: ["English", "Hindi"],
    image: "/dr-dinesh-chouksey.webp",
  },
  {
    id: 2,
    name: "Dr. Govind Gourh",
    specialty: "Consultant, ENT, Head & Neck Surgeon",
    qualifications: "MS (ENT), DNB (ENT)",
    department: "ENT",
    experience: "9 Years",
    gender: "Male",
    languages: ["English", "Hindi"],
    image: "/dr-govind.webp",
  },
  {
    id: 3,
    name: "Dr. Sunita Chouhan",
    specialty: "Consultant, Obstetrics & Gynaecology",
    qualifications: "MS, F. MAS, FICOG",
    department: "Mother & Child, Gynaecology & Obstetrics",
    experience: "22 Years",
    gender: "Female",
    languages: ["English", "Hindi"],
    image: "/dr-sunita-chouhan.webp"
  },
  {
    id: 4,
    name: "Dr. Sandeep Choudhary",
    specialty: "Ayurveda & Anorectal",
    qualifications: "BAMS, BAMS (Ayurveda)",
    department: "Anorectal (Piles, Fissure, Fistula)",
    experience: "5 Years",
    gender: "Male",
    languages: ["English", "Hindi"],
    image: "/dr-sunita-chouhan.webp"
  },
  {
    id: 5,
    name: "Dr. Khushbu Dixit",
    specialty: "General Physician",
    qualifications: "BHMS, CGO, CSD",
    department: "Obstetrics & Gynecology, Skin dicease",
    experience: "5 Years",
    gender: "Female",
    languages: ["English", "Hindi"],
    image: "/dr-sunita-chouhan.webp"
  },
  {
    id: 6,
    name: "Dr. Priyanka Verma",
    specialty: "General Physician",
    qualifications: "BHMS",
    department: "Gynecology & Arthritis",
    experience: "5 Years",
    gender: "Female",
    languages: ["English", "Hindi"],
    image: "/dr-sunita-chouhan.webp"
  },
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
            className="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
          >
            <div className="overflow-hidden relative w-full h-[450px]">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
            <button className="px-4 py-2 w-full font-extrabold text-white bg-red-500 rounded-md transition-colors duration-300 hover:text-red-500 hover:bg-white">
                {doctor.name}
              </button>
              <p className="mt-3 mb-3 text-lg font-medium text-gray-600">{doctor.specialty}</p>
              
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="mb-6 space-y-2">
                {doctor.qualifications && (
                  <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                )}
                {doctor.department && (
                  <p className="text-sm text-gray-600">Department: {doctor.department}</p>
                )}
                {doctor.experience && (
                  <p className="text-sm text-gray-600">Experience: {doctor.experience}</p>
                )}
                {doctor.expertise && (
                  <p className="text-sm text-gray-600 line-clamp-2">Expertise: {doctor.expertise}</p>
                )}
                {doctor.languages && (
                  <p className="text-sm text-gray-600">Languages: {doctor.languages.join(", ")}</p>
                )}
              </div>

             
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistDoctorsCarousel;
