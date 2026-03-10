"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Enhanced campus life data focusing on events and school activities
const campusItems = [
    {
        id: 1,
        title: "Freshers' Social 2022",
        description: "Welcoming the newest members of the DBNSS family with vibrancy and talent showcases.",
        img: "/dbnss/2022_freshers/WhatsApp Image 2026-03-02 at 9.22.35 PM.jpeg",
    },
    {
        id: 2,
        title: "Environment Day",
        description: "Committing to a greener future through plantation drives and environmental awareness.",
        img: "/dbnss/Environment day/WhatsApp Image 2026-03-02 at 9.41.22 PM.jpeg",
    },
    {
        id: 3,
        title: "Scientific Seminars",
        description: "Exploring biodiversity and conservation strategies with experts.",
        img: "/dbnss/Seminar on vulture preservation/WhatsApp Image 2026-03-02 at 9.24.25 PM.jpeg",
    },
    {
        id: 4,
        title: "Sports Excellence",
        description: "Showcasing athleticism, discipline, and the true spirit of sportsmanship.",
        img: "/dbnss/sports_day/WhatsApp Image 2026-03-02 at 9.26.16 PM.jpeg",
    },
    {
        id: 5,
        title: "Annual Picnic",
        description: "Moments of joy, bonding, and exploring beyond the classroom.",
        img: "/dbnss/picnic_2022/WhatsApp Image 2026-03-02 at 9.43.09 PM.jpeg",
    },
    {
        id: 6,
        title: "Social Responsibility",
        description: "Active participation in Swacha Bharat and civic engagement.",
        img: "/dbnss/Swacha bharat mission/WhatsApp Image 2026-03-02 at 9.19.17 PM.jpeg",
    },
];

export default function CampusLifeSection() {
    return (
        <section className="py-20 md:py-28 bg-linear-to-b from-white to-blue-50/20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <span className="inline-block text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
                        Vibrant Campus Culture
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                        LIFE AT <span className="text-blue-600">DBNSS.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Beyond the classroom, our students engage in a rich tapestry of cultural, scientific, and community activities that shape their global perspective.
                    </p>
                </motion.div>

                {/* Auto-sliding Swiper Carousel */}
                <div className="relative group">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-16"
                    >
                        {campusItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <motion.div
                                    className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer aspect-[4/5] bg-slate-900 shadow-2xl border border-slate-100/10"
                                >
                                    {/* Image */}
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />

                                    {/* Premium Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                                    {/* Content Area */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 drop-shadow-xl uppercase tracking-tighter leading-none">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-white/80 line-clamp-3 font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Top Accent Stripe */}
                                    <div className="absolute top-0 left-0 w-0 h-1.5 bg-blue-500 group-hover:w-full transition-all duration-700" />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-12 text-center">
                    <motion.a
                        href="/events"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-[0_20px_40px_-15px_rgba(15,23,42,0.3)]"
                    >
                        Explore the Gallery
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                            <span className="text-lg">→</span>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}