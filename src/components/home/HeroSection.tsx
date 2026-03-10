"use client";

import { ArrowRight, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

// Hero slide data
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop",
    alt: "Students in classroom",
    tagline: "Premier Education in Khetri",
    title: "Best Senior Secondary Excellence from LKG to 12th",
    description: "Nurturing future leaders since 2004 with a focus on academic rigor, character building, and comprehensive growth in Khetri, Assam.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
    alt: "School campus",
    tagline: "Specialized Streams",
    title: "Shape Your Future with Arts and Science",
    description: "Our dedicated faculty and modern laboratories provide the perfect environment for mastering both Arts and Science disciplines.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    alt: "Sports activities",
    tagline: "Holistic Development",
    title: "A Glimpse Into a Brighter Tomorrow",
    description: "From LKG foundations to Class 12 milestones, we ensure every student achieves their highest potential in Assam.",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Fix: Initialize with undefined and type properly
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/30 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/30 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-2.5 h-2.5 mx-1.5"></span>`;
          },
        }}
        navigation={false}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                  quality={100}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center md:justify-start">
                <div className="px-6 md:px-12 lg:px-24 w-full max-w-5xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-black/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl text-center md:text-left w-full sm:w-auto mx-auto md:mx-0"
                  >
                    <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
                      {slide.tagline}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-sm uppercase tracking-tighter">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5">
                      <button
                        className="group bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)]"
                      >
                        Admissions Open <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        className="group bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/40 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 flex items-center justify-center gap-3 hover:border-white/60"
                      >
                        Explore Courses <BookOpen size={18} className="group-hover:scale-110 transition-transform text-blue-400" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 right-8 z-20 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
        {String(activeIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
      </div>
    </section>
  );
}