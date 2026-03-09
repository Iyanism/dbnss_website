"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactMainBanner() {
    return (
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Background Image - School campus or high-quality administrative photo */}
            <Image
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1920&auto=format&fit=crop"
                alt="Connect with Dr. Bhabendra Nath Saikia School"
                fill
                priority
                className="object-cover scale-105"
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
                            Support & Inquiries
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase">
                            GET IN <br />
                            <span className="text-blue-400">
                                TOUCH.
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed drop-shadow-md">
                            Have questions about admissions, academics, or our campus? We&apos;re here to provide the answers and support you need.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
        </section>
    );
}
