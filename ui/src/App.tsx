import React from 'react';
import { MCPChat } from './components/MCPChat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Katalon Knowledge Assistant</h1>
      </header>
      <main>
        <MCPChat />
      </main>
    </div>
  );
}

export default App;
