import Image from "next/image";

export default function CardiologyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <Image
          src="/images/cardiology.jpg"
          alt="Cardiology Department"
          width={1000}
          height={500}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Cardiology</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Cardiology department provides comprehensive heart care, including diagnosis, 
            treatment, and management of cardiovascular diseases. We use advanced technologies 
            and procedures to ensure optimal heart health for every patient.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Services Offered:
          </h2>
          <ul className="list-disc ml-6 text-gray-600 mb-6">
            <li>Heart disease diagnosis and management</li>
            <li>ECG and ECHO testing</li>
            <li>Angiography and angioplasty</li>
            <li>Blood pressure monitoring</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Our expert cardiologists focus on preventive care and lifestyle improvement, 
            ensuring you maintain a healthy heart throughout your life.
          </p>
        </div>
      </div>
    </div>
  );
}
