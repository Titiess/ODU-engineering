"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/custom-icons";

import Link from "next/link";
import type { ProjectMetadata } from "@/types/content";
import type { ProcessedContent } from "@/lib/content";

interface ProjectHeroProps {
  metadata: ProjectMetadata;
  contentStats: ProcessedContent;
}

export function ProjectHero({ metadata, contentStats }: ProjectHeroProps) {
  return (
    <section className="relative py-20 sm:py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-[#030712] to-[#030712]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07),transparent_60%)]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8 group"
            id="project-back-link"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {metadata.status}
          </span>
          <span className="text-xs text-slate-500">{metadata.industry}</span>
          <span className="text-xs text-slate-700">·</span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <Calendar className="w-3 h-3" />
            {metadata.timeline}
          </span>
          <span className="text-xs text-slate-700">·</span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3 h-3" />
            {contentStats.readingTime} min read ·{" "}
            {contentStats.wordCount.toLocaleString()} words
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-5"
        >
          {metadata.title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-slate-400 leading-relaxed mb-8 max-w-3xl"
        >
          {metadata.tagline}
        </motion.p>

        {/* Author + Links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">
              OD
            </div>
            <div>
              <p className="text-sm font-medium text-white">{metadata.role}</p>
              <p className="text-xs text-slate-500">{metadata.client}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {metadata.links.live && (
              <a
                href={metadata.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all"
                id="project-live-link"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Site
              </a>
            )}
            {metadata.links.github && (
              <a
                href={metadata.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all"
                id="project-github-link"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
          </div>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/[0.04]"
        >
          {metadata.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
