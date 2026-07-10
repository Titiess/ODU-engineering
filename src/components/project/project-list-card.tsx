"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectMetadata } from "@/types/content";
import type { ProcessedContent } from "@/lib/content";

interface ProjectListCardProps {
  project: {
    metadata: ProjectMetadata;
    contentStats: ProcessedContent;
  };
  index: number;
}

export function ProjectListCard({ project, index }: ProjectListCardProps) {
  const { metadata, contentStats } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/projects/${metadata.slug}`}
        id={`project-card-${metadata.slug}`}
        className="group block"
      >
        <div className="glass-card glass-card-hover rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Status + Meta */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {metadata.projectCategory && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium tracking-tight bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {metadata.projectCategory}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  {metadata.status}
                </span>
                <span className="text-xs text-slate-600">
                  {metadata.industry}
                </span>
                <span className="text-xs text-slate-700">·</span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                  <Clock className="w-3 h-3" />
                  {contentStats.readingTime} min
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                {metadata.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
                {metadata.tagline}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5">
                {metadata.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-500 bg-white/[0.03] border border-white/[0.05]"
                  >
                    {tech}
                  </span>
                ))}
                {metadata.technologies.length > 6 && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-600">
                    +{metadata.technologies.length - 6}
                  </span>
                )}
              </div>
            </div>

            <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
