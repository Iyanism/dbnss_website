"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Target, Shield } from "lucide-react";

export default function StudentsIntro() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-100">
                            Empowering Learners
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter">
                            A Journey of <br />
                            <span className="text-blue-600">Growth & Excellence.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                            At Dr. Bhabendra Nath Saikia Senior Secondary School, we believe every student is a unique world of potential. Our student-centric environment is designed to foster not just academic success, but also character, leadership, and emotional intelligence.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Target,
                            title: "Academic Focus",
                            desc: "Rigorous SEBA/AHSEC curriculum delivered through modern, engaging pedagogical methods."
                        },
                        {
                            icon: Sparkles,
                            title: "Holistic Development",
                            desc: "Balancing cognitive growth with artistic, cultural, and physical education programs."
                        },
                        {
                            icon: Shield,
                            title: "Safe Environment",
                            desc: "A nurturing and secure campus where students feel valued, respected, and heard."
                        },
                        {
                            icon: Star,
                            title: "Leadership Skills",
                            desc: "Empowering students through our house system, clubs, and peer-mentorship roles."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group text-center"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-black text-slate-900 mb-3 uppercase text-sm tracking-tight">{item.title}</h3>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
