import React from 'react';
import { JupiterWidget } from './components/JupiterWidget';
import './global.css';

export const App: React.FC = () => {
  return (
    <div className="app-shell">
      <main className="main-content">
        <div className="widgets-container">
          <div className="widget-section">
            <JupiterWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
