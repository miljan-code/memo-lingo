import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { AuthProvider } from './context/AuthContext';
import { ScoreProvider } from './context/ScoreContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </AuthProvider>
  </React.StrictMode>
);
