"use client";

import { motion } from "framer-motion";

export default function AdmissionHero() {
    return (
        <section className="relative pt-32 pb-20 bg-slate-900 h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853064-85a1730046d2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-linear-to-b from-blue-900/50 to-slate-900" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black uppercase tracking-widest mb-6">
                        Academics & Enrollment
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight mb-8">
                        Begin Your <span className="text-blue-400">Journey</span> <br />
                        With Us
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-300 font-medium leading-relaxed">
                        Join a community dedicated to academic rigor and holistic development. Find everything you need to know about joining our 2026-27 session.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
