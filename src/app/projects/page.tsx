import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { ProjectListCard } from "@/components/project/project-list-card";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Production engineering case studies documenting system architecture, design decisions, and technical tradeoffs.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]" />
          <div className="dot-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3">
            Publication Archive
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            In-depth engineering documentation covering system design,
            architecture decisions, and the technical tradeoffs made in
            production software.
          </p>
        </div>
      </section>

      {/* Project List */}
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-6">
          {projects.map((project, i) => (
            <ProjectListCard
              key={project.metadata.slug}
              project={project}
              index={i}
            />
          ))}

          {projects.length === 0 && (
            <div className="glass-card rounded-xl p-16 text-center">
              <p className="text-slate-500">
                No case studies published yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
