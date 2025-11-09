import Image from "next/image";

export default function DermatologyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <Image
          src="/images/dermatology.jpg"
          alt="Dermatology Department"
          width={1000}
          height={500}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Dermatology</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Dermatology department specializes in diagnosing and treating all types
            of skin, hair, and nail disorders. We offer personalized care using
            modern techniques for both medical and cosmetic concerns.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Services Offered:
          </h2>
          <ul className="list-disc ml-6 text-gray-600 mb-6">
            <li>Acne and pigmentation treatment</li>
            <li>Laser therapy for skin rejuvenation</li>
            <li>Allergy and rash management</li>
            <li>Hair loss and scalp treatment</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Our dermatologists combine advanced dermatologic science with a
            compassionate approach to help you look and feel your best.
          </p>
        </div>
      </div>
    </div>
  );
}
