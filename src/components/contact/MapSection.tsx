"use client";

import { motion } from "framer-motion";
import { ExternalLink, Navigation, MapPin } from "lucide-react";

export default function MapSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Location</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                                FIND OUR <br />
                                <span className="text-blue-600">CAMPUS.</span>
                            </h2>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                Strategically located near NH-37 in Khetri, our campus is easily accessible from Guwahati and Nagaon.
                            </p>
                        </motion.div>

                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-6">
                            <div className="space-y-1">
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Office Address</div>
                                <div className="text-sm font-bold text-slate-900">Dr. Bhabendra Nath Saikia School, Khetri, Kamrup (M), Assam - 782403</div>
                            </div>
                            <div className="flex items-center gap-6">
                                <a
                                    href="https://www.google.com/maps/dir//Khetri,+Assam+782403/@26.113426,92.0544111,15z"
                                    target="_blank"
                                    className="flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all"
                                >
                                    Get Directions <Navigation size={14} />
                                </a>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-all"
                                >
                                    View on Map <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 relative h-[450px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl"
                    >
                        {/* Google Maps Embed - Placeholder for actual school location */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14332.338576404283!2d92.05441113271485!3d26.113426004958315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ae29d20c58e6f%3A0x6b4af06c9e83ec6!2sKhetri%2C%20Assam%20782403!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Map Overlay Badge */}
                        <div className="absolute bottom-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 flex items-center gap-4 shadow-xl">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Campus</div>
                                <div className="text-xs font-bold text-slate-900 line-clamp-1">Khetri, Kamrup (M), Assam</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
