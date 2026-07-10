import type { ArchitectureNode } from "@/types/content";

export const architecture: ArchitectureNode[] = [
  {
    id: "client",
    label: "React SPA Frontend (Vite)",
    type: "frontend"
  },
  {
    id: "api",
    label: "Express.js REST Server",
    type: "api"
  },
  {
    id: "drizzle",
    label: "Drizzle Schema Mapper",
    type: "backend"
  },
  {
    id: "neon",
    label: "Neon Serverless PostgreSQL Database",
    type: "database"
  },
  {
    id: "flutterwave",
    label: "Flutterwave Checkout API",
    type: "external"
  },
  {
    id: "pdfkit",
    label: "PDFKit Rendering Engine",
    type: "service"
  }
];
