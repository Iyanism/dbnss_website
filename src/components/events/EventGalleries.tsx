"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TreePine, Microscope, Globe, Heart, Trophy, UserRound, Star } from "lucide-react";

const allEvents = [
    {
        title: "Freshers' Social 2022",
        icon: Star,
        color: "text-purple-600 bg-purple-50",
        description: "Welcoming the newest members of the DBNSS family with vibrancy and talent showcases.",
        images: [
            "/dbnss/2022_freshers/WhatsApp Image 2026-03-02 at 9.22.35 PM.jpeg",
            "/dbnss/2022_freshers/WhatsApp Image 2026-03-02 at 9.22.37 PM.jpeg",
            "/dbnss/2022_freshers/WhatsApp Image 2026-03-02 at 9.22.37 PM (1).jpeg"
        ]
    },
    {
        title: "Environment Day",
        icon: TreePine,
        color: "text-emerald-600 bg-emerald-50",
        description: "Committing to a greener future through plantation drives and environmental awareness.",
        images: [
            "/dbnss/Environment day/WhatsApp Image 2026-03-02 at 9.41.22 PM.jpeg",
            "/dbnss/Environment day/WhatsApp Image 2026-03-02 at 9.31.00 PM.jpeg",
            "/dbnss/Environment day/WhatsApp Image 2026-03-02 at 9.31.01 PM.jpeg"
        ]
    },
    {
        title: "Vulture Seminar",
        icon: Microscope,
        color: "text-blue-600 bg-blue-50",
        description: "Exploring biodiversity and conservation strategies for the vultures of the region.",
        images: [
            "/dbnss/Seminar on vulture preservation/WhatsApp Image 2026-03-02 at 9.24.25 PM.jpeg",
            "/dbnss/Seminar on vulture preservation/WhatsApp Image 2026-03-02 at 9.21.05 PM.jpeg",
            "/dbnss/Seminar on vulture preservation/WhatsApp Image 2026-03-02 at 9.21.07 PM.jpeg"
        ]
    },
    {
        title: "Geography Field Work",
        icon: Globe,
        color: "text-indigo-600 bg-indigo-50",
        description: "Practical learning and survey work at NEDFi, bridging the gap between theory and reality.",
        images: [
            "/dbnss/Visit in NEDFi for geography Project work/WhatsApp Image 2026-03-02 at 9.26.45 PM.jpeg",
            "/dbnss/Visit in NEDFi for geography Project work/WhatsApp Image 2026-03-02 at 9.26.45 PM (1).jpeg"
        ]
    },
    {
        title: "Teachers' Day Celebrations",
        icon: UserRound,
        color: "text-amber-600 bg-amber-50",
        description: "Honoring the architects of our future through student-led performances and tributes.",
        images: [
            "/dbnss/teachers_day_2024/WhatsApp Image 2026-03-02 at 9.45.43 PM.jpeg",
            "/dbnss/teachers_day_2024/WhatsApp Image 2026-03-02 at 9.45.44 PM.jpeg"
        ]
    },
    {
        title: "Annual Sports Day",
        icon: Trophy,
        color: "text-rose-600 bg-rose-50",
        description: "A showcase of athleticism, discipline, and the true spirit of sportsmanship.",
        images: [
            "/dbnss/sports_day/WhatsApp Image 2026-03-02 at 9.16.40 PM (1).jpeg",
            "/dbnss/sports_day/WhatsApp Image 2026-03-02 at 9.26.16 PM.jpeg"
        ]
    }
];

export default function EventGalleries() {
    return (
        <section className="bg-white">
            {allEvents.map((event, idx) => (
                <div key={idx} className={`py-24 ${idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-4 space-y-6"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${event.color}`}>
                                    <event.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                    {event.title}
                                </h2>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                    {event.description}
                                </p>
                            </motion.div>

                            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                                {event.images.map((src, imgIdx) => (
                                    <motion.div
                                        key={imgIdx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: imgIdx * 0.1 }}
                                        className={`relative aspect-video rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl group ${imgIdx === 0 && event.images.length === 3 ? 'sm:col-span-2' : ''}`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`${event.title} ${imgIdx + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
