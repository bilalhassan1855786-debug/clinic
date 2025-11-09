import Image from "next/image";

export default function CommonColdPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <Image
          src="/images/common-cold.jpg"
          alt="Common Cold Treatment"
          width={1000}
          height={500}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Common Cold & Flu Treatment
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our clinic offers expert care for common colds, flu, and related respiratory
            infections. We ensure fast recovery and effective symptom relief through
            evidence-based medicine.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Services Offered:
          </h2>
          <ul className="list-disc ml-6 text-gray-600 mb-6">
            <li>Fever and cough management</li>
            <li>Flu vaccination and prevention</li>
            <li>Allergy and sinus infection treatment</li>
            <li>Immune system strengthening advice</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Whether it’s a mild seasonal infection or recurring flu, our doctors are
            equipped to help you recover quickly and safely.
          </p>
        </div>
      </div>
    </div>
  );
}
