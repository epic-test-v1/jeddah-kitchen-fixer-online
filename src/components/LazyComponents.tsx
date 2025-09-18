import { lazy } from 'react';

// Lazy load non-critical components to improve initial page load
export const LazyHero = lazy(() => import('./Hero'));
export const LazyFeatures = lazy(() => import('./Features'));
export const LazyServices = lazy(() => import('./Services'));
export const LazyCallToAction = lazy(() => import('./CallToAction'));
export const LazyContact = lazy(() => import('./Contact'));
export const LazyFooter = lazy(() => import('./Footer'));
export const LazyArticles = lazy(() => import('./Articles'));

// Performance optimizer component
export const LazyPerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));