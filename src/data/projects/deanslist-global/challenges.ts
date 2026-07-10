import type { ChallengeItem } from "@/types/content";

export const challenges: ChallengeItem[] = [
  {
    title: "Multi-Wallet Provider Integration",
    constraint: "Supporting multiple Solana wallet extensions (Phantom, Backpack, Solflare) with a single unified connection flow.",
    solution: "Implemented the Solana wallet adapter standard with a custom context wrapper that normalizes connection events, account changes, and disconnection across all providers.",
    result: "Seamless wallet switching without page reloads or state desynchronization."
  },
  {
    title: "Proposal State Management",
    constraint: "Managing complex proposal lifecycle states (draft, active, voting, resolved, expired) with real-time UI updates.",
    solution: "Built a Zustand store layer with computed selectors for filtering proposals by status, sorting by deadline, and tracking user vote history.",
    result: "Responsive proposal feeds that update instantly when filters change and persist user preferences across sessions."
  },
  {
    title: "Responsive Sidebar Navigation",
    constraint: "Building a sidebar that functions as a full navigation panel on desktop but collapses to an icon bar on mobile without layout shifts.",
    solution: "Leveraged CSS grid with named areas and Framer Motion layout animations to smoothly transition between expanded and collapsed sidebar states.",
    result: "Fluid navigation experience that adapts to viewport size with smooth animated transitions."
  }
];
