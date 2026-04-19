"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { stats } from "@/lib/siteData";
import Link from "next/link";

const features = [
    "Classes from LKG to 12th Standard",
    "Dedicated Arts & Science Streams",
    "Modern Science & Computer Labs",
    "Holistic Extracurricular Programs",
];


export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-linear-to-b from-white to-blue-50/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative group lg:order-2"
                    >
                        <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-600/20 transition-all duration-700" />
                        <div className="relative aspect-video md:aspect-video lg:aspect-video overflow-hidden rounded-[2rem] border border-blue-100 shadow-2xl">
                            <Image
                                src="/school-about.jpeg"
                                alt="Dr. Bhabendra Nath Saikia Senior Secondary School Campus"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Floating Experience Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-50 z-20 hidden md:block group-hover:-translate-y-2 transition-transform">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-black text-blue-600">9+</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                                    Years of <br /> Excellence
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content & Stats Column */}
                    <div className="space-y-16 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 bg-blue-100/50 px-4 py-2 rounded-full border border-blue-200">
                                Our Legacy
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight uppercase">
                                Leading Education in <br />
                                <span className="text-blue-600">Khetri, Assam.</span>
                            </h2>

                            <div className="space-y-6 text-slate-600 font-medium leading-relaxed mb-10">
                                <p className="text-lg text-slate-800">
                                    Established in 2016, Dr. Bhabendra Nath Saikia Senior Secondary School is the premier institution for quality education from
                                    <span className="text-blue-700 font-bold"> LKG to Class 12</span>.
                                </p>
                                <p>
                                    We specialize in offering specialized
                                    <span className="font-semibold text-slate-900"> Arts and Science streams</span> that prepare students for competitive
                                    excellence while nurturing their individual talents.
                                </p>

                                <ul className="grid sm:grid-cols-2 gap-4 mt-8">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                                            <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                                            <span className="text-[10px] font-black uppercase tracking-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={"/aboutus"}
                                className="group inline-flex items-center gap-3 text-white font-black px-8 py-4 bg-blue-600 rounded-xl shadow-xl hover:bg-slate-900 transition-all duration-300 uppercase text-xs tracking-widest"
                            >
                                <span>Explore Our History</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Statistics Grid Mini */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 group hover:border-blue-200 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-slate-900 tracking-tighter">{stat.value}</div>
                                            <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
