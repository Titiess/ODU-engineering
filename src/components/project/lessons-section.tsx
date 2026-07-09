"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { FadeIn } from "@/components/animations/motion-primitives";

interface LessonsSectionProps {
  lessons: string[];
}

export function LessonsSection({ lessons }: LessonsSectionProps) {
  return (
    <section id="lessons" className="relative px-6 py-20 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-wider mb-2">
            Retrospective
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
            Lessons Learned
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Key takeaways from building this system — what worked, what I would
            change, and what I carry forward.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {lessons.map((lesson, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                <BookOpen className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pt-1">
                {lesson}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
