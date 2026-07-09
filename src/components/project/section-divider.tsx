"use client";

export function SectionDivider() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-6" aria-hidden="true">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    </div>
  );
}
