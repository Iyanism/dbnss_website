"use client";

import { motion } from "framer-motion";
import { rulesAndRegulations } from "@/lib/siteData";
import { ShieldAlert, CheckCircle, Info } from "lucide-react";

export default function RulesSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Conduct & Discipline</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                            Rules & <span className="text-blue-600">Regulations</span>
                        </h2>
                        <p className="text-slate-500 font-medium leading-relaxed">
                            To maintain a productive and safe learning environment, all students are expected to adhere to the following institutional guidelines.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {rulesAndRegulations.map((rule, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-6 md:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex gap-6 items-start"
                            >
                                <div className={`p-4 rounded-2xl shrink-0 ${idx === 4 ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                                    {idx === 4 ? <ShieldAlert size={24} /> : <CheckCircle size={24} />}
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 block">Rule #0{idx + 1}</span>
                                    <p className="text-slate-700 font-bold leading-relaxed">
                                        {rule}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 p-6 rounded-2xl bg-blue-600 text-white flex items-center gap-4 shadow-lg shadow-blue-200"
                    >
                        <Info size={24} className="shrink-0" />
                        <p className="text-xs font-bold uppercase tracking-wide">
                            The school authority reserves the right to take disciplinary action against any breach of the above-mentioned rules.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
