import type { DecisionItem } from "@/types/content";

export const decisions: DecisionItem[] = [
  {
    technology: "Solana Wallet Adapter over custom Web3 hooks",
    rationale: "The wallet adapter standard provides a battle-tested, multi-provider connection interface that handles edge cases (popup blockers, disconnection events, account changes) out of the box.",
    alternatives: "Custom ethers.js hooks, WalletConnect",
    tradeoffs: "Locks the project into Solana ecosystem conventions, though the adapter is actively maintained and well-documented."
  },
  {
    technology: "Next.js App Router over Pages Router",
    rationale: "App Router enables server components for proposal data fetching, nested layouts for shared navigation, and streaming SSR for faster initial loads.",
    alternatives: "Pages Router, Remix",
    tradeoffs: "App Router has a steeper learning curve and some third-party library compatibility gaps compared to the more mature Pages Router."
  },
  {
    technology: "Zustand over Redux or Context API",
    rationale: "Zustand provides minimal boilerplate for managing wallet state and proposal filters, with built-in support for localStorage persistence and computed selectors.",
    alternatives: "Redux Toolkit, React Context",
    tradeoffs: "Less opinionated than Redux, which means less structure for very large state trees, but perfectly sufficient for this project's scope."
  }
];
