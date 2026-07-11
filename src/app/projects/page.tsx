import { generateMetadata } from "@/lib/seo";
import { getProjects } from "@/lib/content";
import { ProjectListCard } from "@/components/project/project-list-card";

export const metadata = generateMetadata({
  title: "Projects",
  description:
    "A curated collection of production applications, client work, and engineering case studies built by Otoabasi Daniel Udo.",
  canonicalPath: "/projects",
});


export default async function ProjectsPage() {
  const projects = await getProjects();

  // Filter projects marked as featured (Owerri, Vibe, Deanslist)
  const featuredProjects = projects.filter((p) => p.metadata.featured === true);

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
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Engineering Projects
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            A curated collection of production applications, client work, and
            experimental builds that demonstrate my approach to software engineering.
          </p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      {featuredProjects.length > 0 && (
        <section className="relative px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-500 mb-6">
              Featured Projects
            </h2>
            <div className="space-y-6">
              {featuredProjects.map((project, i) => (
                <ProjectListCard
                  key={`featured-${project.metadata.slug}`}
                  project={project}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Archive */}
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-500 mb-6">
            All Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, i) => (
              <ProjectListCard
                key={`all-${project.metadata.slug}`}
                project={project}
                index={i}
              />
            ))}

            {projects.length === 0 && (
              <div className="glass-card rounded-xl p-16 text-center">
                <p className="text-slate-500">
                  No projects published yet. Check back soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
