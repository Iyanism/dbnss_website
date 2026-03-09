"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function ContactForm() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormState("success");
    };

    if (formState === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-blue-600 rounded-[3rem] p-16 text-center text-white shadow-2xl shadow-blue-500/30"
            >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Message Received!</h3>
                <p className="text-blue-100 font-medium mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Our administrative team will get back to you within 24-48 business hours.
                </p>
                <Button
                    onClick={() => setFormState("idle")}
                    className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 font-black rounded-2xl"
                >
                    SEND ANOTHER MESSAGE
                </Button>
            </motion.div>
        );
    }

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block">Inquiry Form</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                                SEND US A <br />
                                <span className="text-blue-600">DIRECT MESSAGE.</span>
                            </h2>
                        </div>

                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                            Whether you&apos;re a prospective parent, an alumnus, or a community member, we value your feedback and inquiries. Fill out the form, and we&apos;ll connect with you shortly.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: HelpCircle, text: "Admission Inquiries" },
                                { icon: HelpCircle, text: "Career Opportunities" },
                                { icon: HelpCircle, text: "General Feedback" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-slate-700">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-widest">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            required
                                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="email"
                                            required
                                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            type="tel"
                                            className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                                            placeholder="+91 00000 00000"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Subject</label>
                                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Admissions</option>
                                        <option>Academics</option>
                                        <option>Career</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={formState === "submitting"}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-8 text-[11px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3"
                            >
                                {formState === "submitting" ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                        SENDING...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        SEND MESSAGE
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
