"use client";

import { motion } from "framer-motion";
import { ourEndeavour } from "@/lib/siteData";
import { Target, Zap, Rocket, Star, Heart, Users, BookOpen, Lightbulb } from "lucide-react";

const icons = [Users, BookOpen, Heart, Zap, Target, Star, Lightbulb, Rocket];

export default function EndeavourSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-50/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Commitment</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-none">
                            Our <br />
                            <span className="text-blue-600">Endeavour.</span>
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                            We are committed to more than just academic success. Our focus is on the integrated growth of every student through personalized attention and innovative teaching methods.
                        </p>
                        <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">"Learn by Doing"</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Our core pedagogy revolves around experiential learning, ensuring that knowledge is not just memorized but deeply understood and applied.
                                </p>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {ourEndeavour.map((item, idx) => {
                            const Icon = icons[idx % icons.length];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <Icon size={24} />
                                    </div>
                                    <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">
                                        {item}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
