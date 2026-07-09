"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";

export function ProjectNavigation() {
  return (
    <footer className="relative max-w-4xl mx-auto px-6 py-24 border-t border-white/[0.04]">
      <div className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left bg-slate-950/20">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-4">
            Editorial Queue
          </span>
          <h3 className="text-base font-semibold text-white tracking-tight mb-2">
            More Deep Dives Underway
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
            I am actively writing reports for other high-scale databases and production systems. Subscribe or check back soon.
          </p>
        </div>

        <Link
          href="/projects"
          id="project-nav-back"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-white hover:bg-white/[0.08] transition-all shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Case Studies
        </Link>
      </div>
    </footer>
  );
}
