import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import App from './App';
import './index.css';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,

          style: {
            background: '#FFFFFF',
            color: '#1F2937',
            border: '1px solid #E5E7EB',
            borderRadius: '16px',
          },

          success: {
            style: {
              border: '1px solid #4F6F52',
            },
          },

          error: {
            style: {
              border: '1px solid #DC2626',
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);