import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/types";
import "./global.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border rounded-xl shadow-sm p-4 hover:shadow-md transition bg-white">
      <Image
        src={service.image}
        alt={service.name}
        width={400}
        height={250}
        className="rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="text-blue-600 mt-2 inline-block"
      >
        Learn more →
      </Link>
    </div>
  );
}
