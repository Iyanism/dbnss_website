"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap } from "lucide-react";
import { useState } from "react";

const hslcResults = [
    { year: 2024, passRate: "98.5%", distinction: 15, starMarks: 22, pdf: "#" },
    { year: 2023, passRate: "97.2%", distinction: 12, starMarks: 18, pdf: "#" },
    { year: 2022, passRate: "100%", distinction: 18, starMarks: 25, pdf: "#" },
    { year: 2021, passRate: "99.0%", distinction: 10, starMarks: 20, pdf: "#" },
];

const hsResults = {
    science: [
        { year: 2024, passRate: "96.8%", distinction: 10, starMarks: 15, pdf: "#" },
        { year: 2023, passRate: "95.5%", distinction: 8, starMarks: 12, pdf: "#" },
    ],
    arts: [
        { year: 2024, passRate: "99.1%", distinction: 14, starMarks: 21, pdf: "#" },
        { year: 2023, passRate: "98.0%", distinction: 11, starMarks: 19, pdf: "#" },
    ]
};

export default function ResultGrid() {
    const [activeTab, setActiveTab] = useState<"hslc" | "hs-science" | "hs-arts">("hslc");

    const renderResults = (data: typeof hslcResults) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 bg-blue-50 text-blue-600 rounded-bl-[1.5rem]">
                        <span className="text-xl font-black">{item.year}</span>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-blue-600">
                            <GraduationCap size={24} strokeWidth={1.5} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Board Exam</span>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-black text-slate-900 tracking-tighter">{item.passRate}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Overall Pass Rate</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
                            <div className="space-y-1">
                                <div className="text-xl font-black text-slate-900">{item.distinction}</div>
                                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Distinctions</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-xl font-black text-slate-900">{item.starMarks}</div>
                                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Star Marks</div>
                            </div>
                        </div>
                        <button className="flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all text-slate-600">
                            <span className="text-[10px] font-black uppercase tracking-widest">Subject-wise Stats</span>
                            <Download size={16} />
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );

    return (
        <section className="py-24 bg-slate-50/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Academic Records</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                        Historical <br />
                        <span className="text-blue-600">Board Results.</span>
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {[
                            { id: "hslc", label: "HSLC (Class 10)" },
                            { id: "hs-science", label: "HS Science (Class 12)" },
                            { id: "hs-arts", label: "HS Arts (Class 12)" }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as "hslc" | "hs-science" | "hs-arts")}
                                className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                                    ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30"
                                    : "bg-white text-slate-500 hover:bg-slate-100"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    {activeTab === "hslc" && renderResults(hslcResults)}
                    {activeTab === "hs-science" && renderResults(hsResults.science)}
                    {activeTab === "hs-arts" && renderResults(hsResults.arts)}
                </div>
            </div>
        </section>
    );
}
