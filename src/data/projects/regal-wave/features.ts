import type { FeatureItem } from "@/types/content";

export const features: FeatureItem[] = [
  {
    title: "Layered Ticketing Tiers",
    description: "Purchase page with dynamically selected VIP and regular entrance credentials.",
    icon: "Layers"
  },
  {
    title: "Secure Flutterwave Gateway",
    description: "Checkout redirect and callback workflow for handling multi-method national and international secure payments.",
    icon: "CreditCard"
  },
  {
    title: "Verified Webhook Handshake",
    description: "Secured callback handler that authenticates transaction details using Express secret header checks.",
    icon: "ShieldCheck"
  },
  {
    title: "Buffer Ticket Engine",
    description: "Server-side PDF rendering utility using PDFKit compiler to write detailed tickets with styling and high contrast layout.",
    icon: "FileText"
  },
  {
    title: "QR Authenticity Check",
    description: "Cryptographically verifiable ID encoded inside a structured QR pattern for scan validation.",
    icon: "BarChart"
  },
  {
    title: "Express Verification Terminal",
    description: "API system endpoint to allow gate admins to verify incoming ticket IDs and mark them as redeemed.",
    icon: "Terminal"
  }
];
