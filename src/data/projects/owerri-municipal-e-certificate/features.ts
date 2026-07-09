import type { FeatureItem } from "@/types/content";

export const features: FeatureItem[] = [
  {
    title: "Citizen Authentication",
    description: "Secure account registration and login with JWT-based session management and role-based access control.",
    icon: "Shield",
  },
  {
    title: "Application Workflow",
    description: "Guided multi-step application process with form validation, progress tracking, and draft saving.",
    icon: "FileText",
  },
  {
    title: "Document Upload",
    description: "Secure document upload with file type validation, size limits, and cloud storage integration.",
    icon: "Upload",
  },
  {
    title: "Flutterwave Payments",
    description: "Integrated payment gateway supporting multiple payment methods with automatic receipt generation.",
    icon: "CreditCard",
  },
  {
    title: "Certificate Generation",
    description: "Automated digitally-signed certificate generation with unique serial numbers and tamper-proof design.",
    icon: "Award",
  },
  {
    title: "QR Verification",
    description: "Public verification portal allowing anyone to validate certificate authenticity via QR code scanning.",
    icon: "QrCode",
  },
  {
    title: "Admin Dashboard",
    description: "Comprehensive administrative interface for reviewing applications, managing users, and tracking metrics.",
    icon: "LayoutDashboard",
  },
  {
    title: "Analytics & Reporting",
    description: "Real-time dashboards tracking application volume, payment status, processing times, and system health.",
    icon: "BarChart3",
  },
];
