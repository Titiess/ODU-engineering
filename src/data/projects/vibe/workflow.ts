import type { WorkflowStep } from "@/types/content";

export const workflow: WorkflowStep[] = [
  {
    label: "Initialize Session Connection",
    description: "Click 'Connect' to instantiate a simulated Web3 wallet connection, generating mock addresses."
  },
  {
    label: "Mint Sandbox Tokens",
    description: "Launch the faucet pane, trigger 'Claim', and observe Zustand balance increment by 1,000 VIBE tokens."
  },
  {
    label: "Analyze Prediction Pools",
    description: "Browse the lists grid, inspect chart metrics, and assess pool balance leverage logs."
  },
  {
    label: "Commit Forecast Prediction",
    description: "Configure forecast selection, set token count, confirm, and verify local balance decrements."
  },
  {
    label: "View Leaderboard Updates",
    description: "Access the leaderboard board to inspect user profiles, medal values, and prediction success multipliers."
  }
];
