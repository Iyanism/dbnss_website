"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users, FileCheck } from "lucide-react";

export default function ResultsIntro() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4 block">Performance Analytics</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter">
                            A Tradition of <br />
                            <span className="text-blue-600">Educational Merit.</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                            <p>
                                At Dr. Bhabendra Nath Saikia Senior Secondary School, our results speak for our commitment to quality education. We take immense pride in maintaining a consistent track record of high pass percentages and top ranks.
                            </p>
                            <p>
                                Our approach combines rigorous academic training with personalized mentorship, ensuring that every student reaches their full potential. The statistics below reflect years of hard work by our students and the unwavering dedication of our faculty.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Award,
                                title: "Consistent Ranks",
                                stats: "Top 10",
                                desc: "Regularly featuring in the board's top performer lists."
                            },
                            {
                                icon: TrendingUp,
                                title: "Pass Percentage",
                                stats: "98%+",
                                desc: "An outstanding tradition of across-the-board success."
                            },
                            {
                                icon: Users,
                                title: "Toppers Gallery",
                                stats: "100+",
                                desc: "Celebrating our achievers across all academic streams."
                            },
                            {
                                icon: FileCheck,
                                title: "Board Standards",
                                stats: "SEBA/AHSEC",
                                desc: "Aligned with the highest state educational benchmarks."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all group"
                            >
                                <item.icon className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                                <div className="text-2xl font-black text-slate-900 mb-1">{item.stats}</div>
                                <h3 className="font-black text-blue-600 mb-2 uppercase text-[10px] tracking-widest">{item.title}</h3>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
