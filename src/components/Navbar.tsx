"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-tight flex items-center space-x-2">
          <span className="bg-white text-indigo-700 p-2 rounded-full">ES</span>
          <span className="hidden md:inline">Email Scraper</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded p-1 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 transition-transform duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-lg font-medium hover:text-indigo-200 transition duration-200 relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/features" className="text-lg font-medium hover:text-indigo-200 transition duration-200 relative group">
            Features
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/scraping" className="text-lg font-medium hover:text-indigo-200 transition duration-200 relative group">
            Scraping
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/dashboard" className="text-lg font-medium hover:text-indigo-200 transition duration-200 relative group">
            Dashboard
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-indigo-200 transition duration-200 relative group">
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/login"
            className="bg-white text-indigo-700 px-5 py-2 rounded-full font-semibold hover:bg-indigo-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-indigo-900 md:hidden transform transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 py-6">
            <Link href="/" className="text-lg font-medium hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/features" className="text-lg font-medium hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="/scraping" className="text-lg font-medium hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>
              Scraping
            </Link>
            <Link href="/dashboard" className="text-lg font-medium hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <Link
              href="/login"
              className="bg-white text-indigo-700 px-5 py-2 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}