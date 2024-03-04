import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

import 'reactflow/dist/style.css';
import LayoutFlow from './components/LayoutFlow';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlowProvider>
        <LayoutFlow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
