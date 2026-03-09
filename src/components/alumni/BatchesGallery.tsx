"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const batches = [
    {
        year: "2019",
        images: [
            "/dbnss/2019_batch/WhatsApp Image 2026-03-02 at 9.18.42 PM.jpeg",
            "/dbnss/2019_batch/WhatsApp Image 2026-03-02 at 9.18.43 PM.jpeg",
            "/dbnss/2019_batch/WhatsApp Image 2026-03-02 at 9.40.18 PM.jpeg",
            "/dbnss/2019_batch/WhatsApp Image 2026-03-02 at 9.40.18 PM (1).jpeg"
        ]
    },
    {
        year: "2020",
        images: [
            "/dbnss/2020_batch/WhatsApp Image 2026-03-02 at 9.17.45 PM.jpeg",
            "/dbnss/2020_batch/WhatsApp Image 2026-03-02 at 9.17.46 PM.jpeg"
        ]
    }
];

export default function BatchesGallery() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-2">Academic Generations</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                        ALUMNI <span className="text-blue-600">GENERATIONS.</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {batches.map((batch, batchIdx) => (
                        <div key={batchIdx} className="space-y-8">
                            <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest border-l-4 border-blue-600 pl-6">
                                Class of {batch.year}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {batch.images.map((src, imgIdx) => (
                                    <motion.div
                                        key={imgIdx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: imgIdx * 0.1 }}
                                        className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-lg group"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Batch ${batch.year} - Image ${imgIdx + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
