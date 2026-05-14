"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/plans", label: "Plans" },
    { href: "/trainings", label: "Trainings" },
    { href: "/bulletin", label: "Bulletin" },
    { href: "/legal-bases", label: "Legal Bases" },
    { href: "/announcements", label: "Announcement" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Image Placeholder for Logo */}
            <div className="flex flex-col justify-center">
              <img
                src="/images/deped.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Supplemental Text */}
            <div className="hidden md:block ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-700">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-200">
                Technology Assisted Module in Math
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1.5 ${
                  isActive(link.href)
                    ? "text-yellow-600 dark:text-yellow-500"
                    : "text-zinc-700 hover:text-yellow-600 dark:text-zinc-300 dark:hover:text-yellow-500"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-yellow-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="px-6 py-8 flex flex-col gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-4 rounded-xl transition-colors ${
                  isActive(link.href)
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
