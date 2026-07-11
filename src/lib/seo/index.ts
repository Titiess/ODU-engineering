import type { Metadata } from "next";
import type { ProjectMetadata } from "@/types/content";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://odu.engineering";

export const DEFAULT_KEYWORDS = [
  "Otoabasi Daniel Udo",
  "Otoabasi Udo",
  "Daniel Udo",
  "TiTi",
  "Titiess",
  "ODU Engineering",
  "Software Engineer",
  "Full Stack Developer",
  "Computer Engineer",
  "Next.js Developer",
  "React Developer",
  "TypeScript Developer",
  "Node.js Developer",
  "MongoDB",
  "Engineering Case Studies",
  "Technical Portfolio",
  "Software Architecture",
  "Government Technology",
  "Web Development",
  "Engineering Journal",
  "Engineering Portfolio",
  "Production Software",
];

export interface SEOOverride {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  type?: "website" | "article";
}

/**
 * Helper to construct a canonical URL
 */
export function generateCanonical(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // Prevent duplicate slashes and trailing slashes if path is empty
  const url = `${SITE_URL}${cleanPath}`;
  return url.endsWith("/") && url !== `${SITE_URL}/` ? url.slice(0, -1) : url;
}

/**
 * Reusable metadata generator for standard site pages
 */
export function generateMetadata(overrides: SEOOverride = {}): Metadata {
  const title = overrides.title 
    ? overrides.title 
    : "ODU Engineering — Production Systems Journal";
    
  const description = overrides.description || "Engineering case studies documenting the software systems, architecture, engineering decisions, and production applications built by Otoabasi Daniel Udo.";
  const keywords = overrides.keywords || DEFAULT_KEYWORDS;
  const canonical = generateCanonical(overrides.canonicalPath || "");
  const ogImage = overrides.ogImage || "/og-image.png";

  return {
    metadataBase: new URL(SITE_URL),
    title: overrides.title ? {
      absolute: overrides.title,
    } : {
      default: title,
      template: "%s | ODU Engineering",
    },
    description,
    keywords,
    alternates: {
      canonical,
    },
    authors: { name: "Otoabasi Daniel Udo" },
    creator: "Otoabasi Daniel Udo",
    publisher: "ODU Engineering",
    openGraph: {
      title: overrides.title || "ODU Engineering",
      description,
      url: canonical,
      siteName: "ODU Engineering",
      locale: "en_US",
      type: overrides.type || "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: overrides.title || "ODU Engineering",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: overrides.title || "ODU Engineering",
      description,
      images: [ogImage],
      creator: "@titiess", // Or future X profile
    },
    // Optional integration hooks for search consoles
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
      yandex: "",
      yahoo: "",
      other: {
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
      },
    },
    manifest: "/site.webmanifest",
  };
}

/**
 * Generate metadata for individual engineering case studies
 */
export function generateProjectMetadata(project: ProjectMetadata): Metadata {
  const title = project.seo.title || `${project.title} | ODU Engineering`;
  const description = project.seo.description || project.tagline;
  const keywords = Array.from(new Set([...(project.seo.keywords || []), ...DEFAULT_KEYWORDS]));
  const canonicalPath = `/projects/${project.slug}`;
  const ogImage = project.ogImage || project.coverImage || "/og-image.png";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: generateCanonical(canonicalPath),
    },
    authors: { name: project.author?.name || "Otoabasi Daniel Udo" },
    creator: project.author?.name || "Otoabasi Daniel Udo",
    publisher: "ODU Engineering",
    openGraph: {
      title,
      description,
      url: generateCanonical(canonicalPath),
      siteName: "ODU Engineering",
      locale: "en_US",
      type: "article",
      publishedTime: project.publishedAt,
      modifiedTime: project.updatedAt,
      authors: [project.author?.name || "Otoabasi Daniel Udo"],
      tags: project.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@titiess",
    },
  };
}

/**
 * Generate Person Schema JSON-LD
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Otoabasi Daniel Udo",
    alternateName: ["TiTi", "Titiess"],
    jobTitle: ["Computer Engineer", "Software Engineer", "Full Stack Developer"],
    description: "Computer Engineer and Full Stack Software Engineer specializing in modern web applications, government digital platforms, software architecture, and engineering case studies.",
    url: SITE_URL,
    image: `${SITE_URL}/icon-512.png`,
    sameAs: [
      "https://github.com/Titiess",
      "https://www.linkedin.com/in/otoabasi-udo-910400214/",
      "https://x.com/titiess", // Future X Profile
      SITE_URL
    ],
  };
}

/**
 * Generate Organization Schema JSON-LD
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "ODU Engineering",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    founder: {
      "@id": `${SITE_URL}/#person`,
    },
    description: "Engineering publication platform documenting production software systems, architecture decisions, and technical leadership by Otoabasi Daniel Udo.",
  };
}

/**
 * Generate Website Schema JSON-LD
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "ODU Engineering",
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    description: "Engineering case studies documenting the software systems, architecture, and production applications built by Otoabasi Daniel Udo.",
  };
}

/**
 * Generate Project/Case Study Schema JSON-LD
 */
export function getProjectSchema(project: ProjectMetadata) {
  const projectUrl = generateCanonical(`/projects/${project.slug}`);
  
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${projectUrl}/#article`,
    headline: project.seo.title || project.title,
    description: project.seo.description || project.tagline,
    url: projectUrl,
    mainEntityOfPage: projectUrl,
    inLanguage: "en-US",
    thumbnailUrl: `${SITE_URL}${project.coverImage}`,
    image: [`${SITE_URL}${project.ogImage || project.coverImage || "/og-image.png"}`],
    datePublished: project.publishedAt ? `${project.publishedAt}T00:00:00Z` : undefined,
    dateModified: project.updatedAt ? `${project.updatedAt}T00:00:00Z` : undefined,
    keywords: project.seo.keywords?.join(", ") || project.tags?.join(", ") || "",
    author: {
      "@id": `${SITE_URL}/#person`,
      "@type": "Person",
      name: project.author?.name || "Otoabasi Daniel Udo",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
      "@type": "Organization",
      name: "ODU Engineering",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
      },
    },
    about: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.tagline,
      genre: project.industry,
    },
  };
}
