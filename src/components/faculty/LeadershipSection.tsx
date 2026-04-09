"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Mail, Phone } from "lucide-react";

const leadershipTeam: any[] = [];

export default function LeadershipSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                    <span className="inline-block text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
                        Leadership Team
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                        OUR <span className="text-blue-600">PRINCIPAL</span> & <span className="text-blue-600">VICE PRINCIPAL</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Dedicated leaders shaping the future of education at Dr. Bhabendra Nath Saikia Senior Secondary School.
                    </p>
                </div>

                {/* Leadership Cards */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {leadershipTeam.map((leader, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl hover:shadow-3xl transition-all duration-500"
                        >
                            {/* Image Section */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                                {/* Experience Badge */}
                                <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                    <Award size={14} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{leader.experience}</span>
                                </div>

                                {/* Name Overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight">
                                        {leader.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                        <p className="text-xs font-black uppercase tracking-widest text-blue-200">{leader.title}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 space-y-6">
                                <p className="text-slate-600 text-base font-medium leading-relaxed">
                                    {leader.description}
                                </p>

                                {/* Contact Information */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <a href={`mailto:${leader.email}`} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all group">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Mail size={16} />
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Email</p>
                                            <p className="text-xs font-bold text-slate-800 truncate">{leader.email}</p>
                                        </div>
                                    </a>
                                    <a href={`tel:${leader.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all group">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Phone size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Phone</p>
                                            <p className="text-xs font-bold text-slate-800">{leader.phone}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
