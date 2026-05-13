"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FiCalendar, FiMapPin, FiUsers, FiAward } from "react-icons/fi";

export default function TrainingsPage() {
  return (
    <>
      <Navbar />

      <div className="pt-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-zinc-900 to-black text-white py-20">
          <div className="max-w-screen-2xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
              <span className="text-yellow-400">Professional Development</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Mathematics Teachers&apos; Conference
            </h1>
            <p className="text-3xl text-yellow-400 font-medium">2026</p>

            <p className="mt-8 max-w-2xl mx-auto text-lg text-zinc-400">
              Technology-Assisted Module in Mathematics Instruction Towards
              Digitalization
            </p>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                <FiCalendar className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Date</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  June — March 2027
                </p>
                <p className="text-sm text-zinc-500 mt-1">(Monthly Series)</p>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                <FiMapPin className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Venue</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Daanbantayan II District
                </p>
                <p className="text-sm text-zinc-500 mt-1">
                  Division of Cebu Province
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                <FiUsers className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-xl mb-2">
                  Target Participants
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Mathematics Teachers
                </p>
                <p className="text-sm text-zinc-500 mt-1">All Grade Levels</p>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                <FiAward className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Certificate</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Certificate of Participation
                </p>
                <p className="text-sm text-emerald-600 font-medium mt-1">
                  Issued by DepEd
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Objectives */}
        <section className="py-16 bg-white dark:bg-zinc-900">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Conference Objectives
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                "Equip mathematics teachers with the latest technology-assisted tools and digital resources.",
                "Develop clear strategies for integrating technology in mathematics instruction.",
                "Enhance teachers’ skills in using digital modules and interactive learning platforms.",
                "Promote inclusive education through accessible technology-assisted learning.",
                "Foster collaboration and innovation among mathematics educators.",
                "Establish sustainable practices for technology integration in the classroom.",
              ].map((obj, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-zinc-50 dark:bg-zinc-800 p-6 rounded-2xl"
                >
                  <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="py-12 text-center text-sm text-zinc-500">
          Organized by the District of Daanbantayan II • Division of Cebu
          Province
        </div>
      </div>
    </>
  );
}
