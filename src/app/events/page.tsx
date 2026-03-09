import { Metadata } from "next";
import MainBanner from "@/components/events/MainBanner";
import EventGalleries from "@/components/events/EventGalleries";

export const metadata: Metadata = {
    title: "School Events & Activities | Dr. Bhupendra Nath Saikia Senior Secondary School",
    description: "Discover the vibrant calendar of events at DBNSS Khetri. From Freshers' Socials and Sports Days to environmental and scientific seminars.",
    keywords: ["School Events Assam", "Freshers Social DBNSS", "Sports Day Khetri", "Educational Seminars Assam", "Student Activities"]
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-white">
            <MainBanner />
            <EventGalleries />
        </main>
    );
}
