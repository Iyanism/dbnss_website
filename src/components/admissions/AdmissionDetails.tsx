"use client";

import { motion } from "framer-motion";
import { admissionDetails } from "@/lib/siteData";
import { CheckCircle2, FileText, IndianRupee, ExternalLink, Info } from "lucide-react";
import { Button } from "../ui/button";

export default function AdmissionDetails() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Eligibility & Portal */}
                    <div className="lg:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-600 rounded-2xl text-white">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 uppercase">Eligibility Criteria</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                    <h3 className="text-blue-600 font-black uppercase text-sm mb-4">Science Stream (Class 11)</h3>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                        {admissionDetails.eligibility.science}
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                    <h3 className="text-blue-600 font-black uppercase text-sm mb-4">Arts Stream (Class 11)</h3>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                        {admissionDetails.eligibility.arts}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 p-8 rounded-3xl bg-blue-600 text-white relative overflow-hidden group">
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="space-y-2 text-center md:text-left">
                                        <h4 className="text-xl font-black uppercase tracking-tight">External Admission Portal</h4>
                                        <p className="text-blue-100 text-sm font-medium">Admissions are handled via the official Government Darpan portal.</p>
                                    </div>
                                    <a href={admissionDetails.portalLink} target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-7 rounded-xl font-black uppercase text-xs shadow-lg transition-transform group-hover:scale-105">
                                            Apply via Darpan Portal <ExternalLink size={14} className="ml-2" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-emerald-600 rounded-2xl text-white">
                                    <FileText size={24} />
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 uppercase">Required Documentation</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {admissionDetails.documentation.map((doc, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-50 bg-slate-50/50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                        <p className="text-sm font-medium text-slate-600">{doc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Fees Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white sticky top-32 border border-slate-800 shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-500 rounded-2xl text-white">
                                    <IndianRupee size={24} />
                                </div>
                                <h2 className="text-2xl font-black uppercase">Fee Structure</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                                    <h3 className="text-blue-400 font-black uppercase text-xs mb-4">Science Stream</h3>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <span className="text-slate-400 text-xs font-bold uppercase">Admission Fee</span>
                                        <span className="text-xl font-black">₹{admissionDetails.fees.science.admission}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-slate-400 text-xs font-bold uppercase">Monthly Fee</span>
                                        <span className="text-xl font-black">₹{admissionDetails.fees.science.monthly}</span>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                                    <h3 className="text-blue-400 font-black uppercase text-xs mb-4">Arts Stream</h3>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <span className="text-slate-400 text-xs font-bold uppercase">Admission Fee</span>
                                        <span className="text-xl font-black">₹{admissionDetails.fees.arts.admission}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-slate-400 text-xs font-bold uppercase">Monthly Fee</span>
                                        <span className="text-xl font-black">₹{admissionDetails.fees.arts.monthly}</span>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-4 items-start">
                                    <Info size={16} className="text-blue-400 shrink-0 mt-1" />
                                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed uppercase tracking-wider">
                                        Note: Fees mentioned above are subject to change as per institutional policy and government norms. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
