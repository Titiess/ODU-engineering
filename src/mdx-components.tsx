import type { MDXComponents } from "mdx/types";
import React from "react";

function slugify(node: React.ReactNode): string {
  if (!node) return "";
  if (typeof node === "string") {
    return node
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  if (Array.isArray(node)) {
    return node.map(slugify).join("");
  }
  if (typeof node === "object" && React.isValidElement(node)) {
    return slugify((node as React.ReactElement<any>).props.children);
  }
  return "";
}

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => {
      const id = slugify(children);
      return (
        <h1 id={id} className="text-4xl font-bold tracking-tight text-white mb-6 scroll-mt-24">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = slugify(children);
      return (
        <h2 id={id} className="text-2xl font-semibold tracking-tight text-white mt-12 mb-4 scroll-mt-24">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = slugify(children);
      return (
        <h3 id={id} className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          {children}
        </h3>
      );
    },
    p: ({ children }) => (
      <p className="text-base leading-relaxed text-slate-400 mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-slate-400 mb-4 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-slate-400 mb-4 space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-slate-400">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-blue-500 pl-4 italic text-slate-300 my-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-slate-800 text-blue-400 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto my-6">
        {children}
      </pre>
    ),
    strong: ({ children }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="border-slate-800 my-8" />,
  };
}
