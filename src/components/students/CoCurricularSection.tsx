"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Palette, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const activities = [
    {
        title: "Sports & Athletics",
        icon: Trophy,
        desc: "Regular inter-house competitions in Football, Cricket, and Athletics to build grit and team spirit. Our ground is designed to professional standards, providing the perfect platform for aspiring athletes.",
        details: [
            "Annual Sports Meet",
            "Inter-House Cricket League",
            "Athletics Training Program",
            "Specialized Coaching Sessions"
        ],
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&auto=format&fit=crop"
    },
    {
        title: "Clubs & Societies",
        icon: Users,
        desc: "From Science Innovation to Literary Debates, our clubs nurture specific interests beyond textbooks. We encourage students to lead and innovate within their chosen fields.",
        details: [
            "Science & Innovation Club",
            "Literary & Debating Society",
            "Eco-Green Environmental Club",
            "IT & Coding Workshop"
        ],
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop"
    },
    {
        title: "Arts & Culture",
        icon: Palette,
        desc: "Traditional Sattriya dance, contemporary music, and visual arts programs led by experts. We celebrate the rich cultural heritage of Assam while exploring modern creative expressions.",
        details: [
            "Sattriya Dance Classes",
            "Modern Music Ensemble",
            "Visual Arts & Painting",
            "Annual Cultural Fest"
        ],
        image: "https://images.unsplash.com/photo-1544531585-9837bd664d4b?w=1000&auto=format&fit=crop"
    },
    {
        title: "House System",
        icon: ShieldCheck,
        desc: "Four houses competing for the annual Championship, fostering leadership and institutional loyalty. The house system is the backbone of our school's competitive and collaborative culture.",
        details: [
            "Leadership Training",
            "House Championship Points",
            "Monthly House Competitions",
            "Community Service Projects"
        ],
        image: "https://images.unsplash.com/photo-1523050338692-7b835a07734f?w=1000&auto=format&fit=crop"
    }
];

export default function CoCurricularSection() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs block mb-4">Beyond Academics</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mb-8">
                            NURTURING <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800">MULTIFACETED</span><br />
                            TALENTS.
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
                            Our co-curricular programs are engineered to build character, resilience, and leadership. Experience a campus life that vibrates with energy and creativity.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-40">
                    {activities.map((activity, idx) => {
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
                                    <div className="absolute -inset-6 bg-blue-100/50 rounded-[3rem] blur-2xl group-hover:bg-blue-100 transition-all duration-700" />
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white shadow-xl">
                                            <activity.icon size={28} />
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
                                        {activity.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                        {activity.desc}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        {activity.details.map((detail, dIdx) => (
                                            <div key={dIdx} className="flex items-center gap-3 text-slate-700">
                                                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 size={14} className="text-blue-600" />
                                                </div>
                                                <span className="text-[11px] font-black uppercase tracking-tight">{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats or Highlight */}
                                    <div className="pt-8 flex items-center gap-12">
                                        <div className="space-y-1">
                                            <div className="text-2xl font-black text-blue-600">Established</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Since 2004</div>
                                        </div>
                                        <div className="w-px h-12 bg-slate-100" />
                                        <div className="space-y-1">
                                            <div className="text-2xl font-black text-slate-900">100%</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Participation</div>
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
