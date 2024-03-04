import { Handle, Position } from 'reactflow';

import UserIcon from '../assets/user.png';

function CustomNode() {

  return (
    <div className='rounded-full border'>
      <div className="nodrag">
        <img className="w-5 h-5" src={UserIcon} alt="User-Icon" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}

export default CustomNode;
