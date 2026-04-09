"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Star } from "lucide-react";

const pioneerImages = [
    "/dbnss/first_batch_2018/WhatsApp Image 2026-03-02 at 9.34.53 PM.webp",
    "/dbnss/first_batch_2018/WhatsApp Image 2026-03-02 at 9.34.54 PM.webp"
];

export default function PioneersSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-1 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Historical Milestone</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                                THE <span className="text-blue-600 border-b-8 border-blue-600/10">PIONEERS.</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                Celebrating our **First Batch of 2018**. These students laid the foundation of excellence at DBNSS, setting a standard for all future graduates to follow.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {pioneerImages.map((src, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="relative aspect-16/10 md:aspect-video rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0_30px_60px_-15px_rgba(37,99,235,0.2)] group"
                                >
                                    <Image
                                        src={src}
                                        alt={`First Batch 2018 - Image ${idx + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-12">
                            <div className="flex flex-col items-center">
                                <Award className="text-blue-600 mb-2" size={40} />
                                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">Class of 2018</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Star className="text-blue-600 mb-2" size={40} />
                                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">Foundation Batch</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
