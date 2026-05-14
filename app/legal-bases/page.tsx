import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FiExternalLink, FiFileText } from "react-icons/fi";

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
          className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')`, // A clean office/educational building background
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
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl">
                  <FiFileText className="w-10 h-10 text-yellow-600 dark:text-yellow-500" />
                </div>
              </div>
              <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                Legal Bases
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Supporting Policies for Technology-Assisted Module in
                Mathematics Instruction
              </p>
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
