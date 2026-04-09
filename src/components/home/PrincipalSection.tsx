"use client";

import { motion } from "framer-motion";
import { Quote, Award, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function PrincipalSection() {
    return (
        <section className="py-20 md:py-28 bg-linear-to-b from-white to-blue-50/20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Image Column - Redesigned for Mobile-First Nameplate */}
                    <div className="relative group">
                        {/* Decorative Background for Image */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/5 rounded-3xl -z-10 animate-pulse"></div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(30,41,59,0.2)] bg-slate-100"
                        >
                            <Image
                                src="/dbnss/principal_sir/20260302_105406.jpg.jpeg"
                                alt="Dr. Arnab Saikia - Principal"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            
                            {/* Floating Nameplate for Mobile & Desktop Hover Effect */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-6 right-6 left-12 sm:left-auto bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 select-none"
                            >
                                <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-none mb-1">Mr. Chandra Dhar Baishya</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Principal</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Experience Badge - Subtle Floating Element */}
                        <div className="absolute top-8 left-8 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <Award size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest">25+ Years Experience</span>
                        </div>
                    </div>

                    {/* Content Column - Message & Legacy */}
                    <div className="space-y-10 py-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <Quote className="text-blue-600/10 mb-4" size={80} strokeWidth={1} />
                            
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">
                                NURTURING <span className="text-blue-600">EXCELLENCE</span> <br />
                                THROUGH VISION.
                            </h3>

                            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg font-medium italic border-l-4 border-blue-600/20 pl-6 md:pl-8">
                                <p>
                                    Welcome to Dr. Bhabendra Nath Saikia Senior Secondary School, a hub of academic brilliance and character building in Khetri.
                                </p>
                                <p>
                                    Since 2016, our mission has been to provide a comprehensive educational path that challenges and inspires. We don&apos;t just teach subjects; we cultivate the next generation of thinkers, innovators, and leaders prepared for the global stage.
                                </p>
                            </div>

                            {/* Contact & Professional Connect */}
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                <a href="mailto:dbns0308@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Official Mail</p>
                                        <p className="text-xs font-bold text-slate-800 truncate">dbns0308@gmail.com</p>
                                    </div>
                                </a>
                                <a href="tel:+919435609603" className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Direct Line</p>
                                        <p className="text-xs font-bold text-slate-800">+91 9435609603</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        <div className="pt-8 border-t border-slate-100 text-right">
                             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Leading with vision since 2016</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}