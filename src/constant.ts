import { Node, Edge } from 'reactflow';

export const initialNodes: Node[] = [
  { id: 'node-1', type: 'customNode', position: { x: 260, y: 0 }, data: {} },
  { id: 'node-2', type: 'customNode', position: { x: 460, y: 0 }, data: {} },
  {
    id: 'node-3',
    type: 'output',
    position: { x: 200, y: 200 },
    data: { label: 'Child 1' },
  },
  {
    id: 'node-4',
    type: 'output',
    position: { x: 400, y: 200 },
    data: { label: 'Child 2' },
  },
];

export const initialEdges: Edge[] = [
  { id: 'edge-1', source: 'node-1', target: 'node-3', sourceHandle: 'a', type: 'step' },
  { id: 'edge-2', source: 'node-2', target: 'node-3', sourceHandle: 'b', type: 'step' },
  { id: 'edge-3', source: 'node-1', target: 'node-4', sourceHandle: 'a', type: 'step' },
  { id: 'edge-4', source: 'node-2', target: 'node-4', sourceHandle: 'b', type: 'step' },
];
