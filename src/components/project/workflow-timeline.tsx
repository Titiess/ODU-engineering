"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/motion-primitives";
import type { WorkflowStep } from "@/types/content";

interface WorkflowTimelineProps {
  steps: WorkflowStep[];
}

export function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  return (
    <section id="workflow" className="relative px-6 py-20 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
            System Flow
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
            Application Workflow
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mb-12 leading-relaxed">
            The end-to-end journey of a certificate application through the
            system.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

          <div className="space-y-1">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex items-start gap-5 py-4 group"
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                    <span className="text-xs font-bold text-blue-400 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1.5 min-w-0">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {step.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
