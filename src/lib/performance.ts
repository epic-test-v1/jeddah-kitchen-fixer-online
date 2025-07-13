// CDN Resources for improved performance
export const CDN_RESOURCES = {
  // Font Awesome for social icons
  fontAwesome: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  
  // Performance optimized external resources
  googleFonts: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  
  // AddThis for social sharing
  addThis: 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f8d8e0e6b4c1234',
  
  // JSON-LD for structured data
  structuredData: 'https://schema.org',
  
  // Performance monitoring
  webVitals: 'https://unpkg.com/web-vitals@2/dist/web-vitals.js'
};

// SPF Record information for domain setup
export const SPF_RECORD = {
  type: 'TXT',
  name: '@',
  value: 'v=spf1 include:_spf.google.com include:mailgun.org ~all',
  ttl: 3600
};

// Performance monitoring utility
export const trackWebVitals = () => {
  if (typeof window !== 'undefined') {
    import('web-vitals').then((vitals) => {
      vitals.onCLS(console.log);
      vitals.onINP ? vitals.onINP(console.log) : console.log('INP not available');
      vitals.onFCP(console.log);
      vitals.onLCP(console.log);
      vitals.onTTFB(console.log);
    });
  }
};

// Social media meta tags generator
export const generateSocialMeta = (page: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) => {
  return {
    'og:title': page.title,
    'og:description': page.description,
    'og:url': page.url,
    'og:image': page.image || '/og-image.jpg',
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': page.title,
    'twitter:description': page.description,
    'twitter:image': page.image || '/og-image.jpg'
  };
};