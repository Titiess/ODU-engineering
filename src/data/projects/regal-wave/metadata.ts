import type { ProjectMetadata } from "@/types/content";

export const metadata: ProjectMetadata = {
  slug: "regal-wave",
  title: "Regal Wave Party Website",
  tagline: "A production client-centric event ticketing platform with verified online checkout, automatic ticket lifecycle, and QR-integrated tickets.",
  status: "In Production",
  client: "Regal Star Gym",
  industry: "Events & Entertainment",
  timeline: "2024",
  role: "Full-Stack Developer",
  projectCategory: "Client Project",
  whatIBuilt: [
    "Tiered ticket checkout form",
    "Flutterwave payment integration",
    "HMAC webhook signature validation",
    "Server-side PDF generation",
    "Admin event verification API",
    "Mobile-first responsive design"
  ],
  technologies: [
    "React",
    "Express",
    "TypeScript",
    "Drizzle ORM",
    "Neon DB",
    "Flutterwave",
    "PDFKit",
    "Tailwind CSS",
    "Zod"
  ],
  categories: ["Web App", "Fintech", "Client Work"],
  tags: ["ticketing", "payments", "automation", "pdf-generation", "express", "react"],
  featured: false,
  publishedAt: "2024-05-15",
  updatedAt: "2424-05-15",
  coverImage: "/projects/regal-wave/cover.png",
  previewImages: [
    "/projects/regal-wave/cover.png",
    "/projects/regal-wave/gallery1.png"
  ],
  relatedProjects: ["owerri-municipal-e-certificate", "pioneer-site"],
  relatedArticles: [],
  links: {
    live: "https://regal-wave-party-website.vercel.app/",
    github: "https://github.com/Titiess/RegalWaveParty-website"
  },
  seo: {
    title: "Regal Wave — Event Ticketing Platform Showcase",
    description: "Technical case study of the Regal Wave platform, highlighting Express, Flutterwave payment gateway hook validations, Express session logs, and Node PDFKit QR ticketing.",
    keywords: ["Express.js", "React API", "Flutterwave Checkout", "Drizzle ORM Hook", "Neon DB PostgreSQL", "PDFKit ticketer"]
  },
  author: {
    name: "Otoabasi Udo",
    title: "Full-Stack Developer",
  },
};
