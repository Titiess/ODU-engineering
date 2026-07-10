"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectNavigationProps {
  prevProject?: { slug: string; title: string } | null;
  nextProject?: { slug: string; title: string } | null;
}

export function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  return (
    <footer className="relative max-w-4xl mx-auto px-6 py-20 border-t border-white/[0.04]">
      {/* Navigation Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-xs font-mono font-medium text-slate-405 hover:text-blue-400 transition-colors group mr-auto sm:mr-0"
            id="project-nav-prev"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span className="line-clamp-1">{prevProject.title}</span>
          </Link>
        ) : (
          <span className="text-xs font-mono text-slate-600 select-none mr-auto sm:mr-0 opacity-40">
            — First Project
          </span>
        )}

        <Link
          href="/projects"
          id="project-nav-back"
          className="text-xs font-mono font-semibold text-slate-350 hover:text-white px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all"
        >
          All Engineering Projects
        </Link>

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-xs font-mono font-medium text-slate-405 hover:text-blue-400 transition-colors group ml-auto sm:ml-0"
            id="project-nav-next"
          >
            <span className="line-clamp-1">{nextProject.title}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <span className="text-xs font-mono text-slate-600 select-none ml-auto sm:ml-0 opacity-40">
            Last Project —
          </span>
        )}
      </div>

      {/* Dynamic Editorial Queue status card */}
      <div className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left bg-slate-950/20 border border-white/[0.03]">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-4 animate-pulse">
            Editorial Queue
          </span>
          <h3 className="text-base font-semibold text-white tracking-tight mb-2">
            More Technical Showcase Articles Underway
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
            I am actively writing reports for other high-scale database migrations and production setups. Check back soon.
          </p>
        </div>
      </div>
    </footer>
  );
}
