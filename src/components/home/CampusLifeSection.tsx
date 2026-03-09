"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Enhanced campus life data with actual Unsplash images
const campusItems = [
    {
        id: 1,
        title: "Smart Classrooms",
        description: "Technology-enabled learning spaces with interactive smart boards",
        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop",
        size: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "Science Laboratories",
        description: "Fully equipped labs for physics, chemistry, and biology",
        img: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        title: "Sports Facilities",
        description: "Cricket ground, basketball court, and indoor games",
        img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&auto=format&fit=crop",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 4,
        title: "Central Library",
        description: "Extensive collection of books, journals, and digital resources",
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&auto=format&fit=crop",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 5,
        title: "Cultural Events",
        description: "Annual day celebrations, talent shows, and cultural festivals",
        img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1200&auto=format&fit=crop",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 6,
        title: "Computer Labs",
        description: "Modern computing facilities with high-speed internet",
        img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&auto=format&fit=crop",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        id: 7,
        title: "Washroom",
        description: "Peaceful space for morning assembly and meditation",
        img: "/washroom.jpeg",
        size: "md:col-span-1 md:row-span-1",
    },
];

export default function CampusLifeSection() {
    return (
        <section className="py-20 md:py-28 bg-linear-to-b from-white to-blue-50/20">
            <div className="container mx-auto px-6 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <span className="inline-block text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
                        World-Class Infrastructure
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
                        Excellence Beyond <span className="text-blue-600">Academics</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Explore the state-of-the-art facilities that make Dr. Bhabendra Nath Saikia the best choice for holistic development in Assam.
                    </p>
                </motion.div>

                {/* Spacious Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[280px]">
                    {campusItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.size}`}
                        >
                            {/* Image */}
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 bg-zinc-900"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Minimal Gradient Overlay - just enough for text readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Title - always visible, minimal, at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description - appears on hover */}
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <p className="text-white text-lg leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Blue accent on hover */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-blue-400 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}