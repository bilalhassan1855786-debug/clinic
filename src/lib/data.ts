import { Service, Doctor } from "./types";
import "./global.css";

export const services: Service[] = [
  {
    id: "1",
    name: "Cardiology",
    description: "Comprehensive care for heart-related conditions.",
    image: "/images/cardiology.jpg",
    slug: "cardiology",
  },
  {
    id: "2",
    name: "Pediatrics",
    description: "Expert healthcare services for children.",
    image: "/images/pediatrics.jpg",
    slug: "pediatrics",
  },
  {
    id: "3",
    name: "Dermatology",
    description: "Skin care and treatment for all ages.",
    image: "/images/dermatology.jpg",
    slug: "dermatology",
  },
];

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Khan",
    specialty: "Cardiologist",
    bio: "Expert in cardiovascular diseases with over 10 years of experience.",
    image: "/images/dr-sarah.jpg",
    slug: "sarah-khan",
  },
  {
    id: "2",
    name: "Dr. Ahmed Malik",
    specialty: "Pediatrician",
    bio: "Dedicated to providing exceptional care for children.",
    image: "/images/dr-ahmed.jpg",
    slug: "ahmed-malik",
  },
  {
    id: "3",
    name: "Dr. Maria Ali",
    specialty: "Dermatologist",
    bio: "Specialist in skincare, acne, and cosmetic dermatology.",
    image: "/images/dr-maria.jpg",
    slug: "maria-ali",
  },
];
