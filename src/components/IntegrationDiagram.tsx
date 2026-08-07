import { platforms } from '@/content/site'
import { LogoMark } from './Logo'

/**
 * Six platforms wired into one core.
 *
 * Nodes sit on a hexagon around an ink-filled hub; a dot travels each spoke
 * inward to suggest data resolving into a single system. Paint order matters:
 * spokes, then flow dots, then the pills and hub draw over them with opaque
 * fills, so each dot appears to emerge from a platform and vanish into the core.
 */

const CX = 270
const CY = 235
const CORE_R = 58
const ORBIT = 186

// Hexagon, flat sides left/right — starts at the top and steps 60°.
const ANGLES = [-90, -30, 30, 90, 150, 210]

const nodes = platforms.map((platform, i) => {
  const rad = (ANGLES[i] * Math.PI) / 180
  const x = CX + ORBIT * Math.cos(rad)
  const y = CY + ORBIT * Math.sin(rad)
  const width = platform.name.length * 7.8 + 34
  return { name: platform.name, x, y, width }
})

export default function IntegrationDiagram() {
  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 540 470"
        className="h-auto w-full"
        role="img"
        aria-label={`Diagram: ${platforms
          .map((p) => p.name)
          .join(', ')} all wired into a single system of record.`}
      >
        {/* Spokes */}
        {nodes.map((node) => (
          <line
            key={`spoke-${node.name}`}
            x1={node.x}
            y1={node.y}
            x2={CX}
            y2={CY}
            stroke="var(--line-strong)"
            strokeWidth={1.25}
          />
        ))}

        {/* Orbit guide */}
        <circle
          cx={CX}
          cy={CY}
          r={ORBIT}
          fill="none"
          stroke="var(--rust)"
          strokeOpacity={0.16}
          strokeDasharray="3 7"
        />

        {/* Flow dots — hidden under the pills and hub at each end of the run */}
        {nodes.map((node, i) => (
          <circle
            key={`flow-${node.name}`}
            className="flow-dot"
            r={3.6}
            fill="var(--rust)"
            cx={node.x}
            cy={node.y}
          >
            <animate
              attributeName="cx"
              from={node.x}
              to={CX}
              dur="2.8s"
              begin={`${i * 0.46}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from={node.y}
              to={CY}
              dur="2.8s"
              begin={`${i * 0.46}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Platform pills */}
        {nodes.map((node) => (
          <g key={`pill-${node.name}`}>
            <rect
              x={node.x - node.width / 2}
              y={node.y - 19}
              width={node.width}
              height={38}
              rx={19}
              fill="var(--paper)"
              stroke="var(--line-strong)"
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="var(--graphite)"
              fontSize={14}
              fontWeight={500}
              fontFamily="var(--font-sans)"
            >
              {node.name}
            </text>
          </g>
        ))}

        {/* Core */}
        <circle
          cx={CX}
          cy={CY}
          r={CORE_R + 11}
          fill="none"
          stroke="var(--rust)"
          strokeOpacity={0.24}
        />
        <circle cx={CX} cy={CY} r={CORE_R} fill="var(--ink)" />
        <g transform={`translate(${CX - 27}, ${CY - 27})`}>
          <LogoMark size={54} nodeFill="var(--ink)" className="text-[var(--ember)]" />
        </g>
      </svg>

      <figcaption className="mt-2 text-center text-[14px] text-[var(--steel)]">
        Six platforms. One system that answers the same way every time.
      </figcaption>
    </figure>
  )
}
