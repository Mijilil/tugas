'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0a192f] text-white px-8 py-5 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold tracking-wide">Portfolio</div>
      <ul className="flex gap-10 text-lg font-medium">
        <li>
          <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-cyan-300 transition">About</Link>
        </li>
        <li>
          <Link href="#skills" className="hover:text-cyan-300 transition">Skills</Link>
        </li>
        <li>
          <Link href="#portfolio" className="hover:text-cyan-300 transition">Portfolio</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-cyan-300 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}