"use client";

import { motion } from "framer-motion";
import { Rocket, Circle } from "lucide-react";
import { FadeIn } from "@/components/animations/motion-primitives";

interface RoadmapSectionProps {
  items: string[];
}

export function RoadmapSection({ items }: RoadmapSectionProps) {
  return (
    <section id="roadmap" className="relative px-6 py-20 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-2">
            What&apos;s Next
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
            Future Roadmap
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Planned improvements and features that are under consideration or in
            active development.
          </p>
        </FadeIn>

        <div className="glass-card rounded-xl p-6 sm:p-8">
          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-3 group"
              >
                <Circle className="w-3 h-3 text-emerald-500/40 flex-shrink-0 group-hover:text-emerald-400 transition-colors" />
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
