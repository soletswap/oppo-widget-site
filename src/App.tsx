import React from 'react';
import { JupiterWidget } from './components/JupiterWidget';
import './global.css';

export const App: React.FC = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Jupiter Ultra Demo</h1>
      </header>
      <main>
        <JupiterWidget />
      </main>
      <footer className="app-footer">
        <small>Powered by Jupiter • Demo Scaffold</small>
      </footer>
    </div>
  );
};

export default App;
