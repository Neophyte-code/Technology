"use client";

import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { FiArrowRight, FiPlay, FiX } from "react-icons/fi";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- ZOOM & DRAG STATE ---
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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
    "/images/lessons/Picture14.png",
    "/images/lessons/Picture15.png",
    "/images/lessons/Picture16.png",
    "/images/lessons/Picture17.png",
    "/images/lessons/Picture18.png",
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

  // --- HELPER FUNCTIONS ---
  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => {
    const newScale = Math.max(scale - 0.5, 1);
    setScale(newScale);
    if (newScale === 1) setPosition({ x: 0, y: 0 });
  };

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

  // --- DRAG HANDLERS ---
  const startDrag = (clientX: number, clientY: number) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };

  const onDrag = (clientX: number, clientY: number) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y,
    });
  };

  const stopDrag = () => setIsDragging(false);

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

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-br from-zinc-950/90 via-zinc-900/80 to-black/70" />

        {/* Subtle radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#eab30820_0%,transparent_70%)]" />

        {/* Content */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 xl:px-24 py-20 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-yellow-400 text-sm font-medium">
                District of Daanbantayan II
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">
              Technology-Assisted Modules in Mathematics Instruction
              <br />
              Towards Digitalization
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-zinc-300">
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

      {/* MODERN IMAGE CAROUSEL */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-screen-2xl mx-auto xl:px-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">
                Featured Modules
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                Click image to preview full size
              </p>
            </div>
            <div className="text-sm text-zinc-500">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto group">
            <div
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl aspect-video cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={images[currentImageIndex]}
                alt="Featured Module"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 hover:bg-yellow-600 text-white rounded-2xl flex items-center justify-center transition-all backdrop-blur-md"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/70 hover:bg-yellow-600 text-white rounded-2xl flex items-center justify-center transition-all backdrop-blur-md"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* LESSONS SECTION */}
      <section id="lessons" className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">LESSONS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative aspect-video bg-zinc-950">
                  {lesson.type === "youtube" ? (
                    <a
                      href={lesson.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src={lesson.thumbnail}
                        alt={lesson.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <FiPlay className="w-10 h-10 text-white" />
                      </div>
                    </a>
                  ) : (
                    <video controls className="w-full h-full">
                      <source src={lesson.url} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-xl text-zinc-900 dark:text-white">
                    {lesson.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE PREVIEW MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 overflow-hidden touch-none"
          onMouseMove={(e) => onDrag(e.clientX, e.clientY)}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {/* Controls Bar */}
          <div className="fixed top-6 right-6 flex items-center gap-4 z-110">
            <div className="flex bg-zinc-800/90 backdrop-blur-md rounded-2xl p-1 border border-white/10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                className="w-10 h-10 text-white text-2xl hover:bg-white/10 rounded-xl transition-colors"
              >
                −
              </button>
              <span className="px-3 flex items-center text-xs font-mono text-white">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                className="w-10 h-10 text-white text-2xl hover:bg-white/10 rounded-xl transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(false);
                resetZoom();
              }}
              className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <FiX size={24} />
            </button>
          </div>

          <div className="relative flex flex-col items-center w-full h-full justify-center">
            {/* Viewport Container */}
            <div
              className={`relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden transition-all ${scale > 1 ? "cursor-grab" : ""}`}
              onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
              onTouchStart={(e) =>
                startDrag(e.touches[0].clientX, e.touches[0].clientY)
              }
              onTouchMove={(e) =>
                onDrag(e.touches[0].clientX, e.touches[0].clientY)
              }
              onTouchEnd={stopDrag}
            >
              <div
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transition: isDragging ? "none" : "transform 0.3s ease-out",
                }}
                className="flex items-center justify-center pointer-events-none"
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Preview"
                  draggable="false"
                  className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain shadow-2xl pointer-events-none select-none"
                />
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="flex flex-col items-center gap-4 mt-6 z-10">
              <div className="flex gap-4">
                <button
                  onClick={prevImage}
                  className="px-8 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20"
                >
                  ← Prev
                </button>
                <button
                  onClick={nextImage}
                  className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400"
                >
                  Next →
                </button>
              </div>
              <p className="text-zinc-500 text-sm">
                {currentImageIndex + 1} / {images.length}{" "}
                {scale > 1 && "• Drag to move"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ASSESSMENT SECTION */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Description */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-8">
                Assessment Section
              </h2>
              <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
                <p>
                  Welcome to the assessment section of our General Mathematics
                  website. This is where you can put your knowledge to the test!
                </p>
                <p>
                  After exploring our modules and watching the video tutorials,
                  it's time to see how well you've understood the material.
                </p>
                <p>
                  In this section, you'll find a variety of quizzes and practice
                  tests. These assessments are designed to challenge you and
                  provide immediate feedback.
                </p>
                <p className="font-medium">
                  Take your time, learn from your mistakes, and keep improving.
                  Good luck!
                </p>
              </div>
            </div>

            {/* Right Side - Assessment Links */}
            <div className="space-y-8">
              {/* Google Quiz */}
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-semibold mb-6">Google Quiz</h3>
                <a
                  href="https://forms.gle/oBKno24nLrart15A8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 hover:scale-105 transition-transform">
                    <img
                      src="/images/icon/googleform.png"
                      alt="Google Quiz"
                      className="mx-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-center text-sm text-zinc-500 mt-4">
                  Click the image above to open Google Forms
                </p>
              </div>

              {/* Google Survey */}
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-semibold mb-6">Google Survey</h3>
                <a
                  href="https://forms.gle/SktnJSxa4h6muhza8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 hover:scale-105 transition-transform">
                    <img
                      src="/images/icon/googleform.png"
                      alt="Google Survey"
                      className="mx-auto rounded-xl"
                    />
                  </div>
                </a>
                <p className="text-center text-sm text-zinc-500 mt-4">
                  Click the image above to open Google Forms
                </p>
              </div>

              {/* Quizizz */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-6 hover:shadow-xl transition-all">
                  <h4 className="font-semibold mb-4">Quizizz 1</h4>
                  <a
                    href="https://quizizz.com/join?gc=67121743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="/images/icon/quizizz.png"
                      alt="Quizizz 1"
                      className="rounded-xl mx-auto"
                    />
                  </a>
                </div>

                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-6 hover:shadow-xl transition-all">
                  <h4 className="font-semibold mb-4">Quizizz 2</h4>
                  <a
                    href="https://quizizz.com/join?gc=75053522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src="/images/icon/quizizz.png"
                      alt="Quizizz 2"
                      className="rounded-xl mx-auto"
                    />
                  </a>
                </div>
              </div>

              <p className="text-center text-amber-600 dark:text-amber-500 font-medium">
                Note: Click Quizizz 2 if you are unable to join Quizizz 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-400 py-12">
        <div className="max-w-screen-2xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
              📘
            </div>
            <div>
              <p className="font-medium text-white">TAMM</p>
              <p className="text-xs">Technology Assisted Module in Math</p>
            </div>
          </div>
          <p className="text-sm">
            © 2024 Division of Cebu Province • District of Daanbantayan II
          </p>
        </div>
      </footer>
    </>
  );
}
