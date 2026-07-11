import { generateMetadata } from "@/lib/seo";
import { Code2, BookOpen, Target, Wrench } from "lucide-react";

export const metadata = generateMetadata({
  title: "About",
  description:
    "Engineering background, editorial focus, and the philosophy behind ODU Engineering.",
  canonicalPath: "/about",
});


const focusAreas = [
  {
    icon: Code2,
    title: "Production Systems",
    description:
      "Documenting the architecture, engineering decisions, and operational realities of shipping software to real users.",
  },
  {
    icon: BookOpen,
    title: "Technical Writing",
    description:
      "Treating engineering documentation as a first-class craft — clear, structured, and designed for long-term value.",
  },
  {
    icon: Target,
    title: "Systems Thinking",
    description:
      "Exploring how individual components interact within larger systems, and how decisions cascade through a codebase.",
  },
  {
    icon: Wrench,
    title: "Developer Experience",
    description:
      "Building tools, workflows, and infrastructure that make development teams more effective and codebases more maintainable.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]" />
          <div className="dot-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3">
            About This Journal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Engineering with
            <br />
            <span className="gradient-text">intention.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            ODU Engineering is a long-term publication platform — a living
            journal documenting the architecture decisions, system designs, and
            technical tradeoffs behind production software.
          </p>
          <p className="text-base text-slate-500 leading-relaxed">
            This isn&apos;t a portfolio. It&apos;s a record of engineering work —
            the problems that shaped the systems, the constraints that shaped
            the solutions, and the lessons that shaped the engineer.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="relative px-6 py-20 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
            Editorial Focus
          </p>
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-12">
            What I Write About
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="glass-card rounded-xl p-6 group hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <area.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
