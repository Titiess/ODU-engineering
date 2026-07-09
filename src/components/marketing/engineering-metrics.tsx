"use client";

import { Activity, Shield, Users, Clock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/motion-primitives";

const metricCards = [
  {
    icon: Users,
    value: "10,000+",
    label: "Citizens Onboarded",
    description: "Successful secure identities verified and processed.",
    color: "text-blue-400",
  },
  {
    icon: Clock,
    value: "< 3.8s",
    label: "Verification Latency",
    description: "Average round-trip cryptographic verification time.",
    color: "text-cyan-400",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Digital Integrity",
    description: "Tamper-proof verifiable e-certificates issued.",
    color: "text-emerald-400",
  },
  {
    icon: Activity,
    value: "99.98%",
    label: "Database Uptime",
    description: "Consistent system uptime under transaction load.",
    color: "text-violet-400",
  },
];

export function EngineeringMetrics() {
  return (
    <section className="relative px-6 py-16 border-t border-white/[0.04] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metricCards.map((card) => (
            <StaggerItem key={card.label}>
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full hover:border-slate-800 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-500">
                    System Stats
                  </span>
                  <card.icon className={`w-4 h-4 ${card.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white mb-1.5">
                    {card.value}
                  </h3>
                  <h4 className="text-xs font-semibold text-slate-300 mb-1">
                    {card.label}
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-snug">
                    {card.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
