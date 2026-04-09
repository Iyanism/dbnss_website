import { Metadata } from "next";
import MainBanner from "@/components/students/MainBanner";
import ResourceSection from "@/components/students/ResourceSection";
import AcademicCalendar from "@/components/students/AcademicCalendar";
import CoCurricularSection from "@/components/students/CoCurricularSection";
import StudentsIntro from "@/components/students/StudentsIntro";

import RulesSection from "@/components/students/RulesSection";
import EndeavourSection from "@/components/students/EndeavourSection";

export const metadata: Metadata = {
    title: "Student Hub | Academic Resources & Syllabus | Dr. Bhabendra Nath Saikia School",
    description: "Access academic syllabi, time tables, holiday lists, and the academic calendar for Dr. Bhabendra Nath Saikia Senior Secondary School. Explore our vibrant co-curricular activities and campus life.",
    keywords: ["Academic Syllabus Assam", "Time Table Class 10 12", "Holiday List 2025 Assam", "Academic Calendar School", "Sports and Clubs Khetri", "Student Resources DBNSS"]
};

export default function StudentsPage() {
    return (
        <main className="min-h-screen bg-white">
            <MainBanner />
            <StudentsIntro />
            <EndeavourSection />
            <ResourceSection />
            <AcademicCalendar />
            <RulesSection />
            <CoCurricularSection />
        </main>
    );
}
