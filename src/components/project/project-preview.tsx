"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface ProjectPreviewProps {
  images?: string[];
}

export function ProjectPreview({ images }: ProjectPreviewProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNext = useCallback(() => {
    if (images && selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
      setIsZoomed(false);
    }
  }, [images, selectedIndex]);

  const handlePrev = useCallback(() => {
    if (images && selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === null ? null : (prev - 1 + images.length) % images.length
      );
      setIsZoomed(false);
    }
  }, [images, selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    setIsZoomed(false);
  }, []);

  // Keyboard navigation mapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  if (!images || images.length === 0) return null;

  return (
    <section id="preview" className="relative px-6 py-16 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 font-mono">
          Visual Walkthrough
        </p>
        <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
          Interface Preview
        </h2>

        {/* Desktop and Mobile responsive preview grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.015 }}
              onClick={() => setSelectedIndex(idx)}
              className="glass-card rounded-2xl overflow-hidden cursor-zoom-in relative aspect-video border border-white/[0.06] bg-slate-950/20 group"
            >
              <Image
                src={img}
                alt={`Project Screenshot ${idx + 1}`}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/20 select-none shadow-lg">
                  Click to Expand
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Portal Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-lg select-none"
          >
            {/* Top Bar controls */}
            <div className="absolute top-4 left-0 right-0 z-50 flex items-center justify-between px-6 text-white">
              <span className="text-xs font-mono tracking-wider opacity-60">
                {selectedIndex + 1} / {images.length}
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  title="Toggle Zoom"
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleClose}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  title="Close Image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Left and Right navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
                  title="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
                  title="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Scrollable / Zoomable viewport container */}
            <div
              className={`w-full h-full flex items-center justify-center p-8 transition-transform duration-300 ${
                isZoomed ? "overflow-auto cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => {
                if (isZoomed) {
                  setIsZoomed(false);
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`relative max-w-5xl w-full h-[70vh] flex items-center justify-center`}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-300 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                  onClick={(e) => {
                    if (!isZoomed) {
                      e.stopPropagation();
                      setIsZoomed(true);
                    }
                  }}
                >
                  <Image
                    src={images[selectedIndex]}
                    alt={`Preview Showcase`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
