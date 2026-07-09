"use client";

import { motion } from "framer-motion";
import type { MetricItem } from "@/types/content";

interface MetricsBarProps {
  metrics: MetricItem[];
}

export function MetricsBar({ metrics }: MetricsBarProps) {
  return (
    <section className="relative px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-2xl p-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative p-5 text-center ${
                  i < metrics.length - 1
                    ? "border-r border-white/[0.04]"
                    : ""
                }`}
              >
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-xl sm:text-2xl font-bold gradient-text mb-1"
                >
                  {metric.value}
                </motion.p>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </p>

                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 max-w-[200px] text-center">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
