"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Calendar, BookOpen, Clock, ChevronRight, FileCheck } from "lucide-react";

const resourceCategories = [
    {
        id: "syllabus",
        title: "Academic Syllabus",
        icon: BookOpen,
        description: "Official SEBA & AHSEC curriculum guidelines for the 2025-26 academic session.",
        items: [
            { title: "Class 9 & 10", subtitle: "SEBA Board", year: "2025-26", size: "2.4 MB" },
            { title: "Class 11 (Science)", subtitle: "AHSEC Board", year: "2025-26", size: "3.1 MB" },
            { title: "Class 11 (Arts)", subtitle: "AHSEC Board", year: "2025-26", size: "2.8 MB" },
            { title: "Class 12 (Science)", subtitle: "AHSEC Board", year: "2025-26", size: "3.5 MB" },
            { title: "Class 12 (Arts)", subtitle: "AHSEC Board", year: "2025-26", size: "3.0 MB" },
        ]
    },
    {
        id: "timetables",
        title: "Class Schedules",
        icon: Clock,
        description: "Weekly lecture plans and laboratory session rotations for all streams.",
        items: [
            { title: "High School (9-10)", subtitle: "General Schedule", year: "2025", size: "1.2 MB" },
            { title: "HS Science (11-12)", subtitle: "Lab & Theory", year: "2025", size: "1.5 MB" },
            { title: "HS Arts (11-12)", subtitle: "Lecture Schedule", year: "2025", size: "1.2 MB" },
        ]
    },
    {
        id: "official",
        title: "Institutional Lists",
        icon: Calendar,
        description: "Mandatory school calendars, holiday lists, and examination schedules.",
        items: [
            { title: "Holiday List 2025", subtitle: "Full Academic Year", year: "Annual", size: "850 KB" },
            { title: "Internal Assessment", subtitle: "Exam Schedule", year: "Quarterly", size: "1.1 MB" },
            { title: "Uniform & Ethics", subtitle: "Student Handbook", year: "2025", size: "5.4 MB" },
        ]
    }
];

export default function ResourceSection() {
    const [activeTab, setActiveTab] = useState(resourceCategories[0].id);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 item-start">
                    
                    {/* Sidebar / Navigation */}
                    <div className="lg:w-1/3 space-y-12">
                        <div className="space-y-4">
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Student Services</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tighter uppercase">
                                ACADEMIC <br />
                                <span className="text-blue-600">PORTAL.</span>
                            </h2>
                            <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
                                Access official documents, curriculum guides, and institutional schedules in one centralized digital repository.
                            </p>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {resourceCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`group flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 ${
                                        activeTab === cat.id 
                                        ? 'bg-white border-blue-200 shadow-2xl scale-105' 
                                        : 'bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200'
                                    }`}
                                >
                                    <div className="flex items-center gap-4 text-left">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                                            activeTab === cat.id ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 shadow-sm'
                                        }`}>
                                            <cat.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className={`text-sm font-black uppercase tracking-tight ${activeTab === cat.id ? 'text-slate-900' : 'text-slate-500'}`}>
                                                {cat.title}
                                            </h3>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                {cat.items.length} Documents Available
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronRight 
                                        size={20} 
                                        className={`transition-transform duration-300 ${activeTab === cat.id ? 'translate-x-0 opacity-100 text-blue-600' : '-translate-x-4 opacity-0 text-slate-300'}`} 
                                    />
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Display */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-[0_40px_80px_-20px_rgba(30,41,59,0.08)] min-h-[600px] flex flex-col"
                            >
                                <div className="mb-12 border-b border-slate-50 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                                            {resourceCategories.find(c => c.id === activeTab)?.title}
                                        </h3>
                                        <p className="text-slate-500 font-medium max-w-lg">
                                            {resourceCategories.find(c => c.id === activeTab)?.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 italic text-[10px] font-bold text-slate-400">
                                        <FileCheck size={14} className="text-emerald-500" />
                                        Verified Documents (2025)
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {resourceCategories.find(c => c.id === activeTab)?.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-[2rem] bg-slate-50/50 border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-500"
                                        >
                                            <div className="flex items-center gap-6 mb-4 sm:mb-0">
                                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-transform group-hover:rotate-6">
                                                    <FileText size={24} strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <h4 className="text-base font-black text-slate-900 uppercase tracking-tight leading-none mb-2">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[11px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                                            {item.subtitle}
                                                        </span>
                                                        <span className="text-[11px] font-bold text-slate-400 border-l border-slate-200 pl-3">
                                                            VERSION {item.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-6 self-end sm:self-auto">
                                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest invisible group-hover:visible transition-all">
                                                    {item.size}
                                                </span>
                                                <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                                                    Download
                                                    <Download size={14} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-12 text-center border-t border-slate-50 mt-12">
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
                                        Dr. Bhupendra Nath Saikia Senior Secondary School &copy; 2025
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
