"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import Image from "next/image";

import { toppers, hslc2026Toppers, prideStudents, type Topper, type PrideStudent } from "@/lib/siteData";

export default function ToppersSection() {
    return (
        <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 max-w-7xl">
                {/* Header Section */}
                <div className="mb-16 md:mb-24 text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-2">Academic Excellence</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                            HALL OF <span className="text-blue-600">FAME.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Section: HSLC 2026 Toppers */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-10">
                        <Award className="text-blue-600 w-8 h-8" />
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">HSLC 2026 Excellence</h3>
                    </div>

                    <div className="space-y-8">
                        {/* Limelight for Center Topper - Full Width Hero */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-blue-600 p-8 md:p-12 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-blue-200 relative overflow-hidden group"
                        >
                            {/* Decorative Sparkle Influence */}
                            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                            
                            <div className="relative w-56 h-72 md:w-64 md:h-80 flex-shrink-0 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl z-10">
                                <Image
                                    src={hslc2026Toppers[0].image}
                                    alt={hslc2026Toppers[0].name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-8 text-center md:text-left z-10 flex-grow">
                                <div className="space-y-4">
                                    <span className="bg-white text-blue-600 text-xs font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg inline-block">HSLC Center Topper</span>
                                    <h4 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter">{hslc2026Toppers[0].name}</h4>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                                    <div className="space-y-1">
                                        <span className="text-7xl md:text-8xl font-black tracking-tighter">{hslc2026Toppers[0].percentage}</span>
                                    </div>
                                    <div className="hidden md:block h-20 w-px bg-white/20" />
                                    <div className="space-y-1">
                                        <span className="text-4xl md:text-5xl font-black">2026</span>
                                        <p className="text-blue-100 font-extrabold uppercase tracking-[0.4em] text-xs">Passing Year</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Other HSLC Toppers - 2 Column Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {hslc2026Toppers.slice(1).map((topper, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                                >
                                    <div className="relative w-32 h-44 flex-shrink-0 rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
                                        <Image
                                            src={topper.image}
                                            alt={topper.name}
                                            fill
                                            className="object-cover"
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase leading-tight">{topper.name}</h4>
                                                <div className="flex flex-col">
                                                    <span className="text-blue-600 font-black text-4xl">{topper.percentage}</span>
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">HSLC 2026</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 1: Our Centre Toppers */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-10">
                        <Award className="text-blue-600 w-8 h-8" />
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Our Centre Toppers</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {toppers.map((topper: Topper, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.4 }}
                                className="bg-white p-3 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-3 md:space-y-4"
                            >
                                <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden border-2 border-slate-50 shadow-inner">
                                    <Image
                                        src={topper.image}
                                        alt={topper.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm md:text-lg font-black text-slate-900 uppercase leading-none">{topper.name}</h4>
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
                                        <span className="text-blue-600 font-black text-lg md:text-xl">{topper.percentage}</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{topper.year}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Our Pride */}
                <div>
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="text-blue-600 w-8 h-8" />
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Our Pride</h3>
                        </div>
                        <p className="text-slate-600 font-medium text-sm md:text-base max-w-2xl leading-relaxed">
                            Students who made us proud by cracking JEE / NEET and pursuing their degrees in Prestigious institutions of Assam and India.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {prideStudents.map((student: PrideStudent, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.4 }}
                                className="bg-white p-3 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-3 md:space-y-4"
                            >
                                <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden border-2 border-slate-50 shadow-inner bg-slate-100">
                                    <Image
                                        src={student.image}
                                        alt={student.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm md:text-lg font-black text-slate-900 uppercase leading-tight">{student.name}</h4>
                                    <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">{student.achievement}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
