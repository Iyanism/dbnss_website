import { Metadata } from "next";
import MainBanner from "@/components/infrastructure/MainBanner";
import InfrasIntro from "@/components/infrastructure/InfrasIntro";
import FacilitiesGrid from "@/components/infrastructure/FacilitiesGrid";
import ScienceLabsSection from "@/components/infrastructure/ScienceLabsSection";
import FuturePlans from "@/components/infrastructure/FuturePlans";

export const metadata: Metadata = {
    title: "School Infrastructure & World-Class Facilities | Dr. Bhabendra Nath Saikia School",
    description: "Explore the modern campus of Dr. Bhabendra Nath Saikia Senior Secondary School. Our world-class infrastructure includes smart classrooms, advanced science laboratories, a rich library, and a vision for future expansion.",
    keywords: ["School Infrastructure Assam", "Modern School Facilities Khetri", "Advanced Science Labs School", "Digital Library Assam", "Smart Classrooms Assam", "School Expansion Plans Khetri"]
};

export default function InfrastructurePage() {
    return (
        <main className="min-h-screen bg-white">
            <MainBanner />
            <InfrasIntro />
            <FacilitiesGrid />
            <ScienceLabsSection />
            <FuturePlans />
        </main>
    );
}
