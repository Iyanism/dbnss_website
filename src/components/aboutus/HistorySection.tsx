"use client";

import { motion } from "framer-motion";
import { Building, GraduationCap, Trophy, Users } from "lucide-react";

const timelineEvents = [
    {
        year: "2016",
        title: "FOUNDATION OF EXCELLENCE",
        description: "Established with a visionary goal to transform regional education in Khetri, honoring Dr. Bhabendra Nath Saikia's legacy.",
        icon: Building,
        color: "blue"
    },
    {
        year: "2018",
        title: "ACADEMIC EXPANSION",
        description: "Inaugurated the Higher Secondary wing with dedicated Science and Arts streams, setting a new benchmark for academic rigor.",
        icon: GraduationCap,
        color: "slate"
    },
    {
        year: "2021",
        title: "RECORD-BREAKING RESULTS",
        description: "Achieved the first 100% pass result in Board Exams, with numerous students securing top positions in the state.",
        icon: Trophy,
        color: "blue"
    },
    {
        year: "2025",
        title: "A DECADE OF IMPACT",
        description: "Celebrating 9+ years of nurturing over 2,000+ alumni who are now leading across various sectors globally.",
        icon: Users,
        color: "slate"
    }
];

export default function HistorySection() {
    return (
        <section className="py-24 md:py-32 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-24"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-slate-200">
                        Our Evolution
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        MILESTONES OF <br />
                        <span className="text-blue-600 uppercase">THE JOURNEY.</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        A retrospective look at 9+ years of dedication to sculpting the future of Assam&apos;s youth.
                    </p>
                </motion.div>

                {/* Premium Timeline Layout */}
                <div className="max-w-5xl mx-auto relative px-4 sm:px-0">
                    {/* Central Vertical Line */}
                    <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden sm:block" />
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100 sm:hidden" />

                    <div className="space-y-16">
                        {timelineEvents.map((event, idx) => {
                            const Icon = event.icon;
                            const isOdd = idx % 2 !== 0;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className={`relative flex items-center justify-between gap-12 sm:gap-20 ${isOdd ? "sm:flex-row-reverse" : ""}`}
                                >
                                    {/* Content Card */}
                                    <div className="flex-1 ml-16 sm:ml-0">
                                        <div className="group bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-xl hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-3xl font-black text-blue-600 italic tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                                                    {event.year}
                                                </span>
                                                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">{event.title}</h3>
                                            </div>
                                            <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Central Node */}
                                    <div className="absolute left-8 sm:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                                        <div className={`w-14 h-14 rounded-2xl bg-white border-2 border-slate-50 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${event.color === 'blue' ? 'text-blue-600' : 'text-slate-600'}`}>
                                            <Icon size={24} strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    {/* Empty Side for Desktop Symmetry */}
                                    <div className="flex-1 hidden sm:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Performance Stats Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-32 relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-soft-light" />
                    <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: "Years of Legacy", value: "9+" },
                            { label: "Successful Alumni", value: "2K+" },
                            { label: "Expert Faculty", value: "60+" },
                            { label: "Arts/Science Streams", value: "2" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.3em]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}