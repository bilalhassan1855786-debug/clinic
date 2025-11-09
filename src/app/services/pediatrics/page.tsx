import Image from "next/image";

export default function PediatricsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <Image
          src="/images/pediatrics.jpg"
          alt="Pediatrics Department"
          width={1000}
          height={500}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Pediatrics</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Pediatrics department provides complete healthcare services for children
            from infancy to adolescence. We focus on prevention, growth monitoring, and
            management of childhood diseases.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Services Offered:
          </h2>
          <ul className="list-disc ml-6 text-gray-600 mb-6">
            <li>Childhood vaccinations</li>
            <li>Growth and nutrition assessment</li>
            <li>Asthma and allergy treatment</li>
            <li>Behavioral and developmental screening</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Our pediatricians ensure that every child receives the care, comfort, and
            attention they deserve in a friendly and supportive environment.
          </p>
        </div>
      </div>
    </div>
  );
}
