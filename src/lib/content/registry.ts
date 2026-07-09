// ---------------------------------------------------------------------------
// Content Registry — Single source of truth for all content types
// ---------------------------------------------------------------------------

import type { ContentType } from "@/types/content";

export interface ContentTypeConfig {
  type: ContentType;
  label: string;
  pluralLabel: string;
  basePath: string;
  description: string;
  enabled: boolean;
}

export const contentRegistry: ContentTypeConfig[] = [
  {
    type: "project",
    label: "Case Study",
    pluralLabel: "Projects",
    basePath: "/projects",
    description: "Production engineering case studies and system documentation",
    enabled: true,
  },
  {
    type: "article",
    label: "Article",
    pluralLabel: "Articles",
    basePath: "/articles",
    description: "Engineering articles and technical writing",
    enabled: false,
  },
  {
    type: "note",
    label: "Engineering Note",
    pluralLabel: "Notes",
    basePath: "/notes",
    description: "Short-form engineering thoughts and observations",
    enabled: false,
  },
  {
    type: "talk",
    label: "Talk",
    pluralLabel: "Talks",
    basePath: "/talks",
    description: "Conference talks and technical presentations",
    enabled: false,
  },
  {
    type: "open-source",
    label: "Open Source",
    pluralLabel: "Open Source",
    basePath: "/open-source",
    description: "Open source projects and contributions",
    enabled: false,
  },
  {
    type: "ai-experiment",
    label: "AI Experiment",
    pluralLabel: "AI & Labs",
    basePath: "/labs",
    description: "AI experiments, agents, automation, and research",
    enabled: false,
  },
];

export function getContentConfig(type: ContentType): ContentTypeConfig {
  const config = contentRegistry.find((c) => c.type === type);
  if (!config) throw new Error(`Unknown content type: ${type}`);
  return config;
}

export function getEnabledContentTypes(): ContentTypeConfig[] {
  return contentRegistry.filter((c) => c.enabled);
}
