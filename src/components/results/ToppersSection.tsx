"use client";

import { motion } from "framer-motion";
import { Star, Quote, Award } from "lucide-react";
import Image from "next/image";

const toppers = [
    {
        name: "Abhinav Sharma",
        rank: "1st Rank (HS Science)",
        percentage: "98.2%",
        year: "2024",
        achievement: "State Topper in Chemistry & Physics",
        image: "https://images.unsplash.com/photo-1519085185750-7407a73b9e68?w=800&auto=format&fit=crop"
    },
    {
        name: "Priya Das",
        rank: "3rd Rank (HSLC)",
        percentage: "97.5%",
        year: "2024",
        achievement: "Highest Marks in Mathematics & Science",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop"
    },
    {
        name: "Rohan Kalita",
        rank: "1st Rank (HS Arts)",
        percentage: "96.4%",
        year: "2023",
        achievement: "Exceptional Performance in English & Political Science",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
    }
];

export default function ToppersSection() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-24 text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Hall of Fame</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-8">
                            CELEBRATING OUR <br />
                            <span className="text-blue-600">BRIGHTEST MINDS.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {toppers.map((topper, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Decorative Background Card */}
                            <div className="absolute inset-0 bg-blue-50 rounded-[3rem] translate-y-8 group-hover:translate-y-4 transition-transform duration-500 opacity-0 group-hover:opacity-100" />

                            <div className="relative p-10 bg-white rounded-[3rem] border border-slate-100 shadow-2xl space-y-8 hover:border-blue-200 transition-all duration-500">
                                {/* Quote Icon */}
                                <div className="absolute top-10 right-10 text-slate-50 opacity-10 group-hover:text-blue-100 transition-colors">
                                    <Quote size={80} fill="currentColor" stroke="none" />
                                </div>

                                {/* Student Image */}
                                <div className="relative w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
                                    <Image
                                        src={topper.image}
                                        alt={topper.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                                </div>

                                {/* Info */}
                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center gap-2 text-blue-600">
                                        <Award size={18} strokeWidth={2} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{topper.rank}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                                        {topper.name}
                                    </h3>

                                    <div className="p-6 rounded-2xl bg-slate-50 space-y-2 group-hover:bg-blue-600 transition-colors duration-500">
                                        <div className="text-3xl font-black text-blue-600 group-hover:text-white transition-colors">{topper.percentage}</div>
                                        <div className="text-[10px] font-bold text-slate-400 group-hover:text-white/60 uppercase tracking-widest uppercase transition-colors">Batch of {topper.year}</div>
                                    </div>

                                    <p className="text-slate-500 text-xs font-medium leading-relaxed italic">
                                        &quot;{topper.achievement}&quot;
                                    </p>
                                </div>

                                {/* Star Badges */}
                                <div className="pt-4 flex gap-2">
                                    {[1, 2, 3].map((star) => (
                                        <Star key={star} size={14} className="text-blue-500 fill-blue-500" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
