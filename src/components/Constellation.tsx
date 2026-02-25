"use client";

import { useEffect, useRef, useState } from "react";

interface ConstellationProps {
  className?: string;
}

export default function Constellation({ className = "" }: ConstellationProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Triangle node positions (percentage-based for responsiveness)
  // Top node (Faith), Bottom-left (Technology), Bottom-right (Ventures)
  // Center point for "The Intersection" glow
  const nodes = [
    { id: "faith", label: "Faith", x: 50, y: 12 },
    { id: "technology", label: "Technology", x: 15, y: 78 },
    { id: "ventures", label: "Ventures", x: 85, y: 78 },
  ];

  const center = { x: 50, y: 56 };

  // Lines connecting all three nodes
  const lines = [
    { x1: nodes[0].x, y1: nodes[0].y, x2: nodes[1].x, y2: nodes[1].y },
    { x1: nodes[1].x, y1: nodes[1].y, x2: nodes[2].x, y2: nodes[2].y },
    { x1: nodes[2].x, y1: nodes[2].y, x2: nodes[0].x, y2: nodes[0].y },
  ];

  return (
    <div className={`relative w-full max-w-lg mx-auto ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 100 90"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold glow filter for nodes */}
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle center glow */}
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4a24d" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#c4a24d" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#c4a24d" stopOpacity="0" />
          </radialGradient>

          {/* Small star particles */}
          <filter id="star-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background star particles */}
        {[
          { cx: 8, cy: 25, r: 0.25, delay: 0 },
          { cx: 92, cy: 18, r: 0.2, delay: 0.5 },
          { cx: 30, cy: 5, r: 0.15, delay: 1.2 },
          { cx: 72, cy: 8, r: 0.2, delay: 0.8 },
          { cx: 22, cy: 45, r: 0.15, delay: 1.5 },
          { cx: 78, cy: 42, r: 0.2, delay: 0.3 },
          { cx: 45, cy: 85, r: 0.15, delay: 1.0 },
          { cx: 60, cy: 88, r: 0.2, delay: 0.7 },
          { cx: 5, cy: 65, r: 0.15, delay: 1.8 },
          { cx: 95, cy: 60, r: 0.2, delay: 0.2 },
        ].map((star, i) => (
          <circle
            key={`star-${i}`}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#c4a24d"
            filter="url(#star-glow)"
            className={`transition-opacity duration-1000 ${
              isVisible ? "opacity-40" : "opacity-0"
            }`}
            style={{ transitionDelay: `${1.5 + star.delay}s` }}
          />
        ))}

        {/* Center glow */}
        <circle
          cx={center.x}
          cy={center.y}
          r="18"
          fill="url(#center-glow)"
          className={`transition-opacity duration-[2000ms] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1.2s" }}
        />

        {/* Connecting lines with draw animation */}
        {lines.map((line, i) => {
          const dx = line.x2 - line.x1;
          const dy = line.y2 - line.y1;
          const length = Math.sqrt(dx * dx + dy * dy);

          return (
            <line
              key={`line-${i}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#c4a24d"
              strokeWidth="0.3"
              strokeLinecap="round"
              strokeDasharray={length}
              strokeDashoffset={isVisible ? 0 : length}
              opacity={isVisible ? 0.5 : 0}
              style={{
                transition: `stroke-dashoffset 1.5s ease-out ${0.3 + i * 0.4}s, opacity 0.5s ease-out ${0.3 + i * 0.4}s`,
              }}
            />
          );
        })}

        {/* Lines to center point (subtle) */}
        {nodes.map((node, i) => {
          const dx = center.x - node.x;
          const dy = center.y - node.y;
          const length = Math.sqrt(dx * dx + dy * dy);

          return (
            <line
              key={`center-line-${i}`}
              x1={node.x}
              y1={node.y}
              x2={center.x}
              y2={center.y}
              stroke="#c4a24d"
              strokeWidth="0.15"
              strokeLinecap="round"
              strokeDasharray={length}
              strokeDashoffset={isVisible ? 0 : length}
              opacity={isVisible ? 0.25 : 0}
              style={{
                transition: `stroke-dashoffset 1.2s ease-out ${1.5 + i * 0.2}s, opacity 0.5s ease-out ${1.5 + i * 0.2}s`,
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Outer glow ring */}
            <circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="none"
              stroke="#c4a24d"
              strokeWidth="0.15"
              filter="url(#node-glow)"
              className={`transition-opacity duration-1000 ${
                isVisible ? "opacity-30" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.6 + i * 0.3}s` }}
            />

            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r="1.5"
              fill="#c4a24d"
              filter="url(#node-glow)"
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${0.4 + i * 0.3}s`,
                transform: isVisible ? "scale(1)" : "scale(0)",
                transformOrigin: `${node.x}px ${node.y}px`,
                transformBox: "fill-box",
              }}
            />

            {/* Inner bright dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r="0.5"
              fill="#f5f0e8"
              className={`transition-opacity duration-500 ${
                isVisible ? "opacity-80" : "opacity-0"
              }`}
              style={{ transitionDelay: `${0.8 + i * 0.3}s` }}
            />

            {/* Label */}
            <text
              x={node.x}
              y={node.id === "faith" ? node.y - 5.5 : node.y + 7}
              textAnchor="middle"
              fill="#f5f0e8"
              fontSize="3.2"
              fontFamily="'Playfair Display', Georgia, serif"
              letterSpacing="0.08em"
              className={`transition-opacity duration-700 ${
                isVisible ? "opacity-70" : "opacity-0"
              }`}
              style={{ transitionDelay: `${1.0 + i * 0.3}s` }}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Center intersection dot */}
        <circle
          cx={center.x}
          cy={center.y}
          r="0.8"
          fill="#c4a24d"
          filter="url(#node-glow)"
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-60" : "opacity-0"
          }`}
          style={{ transitionDelay: "2s" }}
        />
      </svg>
    </div>
  );
}
