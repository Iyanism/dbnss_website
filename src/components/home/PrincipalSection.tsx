"use client";

import { motion } from "framer-motion";
import { Quote, Award, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function PrincipalSection() {
    return (
        <section className="py-20 md:py-28 bg-linear-to-b from-white to-blue-50/20">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute -top-5 -left-5 w-32 h-32 bg-blue-100/50 rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-5 -right-5 w-40 h-40 border-4 border-blue-200/60 rounded-2xl -z-10"></div>

                        {/* Image Container */}
                        <div className="relative aspect-4/5 w-full max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/dbnss/principal_sir/20260302_105406.jpg.jpeg"
                                alt="Dr. Arnab Saikia - Principal"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {/* Blue Overlay on Hover */}
                            <div className="absolute inset-0 bg-linear-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-xl shadow-lg border border-blue-100 flex items-center gap-3"
                        >
                            <Award className="text-blue-600" size={24} />
                            <div>
                                <div className="text-sm font-bold text-slate-900">25+ Years</div>
                                <div className="text-xs text-slate-500">of Educational Leadership</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2"
                    >
                        {/* Quote Icon */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Quote className="text-blue-200 mb-4" size={56} strokeWidth={1} />
                        </motion.div>

                        {/* Main Quote */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            Nurturing <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Excellence</span> through Empowered Learning
                        </h3>

                        {/* Message */}
                        <div className="space-y-6 text-slate-600 leading-relaxed mb-10 border-l-8 border-blue-600/20 pl-8">
                            <p className="text-lg font-medium text-slate-800">
                                Welcome to Dr. Bhabendra Nath Saikia Senior Secondary School, a hub of academic brilliance in Khetri.
                            </p>
                            <p>
                                Since our inception, we have been dedicated to providing a comprehensive educational path from LKG upwards, specializing in
                                <span className="font-bold text-slate-900"> Arts and Science streams</span> that challenge and inspire.
                                We don&apos;t just teach subjects; we cultivate the next generation of thinkers, innovators, and leaders.
                            </p>
                        </div>

                        {/* Principal Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="bg-linear-to-br from-blue-600 to-blue-800 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />

                            <h4 className="text-2xl md:text-3xl font-black text-white mb-1">Dr. Arnab Saikia</h4>
                            <p className="text-blue-200 font-bold mb-6 uppercase tracking-widest text-sm">Principal & Founder Administrator</p>

                            {/* Contact Info */}
                            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
                                <a href="mailto:principal@drbsaikiaschool.edu.in" className="flex items-center gap-3 text-sm text-blue-100 hover:text-white transition-colors">
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Mail size={16} />
                                    </div>
                                    <span className="font-medium">principal@drbsaikiaschool.edu.in</span>
                                </a>
                                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-blue-100 hover:text-white transition-colors">
                                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                        <Phone size={16} />
                                    </div>
                                    <span className="font-medium">+91 98765 43210</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Signature Line */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-6 text-right"
                        >
                            <div className="inline-block w-32 h-0.5 bg-blue-200 mb-2"></div>
                            <p className="text-xs text-slate-400 italic">Leading with vision since 2005</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}