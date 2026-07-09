import type { DecisionItem } from "@/types/content";

export const decisions: DecisionItem[] = [
  {
    technology: "Next.js",
    rationale: "Provides server-side rendering for SEO, API routes for a unified codebase, and excellent deployment story on Vercel. The full-stack capability eliminates the need for a separate backend framework for the citizen-facing portal.",
    alternatives: "Considered Express + React SPA, but SSR benefits for public-facing government pages and the unified deployment model made Next.js the stronger choice.",
    tradeoffs: "Vendor coupling with Vercel for optimal deployment. Mitigated by keeping business logic in framework-agnostic modules.",
  },
  {
    technology: "PostgreSQL",
    rationale: "Ensures strict relational integrity, transactional guarantees (ACID), and strong referential constraints. Highly secure citizen and certificate records demand a robust database engine for financial reconciliation and audits.",
    alternatives: "MongoDB was considered for its dynamic schema properties. Relational consistency and structured transactional security of PostgreSQL were ultimately prioritized.",
    tradeoffs: "Schema migrations are more rigid. Mitigated by using Prisma ORM to generate deterministic migrations and strict typescript models.",
  },
  {
    technology: "JWT Authentication",
    rationale: "Stateless tokens reduce server-side session storage requirements and simplify horizontal scaling. Critical for a platform that may need to scale to multiple council deployments.",
    alternatives: "Session-based auth with Redis was considered. JWT chosen for simpler scaling and no additional infrastructure dependency.",
    tradeoffs: "Token revocation is more complex. Implemented short-lived tokens with refresh rotation to mitigate.",
  },
  {
    technology: "Flutterwave",
    rationale: "Best-in-class payment gateway for African markets. Supports bank transfers, cards, and mobile money — all required for citizen accessibility.",
    alternatives: "Paystack was considered. Flutterwave selected for broader payment method support and better fit for government fee collection use cases.",
    tradeoffs: "Dependency on a third-party payment provider. Implemented webhook-based confirmation with manual reconciliation fallback.",
  },
  {
    technology: "Docker",
    rationale: "Ensures deployment environment consistency between development, staging, and production. Critical for a government system where deployment reliability is paramount.",
    alternatives: "Direct deployment to cloud VMs. Docker chosen for reproducibility and easier rollback.",
    tradeoffs: "Added operational complexity. Offset by simpler CI/CD pipelines and consistent environments.",
  },
  {
    technology: "QR Code Verification",
    rationale: "Provides a tamper-evident verification mechanism that works without internet access to the issuing system. Any smartphone can scan and verify certificate authenticity.",
    alternatives: "Manual verification via phone call or portal lookup. QR codes chosen for instant, decentralised verification.",
    tradeoffs: "QR codes can be photocopied. Mitigated by binding verification to the digital certificate record with server-side validation.",
  },
];
