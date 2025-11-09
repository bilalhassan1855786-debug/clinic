import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Cardiology",
      slug: "cardiology",
      image: "/images/cardiology.jpg",
      description: "Comprehensive heart care and cardiovascular treatments.",
    },
    {
      title: "Dermatology",
      slug: "dermatology",
      image: "/images/dermatology.jpg",
      description: "Expert skin care and advanced dermatological solutions.",
    },
    {
      title: "Pediatrics",
      slug: "pediatrics",
      image: "/images/pediatrics.jpg",
      description: "Complete healthcare services for children and adolescents.",
    },
    {
      title: "Common Cold & Flu Treatment",
      slug: "common-cold",
      image: "/images/common-cold.jpg",
      description: "Quick and effective treatment for seasonal colds and flu.",
    },
    {
      title: "General Health Tests",
      slug: "general-tests",
      image: "/images/general-tests.jpg",
      description: "Routine diagnostic and laboratory health checkups.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Our Medical Services
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
