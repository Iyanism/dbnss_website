"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, BookOpen, User } from "lucide-react";

interface Teacher {
    id: string;
    name: string;
    subject: string;
    qualification: string;
    classes: string;
    image: string;
}

interface FacultySectionProps {
    title: string;
    subtitle: string;
    teachers: Teacher[];
}

function TeacherCard({ teacher }: { teacher: Teacher }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500"
        >
            <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-slate-100" />
                <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                    <h4 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors">
                        {teacher.name}
                    </h4>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                        <BookOpen size={16} className="text-blue-500" />
                        <span className="text-xs font-black uppercase tracking-widest">{teacher.subject}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                        <GraduationCap size={16} className="text-blue-500" />
                        <span className="text-sm font-medium">{teacher.qualification}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                        <User size={16} className="text-blue-500" />
                        <span className="text-xs font-bold text-slate-400">Classes: {teacher.classes}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function Section({ title, subtitle, teachers }: FacultySectionProps) {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    {title}
                </h3>
                <p className="text-blue-600 font-bold text-sm tracking-widest uppercase">{subtitle}</p>
                <div className="h-1 w-20 bg-blue-600 rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teachers.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </div>
    );
}

export default function FacultySections() {
    const facultyData = {
        prePrimary: [
            { id: "pp1", name: "Mrs. Anjali Bora", subject: "All Subjects", qualification: "B.A, Montessori Certified", classes: "Nursery - UKG", image: "/teacher-placeholder.jpg" },
            { id: "pp2", name: "Ms. Priyanka Sarma", subject: "Arts & Crafts", qualification: "B.F.A", classes: "Nursery - UKG", image: "/teacher-placeholder.jpg" },
        ],
        primary: [
            { id: "p1", name: "Mr. Rajen Kalita", subject: "Mathematics", qualification: "M.Sc, B.Ed", classes: "1 - 5", image: "/teacher-placeholder.jpg" },
            { id: "p2", name: "Mrs. Deepali Das", subject: "Social Science", qualification: "M.A, B.Ed", classes: "3 - 5", image: "/teacher-placeholder.jpg" },
            { id: "p3", name: "Ms. Karabi Devi", subject: "Assamese/Hindi", qualification: "M.A", classes: "1 - 5", image: "/teacher-placeholder.jpg" },
        ],
        middleSecondary: [
            { id: "ms1", name: "Mr. Biswajit Saikia", subject: "General Science", qualification: "M.Sc (Physics), B.Ed", classes: "6 - 10", image: "/teacher-placeholder.jpg" },
            { id: "ms2", name: "Mrs. Namita Baruah", subject: "English Literature", qualification: "M.A (English), B.Ed", classes: "8 - 10", image: "/teacher-placeholder.jpg" },
            { id: "ms3", name: "Mr. Nayan Medhi", subject: "Higher Mathematics", qualification: "M.Sc, B.Ed", classes: "9 - 10", image: "/teacher-placeholder.jpg" },
            { id: "ms4", name: "Ms. Rita Hazarika", subject: "Social Science", qualification: "M.A, B.Ed", classes: "6 - 10", image: "/teacher-placeholder.jpg" },
        ],
        seniorSecondary: [
            { id: "ss1", name: "Dr. Himadri Gogoi", subject: "Chemistry", qualification: "Ph.D, M.Sc", classes: "11 - 12", image: "/teacher-placeholder.jpg" },
            { id: "ss2", name: "Mr. Pranjal Mahanta", subject: "Economics", qualification: "M.A, B.Ed", classes: "11 - 12", image: "/teacher-placeholder.jpg" },
            { id: "ss3", name: "Mrs. Sibani Roy", subject: "Biology", qualification: "M.Sc, B.Ed", classes: "11 - 12", image: "/teacher-placeholder.jpg" },
            { id: "ss4", name: "Mr. Tapas Chetia", subject: "History", qualification: "M.A", classes: "11 - 12", image: "/teacher-placeholder.jpg" },
        ]
    };

    return (
        <section className="py-24 bg-slate-50/50">
            <div className="container mx-auto px-6 md:px-12 space-y-32">
                <Section title="Pre-Primary" subtitle="Early Childhood Educators" teachers={facultyData.prePrimary} />
                <Section title="Primary" subtitle="Foundation Level Faculty" teachers={facultyData.primary} />
                <Section title="Middle & Secondary" subtitle="Core Academic Mentors" teachers={facultyData.middleSecondary} />
                <Section title="Senior Secondary" subtitle="Expert Stream Specialists" teachers={facultyData.seniorSecondary} />
            </div>
        </section>
    );
}
