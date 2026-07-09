// ---------------------------------------------------------------------------
// Content Processor — Reading time, excerpts, and TOC extraction
// ---------------------------------------------------------------------------

export interface TOCEntry {
  depth: number;
  text: string;
  id: string;
}

export interface ProcessedContent {
  wordCount: number;
  readingTime: number; // minutes
  excerpt: string;
  toc: TOCEntry[];
}

const WORDS_PER_MINUTE = 200;

/**
 * Compute reading statistics and table-of-contents from raw MDX source text.
 */
export function processContent(source: string): ProcessedContent {
  const plainText = source
    .replace(/import\s+.*?from\s+['"].*?['"]/g, "")
    .replace(/export\s+.*?{[\s\S]*?}/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
    .replace(/[#*_~>-]/g, "")
    .trim();

  const words = plainText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const readingTime = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  const excerpt =
    words.slice(0, 30).join(" ") + (words.length > 30 ? "…" : "");

  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const toc: TOCEntry[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(source)) !== null) {
    const text = match[2].trim();
    toc.push({
      depth: match[1].length,
      text,
      id: text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-"),
    });
  }

  return { wordCount, readingTime, excerpt, toc };
}
