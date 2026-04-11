"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const NAVLINKS = [
  {
    id: 1,
    label: "About Us",
    href: "/aboutus"
  },
  {
    id: 2,
    label: "Courses",
    href: "/courses"
  },
  {
    id: 3,
    label: "Faculty",
    href: "/faculty"
  },
  {
    id: 4,
    label: "Admissions",
    href: "/admissions"
  },
  {
    id: 5,
    label: "Students",
    href: "/students"
  },
  {
    id: 6,
    label: "Infrastructure",
    href: "/infrastructure"
  },
  {
    id: 7,
    label: "Results",
    href: "/results"
  },
  {
    id: 8,
    label: "Alumni",
    href: "/alumni"
  },
  {
    id: 9,
    label: "Events",
    href: "/events"
  },
  {
    id: 10,
    label: "Contact Us",
    href: "/contact"
  },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">

      <div className={`transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-0" : "bg-white"}`}>
        {/* Main Navigation */}
        <div className="px-6 md:px-12">
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo & School Name */}
            <Link href="/" className="flex items-center gap-3 md:gap-4 group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 transform group-hover:-rotate-3 shrink-0 overflow-hidden border border-slate-100">
                <Image src="/school-logo.webp" alt="DBNSS Logo" fill className="" />
              </div>
              <div className="flex flex-col min-w-0">
                <h1 className="text-blue-700 font-black text-xs sm:text-base md:text-xl lg:text-2xl leading-none tracking-tight truncate">
                  DR. BHABENDRA NATH SAIKIA
                </h1>
                <p className="text-[8px] md:text-xs text-slate-500 uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mt-1">
                  Senior Secondary School
                </p>
                <p className="text-[10px] text-slate-400 hidden lg:block font-bold mt-1">
                  KHETRI, KAMRUP (M), ASSAM
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {NAVLINKS.map((link) => (
                <div key={link.id} className="group relative">
                  <Link
                    href={link.href}
                    className="text-xs font-black text-slate-600 hover:text-blue-600 transition-colors py-2 uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-4 rounded-sm"
                  >
                    {link.label}
                  </Link>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </div>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 xl:gap-8">
              <Link href="/admissions">
                <Button
                  className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-xs font-black rounded-xl shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:shadow-xl transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  APPLY NOW
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:flex xl:hidden p-3 bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all border border-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Premium Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 max-h-[calc(100vh-100px)] overflow-y-auto pb-20">
              <nav className="flex flex-col gap-3">
                {NAVLINKS.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 px-6 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-2xl transition-all font-bold text-lg border border-transparent hover:border-blue-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6 mt-2 border-t border-slate-100">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-8 text-lg font-black rounded-2xl shadow-xl"
                  >
                    APPLY ONLINE
                  </Button>
                </div>
                <div className="pt-6 text-[10px] text-slate-400 text-center font-bold tracking-widest uppercase">
                  Affiliation No: 987654 | Est. 2016
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}