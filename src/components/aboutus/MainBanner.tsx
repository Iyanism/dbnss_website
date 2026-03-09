"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MainBanner() {
    return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with optimized loading */}
            <Image
                src="https://plus.unsplash.com/premium_photo-1663126316750-473850988047?auto=format&blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&fit=crop&h=630&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAyODEyNjA2fA&ixlib=rb-4.0.3&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&q=60&w=1200"
                alt="Dr. Bhabendra Nath Saikia School Campus"
                fill
                priority
                className="object-cover scale-105"
                sizes="100vw"
            />

            {/* Sharp Dark Overlay for maximum text visibility */}
            <div className="absolute inset-0 bg-slate-900/50" />

            {/* Content */}
            <div className="container relative z-10 px-6 md:px-12 text-center md:text-left">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-white text-xs font-bold uppercase tracking-[0.3em] mb-6">
                            Excellence Since 2004
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase">
                            A LEGACY OF <br />
                            <span className="text-blue-400">
                                BRILLIANCE.
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed drop-shadow-md">
                            Honouring the intellectual and cultural heritage of Dr. Bhabendra Nath Saikia through world-class education.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
        </section>
    );
}