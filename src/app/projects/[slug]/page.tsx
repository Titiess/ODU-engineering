import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getProjectSlugs } from "@/lib/content";
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

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  try {
    const project = await getProject(slug);
    const { seo } = project.data.metadata;
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
    };
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

  return (
    <article className="relative min-h-screen">
      {/* Scroll indicator overlay */}
      <ReadingProgress />

      {/* Hero display */}
      <ProjectHero metadata={metadata} contentStats={contentStats} />

      {/* Metrics board */}
      <MetricsBar metrics={metrics} />

      {/* Core double columns: Sticky Sidebar TOC + Content flow */}
      <div className="max-w-7xl mx-auto flex gap-12 px-6 py-12 relative">
        {/* Sticky Table of Contents sidebar */}
        <StickyTOC />

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
      <ProjectNavigation />
    </article>
  );
}
