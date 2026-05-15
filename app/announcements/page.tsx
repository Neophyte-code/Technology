import React from "react";
import Navbar from "../components/Navbar";
import { FiCalendar, FiBell } from "react-icons/fi";

export default function AnnouncementsPage() {
  return (
    <>
      <Navbar />

      {/* Main Container with Background Image */}
      <div
        className="relative min-h-screen flex items-center justify-center pt-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=2000&q=80')",
        }}
      >
        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-16 xl:px-24 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black rounded-full font-bold text-sm mb-8">
            <FiBell className="w-4 h-4" />
            OFFICIAL ANNOUNCEMENT
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white leading-tight max-w-5xl mx-auto">
            Adaptation of Digitalized Technology-Assisted Modules in Mathematics
            Instruction will be in School Year 2027-2028
          </h1>
        </div>
      </div>
    </>
  );
}
