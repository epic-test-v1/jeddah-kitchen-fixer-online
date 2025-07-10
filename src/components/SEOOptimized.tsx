import { Helmet } from "react-helmet-async";

interface SEOOptimizedProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOOptimized = ({
  title = "صيانة مطابخ الألمنيوم في جدة - خدمات احترافية | 0547815202",
  description = "أفضل خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة. صيانة شاملة، تركيب، وإصلاح جميع أنواع المطابخ بأسعار مناسبة وجودة عالية. اتصل الآن 0547815202 - خدمة 24 ساعة",
  keywords = "صيانة مطابخ الألمنيوم جدة، إصلاح مطابخ جدة، تركيب مطابخ الألمنيوم، صيانة مطابخ، مطابخ الألمنيوم جدة، نجار مطابخ جدة، إصلاح خزائن المطبخ، صيانة أدراج المطبخ، تغيير مفصلات المطبخ، صيانة مطابخ 24 ساعة جدة",
  canonical = "https://jeddah-aluminum-kitchen.com/",
  ogImage = "https://jeddah-aluminum-kitchen.com/og-image.jpg"
}: SEOOptimizedProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:site_name" content="صيانة مطابخ الألمنيوم جدة" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="صيانة مطابخ الألمنيوم جدة" />
      <meta name="language" content="Arabic" />
      <meta name="geo.region" content="SA-02" />
      <meta name="geo.placename" content="جدة" />
      <meta name="geo.position" content="21.485811;39.192505" />
      <meta name="ICBM" content="21.485811, 39.192505" />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Helmet>
  );
};

export default SEOOptimized;