import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center space-y-8">
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to CarePlus Clinic</h1>
        <p className="text-lg mb-6">Your trusted partner in health and wellness.</p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Book an Appointment
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-12">
        {[
          { title: "General Tests", desc: "Comprehensive health evaluations." },
          { title: "Pediatrics", desc: "Specialized care for children." },
          { title: "Cardiology", desc: "Heart care with modern equipment." },
        ].map((service, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
            <p>{service.desc}</p>
            <Link
              href={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
              className="block mt-4 text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
