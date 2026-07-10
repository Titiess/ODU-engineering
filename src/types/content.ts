// ---------------------------------------------------------------------------
// ODU Engineering — Content Type System
// ---------------------------------------------------------------------------

export type ContentType =
  | "project"
  | "article"
  | "note"
  | "talk"
  | "open-source"
  | "ai-experiment";

export type ProjectStatus = "In Production" | "In Development" | "Archived";

// ---------------------------------------------------------------------------
// Project Schema
// ---------------------------------------------------------------------------

export interface ProjectSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface ProjectLink {
  live?: string;
  github?: string;
}

export interface VersionEntry {
  version: string;
  date: string;
  note: string;
}

export interface MetricItem {
  label: string;
  value: string;
  description: string;
}

export interface ChallengeItem {
  title: string;
  constraint: string;
  solution: string;
  result: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface WorkflowStep {
  label: string;
  description: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: "frontend" | "api" | "backend" | "database" | "service" | "external";
  group?: string;
  details?: string;
}

export interface ProjectAuthor {
  name: string;
  title: string;
  avatar?: string;
}

export interface TechItem {
  name: string;
  category: string;
  description: string;
}

export interface DecisionItem {
  technology: string;
  rationale: string;
  alternatives: string;
  tradeoffs: string;
}

export interface ProjectMetadata {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  client: string;
  industry: string;
  timeline: string;
  role: string;
  technologies: string[];
  categories: string[];
  tags: string[];
  featured: boolean;
  publishedAt: string;
  updatedAt: string;
  coverImage: string;
  featuredImage?: string;
  ogImage?: string;
  projectCategory?: "Flagship Case Study" | "Client Project" | "Personal Project" | "Professional Collaboration" | "Experimental Project" | "Open Source";
  whatIBuilt?: string[];
  previewImages?: string[];
  relatedProjects?: string[];
  relatedArticles?: string[];
  links: ProjectLink;
  seo: ProjectSEO;
  author?: ProjectAuthor;
  versionHistory?: VersionEntry[];
}

export interface ProjectData {
  metadata: ProjectMetadata;
  metrics: MetricItem[];
  features: FeatureItem[];
  challenges: ChallengeItem[];
  workflow: WorkflowStep[];
  architecture: ArchitectureNode[];
  techStack: TechItem[];
  decisions: DecisionItem[];
  roadmap: string[];
  lessonsLearned: string[];
}

// ---------------------------------------------------------------------------
// Editorial Section Framework
// ---------------------------------------------------------------------------

export type EditorialSection =
  | "hero"
  | "executive-summary"
  | "business-context"
  | "problem"
  | "objectives"
  | "constraints"
  | "research"
  | "architecture-overview"
  | "solution"
  | "system-workflow"
  | "engineering-decisions"
  | "tradeoffs"
  | "challenges"
  | "performance"
  | "security"
  | "deployment"
  | "results"
  | "lessons-learned"
  | "future-improvements"
  | "references";
