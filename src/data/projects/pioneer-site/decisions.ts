import type { DecisionItem } from "@/types/content";

export const decisions: DecisionItem[] = [
  {
    technology: "Wouter instead of React Router DOM",
    rationale: "Selected Wouter because it provides the standard React routing hooks (useRoute, Link, Router) in a 1.5KB footprint, which is ideal for simple static marketing sites.",
    alternatives: "React Router, Next.js Static Export",
    tradeoffs: "Wouter lack advanced data-loading routers or nested layout route groups, requiring manual layout wrapping."
  },
  {
    technology: "Component Form validation via React Hook Form and Zod",
    rationale: "Ensured fast render times by avoiding React controlled state updates on every keystroke, declaring refs instead, and running schema checks on blur events.",
    alternatives: "Controlled State validation, Formik",
    tradeoffs: "Increases boilerplate when integrating third-party custom input tags (e.g. Radix selects)."
  }
];
