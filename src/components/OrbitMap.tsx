export interface OrbitNode {
  label: string;
}

interface OrbitMapProps {
  coreLabel: string;
  nodes: OrbitNode[];
}

/**
 * Renders the "orbit" visual: a central core surrounded by floating
 * labelled pills. Positioning is handled entirely by the existing
 * `.orbit`, `.core` and `.orbit span` CSS rules (nth-child based).
 */
export default function OrbitMap({ coreLabel, nodes }: OrbitMapProps) {
  return (
    <div className="orbit">
      <div className="core">{coreLabel}</div>
      {nodes.map((node) => (
        <span key={node.label}>{node.label}</span>
      ))}
    </div>
  );
}