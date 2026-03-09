"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Heart } from "lucide-react";

export default function FacultyIntro() {
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
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Teaching Philosophy</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase">
                            Mentorship That <br />
                            <span className="text-blue-600">Inspires Greatness.</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                            <p>
                                At Dr. Bhabendra Nath Saikia Senior Secondary School, we believe that education is more than just imparting knowledge; it&apos;s about nurturing character, curiosity, and confidence.
                            </p>
                            <p>
                                Our faculty members are not just teachers—they are mentors, guides, and life-long learners who bring a wealth of academic brilliance and real-world experience to every classroom. Our team is committed to implementing the **SEBA & AHSEC** curriculum with a focus on holistic development and future-readiness.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: GraduationCap,
                                title: "Qualified Experts",
                                desc: "Advanced degrees and specialized training in varied disciplines."
                            },
                            {
                                icon: Award,
                                title: "Proven Success",
                                desc: "Consistent records of guiding students to board examination excellence."
                            },
                            {
                                icon: Heart,
                                title: "Student-Centric",
                                desc: "Deeply committed to the individual growth of every learner."
                            },
                            {
                                icon: GraduationCap, // Reusing icon for visual balance in grid or can use another
                                title: "Modern Pedagogy",
                                desc: "Blended learning approaches tailored for the 21st century."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all group"
                            >
                                <item.icon className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
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
