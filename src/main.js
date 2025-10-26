import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Root from './routes/root.tsx';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(BrowserRouter, { basename: '/', children: _jsx(Root, {}) }) }));
