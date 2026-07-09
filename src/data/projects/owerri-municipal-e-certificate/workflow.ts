import type { WorkflowStep } from "@/types/content";

export const workflow: WorkflowStep[] = [
  { label: "Create Account", description: "Citizen registers with email and personal details" },
  { label: "Submit Application", description: "Fill out Certificate of Origin application form" },
  { label: "Upload Documents", description: "Attach supporting identity and guarantor documents" },
  { label: "Pay Fees", description: "Complete payment via Flutterwave payment gateway" },
  { label: "Admin Review", description: "Council administrators review and verify application" },
  { label: "Chairman Approval", description: "Municipal Chairman provides final approval and signature" },
  { label: "Certificate Generated", description: "Digital certificate with unique serial number is created" },
  { label: "QR Verification", description: "Certificate includes QR code for public authenticity checks" },
  { label: "Download", description: "Citizen downloads their verified digital certificate" },
];
