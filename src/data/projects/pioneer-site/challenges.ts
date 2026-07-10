import type { ChallengeItem } from "@/types/content";

export const challenges: ChallengeItem[] = [
  {
    title: "Lightweight Router Choice for Static Production site",
    constraint: "Providing clean multi-page transition paths without introducing the bundle overhead of React Router.",
    solution: "Selected Wouter as a tiny routing proxy, mapping page urls to clean React hooks using custom `<Route>` nodes.",
    result: "Reduced production JavaScript bundles by over 20-30KB while preserving custom history tracking."
  },
  {
    title: "Client-Side Loan Form Validation UX",
    constraint: "Validating complex forms with multiple inputs (personal data, loan options, contacts) without forcing server API round-trips.",
    solution: "Bound Zod schemas with React Hook Form to trigger validation errors immediately on field transition (blur event).",
    result: "Frictionless form experience where users receive clear validation comments before submission."
  }
];
