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
        <section className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white py-20 transition-colors duration-500">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 xl:px-24">
            {" "}
            {/* Added your standard padding */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <div className="relative">
                <div className="aspect-square md:aspect-4/3 bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
                  <img
                    src="/images/training.jpg"
                    alt="Mathematics Teachers Conference"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 dark:bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm tracking-wide">
                    Professional Development
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
                  Mathematics Teachers&apos; Conference
                </h1>

                <p className="text-3xl text-yellow-600 dark:text-yellow-400 font-bold mb-6">
                  2026
                </p>

                <p className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Technology-Assisted Module in Mathematics Instruction Towards
                  Digitalization
                </p>
              </div>
            </div>
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
                  June 2026 — March 2027
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
      </div>
    </>
  );
}
