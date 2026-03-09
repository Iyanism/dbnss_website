"use client";

import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
    { label: "About Us", href: "/aboutus" },
    { label: "Courses", href: "/courses" },
    { label: "Faculty", href: "/faculty" },
    { label: "Students", href: "/students" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Results", href: "/results" },
    { label: "Contact Us", href: "/contact" },
    { label: "Admissions 2026", href: "/admissions" },
];



const contactInfo = [
    { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Mail, text: "info@drbsaikiaschool.edu.in", href: "mailto:info@drbsaikiaschool.edu.in" },
    { icon: MapPin, text: "Khetri, Kamrup (M), Assam - 782403", href: "https://maps.google.com/?q=Khetri,Assam" },
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-white to-blue-50/30 border-t border-blue-100 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 pt-20 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* School Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-12 h-12 md:w-16 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl overflow-hidden border border-blue-50">
                                <Image
                                    src="/school-logo.jpeg"
                                    alt="DBNSS Logo"
                                    fill
                                    className=""
                                />
                            </div>
                            <div>
                                <h3 className="text-blue-700 font-black text-xl leading-none tracking-tight">
                                    DR. Bhabendra NATH SAIKIA
                                </h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mt-1">
                                    Senior Secondary School
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-600 mb-8 leading-relaxed text-sm font-medium pr-4">
                            Providing unparalleled educational excellence in Khetri since 2004.
                            We specialize in LKG to Class 12 education with dedicated Arts and Science streams,
                            fostering a legacy of academic brilliance.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100 hover:shadow-lg"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick & Academic Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-slate-900 font-black text-lg mb-8 flex items-center gap-3">
                            <span className="w-6 h-1 bg-blue-600 rounded-full" />
                            Explore
                        </h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                            {quickLinks.slice(0, 8).map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 group text-xs font-bold"
                                >
                                    <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-slate-900 font-black text-lg mb-8 flex items-center gap-3">
                            <span className="w-6 h-1 bg-blue-600 rounded-full" />
                            Get in Touch
                        </h4>
                        <ul className="space-y-6">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <a href={item.href} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm border border-blue-100/50 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-slate-600 text-sm leading-relaxed font-medium pt-1 group-hover:text-blue-600 transition-colors">
                                            {item.text}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Our Location - Map Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-slate-900 font-black text-lg mb-8 flex items-center gap-3">
                            <span className="w-6 h-1 bg-blue-600 rounded-full" />
                            Our Location
                        </h4>
                        <div className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                            <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114806.10659678703!2d91.70844968439992!3d26.144713523536473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133bf%3A0x5398c3cfab88396e!2sKhetri%2C%20Assam!5e0!3m2!1sen!2sin!4v1710848493345!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                            </div>
                            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-colors pointer-events-none" />
                            <a
                                href="https://maps.google.com/?q=Khetri,Assam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 left-4 right-4 bg-white py-3 rounded-xl text-center text-xs font-black text-blue-600 shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                            >
                                VIEW ON MAP
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm font-bold order-2 md:order-1 capitalize">
                        © {new Date().getFullYear()} Dr. Bhabendra Nath Saikia Senior Secondary School. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm font-bold text-slate-400 order-1 md:order-2 tracking-tight">
                        <Link href="/privacy" className="hover:text-blue-600 transition-colors uppercase tracking-tight">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-blue-600 transition-colors uppercase tracking-tight">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}