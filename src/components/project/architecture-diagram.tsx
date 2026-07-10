"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Info, Cpu, Network } from "lucide-react";
import type { ArchitectureNode } from "@/types/content";

interface Props {
  nodes: ArchitectureNode[];
}

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

// Layer ordering: nodes flow left-to-right by type
const TYPE_LAYER_ORDER: string[] = ["frontend", "api", "backend", "service", "database", "external"];

interface NodeLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Compute a dynamic grid layout from node list.
 * Groups nodes by type in layer columns, then spaces them evenly.
 */
function computeLayout(nodes: ArchitectureNode[]): {
  positions: Map<string, NodeLayout>;
  connections: { from: string; to: string }[];
  viewBoxWidth: number;
  viewBoxHeight: number;
} {
  const NODE_W = 140;
  const NODE_H = 36;
  const COL_GAP = 40;
  const ROW_GAP = 28;
  const PADDING = 30;

  // Group nodes by type into ordered columns
  const columns: ArchitectureNode[][] = [];
  const typeToCol = new Map<string, number>();

  for (const layerType of TYPE_LAYER_ORDER) {
    const layerNodes = nodes.filter((n) => n.type === layerType);
    if (layerNodes.length > 0) {
      typeToCol.set(layerType, columns.length);
      columns.push(layerNodes);
    }
  }

  // Position each node
  const positions = new Map<string, NodeLayout>();
  let maxRowCount = 0;

  for (let col = 0; col < columns.length; col++) {
    const colNodes = columns[col];
    maxRowCount = Math.max(maxRowCount, colNodes.length);
    for (let row = 0; row < colNodes.length; row++) {
      positions.set(colNodes[row].id, {
        x: PADDING + col * (NODE_W + COL_GAP),
        y: PADDING + row * (NODE_H + ROW_GAP),
        width: NODE_W,
        height: NODE_H,
      });
    }
  }

  // Generate connections: sequential columns connect left-to-right
  const connections: { from: string; to: string }[] = [];
  for (let col = 0; col < columns.length - 1; col++) {
    const currentCol = columns[col];
    const nextCol = columns[col + 1];
    // Connect first node in current column to first node in next column
    if (currentCol.length > 0 && nextCol.length > 0) {
      connections.push({ from: currentCol[0].id, to: nextCol[0].id });
      // If current column has multiple nodes, connect extras to first of next
      for (let i = 1; i < currentCol.length; i++) {
        connections.push({ from: currentCol[i].id, to: nextCol[0].id });
      }
      // If next column has multiple nodes, connect first of current to extras
      for (let i = 1; i < nextCol.length; i++) {
        connections.push({ from: currentCol[0].id, to: nextCol[i].id });
      }
    }
  }

  const viewBoxWidth = PADDING * 2 + columns.length * NODE_W + (columns.length - 1) * COL_GAP;
  const viewBoxHeight = PADDING * 2 + maxRowCount * NODE_H + (maxRowCount - 1) * ROW_GAP;

  return { positions, connections, viewBoxWidth, viewBoxHeight };
}

function getNodeCenter(pos: NodeLayout) {
  return { cx: pos.x + pos.width / 2, cy: pos.y + pos.height / 2 };
}

// Truncate long labels to fit SVG node boxes
function truncateLabel(label: string, maxChars: number = 20): string {
  if (label.length <= maxChars) return label;
  return label.slice(0, maxChars - 1) + "…";
}

export function ArchitectureDiagram({ nodes }: Props) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const { positions, connections, viewBoxWidth, viewBoxHeight } = useMemo(
    () => computeLayout(nodes),
    [nodes]
  );

  return (
    <section className="relative px-6 py-20 border-t border-white/[0.04] overflow-hidden" id="architecture">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 justify-center md:justify-start">
            <Network className="w-3.5 h-3.5" />
            System Design
          </p>
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Interactive Architecture Diagram
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Hover over any component in the interactive graph below to inspect its role and connections.
          </p>
        </div>

        {/* Diagram Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3 glass-card rounded-2xl p-6 relative overflow-hidden bg-slate-950/40">
            <svg
              viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection paths */}
              {connections.map((conn) => {
                const fromPos = positions.get(conn.from);
                const toPos = positions.get(conn.to);
                if (!fromPos || !toPos) return null;
                const from = getNodeCenter(fromPos);
                const to = getNodeCenter(toPos);
                const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;
                const pathId = `conn-${conn.from}-${conn.to}`;

                // Curved path for visual appeal
                const midX = (from.cx + to.cx) / 2;

                return (
                  <g key={`${conn.from}-${conn.to}`}>
                    <path
                      d={`M ${from.cx} ${from.cy} C ${midX} ${from.cy}, ${midX} ${to.cy}, ${to.cx} ${to.cy}`}
                      stroke={isHighlighted ? "rgba(96,165,250,0.5)" : "rgba(148,163,184,0.08)"}
                      strokeWidth={isHighlighted ? "1.5" : "1"}
                      fill="none"
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
                      d={`M ${from.cx} ${from.cy} C ${midX} ${from.cy}, ${midX} ${to.cy}, ${to.cx} ${to.cy}`}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="0"
                    />
                  </g>
                );
              })}

              {/* Node SVGs */}
              {nodes.map((node) => {
                const pos = positions.get(node.id);
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
                      width={pos.width}
                      height={pos.height}
                      rx="8"
                      fill={isHovered ? colors.glow : colors.fill}
                      stroke={isHovered ? "rgba(96, 165, 250, 0.7)" : colors.stroke}
                      strokeWidth="1"
                      className="transition-all duration-300"
                    />
                    <text
                      x={pos.x + pos.width / 2}
                      y={pos.y + pos.height / 2 + 3}
                      textAnchor="middle"
                      fill={isHovered ? "#ffffff" : colors.text}
                      fontSize="9"
                      fontFamily="var(--font-geist-mono), monospace"
                      fontWeight="600"
                      className="transition-colors duration-300 select-none"
                    >
                      {truncateLabel(node.label)}
                    </text>
                    {/* Type badge below text */}
                    <text
                      x={pos.x + pos.width / 2}
                      y={pos.y + pos.height / 2 + 13}
                      textAnchor="middle"
                      fill={isHovered ? "rgba(255,255,255,0.5)" : "rgba(148,163,184,0.3)"}
                      fontSize="6"
                      fontFamily="var(--font-geist-mono), monospace"
                      className="transition-colors duration-300 select-none"
                    >
                      {node.type.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Node Metadata Cards (dynamic inspector) */}
          <div className="lg:col-span-1 border border-white/[0.04] bg-white/[0.01] rounded-2xl p-5 h-full min-h-[180px] flex flex-col justify-between transition-all duration-300">
            {hoveredNode ? (() => {
              const node = nodes.find((n) => n.id === hoveredNode);
              const colors = typeColors[node?.type || "service"] || typeColors.service;
              return (
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-semibold font-mono uppercase tracking-wider mb-4"
                    style={{
                      backgroundColor: colors.fill,
                      borderColor: colors.stroke,
                      color: colors.text,
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    {node?.group || node?.type}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 font-mono">
                    {node?.label}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {node?.details || `${node?.type} component in the system architecture.`}
                  </p>
                </div>
              );
            })() : (
              <div className="flex flex-col items-center justify-center text-center py-10 opacity-60">
                <Info className="w-6 h-6 text-slate-500 mb-3" />
                <h4 className="text-xs font-semibold text-slate-300 mb-1">
                  Inspector Console
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed max-w-[160px]">
                  Hover over nodes to inspect component details and connections.
                </p>
              </div>
            )}

            {hoveredNode && (
              <div className="flex items-center gap-1 text-[10px] text-blue-400/80 font-mono mt-4">
                <Cpu className="w-3.5 h-3.5" />
                Active Node: {hoveredNode}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
