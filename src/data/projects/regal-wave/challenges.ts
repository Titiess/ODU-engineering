import type { ChallengeItem } from "@/types/content";

export const challenges: ChallengeItem[] = [
  {
    title: "Webhook Verification Security",
    constraint: "Ensuring ticket provisioning happens only after a verified payment notification, protecting against fraudulent request fabrication.",
    solution: "Implemented Express middleware validating Flutterwave's HMAC SHA256 header hash. Verified signature authenticity locally before processing transaction details.",
    result: "Secured provisioning engine from external mockup payloads or post request injection."
  },
  {
    title: "Transactional Concurrency & Webhook Idempotency",
    constraint: "Avoiding duplicate ticket provisioning when Webhook event triggers multiple times due to retry policies.",
    solution: "Recorded transaction transaction/payment reference as a unique identifier. Configured Drizzle ORM transaction lock that fails when database index reports key collision.",
    result: "Guaranteed exactly-once ticket issuing per successful gateway event."
  },
  {
    title: "Server-Side PDF Buffer Generation",
    constraint: "Generating visually structured PDF sheets asynchronously without storing large arrays on local disk storage.",
    solution: "Leveraged PDFKit package to compile buffer streams directly in memory. Loaded dynamic barcode data into memory streams and piped directly to response endpoints.",
    result: "Fast response streams with zero static server disk writing overhead."
  }
];
