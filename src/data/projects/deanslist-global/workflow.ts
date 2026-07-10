import type { WorkflowStep } from "@/types/content";

export const workflow: WorkflowStep[] = [
  {
    label: "Connect Wallet",
    description: "Select a Solana wallet provider and authorize the connection to access governance features."
  },
  {
    label: "Browse Proposals",
    description: "Navigate the proposal feed, filter by status (active, resolved, expired), and inspect details."
  },
  {
    label: "Cast Vote",
    description: "Select a proposal, review the options, and submit a vote with the connected wallet."
  },
  {
    label: "Track Analytics",
    description: "View community participation metrics, vote distribution charts, and member activity logs."
  },
  {
    label: "Review Results",
    description: "Check resolved proposals for final outcomes, quorum status, and execution details."
  }
];
