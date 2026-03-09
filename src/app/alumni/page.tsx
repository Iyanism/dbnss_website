import { Metadata } from "next";
import MainBanner from "@/components/alumni/MainBanner";
import PioneersSection from "@/components/alumni/PioneersSection";
import BatchesGallery from "@/components/alumni/BatchesGallery";

export const metadata: Metadata = {
    title: "Alumni & Legacy | Dr. Bhupendra Nath Saikia Senior Secondary School",
    description: "Honoring the history and achievements of our alumni community. From our pioneer 2018 batch to our latest graduates.",
    keywords: ["DBNSS Alumni", "School History Khetri", "Pioneer Batch 2018", "School Graduates Assam"]
};

export default function AlumniPage() {
    return (
        <main className="min-h-screen bg-white">
            <MainBanner />
            <PioneersSection />
            <BatchesGallery />
        </main>
    );
}
