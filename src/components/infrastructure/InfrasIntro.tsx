"use client";

import { motion } from "framer-motion";
import { Landmark, Monitor, BookOpen, Globe } from "lucide-react";

export default function InfrasIntro() {
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
                        <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4 block">Physical & Digital Assets</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter">
                            A Foundation for <br />
                            <span className="text-blue-600">Modern Learning.</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                            <p>
                                Infrastructure at Dr. Bhabendra Nath Saikia Senior Secondary School is more than just bricks and mortar; it is a carefully curated environment designed to stimulate the intellect and inspire the soul.
                            </p>
                            <p>
                                From high-speed internet across the campus to advanced science laboratories, we provide our students with the tools they need to navigate the complexities of the 21st century. Our facilities are continuously upgraded to stay ahead of educational trends.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Landmark,
                                title: "Modern Building",
                                desc: "Architecturally designed to maximize natural light and airflow."
                            },
                            {
                                icon: Monitor,
                                title: "Smart Integration",
                                desc: "Every classroom is equipped with digital interactive boards."
                            },
                            {
                                icon: BookOpen,
                                title: "Rich Library",
                                desc: "Thousands of volumes across academic and literary genres."
                            },
                            {
                                icon: Globe,
                                title: "Connected Campus",
                                desc: "Safe, secure, and monitored internet access for all students."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all group"
                            >
                                <item.icon className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                                <h3 className="font-black text-slate-900 mb-2 uppercase text-sm tracking-tight">{item.title}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
