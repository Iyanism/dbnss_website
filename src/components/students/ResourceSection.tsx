"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar, BookOpen, Clock } from "lucide-react";

const syllabusData = [
    { title: "Class 9 & 10", subtitle: "SEBA Board", year: "2025-26" },
    { title: "Class 11 (Science)", subtitle: "AHSEC Board", year: "2025-26" },
    { title: "Class 11 (Arts)", subtitle: "AHSEC Board", year: "2025-26" },
    { title: "Class 12 (Science)", subtitle: "AHSEC Board", year: "2025-26" },
    { title: "Class 12 (Arts)", subtitle: "AHSEC Board", year: "2025-26" },
];

const resourceCategories = [
    {
        title: "Academic Syllabus",
        icon: BookOpen,
        description: "Detailed breakdown of subjects and topics for the current academic year.",
        items: syllabusData
    },
    {
        title: "Time Tables",
        icon: Clock,
        description: "Class-wise and stream-wise schedules for regular lectures and labs.",
        items: [
            { title: "High School (9-10)", subtitle: "General Schedule", year: "2025" },
            { title: "HS Science (11-12)", subtitle: "Lab & Theory", year: "2025" },
            { title: "HS Arts (11-12)", subtitle: "Lecture Schedule", year: "2025" },
        ]
    },
    {
        title: "Official Lists",
        icon: Calendar,
        description: "Mandatory school documents and academic year overviews.",
        items: [
            { title: "Holiday List 2025", subtitle: "Full Academic Year", year: "Annual" },
            { title: "Exam Schedule", subtitle: "Internal Assessments", year: "Quarterly" },
        ]
    }
];

export default function ResourceSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {resourceCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <category.icon size={40} className="text-blue-600" strokeWidth={1.5} />
                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{category.title}</h2>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{category.description}</p>
                            </div>

                            <div className="space-y-4">
                                {category.items.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="group p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                                <FileText size={18} />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.subtitle}</p>
                                            </div>
                                        </div>
                                        <button className="p-2 bg-blue-100/50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
