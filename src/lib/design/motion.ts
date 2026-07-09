export const motion = {
  spring: {
    gentle: { type: "spring" as const, stiffness: 120, damping: 14 },
    snappy: { type: "spring" as const, stiffness: 300, damping: 25 },
  },
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    pageTransition: 0.8,
  },
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.4, 0, 0.2, 1] as const,
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;
