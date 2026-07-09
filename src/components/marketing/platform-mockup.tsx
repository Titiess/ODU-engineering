"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/projects/owerri/screenshot-hero.png",
    title: "E-Certificate Portal Landing Page",
    desc: "Official digital gateway for certificate applications in Owerri Municipal Council.",
  },
  {
    src: "/projects/owerri/screenshot-workflow.png",
    title: "Application Workflow Details",
    desc: "A simplified 3-step digital application, secure payment, and automated delivery system.",
  },
  {
    src: "/projects/owerri/screenshot-requirements.png",
    title: "Required Evidentiary Materials",
    desc: "Fully digitized document uploading for community authentication and verification proof.",
  },
  {
    src: "/projects/owerri/screenshot-login.png",
    title: "Applicant Authentication Gateway",
    desc: "Secure login portal with stateful input validation and session longevity controls.",
  },
  {
    src: "/projects/owerri/screenshot-verify.png",
    title: "Certificate Verification system",
    desc: "Decentralized verification engine allowing quick QR code scans and hash validations.",
  },
];

export function PlatformMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] bg-slate-900/60 overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/[0.04]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 max-w-[280px] sm:max-w-md mx-4 px-3 py-1 rounded bg-white/[0.04] text-[10px] text-slate-500 font-mono text-center truncate">
          owerricouncil.org{currentIndex === 3 ? "/login" : currentIndex === 4 ? "/verify" : ""}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-1 rounded hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Screen Frame/Slide area */}
      <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              fill
              className="object-cover object-top select-none"
              priority
              sizes="(max-w-1200px) 100vw, 800px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark/Light Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Description overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent pointer-events-none">
          <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
            {images[currentIndex].title}
          </h4>
          <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2">
            {images[currentIndex].desc}
          </p>
        </div>

        {/* Dots indicators */}
        <div className="absolute top-4 right-4 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentIndex ? "bg-blue-400 w-3" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
