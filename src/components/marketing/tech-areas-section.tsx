"use client";

import { Cpu, Terminal, Shield, RefreshCw } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/motion-primitives";

const roadmapItems = [
  {
    icon: Cpu,
    category: "Government Technology",
    status: "Production",
    statusColor: "bg-emerald-500",
    description: "Architecting accessible state-wide transaction systems with high auditability requirements.",
    tech: ["Next.js", "PostgreSQL", "Blob Storage", "Flutterwave"],
  },
  {
    icon: Terminal,
    category: "Developer Platforms",
    status: "Building",
    statusColor: "bg-amber-500",
    description: "Creating modular content registers and documentation frameworks for engineering logs.",
    tech: ["MDX", "AST Parsing", "NextJS 15", "Framer Motion"],
  },
  {
    icon: Shield,
    category: "Security & Access",
    status: "Hardening",
    statusColor: "bg-red-500 animate-pulse",
    description: "Applying zero-trust models, role-based controls, and QR authentication standards.",
    tech: ["JWT", "RBAC", "Cryptographic Hashing", "HTTPS Enforcement"],
  },
  {
    icon: RefreshCw,
    category: "Cloud Infrastructure",
    status: "Optimizing",
    statusColor: "bg-blue-400",
    description: "Configuring atomic deployment runtimes, Vercel edge routes, and pipeline optimizations.",
    tech: ["Docker", "GitHub Actions", "Edge Functions", "CDNs"],
  },
];

export function TechAreasSection() {
  return (
    <section className="relative px-6 py-24 border-t border-white/[0.04] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(6,182,212,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16 text-center sm:text-left">
          <FadeIn>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              LIVE ROADMAP
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
              Current Focus Areas
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              An active record of engineering domains and technical paradigms I am currently maintaining and extending.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roadmapItems.map((item) => (
            <StaggerItem key={item.category}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between group hover:border-slate-800 transition-all duration-300">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    {/* Status Pill */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.06]">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor}`} />
                      <span className="text-[10px] font-semibold font-mono uppercase tracking-wider text-slate-400">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Info details */}
                  <h3 className="text-sm font-semibold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {item.category}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] text-slate-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
