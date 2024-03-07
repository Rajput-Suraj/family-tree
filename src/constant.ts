import { Node, Edge } from 'reactflow';

export const initialNodes: Node[] = [
  { id: 'node-1', type: 'customNode', position: { x: 165, y: 0 }, data: {} },
  { id: 'node-2', type: 'customNode', position: { x: 265, y: 0 }, data: {} },
  {
    id: 'node-3',
    type: 'output',
    position: { x: 200, y: 200 },
    data: { label: 'Child' },
  },
];

export const initialEdges: Edge[] = [
  { id: 'edge-1', source: 'node-1', target: 'node-3', sourceHandle: 'a' },
  { id: 'edge-2', source: 'node-2', target: 'node-3', sourceHandle: 'a' },
  { id: 'edge-3', source: 'node-3', target: 'node-4', sourceHandle: 'b' },
];
