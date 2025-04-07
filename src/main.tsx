
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n/i18n';

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}
