import type { ArchitectureNode } from "@/types/content";

export const architecture: ArchitectureNode[] = [
  {
    id: "layout-groups",
    label: "Next.js 14 App Router (Route Groups)",
    type: "frontend"
  },
  {
    id: "zustand-store",
    label: "Zustand Wallet & Balances State",
    type: "backend"
  },
  {
    id: "recharts",
    label: "Recharts Graph Widgets",
    type: "service"
  },
  {
    id: "radix",
    label: "Radix UI Primitives",
    type: "frontend"
  },
  {
    id: "localstorage",
    label: "Local Storage State Persister",
    type: "database"
  }
];
