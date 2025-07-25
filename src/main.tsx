import React from 'react';
import ReactDOM from 'react-dom/client';
import PhotographyWebsite from './photography-website';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <PhotographyWebsite />
  </React.StrictMode>
);