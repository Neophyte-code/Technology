import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import { FaBalanceScaleLeft } from "react-icons/fa";

const legalBases = [
  {
    order: "DepEd Order No. 016, s. 2023",
    title:
      "Revised Guidelines on the Implementation of the Department of Education Computerization Program",
    date: "July 18, 2023",
    link: "https://www.deped.gov.ph/wp-content/uploads/DO_s2023_016.pdf",
  },
  {
    order: "DepEd Order No. 024, s. 2022",
    title: "ADOPTION OF THE BASIC EDUCATION DEVELOPMENT PLAN 2030",
    date: "May 30, 2022",
    link: "https://www.deped.gov.ph/wp-content/uploads/2022/05/DO_s2022_024.pdf",
  },
  {
    order: "DepEd Order No. 003, s. 2026",
    title:
      "Foundational Guidelines on Artificial Intelligence (AI) in Basic Education",
    date: "February 20, 2026",
    link: "https://www.deped.gov.ph/wp-content/uploads/DO_s2026_003r-1.pdf",
  },
];

export default function LegalBasesPage() {
  return (
    <>
      <Navbar />

      {/* Main Wrapper with Background Image */}
      <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0  pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80')`, // A clean office/educational building background
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 pt-24 pb-20">
          <div className="max-w-screen-2xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              {/* Libra scale icon above the title */}
              <div className="flex justify-center mb-4">
                <FaBalanceScaleLeft className="text-5xl text-yellow-500 drop-shadow-md" />
              </div>

              {/* Title box */}
              <div className="inline-block bg-linear-to-r from-yellow-500 to-amber-600 dark:from-yellow-600 dark:to-amber-700 rounded-2xl px-8 py-4 shadow-lg">
                <h1 className="text-5xl font-bold tracking-tighter text-white">
                  Bulletin
                </h1>
              </div>

              {/* Glassmorphism description */}
              <div className="mt-6 backdrop-blur-md bg-white/60 dark:bg-zinc-800/60 border border-white/20 shadow-xl rounded-2xl px-6 py-4 max-w-2xl mx-auto">
                <p className="text-lg text-white-800 dark:text-zinc-200 leading-relaxed">
                  Supporting Policies for Technology-Assisted Module in
                  Mathematics Instruction
                </p>
              </div>
            </div>

            {/* Legal Bases Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {legalBases.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="text-yellow-600 dark:text-yellow-500 font-mono text-sm mb-3">
                    {item.order}
                  </div>

                  <h3 className="font-semibold text-xl leading-tight text-zinc-900 dark:text-white mb-4 flex-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                    Issued: {item.date}
                  </p>

                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 text-white rounded-2xl font-medium transition-all group-hover:scale-105 justify-center"
                  >
                    View Official Document
                    <FiExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 text-sm text-zinc-500 dark:text-zinc-400">
              These DepEd Orders serve as the legal foundation for the
              implementation of the <br className="hidden md:block" />
              Technology-Assisted Module in Mathematics Instruction Towards
              Digitalization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
