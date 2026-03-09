import { Metadata } from "next";
import MainBanner from "@/components/results/MainBanner";
import ResultsIntro from "@/components/results/ResultsIntro";
import ResultGrid from "@/components/results/ResultGrid";
import ToppersSection from "@/components/results/ToppersSection";
import FelicitationGallery from "@/components/results/FelicitationGallery";

export const metadata: Metadata = {
    title: "Board Results & Academic Achievements | Dr. Bhabendra Nath Saikia School",
    description: "Explore the HSLC and HS results of Dr. Bhabendra Nath Saikia Senior Secondary School. Our students consistently excel in board examinations, maintaining high pass rates and top ranks.",
    keywords: ["School Results Khetri", "HSLC Results Assam", "HS Science Results Khetri", "HS Arts Results Khetri", "School Toppers Assam", "Dr. Bhabendra Nath Saikia School Achievements"]
};

export default function ResultsPage() {
    return (
        <main className="min-h-screen bg-white">
            <MainBanner />
            <ResultsIntro />
            <ResultGrid />
            <ToppersSection />
            <FelicitationGallery />
        </main>
    );
}
