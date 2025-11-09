"use client";

import { useState } from "react";

// Helper: Generate random appointment time between 1–5 days from now
function generateAppointmentTime() {
  const now = new Date();
  const daysToAdd = Math.floor(Math.random() * 5) + 1; // 1–5 days
  const appointmentDate = new Date(now);
  appointmentDate.setDate(now.getDate() + daysToAdd);
  appointmentDate.setHours(Math.floor(Math.random() * 8) + 9); // 9 AM – 5 PM
  appointmentDate.setMinutes(Math.random() > 0.5 ? 30 : 0);
  return appointmentDate.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [appointmentTime, setAppointmentTime] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const time = generateAppointmentTime();
    setAppointmentTime(time);
    setSubmitted(true);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 4000); // Hide toast after 4 s
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6 relative">
      {/* ✅ Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          Message sent! Appointment time will be sent to your Gmail or phone number.
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Book an Appointment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="03xx-xxxxxxx"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Message / Appointment Reason</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Describe your symptoms or reason for visit..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-6 text-center text-gray-700">
            <p className="text-lg font-medium">
              Expected appointment: <span className="text-blue-600 font-semibold">{appointmentTime}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Appointment time will be sent to your Gmail or phone number.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
