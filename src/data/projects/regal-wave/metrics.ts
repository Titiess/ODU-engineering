import type { MetricItem } from "@/types/content";

export const metrics: MetricItem[] = [
  {
    label: "Checkout Flow",
    value: "Secure",
    description: "Multi-tiered ticket purchasing processing powered by Flutterwave redirect integration"
  },
  {
    label: "PDF Ticket Creation",
    value: "Automated",
    description: "Immediate ticket sheet rendering with high-contrast text and QR scanner code"
  },
  {
    label: "Webhook Security",
    value: "HMAC",
    description: "Secure ticket purchase validation via SHA256 hashed signature verifiers"
  },
  {
    label: "Order Lifecycle",
    value: "Dynamic",
    description: "Database states tracking for pending sessions, completed orders, and verified entries"
  }
];
