"use client";

import { Shield, Layers, HardDrive, Cpu } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/motion-primitives";

const philosophyItems = [
  {
    icon: Shield,
    title: "Secure by Design",
    description:
      "Security is an architectural foundation, not an operational afterthought. Implementing principle of least privilege, strict CORS policies, token rotation, and threat modeling at step zero.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/20",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Designing systems capable of handling peak loads through horizontal scaling, database indices, async queues, stateless workers, and decoupled microservices where appropriate.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "group-hover:border-violet-500/20",
  },
  {
    icon: HardDrive,
    title: "Reliability First",
    description:
      "Treating system uptime, data integrity, and strict database transactions as non-negotiable. Designing with defensive validation, circuit breakers, and automatic backup routines.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/20",
  },
  {
    icon: Cpu,
    title: "Developer Experience (DX)",
    description:
      "Codebases are written for humans first. Prioritizing structured API designs, atomic commits, automated unit/integration test suites, and clean, self-documenting type interfaces.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/20",
  },
];

export function PrinciplesSection() {
  return (
    <section className="relative px-6 py-24 border-t border-white/[0.04] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(99,102,241,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16 text-center sm:text-left">
          <FadeIn>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Engineering core
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
              My Engineering Philosophy
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every system I architect is guided by core principles that prioritize long-term efficiency, reliability under heavy load, and security.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {philosophyItems.map((item) => (
            <StaggerItem key={item.title}>
              <div
                className={`glass-card rounded-2xl p-6 sm:p-8 h-full group transition-all duration-300 ${item.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-base font-semibold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
