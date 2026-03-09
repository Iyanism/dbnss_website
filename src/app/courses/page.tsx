import AcademicIntro from "@/components/courses/AcademicIntro";
import AcademicLevelsSection from "@/components/courses/AcademicLevelsSection";
import DownloadableCurriculumSection from "@/components/courses/DownloadableCurriculumSection";
import MainBanner from "@/components/courses/MainBanner";
import StreamsSection from "@/components/courses/StreamsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Courses & Academic Programs | Dr. Bhabendra Nath Saikia Senior Secondary School",
    description: "Explore our comprehensive academic programs from LKG to Class 12. We follow the SEBA curriculum, offering specialized Science and Arts streams in Khetri, Assam.",
    keywords: ["School Courses Khetri", "SEBA Curriculum Assam", "Arts and Science Streams Assam", "Best School for Classes 1 to 12"],
};

export default function Courses() {
    return (
        <main className="bg-white overflow-hidden min-h-screen">
            <MainBanner />
            <div className="space-y-0">
                <AcademicIntro />
                <AcademicLevelsSection />
                <StreamsSection />
                <DownloadableCurriculumSection />
            </div>
        </main>
    );
}