"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90 sticky top-3 shadow-lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div className="container flex items-center justify-between mx-auto text-slate-800">
        {/* Logo */}
        <Link
          href="/"
          className="mr-4 cursor-pointer py-1.5 text-red-600 font-bold text-2xl"
        >
          Botak New System
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-lg text-slate-600 hover:text-red-500"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-md">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-red-600 transition-all"
            onClick={toggleMobileMenu}
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex flex-row items-center border-b pb-4">
          <Link
            href="/"
            className="cursor-pointer text-red-600 font-bold text-xl pt-4 ps-4"
          >
            NEXTNEWS
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col h-full gap-4 p-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
            >
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                href={item.href}
                className="flex items-center"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}