"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "What is the admission procedure for the new session?",
        a: "The admission process involves filling out an online application form, followed by an interaction/entrance test depending on the grade. Detailed steps are available on our Admissions page."
    },
    {
        q: "What are the school timings for Junior and Senior sections?",
        a: "Junior section (LKG to Class V) operates from 8:30 AM to 1:30 PM. Senior section (Class VI to XII) operates from 8:00 AM to 2:30 PM."
    },
    {
        q: "Does the school provide transport facilities?",
        a: "Yes, we have a fleet of safe and well-maintained buses covering major routes across the city. Transport fees are calculated based on distance."
    },
    {
        q: "What are the stream options available in Senior Secondary?",
        a: "We offer Science (PCM/PCB) and Arts streams with various elective subjects including Computer Science, Economics, and Fine Arts."
    },
    {
        q: "Is there any scholarship or fee concession available?",
        a: "Yes, merit-based scholarships are available for outstanding students. Need-based financial assistance can be applied for through the school office."
    },
    {
        q: "What extracurricular activities are offered?",
        a: "We offer a wide range of activities including sports, music, dance, art, robotics, debate, and various club activities."
    },
];

export default function FAQSection() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-28 bg-linear-to-b from-white to-blue-50/20">
            <div className="container mx-auto px-6 md:px-8">

                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                    <span className="inline-block text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
                        Help & Support
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                        Common <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 font-medium">
                        Everything you need to know about the best educational journey for your child at Dr. Bhabendra Nath Saikia School.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIdx === idx
                                    ? 'border-blue-200 bg-white shadow-md'
                                    : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm'
                                    }`}>
                                    {/* Question Button */}
                                    <button
                                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                        className="w-full flex justify-between items-center p-6 text-left"
                                        aria-expanded={openIdx === idx}
                                    >
                                        <span className={`text-lg md:text-xl font-bold pr-8 transition-colors ${openIdx === idx ? 'text-blue-700' : 'text-slate-800'
                                            }`}>
                                            {faq.q}
                                        </span>

                                        {/* Icon */}
                                        <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm ${openIdx === idx
                                            ? 'bg-blue-600 text-white shadow-blue-500/20'
                                            : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                                            }`}>
                                            {openIdx === idx ? (
                                                <Minus size={20} strokeWidth={2.5} />
                                            ) : (
                                                <Plus size={20} strokeWidth={2.5} />
                                            )}
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <AnimatePresence>
                                        {openIdx === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-blue-100">
                                                    <div className="flex gap-4">
                                                        <div className="shrink-0">
                                                            <div className="w-1 h-full bg-blue-200 rounded-full" />
                                                        </div>
                                                        <p className="text-base">{faq.a}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Still Have Questions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                            <HelpCircle size={40} className="text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
                            <p className="text-slate-600 mb-4">
                                Can&apos;t find the answer you&apos;re looking for? Please reach out to our team.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow"
                                >
                                    Contact Us
                                </a>
                                <a
                                    href="/admissions"
                                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow"
                                >
                                    Admissions Page
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}