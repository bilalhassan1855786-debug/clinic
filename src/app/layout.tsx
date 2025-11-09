import "./global.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarePlus Clinic",
  description: "Professional healthcare services by expert doctors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <nav className="flex justify-center gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/doctors">Doctors</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="text-center py-4 text-sm text-gray-500 border-t mt-8">
          © 2025 CarePlus Clinic. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
