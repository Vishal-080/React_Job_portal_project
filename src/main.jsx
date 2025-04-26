import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback={<p className='text-center text-2xl font-bold'>Something Went Wrong! please reload...</p>}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
