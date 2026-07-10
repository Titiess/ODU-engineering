import type { DecisionItem } from "@/types/content";

export const decisions: DecisionItem[] = [
  {
    technology: "Zustand over Redux Toolkit",
    rationale: "Selected Zustand as the primary store coordinator because it offers a smaller bundle footprint, zero boilerplate config, and directly returns React hook selectors that trigger quick updates without heavy provider wrappers.",
    alternatives: "Redux Toolkit, Context API",
    tradeoffs: "Context API could trigger massive re-renders on nested nodes, whereas Zustand hooks query specific variables safely. Redux Toolkit was deemed over-engineered for wallet simulations."
  },
  {
    technology: "Next.js Route groups (app/(app)/)",
    rationale: "Grouped layout routes inside (app)/ folders to share sidebar menus, navbar displays, and wallet simulation context without polluting public directory paths.",
    alternatives: "Standard nested layouts",
    tradeoffs: "Route groups can increase complexity in directory navigation, but preserve clean, descriptive URLs."
  },
  {
    technology: "Radix UI Primitives over Material UI / pre-styled component libraries",
    rationale: "Used Radix components because they provide keyboard navigation and ARIA accessibility defaults while allowing absolute style authoring using Tailwind class attributes.",
    alternatives: "Bootstrap, Material UI",
    tradeoffs: "Demands manual writing of styles and structure instead of dropping in pre-styled templates."
  }
];
