import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode() {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div style={{ border: '1px solid black' }}>
      <Handle type="target" position={Position.Top} />
      <div>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}

export default CustomNode;
