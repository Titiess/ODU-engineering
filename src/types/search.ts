export interface SearchEntry {
  title: string;
  slug: string;
  type: "project" | "article" | "note" | "talk" | "open-source";
  description: string;
  tags: string[];
  url: string;
}

export interface SearchIndex {
  entries: SearchEntry[];
  generatedAt: string;
}
