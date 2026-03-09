"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, School, Sparkles, CheckCircle2 } from "lucide-react";

const academicLevels = [
    {
        level: "Primary Section",
        classes: "LKG - Class V",
        description: "Building strong foundations through play-based learning, foundational literacy, and numeracy skills.",
        icon: BookOpen,
        features: ["Child-Centric Learning", "Discovery Based", "Behavioral Growth"]
    },
    {
        level: "Middle Section",
        classes: "Class VI - VIII",
        description: "Expanding knowledge across subjects while developing critical thinking and analytical skills.",
        icon: School,
        features: ["Subject Depth", "Skill Development", "Project Learning"]
    },
    {
        level: "Secondary Section",
        classes: "Class IX - X",
        description: "Preparing for board examinations under SEBA curriculum with comprehensive coverage.",
        icon: GraduationCap,
        features: ["Board Exam Prep", "Rigorous Assessment", "Strategic Revision"]
    },
    {
        level: "Senior Secondary",
        classes: "Class XI - XII",
        description: "Specialized streams allowing students to focus on their chosen career paths with AHSEC curriculum.",
        icon: Sparkles,
        features: ["Stream Selection", "Competitive Edge", "Career Roadmap"]
    }
];

export default function AcademicLevelsSection() {
    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-blue-50/50 -z-10" />

            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-200">
                        Academic Structure
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        LEVELS OF <br />
                        <span className="text-blue-600 italic">EXCELLENCE.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        A carefully structured academic journey designed to nurture every stage of a student&apos;s development.
                    </p>
                </motion.div>

                {/* Academic Levels Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {academicLevels.map((level, idx) => {
                        const Icon = level.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100%] transition-all group-hover:bg-blue-600 group-hover:scale-110 -z-0" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                        <Icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-black text-slate-900 mb-1 uppercase tracking-tight">{level.level}</h3>
                                    <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4 inline-block px-3 py-1 bg-blue-50 rounded-full">{level.classes}</p>

                                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 h-16">
                                        {level.description}
                                    </p>

                                    <div className="space-y-3 pt-6 border-t border-slate-50">
                                        {level.features.map((feat, fi) => (
                                            <div key={fi} className="flex items-center gap-2">
                                                <CheckCircle2 size={14} className="text-blue-600" />
                                                <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Enhanced Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-16 bg-white rounded-[3rem] shadow-2xl shadow-blue-900/5 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-blue-600/5 mix-blend-soft-light" />
                    {[
                        { label: "Academic Grades", value: "14" },
                        { label: "Success Rate", value: "100%" },
                        { label: "Expert Faculty", value: "50+" },
                        { label: "Student Focus", value: "1-on-1" }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center relative z-10 group">
                            <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-200/50 backdrop-blur-sm border border-slate-300 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                            Full SEBA/AHSEC Curriculum Compliance
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}