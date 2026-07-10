import type { TechItem } from "@/types/content";

export const techStack: TechItem[] = [
  {
    name: "React & Vite",
    category: "Frontend Framework",
    description: "Bundled client-side rendering for application pages and forms."
  },
  {
    name: "Express.js",
    category: "Backend Engine",
    description: "API server configured to listen to custom checkout webhook callbacks and ticket validation requests."
  },
  {
    name: "Drizzle ORM",
    category: "Database abstraction",
    description: "Database tool matching JS entities to PostgreSQL schema profiles with built-in migrations."
  },
  {
    name: "Neon PostgreSQL",
    category: "Database server",
    description: "Serverless relational cloud database hosting relational ticket schemas."
  },
  {
    name: "Flutterwave Redirect",
    category: "Fintech Gateway",
    description: "Secured checkout portal configured to verify payments from diverse banks."
  },
  {
    name: "PDFKit",
    category: "PDF Utility",
    description: "Server-side page builder emitting ticket files directly into responses."
  }
];
