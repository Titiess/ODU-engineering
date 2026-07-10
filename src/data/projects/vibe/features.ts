import type { FeatureItem } from "@/types/content";

export const features: FeatureItem[] = [
  {
    title: "Multi-View Dashboard layout",
    description: "Modular sections for predictions pools, active markets, token faucet, and leaderboard metrics.",
    icon: "LayoutDashboard"
  },
  {
    title: "Active Prediction Pools List",
    description: "UI display grids detailing market conditions, betting leverage, expiration timing, and resolve state.",
    icon: "Compass"
  },
  {
    title: "Zustand Wallet Controller",
    description: "Client-side state engine managing balance, address simulation, and transaction status logs.",
    icon: "Wallet"
  },
  {
    title: "Testnet Faucet Tool",
    description: "Interactive button flow permitting users to claim simulated tokens to use, validating State Updates.",
    icon: "Coins"
  },
  {
    title: "Recharts Analytics Panels",
    description: "Responsive line and area graphs detailing pool leverage evolution and market activity rates.",
    icon: "TrendingUp"
  },
  {
    title: "Route Group Structure",
    description: "Modern directory organization grouping app routing without modifying the URL segment mapping.",
    icon: "FolderOpen"
  }
];
