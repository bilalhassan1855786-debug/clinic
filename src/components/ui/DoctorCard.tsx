import Image from "next/image";
import Link from "next/link";
import { Doctor } from "@/lib/types";
import "./global.css";


export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="border rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white text-center">
      <Image
        src={doctor.image}
        alt={doctor.name}
        width={200}
        height={200}
        className="rounded-full mx-auto"
      />
      <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
      <p className="text-blue-600">{doctor.specialty}</p>
      <Link
        href={`/doctors/${doctor.slug}`}
        className="text-blue-500 mt-2 inline-block"
      >
        View Profile →
      </Link>
    </div>
  );
}
