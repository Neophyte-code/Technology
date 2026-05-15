"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FiCalendar, FiMapPin, FiUsers, FiAward } from "react-icons/fi";

// Helper to preload an image and return a Promise
const preloadImage = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

export default function TrainingsPage() {
  const [heroBg, setHeroBg] = useState(
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  );
  const [detailsBg, setDetailsBg] = useState(
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
  );
  const [objectivesBg, setObjectivesBg] = useState(
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  );

  useEffect(() => {
    // Try primary, fallback to alternative if it fails
    async function loadImages() {
      const heroOk = await preloadImage(heroBg);
      if (!heroOk)
        setHeroBg(
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
        );

      const detailsOk = await preloadImage(detailsBg);
      if (!detailsOk)
        setDetailsBg(
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
        );

      const objOk = await preloadImage(objectivesBg);
      if (!objOk)
        setObjectivesBg(
          "https://images.unsplash.com/photo-1476673160092-c2a1e1ed5d74?w=1920&q=80",
        );
    }
    loadImages();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        {/* ----- HERO SECTION ----- */}
        <section className="relative text-white py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{ backgroundImage: `url(${heroBg})` }}
          />

          <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-16 xl:px-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <div className="relative">
                <div className="aspect-square md:aspect-4/3 bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src="/images/training.jpg"
                    alt="Mathematics Teachers Conference"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-yellow-300 font-semibold text-sm tracking-wide">
                    Professional Development
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 drop-shadow-lg">
                  Mathematics Teachers&apos; Conference
                </h1>
                <p className="text-3xl text-yellow-300 font-bold mb-6 drop-shadow-md">
                  2026
                </p>
                <p className="max-w-lg text-lg text-zinc-200 leading-relaxed">
                  Technology-Assisted Module in Mathematics Instruction Towards
                  Digitalization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----- EVENT DETAILS SECTION ----- */}
        <section className="relative py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${detailsBg})` }}
          />

          <div className="relative max-w-screen-2xl mx-auto px-6">
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

        {/* ----- OBJECTIVES SECTION ----- */}
        <section className="relative py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${objectivesBg})` }}
          />

          <div className="relative max-w-screen-2xl mx-auto px-6">
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
                  className="flex gap-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-6 rounded-2xl"
                >
                  <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
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
