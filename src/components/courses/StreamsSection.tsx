"use client";

import { motion } from "framer-motion";
import { FlaskConical, Palette, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const streams = [
    {
        id: "science",
        title: "Science Stream",
        icon: FlaskConical,
        description: "For students with analytical aptitude and interest in scientific inquiry and innovation.",
        gradient: "from-blue-600 to-indigo-700",
        combinations: [
            {
                name: "PCM Group",
                subjects: "Physics, Chemistry, Mathematics",
                careers: "Engineering, Architecture, Computer Science"
            },
            {
                name: "PCB Group",
                subjects: "Physics, Chemistry, Biology",
                careers: "Medicine, Dentistry, Biotechnology"
            }
        ],
        electives: ["Computer Science", "Fine Arts", "Economics"]
    },
    {
        id: "arts",
        title: "Arts Stream",
        icon: Palette,
        description: "For students interested in humanities, social sciences, and diverse creative expressions.",
        gradient: "from-slate-800 to-slate-900",
        combinations: [
            {
                name: "Core Humanities",
                subjects: "Assamese, English, Education, Economics",
                careers: "Civil Services, Law, Journalism, Teaching"
            },
            {
                name: "Social Sciences",
                subjects: "Assamese, English, History, Political Science",
                careers: "Public Administration, Research, Social Work"
            }
        ],
        electives: ["Fine Arts", "Computer Science", "Sociology"]
    }
];

export default function StreamsSection() {
    return (
        <section className="py-24 md:py-32 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-slate-200">
                        Class XI & XII
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        SPECIALIZED <br />
                        <span className="text-blue-600 uppercase">ACADEMIC STREAMS.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        Precision-engineered learning pathways for students ready to specialize and lead in their chosen fields.
                    </p>
                </motion.div>

                {/* Streams Grid */}
                <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {streams.map((stream, idx) => {
                        const Icon = stream.icon;
                        return (
                            <motion.div
                                key={stream.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="relative group"
                            >
                                {/* Premium Card Container */}
                                <div className={`h-full bg-linear-to-br ${stream.gradient} rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col`}>

                                    {/* Decor Pattern */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                                    <div className="relative z-10 flex-1">
                                        <div className="flex items-center gap-6 mb-10">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                                <Icon size={32} />
                                            </div>
                                            <h3 className="text-3xl font-black tracking-tight">{stream.title}</h3>
                                        </div>

                                        <p className="text-blue-50 text-lg font-medium leading-relaxed mb-10 opacity-90">
                                            {stream.description}
                                        </p>

                                        {/* Combinations Dynamic Layout */}
                                        <div className="space-y-6 mb-12">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-4">Core Combinations</h4>
                                            {stream.combinations.map((combo, cidx) => (
                                                <div key={cidx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-colors">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <GraduationCap size={18} className="text-blue-300" />
                                                        <h5 className="font-black text-sm uppercase tracking-widest">{combo.name}</h5>
                                                    </div>
                                                    <p className="text-xs text-blue-100 font-medium mb-2">{combo.subjects}</p>
                                                    <div className="flex items-center gap-2 text-[10px] font-bold text-white/50 uppercase">
                                                        <span>Prospects:</span>
                                                        <span className="text-white">{combo.careers}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Electives Badges */}
                                        <div className="pt-8 border-t border-white/10">
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-4">Available Electives</p>
                                            <div className="flex flex-wrap gap-2">
                                                {stream.electives.map((el, ei) => (
                                                    <span key={ei} className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-tight border border-white/10">
                                                        {el}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final Professional Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-20"
                >
                    <div className="max-w-2xl mx-auto space-y-6">
                        <p className="text-slate-500 font-medium text-sm">
                            Subject combinations are reviewed annually to align with AHSEC academic standards and student aspirations.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all group shadow-xl shadow-blue-500/20"
                        >
                            Get Academic Counseling
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}