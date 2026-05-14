import React from "react";
import Navbar from "../components/Navbar";
import { FiCalendar, FiBell } from "react-icons/fi";

const announcements = [
  {
    title:
      "Digitalized Technology-Assisted Modules in Mathematics Served as an Important Tool for Innovation",
    date: "May 2026",
    category: "Innovation",
    content:
      "The implementation of Technology-Assisted Modules has proven to be a powerful tool in transforming mathematics instruction in the district.",
  },
  {
    title:
      "Teachers and Students of Daanbantayan District II had Favorable Responses to the Developed Technology-Assisted Modules in Mathematics Instruction",
    date: "April 2026",
    category: "Feedback",
    content:
      "Positive feedback received from both teachers and students regarding the newly developed digital modules.",
  },
  {
    title:
      "Monthly Conference of Mathematics Teachers in Daanbantayan District II in School Year 2026-2027 for the Adaptation of Technology-Assisted Modules in Mathematics",
    date: "March 2026",
    category: "Conference",
    content:
      "Regular monthly conferences will be conducted throughout SY 2026-2027 to ensure effective adaptation and implementation of technology-assisted modules.",
  },
];

export default function AnnouncementsPage() {
  return (
    <>
      <Navbar />

      <div className="pt-24 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-yellow-600 dark:text-yellow-500 mb-4">
              <FiBell className="w-8 h-8" />
              <span className="uppercase tracking-widest text-sm font-semibold">
                Bulletin
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">
              Notifications
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg">
              Latest Updates • District of Daanbantayan II
            </p>
          </div>

          {/* Announcements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Top Accent */}
                <div className="h-2 bg-linear-to-r from-yellow-400 to-amber-600" />

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-yellow-600 dark:text-yellow-500 mb-4">
                    <FiCalendar className="w-4 h-4" />
                    {announcement.date}
                  </div>

                  <h3 className="font-semibold text-xl leading-tight text-zinc-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors flex-1">
                    {announcement.title}
                  </h3>

                  <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {announcement.content}
                  </p>
                </div>

                {/* Category - Always at the bottom */}
                <div className="mt-auto px-8 py-5 bg-zinc-50 dark:bg-zinc-800 border-t border-zinc-100 dark:border-zinc-700 text-sm font-medium text-yellow-600 dark:text-yellow-500 rounded-b-3xl">
                  {announcement.category}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 text-sm text-zinc-500 dark:text-zinc-400">
            Stay updated with the latest developments in our Technology-Assisted
            Mathematics Program.
          </div>
        </div>
      </div>
    </>
  );
}
