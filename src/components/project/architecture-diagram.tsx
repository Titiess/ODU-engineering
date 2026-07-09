"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info, Cpu, Network } from "lucide-react";
import type { ArchitectureNode } from "@/types/content";

interface Props {
  nodes: ArchitectureNode[];
}

const nodePositions: Record<string, { x: number; y: number; group: string; details: string }> = {
  verify: {
    x: 40,
    y: 35,
    group: "Client / Entry",
    details: "Public verification page allowing anyone validation checks of issued hashes.",
  },
  frontend: {
    x: 40,
    y: 115,
    group: "Client / Entry",
    details: "Authenticated citizen application portal built on Next.js.",
  },
  api: {
    x: 200,
    y: 95,
    group: "API Router",
    details: "Stateless JSON router validating inbound headers, origin checks, and payload structures.",
  },
  auth: {
    x: 200,
    y: 20,
    group: "IAM Provider",
    details: "Security gateway verifying user tokens and distributing cookie-scoped claims.",
  },
  backend: {
    x: 360,
    y: 95,
    group: "Business Logic",
    details: "Core Node core service parsing metadata, processing digital file uploads, and coordinating queues.",
  },
  certengine: {
    x: 360,
    y: 20,
    group: "Certificate Gen",
    details: "Engine constructing digital payloads and stamping cryptographic seals.",
  },
  qr: {
    x: 520,
    y: 20,
    group: "Utility",
    details: "Deterministic QR code rendering engine embedding verification target URLs.",
  },
  payment: {
    x: 200,
    y: 170,
    group: "Payments Integration",
    details: "Third-party payment settlement handling dynamic pricing tokens and hooks.",
  },
  storage: {
    x: 520,
    y: 135,
    group: "Object Storage",
    details: "Decoupled binary storage holding raw municipal file uploads.",
  },
  db: {
    x: 520,
    y: 75,
    group: "Data persistence",
    details: "Relational database holding state configurations, applicant profiles, and hashed signatures.",
  },
};

const typeColors: Record<string, { fill: string; stroke: string; text: string; glow: string }> = {
  frontend: {
    fill: "rgba(59,130,246,0.06)",
    stroke: "rgba(59,130,246,0.3)",
    text: "rgba(96,165,250,1)",
    glow: "rgba(59,130,246,0.15)",
  },
  api: {
    fill: "rgba(6,182,212,0.06)",
    stroke: "rgba(6,182,212,0.3)",
    text: "rgba(34,211,238,1)",
    glow: "rgba(6,182,212,0.15)",
  },
  backend: {
    fill: "rgba(16,185,129,0.06)",
    stroke: "rgba(16,185,129,0.3)",
    text: "rgba(52,211,153,1)",
    glow: "rgba(16,185,129,0.15)",
  },
  database: {
    fill: "rgba(245,158,11,0.06)",
    stroke: "rgba(245,158,11,0.3)",
    text: "rgba(251,191,36,1)",
    glow: "rgba(245,158,11,0.15)",
  },
  service: {
    fill: "rgba(139,92,246,0.06)",
    stroke: "rgba(139,92,246,0.3)",
    text: "rgba(167,139,250,1)",
    glow: "rgba(139,92,246,0.15)",
  },
  external: {
    fill: "rgba(236,72,153,0.06)",
    stroke: "rgba(236,72,153,0.25)",
    text: "rgba(244,114,182,1)",
    glow: "rgba(236,72,153,0.12)",
  },
};

const diagramConnections = [
  { from: "frontend", to: "api" },
  { from: "verify", to: "api" },
  { from: "api", to: "auth" },
  { from: "api", to: "backend" },
  { from: "api", to: "payment" },
  { from: "backend", to: "certengine" },
  { from: "certengine", to: "qr" },
  { from: "certengine", to: "db" },
  { from: "backend", to: "db" },
  { from: "backend", to: "storage" },
];

function getNodeCenter(id: string) {
  const pos = nodePositions[id] || { x: 0, y: 0 };
  return { cx: pos.x + 45, cy: pos.y + 16 };
}

export function ArchitectureDiagram({ nodes }: Props) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative px-6 py-20 border-t border-white/[0.04] overflow-hidden" id="architecture">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 justify-center md:justify-start">
            <Network className="w-3.5 h-3.5" />
            System Design viz
          </p>
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Interactive Architecture Diagram
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Hover over any cluster component in the interactive graph below to inspect the service topology mappings and transaction delegation channels.
          </p>
        </div>

        {/* Diagram Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3 glass-card rounded-2xl p-6 relative overflow-hidden bg-slate-950/40">
            <svg
              viewBox="0 0 650 220"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection paths */}
              {diagramConnections.map((conn) => {
                const from = getNodeCenter(conn.from);
                const to = getNodeCenter(conn.to);
                const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;
                const pathId = `conn-${conn.from}-${conn.to}`;

                return (
                  <g key={`${conn.from}-${conn.to}`}>
                    <path
                      d={`M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`}
                      stroke={isHighlighted ? "rgba(96,165,250,0.5)" : "rgba(148,163,184,0.08)"}
                      strokeWidth={isHighlighted ? "1.5" : "1"}
                      className="transition-all duration-300"
                    />
                    {isHighlighted && (
                      <motion.circle
                        r="2.5"
                        fill="#60a5fa"
                        style={{ filter: "drop-shadow(0 0 4px #3b82f6)" }}
                      >
                        <animateMotion dur="2.4s" repeatCount="indefinite">
                          <mpath href={`#${pathId}`} />
                        </animateMotion>
                      </motion.circle>
                    )}
                    <path
                      id={pathId}
                      d={`M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="0"
                    />
                  </g>
                );
              })}

              {/* Node SVGs */}
              {nodes.map((node) => {
                const pos = nodePositions[node.id];
                if (!pos) return null;
                const colors = typeColors[node.type] || typeColors.service;
                const isHovered = hoveredNode === node.id;

                return (
                  <g
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer"
                  >
                    <rect
                      x={pos.x}
                      y={pos.y}
                      width="90"
                      height="32"
                      rx="8"
                      fill={isHovered ? colors.glow : colors.fill}
                      stroke={isHovered ? "rgba(96, 165, 250, 0.7)" : colors.stroke}
                      strokeWidth="1"
                      className="transition-all duration-300"
                    />
                    <text
                      x={pos.x + 45}
                      y={pos.y + 19}
                      textAnchor="middle"
                      fill={isHovered ? "#ffffff" : colors.text}
                      fontSize="8"
                      fontFamily="var(--font-geist-mono), monospace"
                      fontWeight="600"
                      className="transition-colors duration-300"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Node Metadata Cards (dynamic inspector) */}
          <div className="lg:col-span-1 border border-white/[0.04] bg-white/[0.01] rounded-2xl p-5 h-full min-h-[180px] flex flex-col justify-between transition-all duration-300">
            {hoveredNode ? (
              <div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-semibold font-mono uppercase tracking-wider text-blue-400 mb-4">
                  {nodePositions[hoveredNode]?.group}
                </span>
                <h4 className="text-sm font-bold text-white mb-2 font-mono">
                  {nodes.find((n) => n.id === hoveredNode)?.label}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {nodePositions[hoveredNode]?.details}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-10 opacity-60">
                <Info className="w-6 h-6 text-slate-500 mb-3" />
                <h4 className="text-xs font-semibold text-slate-300 mb-1">
                  Inspector Console
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed max-w-[160px]">
                  Roll cursor over nodes mapping coordinates to unpack integration parameters.
                </p>
              </div>
            )}

            {hoveredNode && (
              <div className="flex items-center gap-1 text-[10px] text-blue-400/80 font-mono mt-4">
                <Cpu className="w-3.5 h-3.5" />
                Active Node: Node ID = {hoveredNode}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
