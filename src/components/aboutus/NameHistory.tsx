"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, BookOpen, Award, Calendar, GraduationCap, Film, Newspaper } from "lucide-react";

export default function NameHistory() {
    return (
        <section className="py-24 md:py-32 bg-linear-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-3xl -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 blur-3xl -z-10 rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-100 shadow-sm">
                        Honoring a Visionary
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                        STORY BEHIND <br />
                        <span className="text-blue-600">THE NAME.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        A tribute to Dr. Bhabendra Nath Saikia (1932-2003)—a polymath who shaped the cultural and intellectual landscape of Assam.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 sticky top-32"
                    >
                        <div className="relative group">
                            {/* Premium Decorative Photo Frame */}
                            <div className="absolute -inset-4 bg-linear-to-br from-blue-600/10 to-blue-800/5 rounded-[2.5rem] -rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-700" />
                            <div className="absolute -inset-4 border border-blue-200/50 rounded-[2.5rem] rotate-1 -z-10 group-hover:rotate-0 transition-transform duration-700 delay-75" />

                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200">
                                <Image
                                    src="https://media.geetsankalan.com/public/media/images/lyricists/404223119.jpg"
                                    alt="Dr. Bhabendra Nath Saikia"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                                {/* Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <div className="flex items-center gap-4 mb-2">
                                        <Calendar size={20} className="text-blue-400" />
                                        <span className="text-lg font-bold tracking-widest">1932 — 2003</span>
                                    </div>
                                    <p className="text-sm font-medium text-white/80 uppercase tracking-widest">Guwahati&apos;s Intellectual Pillar</p>
                                </div>
                            </div>
                        </div>

                        {/* Achievements Grid */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {[
                                { icon: Film, label: "7 Rajat Kamals", sub: "National Awards" },
                                { icon: GraduationCap, label: "London PhD", sub: "Physics" },
                                { icon: Award, label: "Padma Shri", sub: "National Honor" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
                                    <item.icon size={20} className="text-blue-600 mx-auto mb-2" />
                                    <p className="text-[10px] font-black text-slate-900 leading-tight uppercase mb-1">{item.label}</p>
                                    <p className="text-[8px] text-slate-500 font-bold uppercase tracking-tighter">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* Biography Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[100%] transition-all group-hover:w-40 group-hover:h-40" />

                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <BookOpen size={24} />
                                </span>
                                Who was Dr. Saikia?
                            </h3>

                            <div className="space-y-6 text-slate-600 font-medium leading-[1.8] text-lg">
                                <p>
                                    Dr. Bhabendra Nath Saikia was a towering figure in Indian cinema and literature. A polymath of rare caliber, he held a <span className="text-blue-600 font-bold">Doctorate in Physics from the University of London</span> and a diploma from the Imperial College of Science & Technology.
                                </p>
                                <p>
                                    His creative genius redefined Assamese storytelling. As an editor, he founded the iconic weekly <span className="italic text-slate-900 font-bold">Prantik</span> and the children&apos;s magazine <span className="italic text-slate-900 font-bold">Safura</span>, which continue to inspire intellectual curiosity across the state.
                                </p>
                                <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-blue-600 mt-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Newspaper size={20} className="text-blue-600" />
                                        <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest">Literary & Cinematic Legacy</h4>
                                    </div>
                                    <p className="text-sm">
                                        He directed 8 feature films, 7 of which won the <span className="font-bold text-slate-900 tracking-tight">Rajat Kamal (National Award)</span> from the Government of India. His literary contributions earned him the Sahitya Akademi Award and the Assam Valley Literature Award.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Why DBNS? Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-linear-to-br from-blue-600 to-blue-800 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-black mb-8 flex items-center gap-4">
                                    <span className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                                        <Award size={24} />
                                    </span>
                                    The DBNS Vision
                                </h3>
                                <p className="text-blue-50 text-lg md:text-xl font-medium leading-relaxed mb-8">
                                    Our institution bears his name to instill a passion for <span className="text-white font-black underline decoration-blue-300 underline-offset-8">versatility</span> in every student. Just as Dr. Saikia bridged the world of London Physics with Assamese Cinema, we empower our students to excel in both Science and Arts.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {["Intellectual Rigor", "Cultural Pride", "Creative Excellence"].map((val, idx) => (
                                        <span key={idx} className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                                            {val}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Famous Quote */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative py-12 px-6"
                        >
                            <Quote size={80} className="absolute top-0 left-0 text-blue-100 -z-10 opacity-50" />
                            <div className="max-w-2xl">
                                <p className="text-2xl md:text-3xl font-serif italic text-slate-700 leading-snug mb-8">
                                    &quot;The primary goal of education is to understand life, to realize its depths, and to make it more mysterious and beautiful.&quot;
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-0.5 bg-blue-600 rounded-full" />
                                    <div>
                                        <p className="font-black text-slate-900 text-lg uppercase tracking-tight">Dr. Bhabendra Nath Saikia</p>
                                        <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">Padma Shri & Sahitya Akademi Awardee</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}