"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Coffee, UserCheck } from "lucide-react";

const staffImages = [
    "/dbnss/staff_room/20260302_104713.jpg.jpeg",
    "/dbnss/teachers/20260302_104930.jpg.jpeg"
];

export default function FacultyLife() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        {staffImages.map((src, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg group col-span-2 aspect-video`}
                            >
                                <Image
                                    src={src}
                                    alt={`Faculty Life - Image ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Beyond Academics</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                                FACULTY <span className="text-blue-600 border-b-8 border-blue-600/10">LIFE.</span>
                            </h2>
                        </div>
                        <p className="text-slate-600 font-medium leading-relaxed max-w-xl">
                            Our teachers are more than just educators; they are a close-knit community dedicated to the holistic growth of every student. Collaborative planning and shared moments in the staff room foster a supportive environment for professional excellence.
                        </p>
                        <div className="flex gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Coffee size={20} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Collaborative Culture</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <UserCheck size={20} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Mentorship Driven</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
