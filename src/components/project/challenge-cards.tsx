"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/motion-primitives";
import type { ChallengeItem } from "@/types/content";

interface ChallengeCardsProps {
  challenges: ChallengeItem[];
}

export function ChallengeCards({ challenges }: ChallengeCardsProps) {
  return (
    <section id="challenges" className="relative px-6 py-20 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium text-amber-400 uppercase tracking-wider mb-2">
            Engineering Challenges
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
            Constraints & Solutions
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Real-world constraints that shaped the architecture and the
            engineering solutions that addressed them.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {challenges.map((challenge, i) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-xl overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/[0.04] flex items-center gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <h3 className="text-sm font-semibold text-white">
                  {challenge.title}
                </h3>
              </div>

              <div className="p-6 space-y-4">
                {/* Constraint */}
                <div className="flex gap-3">
                  <div className="w-1 rounded-full bg-red-500/30 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-medium text-red-400 uppercase tracking-wider mb-1">
                      Constraint
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {challenge.constraint}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-3">
                  <div className="w-1 rounded-full bg-blue-500/30 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-medium text-blue-400 uppercase tracking-wider mb-1">
                      Solution
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="flex gap-3">
                  <div className="w-1 rounded-full bg-emerald-500/30 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider mb-1">
                      Result
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {challenge.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
