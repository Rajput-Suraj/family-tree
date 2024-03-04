import { Node, Edge } from 'reactflow';

export const initialNodes: Node[] = [
  { id: 'node-1', type: 'customNode', position: { x: 165, y: 0 }, data: {} },
  {
    id: 'node-2',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'output',
    position: { x: 200, y: 200 },
    data: { label: 'node 3' },
  },
];

export const initialEdges: Edge[] = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'a' },
];
