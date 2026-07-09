import type { ArchitectureNode } from "@/types/content";

export const architecture: ArchitectureNode[] = [
  { id: "frontend", label: "Next.js Frontend", type: "frontend" },
  { id: "api", label: "REST API Layer", type: "api" },
  { id: "auth", label: "JWT Auth Service", type: "service" },
  { id: "backend", label: "Node.js Backend", type: "backend" },
  { id: "db", label: "PostgreSQL Database", type: "database" },
  { id: "storage", label: "Document Storage", type: "service" },
  { id: "payment", label: "Flutterwave Gateway", type: "external" },
  { id: "certengine", label: "Certificate Engine", type: "service" },
  { id: "qr", label: "QR Generator", type: "service" },
  { id: "verify", label: "Verification Portal", type: "frontend" },
];
