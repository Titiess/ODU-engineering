"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations/motion-primitives";
import type { TechItem } from "@/types/content";

const categoryColors: Record<string, string> = {
  Frontend: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Language: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  Backend: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Database: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Infrastructure: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Payments: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  Security: "text-red-400 bg-red-500/10 border-red-500/20",
  Deployment: "text-teal-400 bg-teal-500/10 border-teal-500/20",
  Verification: "text-orange-400 bg-orange-500/10 border-orange-500/20",
};

interface TechGridProps {
  items: TechItem[];
}

export function TechGrid({ items }: TechGridProps) {
  return (
    <section id="tech-stack" className="relative px-6 py-20 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
            Technology Choices
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
            Tech Stack
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Every technology was chosen deliberately — here is the full stack
            and the role each piece plays.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((tech) => {
            const colorClasses =
              categoryColors[tech.category] ||
              "text-slate-400 bg-slate-500/10 border-slate-500/20";
            return (
              <StaggerItem key={tech.name}>
                <div className="glass-card rounded-xl p-5 h-full group hover:border-white/[0.12] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-sm font-semibold text-white">
                      {tech.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider border ${colorClasses}`}
                    >
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
