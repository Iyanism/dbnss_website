"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flag } from "lucide-react";

export default function HeritageSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Institutional Identity</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                                OUR <span className="text-blue-600 border-b-8 border-blue-600/10">HERITAGE.</span>
                            </h2>
                        </div>
                        <p className="text-slate-600 font-medium leading-relaxed max-w-xl text-lg">
                            The school flag stands as a beacon of our values—Wisdom, Integrity, and Growth. It represents our collective journey from a small foundation to a leading institution in Khetri.
                        </p>
                        <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-3xl border border-blue-100 italic text-blue-700 font-medium">
                            <Flag className="shrink-0" size={24} />
                            &quot;Upholding the torch of knowledge since 2004.&quot;
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(37,99,235,0.2)] border border-slate-100"
                    >
                        <Image
                            src="/dbnss/flag/WhatsApp Image 2026-03-02 at 9.27.43 PM.jpeg"
                            alt="DBNSS School Flag"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
