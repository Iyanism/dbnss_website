"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Clock, Info } from "lucide-react";
import { useState, useMemo, useCallback } from "react";

const events = [
    { id: 1, day: 15, month: 2, year: 2025, title: "Annual Sports Meet", type: "Event", time: "9:00 AM", location: "School Ground", desc: "A day of athletic competitions and school spirit." },
    { id: 2, day: 28, month: 2, year: 2025, title: "Pre-Final Exams Start", type: "Exam", time: "10:00 AM", location: "Classrooms", desc: "Mandatory examinations for Class 10 and 12." },
    { id: 3, day: 5, month: 3, year: 2025, title: "Easter Holiday", type: "Holiday", time: "Full Day", location: "Off Campus", desc: "School closed for Easter festivities." },
    { id: 4, day: 14, month: 3, year: 2025, title: "Bohag Bihu Celebration", type: "Event", time: "10:30 AM", location: "Main Hall", desc: "Traditional Assam New Year festivities and cultural programs." },
    { id: 5, day: 10, month: 4, year: 2025, title: "Internal Assessment II", type: "Exam", time: "9:30 AM", location: "Classrooms", desc: "Quarterly assessment for Classes 1 to 9 and 11." },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AcademicCalendar() {
    // Current date for initial view
    const today = new Date();
    const [viewDate, setViewDate] = useState(new Date(2025, 2, 1)); // Starting at March 2025 for better demo
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    const monthIndex = viewDate.getMonth();
    const year = viewDate.getFullYear();

    const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const prevMonthDays = useMemo(() => {
        const prev = new Date(year, monthIndex, 0).getDate();
        return Array.from({ length: firstDayOfMonth }, (_, i) => prev - firstDayOfMonth + i + 1);
    }, [year, monthIndex, firstDayOfMonth]);

    const currentMonthDays = useMemo(() => {
        return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    }, [daysInMonth]);

    const nextMonthDays = useMemo(() => {
        const total = prevMonthDays.length + currentMonthDays.length;
        const remaining = 42 - total; // 6 rows of 7
        return Array.from({ length: remaining }, (_, i) => i + 1);
    }, [prevMonthDays, currentMonthDays]);

    const changeMonth = (delta: number) => {
        setViewDate(new Date(year, monthIndex + delta, 1));
        setSelectedDate(null);
    };

    const getEventsForDay = useCallback((day: number) => {
        return events.filter(e => e.day === day && e.month === monthIndex && e.year === year);
    }, [monthIndex, year]);

    const selectedEvent = useMemo(() => {
        if (selectedDate === null) return null;
        return getEventsForDay(selectedDate)[0] || null;
    }, [selectedDate, getEventsForDay]);

    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs block">Stay Informed</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight tracking-tighter uppercase">
                        ACADEMIC <br />
                        <span className="text-blue-600">CALENDAR 2025.</span>
                    </h2>
                    <p className="text-slate-400 font-medium max-w-2xl mx-auto">
                        An interactive view of our academic journey. Hover or click on marked dates to see event details.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
                    {/* Calendar Grid */}
                    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-blue-100">
                                {months[monthIndex]} <span className="text-slate-500">{year}</span>
                            </h3>
                            <div className="flex items-center gap-3">
                                <button onClick={() => changeMonth(-1)} className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all border border-slate-700">
                                    <ChevronLeft size={20} />
                                </button>
                                <button onClick={() => changeMonth(1)} className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all border border-slate-700">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
                            {days.map(d => (
                                <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-slate-500 py-4">
                                    {d}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2 md:gap-4">
                            {prevMonthDays.map(d => (
                                <div key={`prev-${d}`} className="aspect-square flex items-center justify-center text-slate-700 text-sm font-bold bg-slate-800/20 rounded-2xl opacity-40">
                                    {d}
                                </div>
                            ))}
                            {currentMonthDays.map(d => {
                                const dayEvents = getEventsForDay(d);
                                const hasEvent = dayEvents.length > 0;
                                const isSelected = selectedDate === d;
                                const isToday = today.getDate() === d && today.getMonth() === monthIndex && today.getFullYear() === year;

                                return (
                                    <motion.button
                                        key={`curr-${d}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => hasEvent && setSelectedDate(d)}
                                        className={`aspect-square relative flex items-center justify-center text-sm font-bold rounded-2xl transition-all duration-300 border
                                            ${isSelected ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/40 text-white' :
                                                hasEvent ? 'bg-slate-800 border-slate-700 text-blue-400 hover:border-blue-500' :
                                                    'bg-slate-800/40 border-slate-800/50 text-slate-400 hover:border-slate-600'}
                                            ${isToday ? 'ring-2 ring-blue-500 ring-offset-4 ring-offset-slate-950' : ''}
                                        `}
                                    >
                                        {d}
                                        {hasEvent && !isSelected && (
                                            <span className="absolute bottom-1.5 w-1 h-1 bg-blue-400 rounded-full" />
                                        )}
                                    </motion.button>
                                );
                            })}
                            {nextMonthDays.map(d => (
                                <div key={`next-${d}`} className="aspect-square flex items-center justify-center text-slate-700 text-sm font-bold bg-slate-800/20 rounded-2xl opacity-40">
                                    {d}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Event Detail Panel */}
                    <div className="space-y-6">
                        <AnimatePresence mode="wait">
                            {selectedEvent ? (
                                <motion.div
                                    key={selectedEvent.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-blue-600 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px]" />
                                    <div className="relative z-10 space-y-6">
                                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest">
                                            {selectedEvent.type}
                                        </div>
                                        <h4 className="text-3xl font-black uppercase leading-tight tracking-tighter">
                                            {selectedEvent.title}
                                        </h4>
                                        <p className="text-blue-100 text-sm font-medium leading-relaxed">
                                            {selectedEvent.desc}
                                        </p>
                                        <div className="space-y-4 pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-blue-50">
                                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                                    <Clock size={16} />
                                                </div>
                                                {selectedEvent.time}
                                            </div>
                                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-blue-50">
                                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                                    <MapPin size={16} />
                                                </div>
                                                {selectedEvent.location}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-slate-900 border border-slate-800 border-dashed rounded-[2.5rem] p-12 text-center h-[400px] flex flex-col items-center justify-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-slate-600 mb-2">
                                        <Info size={40} strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-black uppercase tracking-tighter text-slate-400">No date selected</h4>
                                        <p className="text-sm text-slate-500 font-medium">Click on any marked date in the calendar to view full event details.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Quick Legend */}
                        <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800/60 flex items-center justify-around">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Events</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Exams</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Holidays</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
