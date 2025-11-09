import Link from "next/link";

export default function Doctors() {
  const doctors = [
    { name: "Dr. Ali Raza", specialty: "Cardiologist", slug: "dr-ali" },
    { name: "Dr. Sana Malik", specialty: "Dermatologist", slug: "dr-sana" },
    { name: "Dr. Ahmad Khan", specialty: "Pediatrician", slug: "dr-ahmad" },
  ];

  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold text-blue-600 mb-5 text-center">
        Meet Our Doctors
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Link
            key={doctor.slug}
            href={`/doctors/${doctor.slug}`}
            className="border p-4 rounded-xl hover:shadow-lg transition bg-white"
          >
            <img
              src={`/images/${doctor.slug}.jpg`}
              alt={doctor.name}
              className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-center">{doctor.name}</h2>
            <p className="text-center text-gray-600">{doctor.specialty}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
