"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GraduationCap, BookOpen, User, Search, Filter } from "lucide-react";
import { facultyMembers } from "@/lib/siteData";

interface Teacher {
    id: string;
    name: string;
    subject: string;
    qualification: string;
    experience: string;
    classes: string;
    image: string;
    category: string;
}

function TeacherCard({ teacher }: { teacher: Teacher }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-500"
        >
            <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-slate-100" />
                <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">
                        {teacher.name}
                    </h4>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                        <BookOpen size={16} className="text-blue-500" />
                        <span className="text-xs font-black uppercase tracking-widest">{teacher.subject}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                        <GraduationCap size={16} className="text-blue-500" />
                        <span className="text-sm font-medium">{teacher.qualification}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-slate-600">
                        <div className="flex items-center gap-3">
                            <User size={16} className="text-blue-500" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{teacher.classes}</span>
                        </div>
                        {teacher.experience && teacher.experience !== "N/A" && (
                            <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest leading-none border border-blue-100">
                                {teacher.experience}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function FacultySections() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Senior Section (9-12)", "Junior Section (Nursery-8)", "Non-Teaching Staff"];

    const filteredTeachers = useMemo(() => {
        return facultyMembers.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                               item.subject.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === "All" || item.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    return (
        <section className="py-24 bg-slate-50/50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Search and Filter Controls */}
                <div className="mb-16 space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div className="relative w-full md:max-w-md group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name or subject..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium"
                            />
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                                        activeCategory === cat 
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                                        : "bg-white text-slate-500 border border-slate-200 hover:border-blue-200 hover:text-blue-600"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {filteredTeachers.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                            <p className="text-slate-400 font-bold uppercase tracking-widest">No faculty members found matching your criteria.</p>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredTeachers.map((teacher) => (
                            <TeacherCard key={teacher.id} teacher={teacher} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
