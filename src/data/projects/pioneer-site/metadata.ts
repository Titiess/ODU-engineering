import type { ProjectMetadata } from "@/types/content";

export const metadata: ProjectMetadata = {
  slug: "pioneer-site",
  title: "Pioneer Site",
  tagline: "A multi-page informational website for a microfinance cooperative featuring form validation flows and accessible accordion blocks.",
  status: "In Production",
  client: "Pioneer Multi-Purpose Cooperative Society Ltd.",
  industry: "Financial Services",
  timeline: "2024",
  role: "Frontend Developer",
  projectCategory: "Client Project",
  whatIBuilt: [
    "Multi-page static marketing flow",
    "Wouter client-side router",
    "Zod-validated application form",
    "FAQ accordion components",
    "Mobile-first responsive layouts"
  ],
  technologies: [
    "React",
    "Vite",
    "TypeScript",
    "Wouter",
    "Radix UI",
    "Tailwind CSS",
    "React Hook Form",
    "Zod"
  ],
  categories: ["Vite App", "Fintech", "Client Work"],
  tags: ["microfinance", "wouter", "forms-validation", "tailwind", "react"],
  featured: false,
  publishedAt: "2024-03-01",
  updatedAt: "2024-03-01",
  coverImage: "/projects/pioneer-site/cover.png",
  previewImages: [
    "/projects/pioneer-site/cover.png",
    "/projects/pioneer-site/gallery1.png"
  ],
  relatedProjects: ["regal-wave", "deanslist-global"],
  relatedArticles: [],
  links: {
    live: "https://pioneer-site-js.vercel.app/",
    github: "https://github.com/Titiess/PioneerSiteJs"
  },
  seo: {
    title: "Pioneer Site — Microfinance Web Showcase",
    description: "Detailed client case study outlining Pioneer Cooperative multi-page routing, Radix accordions, and Zod form components.",
    keywords: ["Wouter Router", "Zod Form Validation", "Radix Accordion", "Microfinance interface", "Vite React client"]
  },
  author: {
    name: "Otoabasi Udo",
    title: "Frontend Developer",
  },
};
