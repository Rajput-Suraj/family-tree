import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

import LayoutFlow from './components/LayoutFlow';
import './styles.css';

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlowProvider>
        <LayoutFlow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
