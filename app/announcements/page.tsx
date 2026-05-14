import React from "react";
import Navbar from "../components/Navbar";
import { FiCalendar, FiBell, FiArrowRight } from "react-icons/fi";

export default function AnnouncementsPage() {
  return (
    <>
      <Navbar />

      <div className="pt-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
        {/* Hero Banner */}
        <div className="bg-linear-to-r from-zinc-900 to-black text-white py-20">
          <div className="max-w-screen-2xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-black rounded-full font-medium mb-6">
              <FiBell className="w-5 h-5" />
              OFFICIAL ANNOUNCEMENT
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
              Adaptation of Digitalized Technology-Assisted Modules in
              Mathematics Instruction will be in School Year 2027-2028 in Public
              Secondary Schools of Daanbantayan District II
            </h1>
            <p className="mt-6 text-yellow-400 text-lg">2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
