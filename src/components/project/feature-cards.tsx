"use client";

import {
  Shield,
  FileText,
  Upload,
  CreditCard,
  Award,
  QrCode,
  LayoutDashboard,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-primitives";
import { FadeIn } from "@/components/animations/motion-primitives";
import type { FeatureItem } from "@/types/content";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  FileText,
  Upload,
  CreditCard,
  Award,
  QrCode,
  LayoutDashboard,
  BarChart3,
};

interface FeatureCardsProps {
  features: FeatureItem[];
}

export function FeatureCards({ features }: FeatureCardsProps) {
  return (
    <section id="features" className="relative px-6 py-20 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
            Core Capabilities
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-3">
            Key Features
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mb-12 leading-relaxed">
            The major capabilities engineered into the platform, each designed
            to solve specific operational challenges.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <StaggerItem key={feature.title}>
                <div className="glass-card rounded-xl p-6 h-full group hover:border-blue-500/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feature.description}
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
