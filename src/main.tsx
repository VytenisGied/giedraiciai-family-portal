
import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/i18n'; // Import i18n initialization FIRST before any components
import App from './App.tsx';
import './index.css';

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
