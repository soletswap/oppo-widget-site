import React from 'react';
import { JupiterWidget } from './components/JupiterWidget';
import { JupiterTerminal } from './components/JupiterTerminal';
import './global.css';

export const App: React.FC = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Jupiter Ultra Demo</h1>
        <p>Demo custom widget alongside production-ready Jupiter Terminal</p>
      </header>
      <main className="main-content">
        <div className="widgets-container">
          <div className="widget-section">
            <h2>Custom Demo Widget</h2>
            <JupiterWidget />
          </div>
          <div className="widget-section">
            <h2>Jupiter Terminal Embed</h2>
            <JupiterTerminal className="jupiter-terminal" />
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <small>Powered by Jupiter • Demo Scaffold</small>
      </footer>
    </div>
  );
};

export default App;
