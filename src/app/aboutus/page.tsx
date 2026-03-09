import HistorySection from "@/components/aboutus/HistorySection";
import MainBanner from "@/components/aboutus/MainBanner";
import MissionVisionSection from "@/components/aboutus/MissionVisionSection";
import NameHistory from "@/components/aboutus/NameHistory";
import HeritageSection from "@/components/aboutus/HeritageSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Dr. Bhabendra Nath Saikia Senior Secondary School",
    description: "Learn about the legacy of Dr. Bhabendra Nath Saikia, our mission, vision, and the rich history of our institution in Khetri, Assam. Discover our commitment to academic excellence from LKG to Class 12.",
    keywords: ["About Dr. Bhabendra Nath Saikia School", "School History Khetri", "Best School in Assam Mission", "Dr. Bhabendra Nath Saikia Legacy"],
};

export default function AboutUs() {
    return (
        <main className="bg-white overflow-hidden min-h-screen">
            <MainBanner />
            <div className="space-y-0">
                <NameHistory />
                <HeritageSection />
                <MissionVisionSection />
                <HistorySection />
            </div>
        </main>
    );
}