import Navbar from "./Navbar";
import "./global.css";

export default function Header() {
  return (
    <header className="text-center bg-blue-100 py-10 shadow">
      <h1 className="text-4xl font-bold text-blue-700">🏥 CarePlus Clinic</h1>
      <p className="text-gray-700 mt-2">Your Health, Our Priority</p>
      <Navbar />
    </header>
  );
}
