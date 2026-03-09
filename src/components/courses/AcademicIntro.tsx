"use client";

import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, GraduationCap } from "lucide-react";

export default function AcademicIntro() {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-50/50 blur-3xl -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-100">
                                Academic Excellence
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                A JOURNEY OF <br />
                                <span className="text-blue-600 uppercase">BOARD-CERTIFIED GROWTH.</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                                At Dr. Bhabendra Nath Saikia Senior Secondary School, we are committed to providing a structured and rigorous academic environment. Our institution strictly adheres to the standard curriculum prescribed by the <span className="text-slate-900 font-black">Board of Secondary Education, Assam (SEBA)</span> and the <span className="text-slate-900 font-black">Assam Higher Secondary Education Council (AHSEC)</span>.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: ShieldCheck, title: "SEBA Certified", desc: "Standardized curriculum for secondary levels." },
                                    { icon: BookOpen, title: "Holistic Preparation", desc: "Focusing on conceptual clarity for board exams." },
                                    { icon: GraduationCap, title: "Career Pathways", desc: "Strategic guidance for higher education transition." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Callout Box / Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-linear-to-br from-blue-600/20 to-indigo-600/10 rounded-[2.5rem] rotate-2 -z-10 blur-xl" />
                            <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-[2rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-700" />

                                <h3 className="text-2xl font-black mb-6 flex items-center gap-4">
                                    <span className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-md">
                                        <ShieldCheck className="text-blue-300" />
                                    </span>
                                    SEBA Compliant
                                </h3>
                                <p className="text-slate-300 text-lg font-medium leading-relaxed mb-8">
                                    Our academic sessions, teaching methodologies, and internal assessments are meticulously designed to align with <span className="text-white font-bold">SEBA guidelines</span>, ensuring our students are perfectly prepared for state-level board examinations.
                                </p>
                                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                                    <div className="text-center">
                                        <p className="text-2xl font-black text-white">100%</p>
                                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Compliance</p>
                                    </div>
                                    <div className="w-px h-10 bg-white/10" />
                                    <div className="text-center">
                                        <p className="text-2xl font-black text-white">LKG-12</p>
                                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Coverage</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
