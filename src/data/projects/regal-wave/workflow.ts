import type { WorkflowStep } from "@/types/content";

export const workflow: WorkflowStep[] = [
  {
    label: "Configure Selection",
    description: "User chooses VIP/Regular quantity and enters registration email and name detail."
  },
  {
    label: "Handshake to Gateway",
    description: "App calls backend to register a pending session and redirects user to Flutterwave Checkout."
  },
  {
    label: "Secure Transaction Payment",
    description: "User submits pay credentials on gateway. Flutterwave redirects back to client on success."
  },
  {
    label: "Webhook Event Callback",
    description: "Express listener receives POST event payload, validates HMAC hash, and writes order complete in PostgreSQL."
  },
  {
    label: "Buffer PDF Rendering",
    description: "Server instantiates PDFKit compiler, inserts unique verification details, and returns download stream."
  }
];
