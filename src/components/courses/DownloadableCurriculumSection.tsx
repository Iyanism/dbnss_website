"use client";

import { motion } from "framer-motion";
import { FileText, Download, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DownloadableCurriculumSection() {
    return (
        <section className="py-24 md:py-32 bg-white flex items-center justify-center">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Premium High-Impact Banner */}
                    <div className="relative rounded-[3rem] overflow-hidden bg-linear-to-br from-blue-700 via-blue-800 to-indigo-900 shadow-2xl shadow-blue-900/40 group">

                        {/* Interactive Background Elements */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-blue-500/20 to-transparent blur-3xl rounded-full opacity-50 pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center">

                            {/* Left Visual Hook */}
                            <div className="lg:w-2/5 p-12 md:p-20 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 bg-white/5 backdrop-blur-md">
                                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 border border-white/20 shadow-xl shadow-blue-900/20">
                                    <Sparkles size={40} className="text-blue-200" />
                                </div>
                                <h3 className="text-blue-100 text-xs font-black uppercase tracking-[0.4em] mb-4">New Session 2025-26</h3>
                                <h4 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter">
                                    DOWNLOAD THE <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white italic">PROSPECTUS.</span>
                                </h4>
                                <div className="flex items-center gap-3 text-white/50">
                                    <FileText size={18} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">PDF format • 4.2 MB</span>
                                </div>
                            </div>

                            {/* Right Action Area */}
                            <div className="lg:w-3/5 p-12 md:p-20 w-full">
                                <div className="max-w-md mx-auto lg:mx-0">
                                    <p className="text-blue-50 text-xl font-medium leading-relaxed mb-10 text-center lg:text-left">
                                        Everything you need to know about <span className="text-white font-black underline decoration-blue-400 underline-offset-8">admissions</span>, curriculum, fees, and school policies—all in one comprehensive guide.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="/downloads/prospectus-2025-26.pdf"
                                            className="flex-1 bg-white text-blue-900 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-center hover:bg-slate-900 hover:text-white transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group/btn"
                                        >
                                            <Download size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
                                            Start Download
                                        </Link>
                                    </div>

                                    <p className="mt-8 text-[10px] font-bold text-white/40 text-center lg:text-left uppercase tracking-widest">
                                        © 2026 Dr. Bhabendra Nath Saikia Senior Secondary School
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}