"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifeMainBanner() {
    return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            <Image
                src="/dbnss/flag/WhatsApp Image 2026-03-02 at 9.27.43 PM.webp"
                alt="DBNSS Campus Life"
                fill
                priority
                className="object-cover scale-105"
                sizes="100vw"
                quality={90}
            />
            <div className="absolute inset-0 bg-slate-900/50" />
            <div className="container relative z-10 px-6 md:px-12 text-center md:text-left">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            Campus Chronicles
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase">
                            LIFE AT <br />
                            <span className="text-blue-400">
                                DBNSS.
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed drop-shadow-md">
                            Exploring the moments, milestones, and memories that define our vibrant school community.
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
        </section>
    );
}
