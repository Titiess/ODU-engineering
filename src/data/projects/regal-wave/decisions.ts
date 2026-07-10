import type { DecisionItem } from "@/types/content";

export const decisions: DecisionItem[] = [
  {
    technology: "Express Over Next.js App Router (Separate Client/Server)",
    rationale: "Selected separate client-server architecture because the API layer needs to parse payload buffers cleanly without App Router server request restrictions, and the standalone API can scale independently.",
    alternatives: "Next.js Route Handlers",
    tradeoffs: "Requires running separate deployments (Vercel + Railway) instead of a single serverless Next.js endpoint bundle."
  },
  {
    technology: "Drizzle ORM over Prisma",
    rationale: "Selected Drizzle because it provides lightweight SQL-like syntax that supports serverless Neon SQL connection pools without cold start latency or prisma engines overhead.",
    alternatives: "Prisma ORM",
    tradeoffs: "Prisma has more mature schema design CLI tooling, whereas Drizzle requires manually building migration files."
  },
  {
    technology: "Flutterwave Event Webhooks over Client-Side Redirection Hooks",
    rationale: "Client-side callbacks are easily spoofed or interrupted if the citizen closes their target browser tab. Webhooks ensure transaction validation runs server-to-server reliably.",
    alternatives: "Direct Client Verification API callbacks",
    tradeoffs: "Webhook callbacks can arrive out-of-order or with latency, requiring robust idempotency check layers on order schemas."
  }
];
