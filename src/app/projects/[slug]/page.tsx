import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getProjectSlugs, getProjects } from "@/lib/content";
import { ProjectHero } from "@/components/project/project-hero";
import { MetricsBar } from "@/components/project/metrics-bar";
import { TechGrid } from "@/components/project/tech-grid";
import { FeatureCards } from "@/components/project/feature-cards";
import { ChallengeCards } from "@/components/project/challenge-cards";
import { WorkflowTimeline } from "@/components/project/workflow-timeline";
import { DecisionsTable } from "@/components/project/decisions-table";
import { LessonsSection } from "@/components/project/lessons-section";
import { RoadmapSection } from "@/components/project/roadmap-section";
import { MDXSection } from "@/components/project/mdx-section";

// New Refined Components
import { ReadingProgress } from "@/components/project/reading-progress";
import { StickyTOC } from "@/components/project/sticky-toc";
import { ArchitectureDiagram } from "@/components/project/architecture-diagram";
import { ProjectNavigation } from "@/components/project/project-navigation";
import { SectionDivider } from "@/components/project/section-divider";
import { ProjectPreview } from "@/components/project/project-preview";
import { ProjectListCard } from "@/components/project/project-list-card";
import { generateProjectMetadata, getProjectSchema } from "@/lib/seo";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  try {
    const project = await getProject(slug);
    return generateProjectMetadata(project.data.metadata);
  } catch {
    return { title: "Project Not Found" };
  }
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;

  let project;
  try {
    project = await getProject(slug);
  } catch {
    notFound();
  }

  const { data, contentStats, mdxSections } = project;
  const { metadata, metrics, features, challenges, workflow, techStack, decisions, lessonsLearned, roadmap, architecture } = data;

  // Retrieve prev/next project metadata for descriptive navigation links
  const allProjects = await getProjects();
  const currentIndex = allProjects.findIndex((p) => p.metadata.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1].metadata : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1].metadata : null;

  // Calculate dynamic TOC items based on present sections
  const tocItems = [
    { id: "overview", label: "Project Overview" },
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "The Solution" },
    { id: "what-i-built", label: "What I Built" },
    { id: "features", label: "Key Features" },
    { id: "workflow", label: "System Flow" },
    { id: "architecture", label: "System Architecture" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "decisions", label: "Decision Log" },
    { id: "challenges", label: "Constraints & Solutions" },
    { id: "preview", label: "Interface Preview" },
    { id: "lessons", label: "Key Takeaways" },
    { id: "roadmap", label: "Future Roadmap" },
  ].filter((item) => {
    if (item.id === "overview") return mdxSections.includes("overview");
    if (item.id === "problem") return mdxSections.includes("problem");
    if (item.id === "solution") return mdxSections.includes("solution");
    if (item.id === "what-i-built") return !!(metadata.whatIBuilt && metadata.whatIBuilt.length > 0);
    if (item.id === "features") return !!(features && features.length > 0);
    if (item.id === "workflow") return !!(workflow && workflow.length > 0);
    if (item.id === "architecture") return !!(architecture && architecture.length > 0);
    if (item.id === "tech-stack") return !!(techStack && techStack.length > 0);
    if (item.id === "decisions") return !!(decisions && decisions.length > 0);
    if (item.id === "challenges") return !!(challenges && challenges.length > 0);
    if (item.id === "preview") return !!(metadata.previewImages && metadata.previewImages.length > 0);
    if (item.id === "lessons") return !!(lessonsLearned && lessonsLearned.length > 0);
    if (item.id === "roadmap") return !!(roadmap && roadmap.length > 0);
    return false;
  });

  // Query 2 related projects by matching technologies and categories
  const relatedProjects = allProjects
    .filter((p) => p.metadata.slug !== slug)
    .map((p) => {
      let score = 0;
      const commonTech = p.metadata.technologies.filter((t) =>
        metadata.technologies.includes(t)
      ).length;
      score += commonTech * 2;
      if (p.metadata.projectCategory === metadata.projectCategory) {
        score += 3;
      }
      return { project: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((x) => x.project);

  return (
    <article className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProjectSchema(metadata)),
        }}
      />
      {/* Scroll indicator overlay */}
      <ReadingProgress />

      {/* Hero display */}
      <ProjectHero metadata={metadata} contentStats={contentStats} />

      {/* Metrics board */}
      <MetricsBar metrics={metrics} />

      {/* Core double columns: Sticky Sidebar TOC + Content flow */}
      <div className="max-w-7xl mx-auto flex gap-12 px-6 py-12 relative">
        {/* Sticky Table of Contents sidebar */}
        <StickyTOC items={tocItems} />

        {/* Scrollable project sections flow */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Overview MDX Section */}
          {mdxSections.includes("overview") && (
            <div id="overview">
              <MDXSection slug={slug} section="overview" title="Project Overview" id="overview" />
            </div>
          )}

          {/* Problem MDX Section */}
          {mdxSections.includes("problem") && (
            <div id="problem">
              <SectionDivider />
              <MDXSection slug={slug} section="problem" title="The Problem" id="problem" />
            </div>
          )}

          {/* Solution MDX Section */}
          {mdxSections.includes("solution") && (
            <div id="solution">
              <SectionDivider />
              <MDXSection slug={slug} section="solution" title="The Solution" id="solution" />
            </div>
          )}

          {/* What I Built Checklist */}
          {metadata.whatIBuilt && metadata.whatIBuilt.length > 0 && (
            <div id="what-i-built" className="scroll-mt-24">
              <SectionDivider />
              <section className="relative px-6 py-12">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 font-mono">
                  Engineering Scope
                </p>
                <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
                  What I Built
                </h2>
                <div className="glass-card rounded-2xl p-6 sm:p-8 bg-slate-950/20 border border-white/[0.04]">
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {metadata.whatIBuilt.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-350 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 animate-pulse" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          )}

          {/* Features Grid cards */}
          {features.length > 0 && (
            <div id="features">
              <SectionDivider />
              <FeatureCards features={features} />
            </div>
          )}

          {/* Timeline workflow step bubbles */}
          {workflow.length > 0 && (
            <div id="workflow">
              <SectionDivider />
              <WorkflowTimeline steps={workflow} />
            </div>
          )}

          {/* Dynamic Interactive SVG System Architecture Diagram */}
          {architecture && architecture.length > 0 && (
            <div id="architecture">
              <SectionDivider />
              <ArchitectureDiagram nodes={architecture} />
            </div>
          )}

          {/* Technology stack layout list */}
          {techStack.length > 0 && (
            <div id="tech-stack">
              <SectionDivider />
              <TechGrid items={techStack} />
            </div>
          )}

          {/* Architecture/System Decision log table */}
          {decisions.length > 0 && (
            <div id="decisions">
              <SectionDivider />
              <DecisionsTable decisions={decisions} />
            </div>
          )}

          {/* Additional decisions details */}
          {mdxSections.includes("decisions") && (
            <div>
              <MDXSection slug={slug} section="decisions" title="Engineering Decisions Detail" />
            </div>
          )}

          {/* Challenges / Constraint cards */}
          {challenges.length > 0 && (
            <div id="challenges">
              <SectionDivider />
              <ChallengeCards challenges={challenges} />
            </div>
          )}

          {/* Screenshot walkthrough with Lightbox */}
          {metadata.previewImages && metadata.previewImages.length > 0 && (
            <div id="preview">
              <ProjectPreview images={metadata.previewImages} />
            </div>
          )}

          {/* Retrospective findings and lessons lists */}
          {lessonsLearned.length > 0 && (
            <div id="lessons">
              <SectionDivider />
              <LessonsSection lessons={lessonsLearned} />
            </div>
          )}

          {/* Extra lessons details markdown */}
          {mdxSections.includes("lessons") && (
            <div>
              <MDXSection slug={slug} section="lessons" title="Lessons Learned Detail" />
            </div>
          )}

          {/* Upcoming improvements lists */}
          {roadmap.length > 0 && (
            <div id="roadmap">
              <SectionDivider />
              <RoadmapSection items={roadmap} />
            </div>
          )}

          {/* Extra roadmap details markdown */}
          {mdxSections.includes("roadmap") && (
            <div>
              <MDXSection slug={slug} section="roadmap" title="Future Roadmap Detail" />
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation block */}
      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-500 mb-8">
              Related Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <ProjectListCard key={p.metadata.slug} project={p} index={0} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
