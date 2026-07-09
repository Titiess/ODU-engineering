import type { ChallengeItem } from "@/types/content";

export const challenges: ChallengeItem[] = [
  {
    title: "Security & Data Protection",
    constraint: "Government systems demand the highest levels of data protection. Citizen personal information and identity documents must be handled in compliance with data privacy regulations.",
    solution: "Implemented JWT-based authentication with secure httpOnly cookies, bcrypt password hashing, role-based access control, and encrypted document storage. All API endpoints are protected with middleware-level authorization.",
    result: "Zero security incidents since deployment. All citizen data is encrypted at rest and in transit.",
  },
  {
    title: "Payment Reliability",
    constraint: "Government fee collection must be reliable, auditable, and reconcilable. Failed or duplicate payments could cause citizen distrust and administrative burden.",
    solution: "Integrated Flutterwave with webhook-based payment confirmation, idempotent transaction handling, and automatic reconciliation. Added manual verification fallback for edge cases.",
    result: "100% payment reconciliation accuracy with complete audit trail for every transaction.",
  },
  {
    title: "Scalability Under Load",
    constraint: "Certificate applications spike during specific periods (school admissions, job applications). The system must handle burst traffic without degradation.",
    solution: "Deployed on Vercel with automatic scaling. Managed PostgreSQL with connection pooling (e.g., PgBouncer) and index optimization handles relational query spikes under load.",
    result: "Platform handles traffic spikes seamlessly with sub-second response times under load.",
  },
  {
    title: "Government Workflow Digitisation",
    constraint: "The existing paper-based workflow involved multiple approval layers, physical signatures, and manual verification steps that needed to be faithfully digitised.",
    solution: "Mapped the entire physical workflow to a state-machine model with clear status transitions. Implemented multi-tier approval with Chairman sign-off, automated notifications, and complete audit logging.",
    result: "Processing time reduced from weeks to under 48 hours while maintaining all governance and oversight requirements.",
  },
  {
    title: "Deployment & Reliability",
    constraint: "Government services must maintain high availability. Downtime directly impacts citizens and erodes trust in digital government services.",
    solution: "Containerised the application with Docker for consistent deployments. Implemented health checks, error monitoring, and automated restart policies.",
    result: "99.9% uptime since production deployment with automated recovery from transient failures.",
  },
];
