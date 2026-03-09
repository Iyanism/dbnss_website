import { Metadata } from "next";
import MainBanner from "@/components/faculty/MainBanner";
import FacultyIntro from "@/components/faculty/FacultyIntro";
import FacultySections from "@/components/faculty/FacultySections";
import FacultyLife from "@/components/faculty/FacultyLife";

export const metadata: Metadata = {
    title: "Our Expert Faculty | Dr. Bhabendra Nath Saikia Senior Secondary School",
    description: "Meet our dedicated team of educators at Dr. Bhabendra Nath Saikia Senior Secondary School. Specialist teachers across Science, Arts, and Primary levels committed to academic excellence in Assam.",
    keywords: ["School Faculty", "Teachers in Khetri", "Best Science Teachers Assam", "Arts Stream Faculty", "Board Exam Specialists", "Dr. Bhabendra Nath Saikia School Staff"]
};

export default function FacultyPage() {
    return (
        <main className="min-h-screen bg-white">
            <MainBanner />
            <FacultyIntro />
            <FacultySections />
            <FacultyLife />
        </main>
    );
}
