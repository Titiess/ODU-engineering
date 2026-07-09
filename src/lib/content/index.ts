// ---------------------------------------------------------------------------
// Content Layer — Public API
// ---------------------------------------------------------------------------

export { getProject, getProjects, getProjectSlugs } from "./queries";
export { processContent } from "./processor";
export { contentRegistry, getContentConfig, getEnabledContentTypes } from "./registry";
export type { ResolvedProject } from "./queries";
export type { ProcessedContent, TOCEntry } from "./processor";
