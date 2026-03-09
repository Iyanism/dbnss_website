"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Compass, Users, BookOpen, CheckCircle2, Star } from "lucide-react";

export default function MissionVisionSection() {
    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-blue-50/30 -z-10" />

            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-200">
                        Our North Star
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        MISSION, VISION & <br />
                        <span className="text-blue-600">PHILOSOPHY.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        The core principles that drive every academic and cultural endeavor at Dr. Bhabendra Nath Saikia School.
                    </p>
                </motion.div>

                {/* Primary Mission & Vision Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 text-blue-50 group-hover:text-blue-100 transition-colors">
                            <Target size={120} strokeWidth={0.5} />
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/30 mb-8">
                                <Target size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-6">Our Mission</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                                To provide <span className="text-blue-600 font-bold">quality education</span> that nurtures academic excellence, fosters creativity, and builds strong character, while honoring the literary and cultural legacy of Dr. Bhabendra Nath Saikia.
                            </p>

                            <div className="grid gap-4">
                                {[
                                    "Conceptual Clarity in Core Subjects",
                                    "Cultural Integration & Moral Values",
                                    "Fostering Creative Expression",
                                    "Building Compassionate Leadership"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                                        <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-linear-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-blue-600/20 text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
                            <Eye size={120} strokeWidth={0.5} />
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 mb-8">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-3xl font-black mb-6">Our Vision</h3>
                            <p className="text-blue-50 text-xl font-serif italic border-l-4 border-blue-300 pl-6 mb-10 leading-relaxed">
                                &quot;To be a leading institution in Northeast India, producing generations of students who excel academically while staying rooted in their heritage.&quot;
                            </p>

                            <div className="space-y-6">
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-200">Impact Goals</h4>
                                <div className="grid gap-4">
                                    {[
                                        { icon: Star, text: "Excellence in Regional Education" },
                                        { icon: Heart, text: "Character & Value-based Growth" },
                                        { icon: Users, text: "Community Service & Patriotism" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                                                <item.icon size={16} />
                                            </div>
                                            <span className="text-sm font-bold tracking-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Secondary Principles - Dynamic Row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Compass, title: "Integrity", desc: "Honesty in thought and action." },
                        { icon: Users, title: "Inclusivity", desc: "Equal growth for every child." },
                        { icon: BookOpen, title: "Excellence", desc: "Setting the highest benchmarks." },
                        { icon: Heart, title: "Heritage", desc: "Pride in our Assamese roots." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all shadow-sm group"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <item.icon size={24} />
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Core Values Badge Cloud */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-10 border-t border-slate-200 text-center"
                >
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.5em] mb-10">Rooted In Values</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Curiosity", "Empathy", "Resilience", "Discipline", "Originality", "Collaboration"].map((v, i) => (
                            <span key={i} className="px-6 py-2 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm">
                                {v}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}