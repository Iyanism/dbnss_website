"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

const felicitationImages = [
    "/dbnss/Felicitation of centre toppers/WhatsApp Image 2026-03-02 at 9.52.28 PM.jpeg",
    "/dbnss/Felicitation of centre toppers/WhatsApp Image 2026-03-02 at 9.52.29 PM.jpeg",
    "/dbnss/Felicitation of centre toppers/WhatsApp Image 2026-03-02 at 9.53.33 PM.jpeg",
    "/dbnss/Felicitation of centre toppers/WhatsApp Image 2026-03-02 at 9.55.44 PM.jpeg",
    "/dbnss/Felicitation of centre toppers/WhatsApp Image 2026-03-02 at 9.54.20 PM.jpeg",
    "/dbnss/Felicitation of centre toppers/WhatsApp Image 2026-03-02 at 9.55.43 PM.jpeg",
    "/dbnss/Felicitation of centre toppers/WhatsApp Image 2026-03-02 at 9.55.43 PM (1).jpeg",
];

export default function FelicitationGallery() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Moment of Glory</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                            EXCELLENCE <br />
                            <span className="text-blue-600">CELEBRATED.</span>
                        </h2>
                    </div>
                    <div className="max-w-md text-right hidden md:block">
                        <p className="text-slate-500 font-medium leading-relaxed">
                            Captured moments from our annual Felicitation Ceremony, where we honor the hard work and outstanding achievements of our board toppers.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {felicitationImages.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden border border-slate-100 shadow-xl ${(idx === 0 || idx === 2 || idx === 1 || idx == 3) ? 'md:col-span-2 md:row-span-2 aspect-3/4' : 'aspect-3/3 md:col-span-2 md:row-span-2'} ${(idx === 6) ? `md:col-span-4 col-span-2 md:row-span-2 aspect-video` : `aspect-3/3 md:col-span-2 md:row-span-2`}`}
                        >
                            <Image
                                src={src}
                                alt={`Felicitation Ceremony - Image ${idx + 1}`}
                                fill
                                className="transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
