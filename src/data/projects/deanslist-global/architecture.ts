import type { ArchitectureNode } from "@/types/content";

export const architecture: ArchitectureNode[] = [
  {
    id: "nextjs-app",
    label: "Next.js App Router",
    type: "frontend",
    group: "Client Application",
    details: "Server and client component architecture using Next.js App Router for page routing and layouts."
  },
  {
    id: "wallet-adapter",
    label: "Solana Wallet Adapter",
    type: "external",
    group: "Blockchain Interface",
    details: "Standardized wallet connection layer supporting Phantom, Backpack, and Solflare extensions."
  },
  {
    id: "zustand-state",
    label: "Zustand State Engine",
    type: "backend",
    group: "State Management",
    details: "Client-side state coordinator managing wallet sessions, proposal filters, and vote history."
  },
  {
    id: "proposal-api",
    label: "Proposal Data Layer",
    type: "api",
    group: "Data Interface",
    details: "API integration layer fetching and caching DAO proposal metadata and vote counts."
  },
  {
    id: "analytics",
    label: "Analytics Dashboard",
    type: "service",
    group: "Visualization",
    details: "Recharts-powered analytics widgets displaying participation metrics and voting trends."
  }
];
