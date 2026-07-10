import type { MetricItem } from "@/types/content";

export const metrics: MetricItem[] = [
  {
    label: "Pages",
    value: "8 Pages",
    description: "Modular sections outlining loan products, eligibility guidelines, FAQ, and contact parameters"
  },
  {
    label: "Routing Footprint",
    value: "Minimal",
    description: "Client-side routing engine using lightweight Wouter library to cut bundle cost"
  },
  {
    label: "Form UI Validation",
    value: "Zod",
    description: "Strict field assertions matching numeric constraints, mobile phone lengths, and mail forms"
  },
  {
    label: "Accessibility Standards",
    value: "Radix",
    description: "Accessible FAQ blocks and drop menus featuring correct focus handlers"
  }
];
