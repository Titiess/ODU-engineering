import type { WorkflowStep } from "@/types/content";

export const workflow: WorkflowStep[] = [
  {
    label: "Explore Catalog Options",
    description: "Browse micro-loan product cards to review terms, rate percentages, and timelines."
  },
  {
    label: "Check Requirements Checklist",
    description: "Verify eligibility details using interactive checklist guidelines on the eligibility page."
  },
  {
    label: "Fill Cooperative Form",
    description: "Begin application, enter details, and correct highlighted validation errors in real-time."
  },
  {
    label: "Submit Application File",
    description: "Trigger submission, view static loader state, and verify redirect to confirmation page."
  }
];
