"use client";

import { useEffect, useState } from "react";
import { Link2 } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

const tableOfContentsItems: TocItem[] = [
  { id: "overview", label: "Project Overview" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "The Solution" },
  { id: "features", label: "Key Features" },
  { id: "workflow", label: "System Flow" },
  { id: "architecture", label: "System Architecture" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "decisions", label: "Decision Log" },
  { id: "challenges", label: "Constraints & Solutions" },
  { id: "lessons", label: "Lessons Learned" },
  { id: "roadmap", label: "Future Roadmap" },
];

interface StickyTOCProps {
  items?: TocItem[];
}

export function StickyTOC({ items = tableOfContentsItems }: StickyTOCProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the first visible entry
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Watch all matching element IDs
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <aside className="hidden xl:block w-64 shrink-0 pr-8 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
      <div className="flex items-center gap-2 mb-6 px-1">
        <Link2 className="w-4 h-4 text-slate-500" />
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400">
          Table of Contents
        </span>
      </div>

      <nav className="space-y-1 border-l border-white/[0.04] py-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`w-full text-left pl-4 py-1.5 text-xs font-medium border-l -ml-[1px] transition-all duration-200 outline-none ${
                isActive
                  ? "border-blue-500 text-white font-semibold"
                  : "border-transparent text-slate-500 hover:text-slate-300"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
