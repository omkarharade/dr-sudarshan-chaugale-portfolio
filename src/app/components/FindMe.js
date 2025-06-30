'use client';

import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

// Dynamically import the map to avoid SSR issues
const MapSection = dynamic(() => import('./MapSection'), {
  ssr: false,
});

export default function FindMe() {
  return (
    <section id="find-me" className="bg-white py-12 px-4 md:px-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <MapPin className="text-sky-600" /> Find Me
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Left: Text Info */}
          <div className="md:w-1/2 w-full space-y-4">
            <a href="#directions" className="text-blue-600 font-semibold hover:underline block">
              Visit the clinic
            </a>
            <p className="text-sm text-gray-700">
              Block no 22, College Rd, beside Mahaatma Gandhi Bhavana, behind Sanman Hotel, Kallehol, Camp, Belagavi, Karnataka 590001
            </p>
            <button className="mt-2 bg-white border border-sky-500 text-sky-600 font-medium px-4 py-2 rounded hover:bg-sky-50">
              Find Directions
            </button>
          </div>

          {/* Right: Map */}
          <div className="md:w-1/2 w-full h-64 md:h-72 rounded-md overflow-hidden shadow">
            <MapSection />
          </div>
        </div>
      </div>
    </section>
  );
}
