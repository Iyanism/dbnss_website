"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

const alumniGroups = [
    {
        title: "Farewell 2025",
        images: [
            "/dbnss/farewell_2025/WhatsApp Image 2026-03-02 at 9.16.40 PM (2).jpeg",
            "/dbnss/farewell_2025/WhatsApp Image 2026-03-02 at 9.16.41 PM.jpeg",
            "/dbnss/farewell_2025/WhatsApp Image 2026-03-02 at 9.16.41 PM (1).jpeg"
        ]
    },
    {
        title: "Farewell 2023",
        images: [
            "/dbnss/farewell_2023/WhatsApp Image 2026-03-02 at 9.25.52 PM.jpeg"
        ]
    }
];

export default function AlumniGallery() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl">
                        <GraduationCap size={24} />
                    </div>
                    <div>
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Legacy Network</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                            The <span className="text-blue-600">FAREWELLS.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {alumniGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-200 transition-colors group"
                        >
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{group.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {group.images.map((src, imgIdx) => (
                                    <div key={imgIdx} className={`relative aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-xl ${imgIdx === 0 && group.images.length === 3 ? 'col-span-2 aspect-video' : ''}`}>
                                        <Image
                                            src={src}
                                            alt={`${group.title} - Image ${imgIdx + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
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
