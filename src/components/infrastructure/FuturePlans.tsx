"use client";

import { motion } from "framer-motion";
import { ArrowRight, Map, Building2 } from "lucide-react";
import Image from "next/image";

const images = [
    {
        src: "https://images.unsplash.com/photo-1575281923032-f40d94ef6160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Main Expansion Blueprint",
        caption: "Hostel & Research Wing"
    },
    {
        src: "/dbnss/infra/volly_ball.jpeg",
        alt: "Modern Interior Concept",
        caption: "Smart Common Areas"
    },
    {
        src: "https://images.unsplash.com/photo-1657979224146-77c99f339b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMGdhcmRlbnxlbnwwfDB8MHx8fDI%3D",
        alt: "Eco-Friendly Architecture",
        caption: "Green Energy Integration"
    }
];

export default function FuturePlans() {
    return (
        <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] block">Vision 2030</span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
                                OUR VISION <br />
                                <span className="text-blue-600">FOR EXPANSION.</span>
                            </h2>
                        </div>

                        <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            With the acquisition of our new land, we are embarking on a transformative journey. Our vision includes state-of-the-art residential facilities, an indoor sports complex, and advanced research wings.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group">
                                <Building2 size={32} className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-black uppercase mb-2 tracking-tight">Hostel Wing</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">Modern, safe, and comfortable residential facilities for outstation students.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group">
                                <Map size={32} className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-black uppercase mb-2 tracking-tight">Eco-Campus</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">A sustainable expansion plan featuring green energy and nature-integrated learning zones.</p>
                            </div>
                        </div>

                        <button className="flex items-center gap-4 group">
                            <span className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-all shadow-xl shadow-blue-500/20">
                                <ArrowRight size={24} />
                            </span>
                            <span className="text-xs font-black uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">Learn About the Vision</span>
                        </button>
                    </motion.div>

                    {/* Multi-Image Gallery Section */}
                    <div className="relative">
                        <div className="absolute -inset-20 bg-blue-600/10 blur-[120px] rounded-full" />

                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {/* Large Main Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="col-span-2 relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-slate-800 group shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                            >
                                <Image
                                    src={images[0].src}
                                    alt={images[0].alt}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
                                <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-[10px] font-black uppercase tracking-widest">{images[0].caption}</span>
                                </div>
                            </motion.div>

                            {/* Smaller Secondary Images */}
                            {images.slice(1).map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                                    className="relative aspect-square rounded-[2rem] overflow-hidden border border-slate-800 group shadow-2xl"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
                                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:15px_15px]" />
                                    <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-[8px] font-black uppercase tracking-widest">{img.caption}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Animated Annotation Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute top-[20%] right-[10%] w-32 h-32 border border-blue-500/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute top-10 left-10 w-24 h-24 border-t border-l border-blue-500/20 rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
