import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

// Lazy load performance tracking to reduce initial bundle
const initPerformanceTracking = () => {
  import('./lib/performance').then(({ trackWebVitals }) => {
    trackWebVitals();
  });
};

// Initialize performance tracking after component mount
setTimeout(initPerformanceTracking, 100);

// Loading component for Suspense
const LoadingFallback = () => (
  <div className="loading">
    <div>جاري التحميل...</div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </StrictMode>,
)
