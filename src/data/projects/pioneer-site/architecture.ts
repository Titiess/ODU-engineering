import type { ArchitectureNode } from "@/types/content";

export const architecture: ArchitectureNode[] = [
  {
    id: "vite-app",
    label: "React SPA (Vite Package Bundler)",
    type: "frontend"
  },
  {
    id: "wouter-routing",
    label: "Wouter Client-Side router",
    type: "frontend"
  },
  {
    id: "forms-validation",
    label: "React Hook Form / Zod Middleware",
    type: "backend"
  },
  {
    id: "tailwind-custom",
    label: "Tailwind Green Color Theme Assets",
    type: "frontend"
  }
];
