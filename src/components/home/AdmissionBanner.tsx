"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdmissionBanner() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 -z-10" />
            <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group"
                >
                    {/* Inner Decorative Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        {/* Left: Main Message */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                            <div className="bg-white text-blue-800 p-6 rounded-2xl shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] shrink-0">
                                <Calendar size={40} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-500/30 text-blue-100 text-xs font-bold px-4 py-2 rounded-full mb-6 border border-blue-400/30 uppercase tracking-widest">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                    Admissions Phase 2026-27
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    Secure the <span className="text-blue-300">Best Future</span> <br className="hidden md:block" /> for Your Child
                                </h3>
                                <p className="text-blue-100/80 text-lg md:text-xl max-w-xl font-medium">
                                    Enrolling for <span className="text-white font-bold">LKG to Class 8</span> and
                                    <span className="text-white font-bold"> Class 11 (Arts & Science)</span>.
                                    Limited seats available for the 2026-27 session.
                                </p>
                            </div>
                        </div>

                        {/* Right: CTA */}
                        <div className="flex flex-col items-center lg:items-end gap-6 shrink-0">
                            <div className="text-center lg:text-right">
                                <div className="text-blue-200/70 text-sm font-bold uppercase tracking-widest mb-1">Application Deadline</div>
                                <div className="text-3xl font-black text-white">April 11, 2026</div>
                            </div>
                            <Link
                                href="/admissions"
                                className="group bg-white text-blue-900 hover:bg-blue-50 px-12 py-5 rounded-2xl font-black transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-white/10 hover:-translate-y-1"
                            >
                                Apply Now
                                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}