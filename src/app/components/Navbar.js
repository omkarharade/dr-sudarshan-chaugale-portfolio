'use client'; // If using Next.js App Router, include this

import Link from 'next/link';

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
    link: "/achievements", // This can be a separate page
    text: "Achievements",
  }
];

export default function Navbar() {
  return (
    <nav className="bg-sky-800 text-gray-800 px-6 py-4 flex justify-between items-center shadow">
      {/* Logo or Name */}
      <div className="font-semibold text-2xl italic text-slate-200">Dr. Sudarshan</div>

      {/* Nav Links */}
      <div className="space-x-6 hidden md:flex">
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

        
      </div>

      <Link
          href="#contact"
          scroll={false}
          className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-transparent border-2 border-sky-800 hover:border-sky-200  font-medium"
        >
          Contact me
        </Link>
    </nav>
  );
}
