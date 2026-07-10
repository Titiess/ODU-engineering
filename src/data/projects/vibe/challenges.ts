import type { ChallengeItem } from "@/types/content";

export const challenges: ChallengeItem[] = [
  {
    title: "State Syncing Across Next.js Route Groups",
    constraint: "Ensuring wallet balance updates and address registrations sync smoothly across standalone route layout groups.",
    solution: "Built a customized Zustand Wallet Store layer wrapped in a client-side WalletContext Provider. Synced store changes dynamically across child dashboard components.",
    result: "Instant reactive state rendering when claiming faucet tokens or placing simulated pool predictions."
  },
  {
    title: "Responsive Recharts Containers Layout reflow",
    constraint: "Recharts graphs breaking container layouts or failing to shrink correctly during viewport resize event.",
    solution: "Configured layout component observers and wrapped charting containers inside CSS grids using explicit minimum-width variables (min-w-0 flex-1).",
    result: "Fluid charts adapting sizes automatically to fit mobile columns without breaking card styling."
  },
  {
    title: "Simulating Web3 Connection Hooks",
    constraint: "Designing a convincing sandbox testnet environment experience without demanding actual blockchain gas spending.",
    solution: "Constructed mock provider context mimicking transaction timeouts and receipt confirmations with local storage checkpoints.",
    result: "Frictionless showcase sandbox where users learn prediction market dashboard mechanics instantly."
  }
];
