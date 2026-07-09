"use client";

import { motion } from "framer-motion";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "frontend" | "api" | "service" | "database" | "external";
}

interface Connection {
  from: string;
  to: string;
}

const nodes: Node[] = [
  { id: "client", label: "Client", x: 50, y: 30, type: "frontend" },
  { id: "cdn", label: "CDN", x: 180, y: 15, type: "service" },
  { id: "gateway", label: "API Gateway", x: 180, y: 75, type: "api" },
  { id: "auth", label: "Auth", x: 310, y: 25, type: "service" },
  { id: "api", label: "REST API", x: 310, y: 75, type: "api" },
  { id: "queue", label: "Queue", x: 310, y: 130, type: "service" },
  { id: "db", label: "PostgreSQL", x: 440, y: 55, type: "database" },
  { id: "cache", label: "Cache", x: 440, y: 110, type: "service" },
  { id: "storage", label: "Storage", x: 440, y: 160, type: "external" },
];

const connections: Connection[] = [
  { from: "client", to: "cdn" },
  { from: "client", to: "gateway" },
  { from: "gateway", to: "auth" },
  { from: "gateway", to: "api" },
  { from: "api", to: "db" },
  { from: "api", to: "cache" },
  { from: "api", to: "queue" },
  { from: "queue", to: "storage" },
  { from: "auth", to: "db" },
];

const typeColors: Record<string, { fill: string; stroke: string; text: string }> = {
  frontend: { fill: "rgba(59,130,246,0.12)", stroke: "rgba(59,130,246,0.4)", text: "rgba(147,197,253,0.9)" },
  api: { fill: "rgba(6,182,212,0.12)", stroke: "rgba(6,182,212,0.4)", text: "rgba(103,232,249,0.9)" },
  service: { fill: "rgba(139,92,246,0.12)", stroke: "rgba(139,92,246,0.35)", text: "rgba(196,181,253,0.9)" },
  database: { fill: "rgba(245,158,11,0.12)", stroke: "rgba(245,158,11,0.35)", text: "rgba(253,224,71,0.9)" },
  external: { fill: "rgba(16,185,129,0.1)", stroke: "rgba(16,185,129,0.3)", text: "rgba(110,231,183,0.9)" },
};

function getNodeCenter(node: Node) {
  return { cx: node.x + 40, cy: node.y + 16 };
}

export function SystemArchitectureViz() {
  return (
    <div className="relative w-full max-w-[540px] select-none" aria-hidden="true">
      <svg
        viewBox="0 0 530 190"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const fromNode = nodes.find((n) => n.id === conn.from)!;
          const toNode = nodes.find((n) => n.id === conn.to)!;
          const from = getNodeCenter(fromNode);
          const to = getNodeCenter(toNode);

          const midX = (from.cx + to.cx) / 2;

          return (
            <motion.path
              key={`${conn.from}-${conn.to}`}
              d={`M ${from.cx} ${from.cy} C ${midX} ${from.cy}, ${midX} ${to.cy}, ${to.cx} ${to.cy}`}
              stroke="rgba(148,163,184,0.12)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 1.2, delay: 0.8 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.4, delay: 0.8 + i * 0.12 },
              }}
            />
          );
        })}

        {/* Animated data flow dots on connections */}
        {connections.map((conn, i) => {
          const fromNode = nodes.find((n) => n.id === conn.from)!;
          const toNode = nodes.find((n) => n.id === conn.to)!;
          const from = getNodeCenter(fromNode);
          const to = getNodeCenter(toNode);
          const midX = (from.cx + to.cx) / 2;

          const pathId = `path-${conn.from}-${conn.to}`;

          return (
            <g key={`dot-${conn.from}-${conn.to}`}>
              <defs>
                <path
                  id={pathId}
                  d={`M ${from.cx} ${from.cy} C ${midX} ${from.cy}, ${midX} ${to.cy}, ${to.cx} ${to.cy}`}
                />
              </defs>
              <motion.circle
                r="1.5"
                fill="rgba(96,165,250,0.5)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 2 + i * 0.5,
                  ease: "easeInOut",
                }}
              >
                <animateMotion
                  dur={`${3 + i * 0.3}s`}
                  repeatCount="indefinite"
                  begin={`${2 + i * 0.5}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </motion.circle>
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const colors = typeColors[node.type];
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Node background */}
              <rect
                x={node.x}
                y={node.y}
                width="80"
                height="32"
                rx="8"
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth="0.5"
              />
              {/* Pulse ring on certain nodes */}
              {(node.type === "api" || node.type === "database") && (
                <motion.rect
                  x={node.x}
                  y={node.y}
                  width="80"
                  height="32"
                  rx="8"
                  fill="none"
                  stroke={colors.stroke}
                  strokeWidth="0.5"
                  animate={{ opacity: [0.4, 0, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              )}
              {/* Node label */}
              <text
                x={node.x + 40}
                y={node.y + 20}
                textAnchor="middle"
                fill={colors.text}
                fontSize="8"
                fontFamily="var(--font-geist-mono), monospace"
                fontWeight="500"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
