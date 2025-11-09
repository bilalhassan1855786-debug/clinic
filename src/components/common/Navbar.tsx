import Link from "next/link";
import "@/global.css";


export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 py-4 bg-white shadow">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/doctors">Doctors</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
