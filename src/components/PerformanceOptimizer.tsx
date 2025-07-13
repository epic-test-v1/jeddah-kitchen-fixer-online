import { Helmet } from "react-helmet-async";

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  preloadFonts?: string[];
  dnsPrefetch?: string[];
  preconnect?: string[];
}

const PerformanceOptimizer = ({
  preloadImages = ["/og-image.jpg"],
  preloadFonts = [],
  dnsPrefetch = [
    "//fonts.googleapis.com",
    "//www.google-analytics.com",
    "//www.googletagmanager.com"
  ],
  preconnect = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com"
  ]
}: PerformanceOptimizerProps) => {
  return (
    <Helmet>
      {/* DNS Prefetch */}
      {dnsPrefetch.map((url, index) => (
        <link key={`dns-${index}`} rel="dns-prefetch" href={url} />
      ))}
      
      {/* Preconnect */}
      {preconnect.map((url, index) => (
        <link key={`preconnect-${index}`} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}
      
      {/* Preload Images */}
      {preloadImages.map((image, index) => (
        <link key={`preload-image-${index}`} rel="preload" href={image} as="image" />
      ))}
      
      {/* Preload Fonts */}
      {preloadFonts.map((font, index) => (
        <link key={`preload-font-${index}`} rel="preload" href={font} as="font" crossOrigin="anonymous" />
      ))}
      
      {/* Resource Hints */}
      <link rel="preload" href="/src/main.tsx" as="script" />
      
      {/* Performance Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Critical CSS inline */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
          #root { min-height: 100vh; }
          .loading { display: flex; justify-content: center; align-items: center; height: 100vh; }
        `}
      </style>
    </Helmet>
  );
};

export default PerformanceOptimizer; 