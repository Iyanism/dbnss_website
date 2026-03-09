"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const events = [
    {
        date: "March 15, 2025",
        title: "Annual Sports Day 2025",
        desc: "A day filled with athletic spirit and remarkable performances by our students across various disciplines.",
        category: "Event"
    },
    {
        date: "March 10, 2025",
        title: "Inter-school Science Fair Winner",
        desc: "Congratulations to our class X team for securing first place in the Regional Science Innovation Fair.",
        category: "Achievement"
    },
    {
        date: "Upcoming",
        title: "Parent-Teacher Meeting",
        desc: "The semester-end PTM is scheduled for April 5th. Invitations and time slots have been sent via email.",
        category: "Meeting"
    },
];

export default function NewsEventsSection() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 md:mb-24">
                    <div className="text-center md:text-left">
                        <span className="inline-block text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
                            Campus Updates
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                            Latest News & <span className="text-blue-600">Events</span>
                        </h2>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-200 p-8 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Category Badge */}
                            <div className="mb-6">
                                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full
                                    ${event.category === 'Achievement' ? 'bg-green-50 text-green-700 border border-green-200' :
                                        event.category === 'Event' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                            'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                                    {event.category}
                                </span>
                            </div>

                            {/* Date with icon */}
                            <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                                <Calendar size={14} className="text-blue-400" />
                                <span className="font-medium">{event.date}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {event.desc}
                            </p>

                            {/* Read More Link */}
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                            >
                                <span>Read more</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-100 rounded-b-2xl overflow-hidden">
                                <div className="h-full w-0 group-hover:w-full bg-blue-600 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}