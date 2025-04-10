import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

// Root elementni topish va render qilish
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element topilmadi')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)