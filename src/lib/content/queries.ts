// ---------------------------------------------------------------------------
// Content Queries — Data access layer for all content types
// ---------------------------------------------------------------------------

import type { ProjectData, ProjectMetadata } from "@/types/content";
import type { ProcessedContent } from "./processor";
import { processContent } from "./processor";
import fs from "fs";
import path from "path";

export interface ResolvedProject {
  data: ProjectData;
  contentStats: ProcessedContent;
  mdxSections: string[]; // list of available MDX section filenames
}

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "projects");
const DATA_DIR = path.join(process.cwd(), "src", "data", "projects");

/**
 * Get all registered project slugs by reading the data directory.
 */
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(DATA_DIR)) return [];
  return fs
    .readdirSync(DATA_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

/**
 * Load a project's structured metadata from its data directory.
 */
export async function getProjectMetadata(
  slug: string
): Promise<ProjectMetadata> {
  const mod = await import(`@/data/projects/${slug}/metadata`);
  return mod.metadata;
}

/**
 * Load a complete project (metadata + metrics + all structured data).
 */
export async function getProjectData(slug: string): Promise<ProjectData> {
  const [metaMod, metricsMod, featuresMod, challengesMod, workflowMod, archMod, techMod, decisionsMod, roadmapMod, lessonsMod] =
    await Promise.all([
      import(`@/data/projects/${slug}/metadata`),
      import(`@/data/projects/${slug}/metrics`),
      import(`@/data/projects/${slug}/features`),
      import(`@/data/projects/${slug}/challenges`),
      import(`@/data/projects/${slug}/workflow`),
      import(`@/data/projects/${slug}/architecture`),
      import(`@/data/projects/${slug}/tech-stack`),
      import(`@/data/projects/${slug}/decisions`),
      import(`@/data/projects/${slug}/roadmap`),
      import(`@/data/projects/${slug}/lessons`),
    ]);

  return {
    metadata: metaMod.metadata,
    metrics: metricsMod.metrics,
    features: featuresMod.features,
    challenges: challengesMod.challenges,
    workflow: workflowMod.workflow,
    architecture: archMod.architecture,
    techStack: techMod.techStack,
    decisions: decisionsMod.decisions,
    roadmap: roadmapMod.roadmap,
    lessonsLearned: lessonsMod.lessons,
  };
}

/**
 * Resolve a complete project including content stats.
 */
export async function getProject(slug: string): Promise<ResolvedProject> {
  const data = await getProjectData(slug);

  // Gather content stats from available MDX files
  const contentDir = path.join(CONTENT_DIR, slug);
  let mdxSections: string[] = [];
  let combinedSource = "";

  if (fs.existsSync(contentDir)) {
    mdxSections = fs
      .readdirSync(contentDir)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(".mdx", ""));

    for (const file of mdxSections) {
      const filePath = path.join(contentDir, `${file}.mdx`);
      combinedSource += fs.readFileSync(filePath, "utf-8") + "\n";
    }
  }

  const contentStats = processContent(combinedSource);

  return { data, contentStats, mdxSections };
}

/**
 * Get all projects with their metadata (for index pages).
 */
export async function getProjects(): Promise<
  { metadata: ProjectMetadata; contentStats: ProcessedContent }[]
> {
  const slugs = getProjectSlugs();
  const results = await Promise.all(
    slugs.map(async (slug) => {
      const project = await getProject(slug);
      return {
        metadata: project.data.metadata,
        contentStats: project.contentStats,
      };
    })
  );
  return results.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );
}
