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
    order: "DepEd Order No. 032, s. 2020",
    title:
      "Guidelines on the Engagement of Services of Learning Support Aides to Reinforce the Implementation of the Basic Education Learning Continuity Plan in Time of COVID-19 Pandemic",
    date: "October 15, 2020",
    link: "https://www.deped.gov.ph/wp-content/uploads/2020/10/DO_s2020_032-1-1.pdf",
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

      <div className="pt-24 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <FiFileText className="w-10 h-10 text-yellow-600" />
            </div>
            <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">
              Legal Bases
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Supporting Policies for Technology-Assisted Module in Mathematics
              Instruction
            </p>
          </div>

          {/* Legal Bases Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {legalBases.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:shadow-xl transition-all group flex flex-col"
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
                  className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 text-white rounded-2xl font-medium transition-all group-hover:scale-105"
                >
                  View Official Document
                  <FiExternalLink className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 text-sm text-zinc-500 dark:text-zinc-400">
            These DepEd Orders serve as the legal foundation for the
            implementation of the <br />
            Technology-Assisted Module in Mathematics Instruction Towards
            Digitalization.
          </div>
        </div>
      </div>
    </>
  );
}
