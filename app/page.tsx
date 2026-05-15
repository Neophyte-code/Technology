"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { FiArrowRight, FiPlay, FiX } from "react-icons/fi";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- ZOOM & DRAG STATE ---
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Add this ref near your other state variables
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Add useEffect to attach wheel event with passive: false
  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // this will stop page scroll
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setScale((s) => Math.min(Math.max(s + delta, 0.5), 3));
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const images = [
    "/images/lessons/Picture1.png",
    "/images/lessons/Picture2.png",
    "/images/lessons/Picture3.png",
    "/images/lessons/Picture4.png",
    "/images/lessons/Picture5.png",
    "/images/lessons/Picture6.png",
    "/images/lessons/Picture7.png",
    "/images/lessons/Picture8.png",
    "/images/lessons/Picture9.png",
    "/images/lessons/Picture10.png",
    "/images/lessons/Picture11.png",
    "/images/lessons/Picture12.png",
    "/images/lessons/Picture13.png",
    "/images/lessons/Picture14.jpg",
    "/images/lessons/Picture15.jpg",
    "/images/lessons/Picture16.jpg",
    "/images/lessons/Picture17.jpg",
    "/images/lessons/Picture18.jpg",
    "/images/lessons/Picture19.png",
  ];

  const lessons = [
    {
      title: "REPRESENTING REAL-LIFE SITUATION USING FUNCTION",
      type: "youtube" as const,
      url: "https://youtu.be/ca800JbF8oc",
      thumbnail: "/images/thumbnails/thumbnail1.png",
    },
    {
      title: "EVALUATING FUNCTIONS",
      type: "youtube" as const,
      url: "https://youtu.be/lpGEEgfYA2w?si=E6jPWwkfg3YhFpBz",
      thumbnail: "/images/thumbnails/thumbnail2.png",
    },
    {
      title: "OPERATIONS ON FUNCTIONS",
      type: "youtube" as const,
      url: "https://youtu.be/SbsOau0pZDI?si=bOw9OzMjAaoajUHB",
      thumbnail: "/images/thumbnails/thumbnail3.png",
    },
    {
      title: "GRAPHING FUNCTIONS",
      type: "youtube" as const,
      url: "https://youtu.be/bG3YoUKUUxM?si=ETa2SKepKAc3MTOU",
      thumbnail: "/images/thumbnails/thumbnail4.png",
    },
  ];

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const nextImage = () => {
    resetZoom();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    resetZoom();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION with Background Image */}
      <section className="min-h-screen pt-20 relative flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-white/20 dark:from-zinc-950/80 dark:via-zinc-900/70 dark:to-black/60" />
        {/* Subtle radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#eab30820_0%,transparent_70%)]" />

        {/* Content */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 xl:px-24 py-20 relative z-10 w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">
              Technology-Assisted Modules in Mathematics Instruction
              <br />
              Towards Digitalization
            </h1>

            <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-yellow-400 text-2xl font-medium">
                District of Daanbantayan II
              </span>
            </div>

            <p className="text-xl md:text-2xl text-zinc-300">
              Division of Cebu Province
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#lessons"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-2xl flex items-center gap-2 transition-all active:scale-95 shadow-lg"
              >
                Explore Lessons
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Optional subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-zinc-950 to-transparent" />
      </section>

      {/* MODERN IMAGE CAROUSEL with INLINE ZOOM (no modal, no page scroll) */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image Container - Swiss Alps */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format')",
          }}
        />

        <div className="max-w-screen-2xl mx-auto xl:px-24 relative z-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Featured Modules
              </h2>
            </div>
            <div className="text-sm text-zinc-500">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Image Container with Zoom & Drag */}
            <div
              ref={imageContainerRef}
              className="relative bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl w-fit mx-auto"
              style={{ maxWidth: "90vw", maxHeight: "80vh" }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  cursor:
                    scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                }}
                onMouseDown={(e) => {
                  if (scale <= 1) return;
                  e.preventDefault();
                  setIsDragging(true);
                  setDragStart({ x: e.clientX, y: e.clientY });
                }}
                onMouseMove={(e) => {
                  if (!isDragging || scale <= 1) return;
                  const dx = e.clientX - dragStart.x;
                  const dy = e.clientY - dragStart.y;
                  setPosition({ x: position.x + dx, y: position.y + dy });
                  setDragStart({ x: e.clientX, y: e.clientY });
                }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={(e) => {
                  if (scale <= 1) return;
                  const touch = e.touches[0];
                  setIsDragging(true);
                  setDragStart({ x: touch.clientX, y: touch.clientY });
                }}
                onTouchMove={(e) => {
                  if (!isDragging || scale <= 1) return;
                  const touch = e.touches[0];
                  const dx = touch.clientX - dragStart.x;
                  const dy = touch.clientY - dragStart.y;
                  setPosition({ x: position.x + dx, y: position.y + dy });
                  setDragStart({ x: touch.clientX, y: touch.clientY });
                }}
                onTouchEnd={() => setIsDragging(false)}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Featured Module"
                  className="select-none transition-transform duration-100"
                  style={{
                    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    width: "auto",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="flex gap-3 bg-black/50 dark:bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <button
                onClick={() => setScale((s) => Math.min(s + 0.25, 3))}
                className="w-10 h-10 bg-white/20 hover:bg-yellow-500 text-white rounded-full text-xl font-bold transition-colors"
              >
                +
              </button>
              <button
                onClick={() => {
                  setScale(1);
                  setPosition({ x: 0, y: 0 });
                }}
                className="px-4 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setScale((s) => Math.max(s - 0.25, 0.5))}
                className="w-10 h-10 bg-white/20 hover:bg-yellow-500 text-white rounded-full text-xl font-bold transition-colors"
              >
                -
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  resetZoom();
                  prevImage();
                }}
                className="px-6 py-2 bg-yellow-500 text-black rounded-xl hover:bg-yellow-600 transition-all font-medium"
              >
                Prev
              </button>
              <button
                onClick={() => {
                  resetZoom();
                  nextImage();
                }}
                className="px-6 py-2 bg-yellow-500 text-black rounded-xl hover:bg-yellow-600 transition-all font-medium"
              >
                Next
              </button>
            </div>

            <div className="text-sm text-zinc-500">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </section>
      {/* LESSONS SECTION - Nature background + gradient title */}
      <section id="lessons" className="py-20 relative overflow-hidden">
        {/* Nature Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2100&auto=format')", // serene nature / forest
          }}
        />

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          {/* Gradient Title Div (unchanged) */}
          <div className="text-center mb-12">
            <div className="inline-block bg-linear-to-r from-yellow-500 to-amber-600 dark:from-yellow-600 dark:to-amber-700 rounded-2xl px-8 py-4 shadow-lg">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                LESSONS IN GENERAL MATHEMATICS
              </h2>
            </div>
          </div>

          {/* Enhanced Lessons Cards Row */}
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="flex-1 min-w-70 max-w-[320px] group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative aspect-video bg-linear-to-br from-zinc-800 to-zinc-950 overflow-hidden">
                  {lesson.type === "youtube" ? (
                    <a
                      href={lesson.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full relative group/video"
                    >
                      {/* Thumbnail image with zoom effect */}
                      <img
                        src={lesson.thumbnail}
                        alt={lesson.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-110"
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300" />
                      {/* Animated play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-yellow-500/90 flex items-center justify-center transition-all duration-300 group-hover/video:scale-110 group-hover/video:bg-yellow-400 shadow-lg">
                          <FiPlay className="w-7 h-7 text-black ml-0.5" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <video controls className="w-full h-full object-cover">
                      <source src={lesson.url} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base text-center text-yellow-600 dark:text-yellow-500 leading-tight line-clamp-2">
                    {lesson.title}
                  </h3>
                  {/* Optional: add a subtle "Watch now" indicator on hover */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      Click to watch →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENT SECTION - Egypt background + gradient title */}
      <section
        id="assessment"
        className="py-20 relative overflow-hidden border-y border-zinc-100 dark:border-zinc-900"
      >
        {/* Egypt Scenery Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2070&auto=format')", // Egypt / Pyramids scenery
          }}
        />

        <div className="max-w-screen-2xl mx-auto flex items-center flex-col justify-center px-6 lg:px-16 xl:px-24 relative z-10">
          {/* Gradient Title Div (same style as Lessons) */}
          <div className="max-w-4xl mb-16">
            <div className="inline-block bg-linear-to-r from-yellow-500 to-amber-600 dark:from-yellow-600 dark:to-amber-700 rounded-2xl px-8 py-4 shadow-lg">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Assessment Section
              </h2>
            </div>
          </div>

          {/* Description text - adjusted for contrast */}
          <div className="max-w-4xl mb-16">
            <div className="space-y-6 text-zinc-800 dark:text-zinc-100 leading-relaxed text-lg bg-white/40 dark:bg-black/30 backdrop-blur-sm p-6 rounded-2xl">
              <p className="indent-20 text-justify">
                Welcome to the assessment section of our General Mathematics
                website. This is where you can put your knowledge to the test!
                After exploring our modules and watching the video tutorials,
                it's time to see how well you've understood the material.
              </p>
              <p className="font-medium indent-20 text-justify">
                In this section, you'll find a variety of quizzes and practice
                tests that cover the topics we've discussed. These assessments
                are designed to challenge you and provide immediate feedback so
                you can see where you excel and where you might need a bit more
                practice.
              </p>
              <p className="indent-20 text-justify">
                Take your time with each quiz, and don't worry if you don't get
                everything right on the first try. The goal is to help you learn
                and improve. Good luck, and happy studying!
              </p>
            </div>
          </div>

          {/* Cards grid and note (unchanged except background removed from cards) */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Google Quiz */}
              <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Google Quiz</h3>
                  <a
                    href="https://forms.gle/oBKno24nLrart15A8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 hover:scale-105 transition-transform">
                      <img
                        src="/images/icon/googleform.png"
                        alt="Google Quiz"
                        className="mx-auto rounded-xl h-20 object-contain"
                      />
                    </div>
                  </a>
                </div>
                <p className="text-center text-xs text-zinc-500 mt-6">
                  Click the figure above to redirect to Google forms
                </p>
              </div>

              {/* Quizizz 1 */}
              <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-6">Quizizz 1</h4>
                  <a
                    href="https://quizizz.com/join?gc=67121743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 hover:scale-105 transition-transform">
                      <img
                        src="/images/icon/quizizz.png"
                        alt="Quizizz 1"
                        className="mx-auto rounded-xl h-20 object-contain"
                      />
                    </div>
                  </a>
                </div>
                <p className="text-center text-xs text-zinc-500 mt-6">
                  Click the figure above to redirect to Quizizz
                </p>
              </div>

              {/* Quizizz 2 */}
              <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-6">Quizizz 2</h4>
                  <a
                    href="https://quizizz.com/join?gc=75053522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 hover:scale-105 transition-transform">
                      <img
                        src="/images/icon/quizizz.png"
                        alt="Quizizz 2"
                        className="mx-auto rounded-xl h-20 object-contain"
                      />
                    </div>
                  </a>
                </div>
                <p className="text-center text-xs text-zinc-500 mt-6">
                  Click the figure above to redirect to Quizizz
                </p>
              </div>
            </div>

            <p className="text-center text-amber-600 dark:text-amber-500 font-medium bg-amber-50/90 dark:bg-amber-900/20 backdrop-blur-sm py-4 rounded-2xl border border-amber-100 dark:border-amber-900/20">
              Note: Click Quizizz 2 if you are unable to join Quizizz 1.
            </p>
          </div>
        </div>
      </section>

      {/* SURVEY SECTION - Japan scenery, left text / right card */}
      <section id="survey" className="py-20 relative overflow-hidden">
        {/* Japan Scenery Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format')", // Japan / Mount Fuji & cherry blossoms
          }}
        />

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
          {/* Two-column layout: left (text) + right (card) */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Column: Title + Description */}
            <div className="flex-1">
              {/* Gradient Title (now left-aligned) */}
              <div className="mb-6">
                <div className="inline-block bg-linear-to-r from-yellow-500 to-amber-600 dark:from-yellow-600 dark:to-amber-700 rounded-2xl px-8 py-4 shadow-lg">
                  <h2 className="text-4xl font-bold tracking-tight text-white">
                    Survey Questionnaire
                  </h2>
                </div>
              </div>

              {/* Description with semi-transparent background */}
              <div className="bg-white/40 dark:bg-black/30 backdrop-blur-sm p-6 rounded-2xl">
                <p className="text-zinc-800 dark:text-zinc-100 text-lg">
                  Your feedback is important to us. Please take a moment to
                  complete this survey to help improve the technology-assisted
                  instruction experience.
                </p>
              </div>
            </div>

            {/* Right Column: Survey Card */}
            <div className="w-full lg:w-96 shrink-0">
              <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-semibold mb-6">
                  General Feedback Survey
                </h3>
                <a
                  href="https://forms.gle/SktnJSxa4h6muhza8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 hover:scale-105 transition-transform shadow-sm">
                    <img
                      src="/images/icon/googleform.png"
                      alt="Google Survey"
                      className="mx-auto rounded-xl h-24 object-contain"
                    />
                  </div>
                </a>
                <p className="text-center text-sm text-zinc-500 mt-6 font-medium">
                  Click the figure above to redirect to Google forms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-400 py-12">
        <div className="max-w-screen-2xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-left">
            <div>
              <p className="text-xs">Technology Assisted Module in Math</p>
            </div>
          </div>
          <p className="text-sm">
            © Division of Cebu Province • District of Daanbantayan II
          </p>
        </div>
      </footer>
    </>
  );
}
