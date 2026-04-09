"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Palette,
  ArrowRight,
  BookCheck,
  Microscope,
  Calculator,
} from "lucide-react";
import { coursesDetailed } from "@/lib/siteData";

export default function StreamsSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-slate-200">
            Higher Secondary (Class XI & XII)
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase">
            Our Specialized <br />
            <span className="text-blue-600">Academic Streams.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Precision-engineered learning pathways for students ready to
            specialize and lead in their chosen fields.
          </p>
        </motion.div>

        {/* Streams Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {/* Science Stream */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-linear-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <FlaskConical size={32} />
                </div>
                <h3 className="text-3xl font-black tracking-tight uppercase">
                  Science Stream
                </h3>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-4">
                    Compulsory Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coursesDetailed.science.compulsory.map((sub, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-4">
                    Elective Subjects
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {coursesDetailed.science.elective.map((sub, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm font-bold bg-black/10 p-3 rounded-xl border border-white/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arts Stream */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-linear-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Palette size={32} />
                </div>
                <h3 className="text-3xl font-black tracking-tight uppercase">
                  Arts Stream
                </h3>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-4">
                    Compulsory Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coursesDetailed.arts.compulsory.map((sub, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-4">
                    Elective Subjects
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {coursesDetailed.arts.elective.map((sub, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm font-bold bg-white/5 p-3 rounded-xl border border-white/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Integrated Course Section - Premium */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="p-1 md:p-1.5 rounded-[3rem] bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
            <div className="bg-white rounded-[2.8rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100 uppercase font-black text-[10px] tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  New Offering
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
                  Integrated <span className="text-blue-600">Competitive</span>{" "}
                  <br />
                  Course
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {coursesDetailed.integrated.description}
                  <br />
                  <br />
                  Designed to make students efficient in solving both **MCQs and
                  descriptive type questions** parallelly with NCERT syllabus.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "NEET Prep",
                    "JEE Mains/Adv",
                    "CEE Entrance",
                    "CUET Ready",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 font-bold text-xs text-slate-700 uppercase tracking-tight"
                    >
                      <BookCheck size={16} className="text-blue-600" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Microscope size={120} />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
                    Course Combinations
                  </h4>
                  <div className="space-y-4">
                    {coursesDetailed.integrated.combinations.map((combo, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs ring-1 ring-blue-500/30">
                            {i + 1}
                          </div>
                          <p className="text-sm font-black tracking-tight">
                            {combo}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 flex items-center gap-3 text-[10px] font-black uppercase text-slate-500 tracking-widest">
                    <Calculator size={14} className="text-blue-400" />
                    Parallel with NCERT Syllabus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Professional Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-24"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all group shadow-xl shadow-blue-500/20"
            >
              View Admission Requirements
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
