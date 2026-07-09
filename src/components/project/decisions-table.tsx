"use client";

import { FadeIn } from "@/components/animations/motion-primitives";
import type { DecisionItem } from "@/types/content";

interface DecisionsTableProps {
  decisions: DecisionItem[];
}

export function DecisionsTable({ decisions }: DecisionsTableProps) {
  return (
    <section id="decisions" className="relative px-6 py-20 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium text-violet-400 uppercase tracking-wider mb-2">
            Architecture Decisions
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
            Engineering Decision Log
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Key technology and architecture decisions with documented rationale,
            alternatives considered, and tradeoffs accepted.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Technology
                    </th>
                    <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Rationale
                    </th>
                    <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider hidden lg:table-cell">
                      Alternatives
                    </th>
                    <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider hidden md:table-cell">
                      Tradeoffs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {decisions.map((d, i) => (
                    <tr
                      key={d.technology}
                      className={`${
                        i < decisions.length - 1
                          ? "border-b border-white/[0.03]"
                          : ""
                      } hover:bg-white/[0.02] transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-white font-mono">
                          {d.technology}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs text-slate-400 leading-relaxed">
                          {d.rationale}
                        </span>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <span className="text-xs text-slate-500 leading-relaxed">
                          {d.alternatives}
                        </span>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="text-xs text-slate-500 leading-relaxed">
                          {d.tradeoffs}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
