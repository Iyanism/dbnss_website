"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Enhanced campus life data with actual Unsplash images
// Enhanced campus life data focusing on events and school activities
const campusItems = [
    {
        id: 1,
        title: "Freshers' Social 2022",
        description: "Welcoming the newest members of the DBNSS family with vibrancy and talent showcases.",
        img: "/dbnss/2022_freshers/WhatsApp Image 2026-03-02 at 9.22.35 PM.jpeg",
        size: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "Environment Day",
        description: "Committing to a greener future through plantation drives and environmental awareness.",
        img: "/dbnss/Environment day/WhatsApp Image 2026-03-02 at 9.41.22 PM.jpeg",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        title: "Scientific Seminars",
        description: "Exploring biodiversity and conservation strategies with experts.",
        img: "/dbnss/Seminar on vulture preservation/WhatsApp Image 2026-03-02 at 9.24.25 PM.jpeg",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 4,
        title: "Sports Excellence",
        description: "Showcasing athleticism, discipline, and the true spirit of sportsmanship.",
        img: "/dbnss/sports_day/WhatsApp Image 2026-03-02 at 9.26.16 PM.jpeg",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 5,
        title: "Annual Picnic",
        description: "Moments of joy, bonding, and exploring beyond the classroom.",
        img: "/dbnss/picnic_2022/WhatsApp Image 2026-03-02 at 9.43.09 PM.jpeg",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 6,
        title: "Social Responsibility",
        description: "Active participation in Swacha Bharat and civic engagement.",
        img: "/dbnss/Swacha bharat mission/WhatsApp Image 2026-03-02 at 9.19.17 PM.jpeg",
        size: "md:col-span-1 md:row-span-1",
    },
];

export default function CampusLifeSection() {
    return (
        <section className="py-20 md:py-28 bg-linear-to-b from-white to-blue-50/20">
            <div className="container mx-auto px-6 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <span className="inline-block text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
                        Vibrant Campus Culture
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                        LIFE AT <span className="text-blue-600">DBNSS.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Beyond the classroom, our students engage in a rich tapestry of cultural, scientific, and community activities that shape their character.
                    </p>
                </motion.div>

                {/* Spacious Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[280px]">
                    {campusItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.size}`}
                        >
                            {/* Image */}
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 bg-zinc-900"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Minimal Gradient Overlay - just enough for text readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Title - always visible, minimal, at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description - appears on hover */}
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <p className="text-white text-lg leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Blue accent on hover */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-blue-400 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.a
                        href="/events"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors shadow-xl"
                    >
                        Explore All Events
                        <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">→</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}