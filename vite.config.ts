import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  publicDir: 'public',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: mode === 'development',
    
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React chunks
          'react-vendor': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          
          // UI Components chunks
          'radix-ui': [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tooltip'
          ],
          
          // Query and utilities
          'tanstack': ['@tanstack/react-query'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'icons': ['lucide-react'],
          
          // Performance tracking
          'analytics': ['web-vitals', 'react-helmet-async'],
        },
      },
    },
    
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
      },
    },
    
    cssCodeSplit: true,
    
    chunkSizeWarningLimit: 500,
  },
  
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react'
    ],
    exclude: ['web-vitals']
  },
  
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
}));
