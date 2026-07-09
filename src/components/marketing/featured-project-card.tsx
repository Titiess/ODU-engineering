"use client";

import Link from "next/link";
import { ArrowRight, Server, Shield, ExternalLink, Activity } from "lucide-react";
import type { ProjectData } from "@/types/content";
import { PlatformMockup } from "./platform-mockup";

interface FeaturedProjectCardProps {
  project: ProjectData;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const { metadata, metrics } = project;

  return (
    <section className="relative px-6 py-20 border-t border-white/[0.04] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 justify-center lg:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Featured Case Study
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight text-center lg:text-left">
            Production System Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Detailed Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              {/* Badge/Tags Row */}
              <div className="flex flex-wrap items-center gap-2 mb-4 justify-center lg:justify-start">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-medium text-blue-400 font-mono uppercase">
                  {metadata.role}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[10px] font-medium text-[#10b981] font-mono uppercase flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#10b981]" />
                  {metadata.status}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4 text-center lg:text-left">
                {metadata.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 text-center lg:text-left">
                {metadata.tagline}
              </p>

              {/* Core metrics mini-grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                {metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                    <p className="text-lg font-bold text-white font-mono tracking-tight">{metric.value}</p>
                    <p className="text-[10px] text-slate-500 font-medium tracking-wide mt-0.5 leading-snug">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Selected technology pills */}
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start mb-6">
                {metadata.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] text-slate-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <Link
                href={`/projects/${metadata.slug}`}
                id="featured-primary-cta"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white text-slate-950 hover:bg-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                Read Deep Dive
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              {metadata.links.live && (
                <a
                  href={metadata.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="featured-secondary-cta"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                >
                  Visit Live Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Platform Mockup Showcase Column */}
          <div className="lg:col-span-7 w-full">
            <PlatformMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
