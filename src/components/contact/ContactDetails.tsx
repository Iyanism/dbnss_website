"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const contactOptions = [
    {
        icon: Phone,
        title: "Call Us",
        value: "+91 98765 43210",
        desc: "Mon-Sat, 8:00 AM - 4:00 PM",
        href: "tel:+919876543210",
        color: "bg-blue-50 text-blue-600"
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "info@drbsaikiaschool.edu.in",
        desc: "Typically replies within 24 hours.",
        href: "mailto:info@drbsaikiaschool.edu.in",
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "Khetri, Kamrup (M), Assam",
        desc: "Pin: 782403, Near NH-37",
        href: "https://maps.google.com",
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        icon: Clock,
        title: "Office Hours",
        value: "08:00 AM - 04:30 PM",
        desc: "Administrative office timings.",
        href: null,
        color: "bg-slate-50 text-slate-600"
    }
];

export default function ContactDetails() {
    return (
        <section className="py-24 bg-white relative z-10 -mt-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactOptions.map((opt, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="h-full p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-100 flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-2xl ${opt.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <opt.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">
                                    {opt.title}
                                </h3>

                                <div className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                                    {opt.value}
                                </div>

                                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                                    {opt.desc}
                                </p>

                                {opt.href && (
                                    <a
                                        href={opt.href}
                                        target={opt.href.startsWith('http') ? '_blank' : undefined}
                                        className="mt-auto flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all"
                                    >
                                        Connect Now <ArrowUpRight size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
