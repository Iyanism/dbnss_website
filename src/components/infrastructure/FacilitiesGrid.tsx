"use client";

import { motion } from "framer-motion";
import { Monitor, BookOpen, Dumbbell, Wifi, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const facilities = [
    {
        title: "Smart Classrooms",
        icon: Monitor,
        desc: "Our classrooms are designed to be centers of interactive learning. Equipped with digital boards and ergonomic furniture, they provide a stimulating environment that makes learning engaging and effective.",
        features: [
            "Digital Interactive Boards",
            "High-Speed Wi-Fi Connectivity",
            "Ergonomic Furniture",
            "Natural Lighting & Ventilation"
        ],
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop"
    },
    {
        title: "The Digital Library",
        icon: BookOpen,
        desc: "A sanctuary for knowledge seekers, our library houses over 5,000 volumes across varied disciplines. The integrated e-learning zone provides access to global journals and digital resources.",
        features: [
            "5,000+ Physical Books",
            "E-Learning Computing Zone",
            "Quiet Reading Room",
            "Newspaper & Periodical Section"
        ],
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1000&auto=format&fit=crop"
    },
    {
        title: "Computer Laboratory",
        icon: Wifi,
        desc: "Designed for the digital age, our IT lab features high-performance workstations and specialized software for coding, design, and research, ensuring students stay ahead in the tech race.",
        features: [
            "High-Spec Workstations",
            "Fiber-Optic Internet",
            "Advanced Software Suites",
            "IT Project Support Area"
        ],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop"
    },
    {
        title: "Sports & Athletics",
        icon: Dumbbell,
        desc: "A healthy mind resides in a healthy body. Our sports infrastructure includes professional-grade courts and vast fields for athletics, football, and cricket training.",
        features: [
            "Badminton & Volleyball Courts",
            "Full-Size Football Field",
            "Cricket Practice Nets",
            "Indoor Games Facilities"
        ],
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&auto=format&fit=crop"
    }
];

export default function FacilitiesGrid() {
    return (
        <section className="py-32 bg-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Core Amenities</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-8">
                            SPACES BUILT <br />
                            <span className="text-blue-600">FOR POTENTIAL.</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
                            Our physical environment is a silent educator. We provide world-class facilities to ensure that every student has the tools and space required to excel.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-40">
                    {facilities.map((fac, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                                {/* Image Column */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`relative group ${!isEven ? 'lg:order-2' : ''}`}
                                >
                                    <div className="absolute -inset-6 bg-blue-100/50 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl">
                                        <Image
                                            src={fac.image}
                                            alt={fac.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
                                        <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white shadow-xl">
                                            <fac.icon size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content Column */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`space-y-8 ${!isEven ? 'lg:order-1' : ''}`}
                                >
                                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                                        {fac.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                        {fac.desc}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        {fac.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 size={14} className="text-blue-600" />
                                                </div>
                                                <span className="text-[11px] font-black uppercase tracking-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats or Highlight */}
                                    <div className="pt-8 flex items-center gap-12">
                                        <div className="space-y-1">
                                            <div className="text-2xl font-black text-blue-600">Capacity</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Standard Compliant</div>
                                        </div>
                                        <div className="w-px h-12 bg-slate-200" />
                                        <div className="space-y-1">
                                            <div className="text-2xl font-black text-slate-900">Modern</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Equipment & Tech</div>
                                        </div>
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
