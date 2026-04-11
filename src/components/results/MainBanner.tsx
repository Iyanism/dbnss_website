"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ResultsMainBanner() {
    return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image - Graduation/Success themed */}
            <Image
                src="/dbnss/Felicitation of centre toppers/result_main.webp"
                alt="Academic Excellence and Success"
                fill
                priority
                className="object-cover scale-105 object-"
                sizes="100vw"
                quality={90}
            />

            {/* Sharp Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/60" />

            {/* Content */}
            <div className="container relative z-10 px-6 md:px-12 text-center md:text-left">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            Legacy of Success
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase">
                            OUR PROUD <br />
                            <span className="text-blue-400">
                                ACHIEVEMENTS.
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed drop-shadow-md">
                            Celebrating the academic milestones and extraordinary performances of our students in the board examinations.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
        </section>
    );
}
