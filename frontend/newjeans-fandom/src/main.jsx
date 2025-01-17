import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';

// Create a root and render the App component wrapped in StrictMode
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);