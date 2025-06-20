'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    link: "#expertise-in",
    text: "Expertise In",
  },
  {
    link: "#about-me",
    text: "About Me",
  },
  {
    link: "#testimonials",
    text: "Testimonials",
  },
  {
    link: "/achievements",
    text: "Achievements",
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-800 text-gray-800 px-6 py-4 shadow relative z-50">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-2xl italic text-slate-200">Dr. Sudarshan</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              scroll={false}
              className="border-b-[1px] border-sky-800 hover:border-slate-200 font-medium text-slate-200"
            >
              {item.text}
            </Link>
          ))}
          <Link
            href="#contact"
            scroll={false}
            className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-transparent border-2 border-sky-800 hover:border-sky-200 font-medium"
          >
            Contact me
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-sky-700 text-white rounded-lg shadow-lg py-4 px-6 space-y-3">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              scroll={false}
              className="block font-medium text-sm hover:text-sky-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </Link>
          ))}
          <Link
            href="#contact"
            scroll={false}
            className="block bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-transparent border border-sky-200 font-medium text-sm text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact me
          </Link>
        </div>
      )}
    </nav>
  );
}
