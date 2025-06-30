'use client';

import {
  Microscope,
  HeartPulse,
  Stethoscope,
  Hospital,
  MoveRight,
  Zap,
  ScanLine,
} from 'lucide-react'; // Lucide icons for medical representation

import { GiStomach, GiLaserPrecision, GiLiver, GiCancer } from "react-icons/gi";
import { MdPrecisionManufacturing, MdHealthAndSafety, MdOutlineBiotech  } from "react-icons/md";
import { PiVirusFill } from "react-icons/pi";



export default function Expertise() {
  const expertiseData = [
    {
      title: "Advanced laparoscopic surgery",
      icon: <MdHealthAndSafety className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Hepato-pancreato-biliary surgery",
      icon: <MdOutlineBiotech  className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Gastrointestinal benign and malignant surgery",
      icon: <PiVirusFill className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Liver transplant surgery",
      icon: <GiLiver className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "Bariatric surgery",
      icon: <GiStomach className="w-10 h-10 text-sky-600" />,
    },
    {
      title: "LASER proctology",
      icon: <GiLaserPrecision className="w-10 h-10 text-sky-600" />, //
    },
    {
      title: "Robotic surgery",
      icon: <MdPrecisionManufacturing className="w-10 h-10 text-sky-600" />,
    },
  ];

  return (
    <section id="expertise-in" className="bg-sky-800 py-12 px-4 md:px-16 border-t border-blue-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-200 mb-8">Expertise In</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 bg-white p-6 rounded-md shadow-sm text-center flex flex-col items-center justify-center hover:shadow-md transition"
            >
              {item.icon}
              <p className="mt-3 text-sm font-medium text-gray-700 text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
