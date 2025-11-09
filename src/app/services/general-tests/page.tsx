import Image from "next/image";

export default function GeneralTestsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <Image
          src="/images/general-tests.jpg"
          alt="General Health Tests"
          width={1000}
          height={500}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            General Health Tests
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Regular health checkups and diagnostic tests help detect diseases early and
            ensure long-term well-being. Our clinic provides comprehensive lab testing
            and screening services for all ages.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Available Tests:
          </h2>
          <ul className="list-disc ml-6 text-gray-600 mb-6">
            <li>Blood sugar and cholesterol test</li>
            <li>Complete blood count (CBC)</li>
            <li>Kidney and liver function tests</li>
            <li>Thyroid and vitamin level tests</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            We use advanced lab equipment for accurate results, helping our doctors
            provide timely and effective treatment recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
