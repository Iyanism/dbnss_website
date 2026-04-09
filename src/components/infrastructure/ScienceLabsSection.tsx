"use client";

import { motion } from "framer-motion";
import { Beaker, FlaskConical, Microscope, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const labs = [
    {
        title: "Physics Laboratory",
        icon: Beaker,
        desc: "Equipped with advanced apparatus for electricity, optics, and mechanics. Our lab provides students with a hands-on understanding of the fundamental principles of physics.",
        features: ["Optical Benches", "Sonometer & Resonators", "Electronic Testing Tools", "Capacitance Measurement"],
        image: "/dbnss/facilities/physics_lab.webp"
    },
    {
        title: "Chemistry Laboratory",
        icon: FlaskConical,
        desc: "A safe, well-ventilated space featuring precision balances, chemical storage, and apparatus for qualitative and quantitative analysis.",
        features: ["Digital PH Meters", "Centrifuge Machines", "Distillation Units", "Safety Showers & Gear"],
        image: "/dbnss/facilities/chemistry_lab.webp"
    },
    {
        title: "Biology Laboratory",
        icon: Microscope,
        desc: "Exploring the marvels of life science through compound microscopes, human skeletal models, and high-quality specimens.",
        features: ["Compound Microscopes", "Permanent Specimens", "Human Skeleton Model", "Dissection Kits"],
        image: "/dbnss/facilities/biology.webp",
        image2: "/dbnss/facilities/biology1.webp"
    }
];

export default function ScienceLabsSection() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-24 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Scientific Excellence</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-8">
                            PRECISION <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800">LABORATORIES.</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">
                            Practical education is the bridge between theory and innovation. Our science labs are built to meet the highest board standards, ensuring a safe and exploratory environment for all.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-40">
                    {labs.map((lab, idx) => {
                        const isEven = idx % 2 === 0;
                        const hasDualImages = 'image2' in lab;
                        return (
                            <div key={idx} className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                                {/* Image Column */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`relative group ${!isEven ? 'lg:order-2' : ''}`}
                                >
                                    <div className="absolute -inset-6 bg-blue-100/50 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    
                                    {hasDualImages ? (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl">
                                                <Image
                                                    src={lab.image}
                                                    alt={`${lab.title} - View 1`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                            </div>
                                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl">
                                                <Image
                                                    src={lab.image2!}
                                                    alt={`${lab.title} - View 2`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl">
                                            <Image
                                                src={lab.image}
                                                alt={lab.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                            <div className="absolute bottom-8 left-8 right-8">
                                                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md p-4 rounded-2xl w-fit text-white">
                                                    <lab.icon size={24} strokeWidth={1.5} />
                                                    <span className="text-xs font-black uppercase tracking-widest">{lab.title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>

                                {/* Content Column */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`space-y-8 ${!isEven ? 'lg:order-1' : ''}`}
                                >
                                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                                        The <span className="text-blue-600">{lab.title}</span>
                                    </h3>
                                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                        {lab.desc}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {lab.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 size={14} className="text-blue-600" />
                                                </div>
                                                <span className="text-[11px] font-black uppercase tracking-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
