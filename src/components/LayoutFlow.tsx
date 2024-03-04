import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  NodeTypes,
  Background,
  useReactFlow,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { initialEdges, initialNodes } from '../constant';
import CustomNode from './CustomNode';

const nodeTypes: NodeTypes = { customNode: CustomNode };

const proOptions = { hideAttribution: true }

const getLayoutedElements = (nodes: any, edges: any) => {
  return { nodes, edges };
};

function LayoutFlow() {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onLayout = useCallback(() => {
    const layouted = getLayoutedElements(nodes, edges);

    setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);

    window.requestAnimationFrame(() => {
      fitView();
    });
  }, [nodes, edges]);

  return (
    <ReactFlow
      fitView
      nodes={nodes}
      edges={edges}
      onConnect={onLayout}
      nodeTypes={nodeTypes}
      proOptions={proOptions}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      className="bg-teal-50"
    >
      <Controls />
      <MiniMap />
      <Background gap={12} size={1} />
    </ReactFlow>
  );
}

export default LayoutFlow;