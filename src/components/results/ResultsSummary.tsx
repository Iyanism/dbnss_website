"use client";

import { motion } from "framer-motion";
import { historicalResults } from "@/lib/siteData";
import { TrendingUp, Award, Calendar } from "lucide-react";

export default function ResultsSummary() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Legacy of Excellence</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                        Historical <span className="text-blue-600">Performance</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium">
                        Our consistent track record of 100% and high-merit passing percentages across both Arts and Science streams since our early years.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Science Stream */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase leading-none">Science Stream</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase mt-2">H.S. Final Results</p>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-slate-100">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest">Year</th>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-right">Passing Result</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {historicalResults.science.map((res, idx) => (
                                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="px-6 py-5 flex items-center gap-3">
                                                <Calendar size={14} className="text-blue-500" />
                                                <span className="font-black text-slate-700">{res.year}</span>
                                            </td>
                                            <td className="px-6 py-5 text-right font-black text-blue-600">
                                                <span className={`px-3 py-1 rounded-full ${res.percentage === '100%' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                                    {res.percentage}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Arts Stream */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-4 bg-purple-600 rounded-2xl text-white shadow-lg shadow-purple-200">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase leading-none">Arts Stream</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase mt-2">H.S. Final Results</p>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-slate-100">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest">Year</th>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-right">Passing Result</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {historicalResults.arts.map((res, idx) => (
                                        <tr key={idx} className="hover:bg-purple-50/50 transition-colors group">
                                            <td className="px-6 py-5 flex items-center gap-3">
                                                <Calendar size={14} className="text-purple-500" />
                                                <span className="font-black text-slate-700">{res.year}</span>
                                            </td>
                                            <td className="px-6 py-5 text-right font-black text-purple-600">
                                                <span className={`px-3 py-1 rounded-full ${res.percentage === '100%' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-purple-50 text-purple-600 border border-purple-100'}`}>
                                                    {res.percentage}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
