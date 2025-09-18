import { Helmet } from "react-helmet-async";

interface SEOOptimizedProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const SEOOptimized = ({
  title = "صيانة مطابخ الألمنيوم في جدة - خدمات احترافية | 0547815202",
  description = "أفضل خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة. صيانة شاملة، تركيب، وإصلاح جميع أنواع المطابخ بأسعار مناسبة وجودة عالية. اتصل الآن 0547815202 - خدمة 24 ساعة",
  keywords = "صيانة مطابخ الألمنيوم جدة، إصلاح مطابخ جدة، تركيب مطابخ الألمنيوم، صيانة مطابخ، مطابخ الألمنيوم جدة، نجار مطابخ جدة، إصلاح خزائن المطبخ، صيانة أدراج المطبخ، تغيير مفصلات المطبخ، صيانة مطابخ 24 ساعة جدة، صيانة مطابخ في جدة، إصلاح مطابخ الألمنيوم، تركيب مطابخ جديدة جدة، صيانة خزائن المطبخ، إصلاح أدراج المطبخ، تغيير مفصلات خزائن المطبخ، صيانة مطابخ فاخرة جدة، إصلاح مطابخ حديثة، تركيب مطابخ مودرن، صيانة مطابخ كلاسيك",
  canonical = "https://www.jeddah-aluminum-kitchen.com/",
  ogImage = "https://www.jeddah-aluminum-kitchen.com/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "صيانة مطابخ الألمنيوم جدة",
  section,
  tags = []
}: SEOOptimizedProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Enhanced Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="Arabic" />
      <meta name="geo.region" content="SA-02" />
      <meta name="geo.placename" content="جدة" />
      <meta name="geo.position" content="21.485811;39.192505" />
      <meta name="ICBM" content="21.485811, 39.192505" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      
      {/* Mobile Optimizations */}
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="صيانة مطابخ الألمنيوم جدة" />
      <meta name="application-name" content="صيانة مطابخ الألمنيوم جدة" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="خدمات صيانة مطابخ الألمنيوم في جدة" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:site_name" content="صيانة مطابخ الألمنيوم جدة" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:image:alt" content="خدمات صيانة مطابخ الألمنيوم في جدة" />
      <meta property="twitter:site" content="@jeddah_kitchen" />
      <meta property="twitter:creator" content="@jeddah_kitchen" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="ar" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      
      {/* Theme and App Icons */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preload" href={ogImage} as="image" />
      
      {/* Additional SEO for Local Business */}
      <meta name="business:contact_data:street_address" content="جدة، المملكة العربية السعودية" />
      <meta name="business:contact_data:locality" content="جدة" />
      <meta name="business:contact_data:region" content="منطقة مكة المكرمة" />
      <meta name="business:contact_data:postal_code" content="21421" />
      <meta name="business:contact_data:country_name" content="المملكة العربية السعودية" />
      <meta name="business:contact_data:phone_number" content="+966547815202" />
      <meta name="business:contact_data:email" content="info@jeddah-aluminum-kitchen.com" />
      <meta name="business:contact_data:website" content="https://www.jeddah-aluminum-kitchen.com" />
      
      {/* Service Area */}
      <meta name="business:service_area:locality" content="جدة" />
      <meta name="business:service_area:region" content="منطقة مكة المكرمة" />
      <meta name="business:service_area:country" content="المملكة العربية السعودية" />
      
      {/* Business Hours */}
      <meta name="business:business_hours:day" content="الأحد" />
      <meta name="business:business_hours:start" content="00:00" />
      <meta name="business:business_hours:end" content="23:59" />
      <meta name="business:business_hours:day" content="الاثنين" />
      <meta name="business:business_hours:start" content="00:00" />
      <meta name="business:business_hours:end" content="23:59" />
      <meta name="business:business_hours:day" content="الثلاثاء" />
      <meta name="business:business_hours:start" content="00:00" />
      <meta name="business:business_hours:end" content="23:59" />
      <meta name="business:business_hours:day" content="الأربعاء" />
      <meta name="business:business_hours:start" content="00:00" />
      <meta name="business:business_hours:end" content="23:59" />
      <meta name="business:business_hours:day" content="الخميس" />
      <meta name="business:business_hours:start" content="00:00" />
      <meta name="business:business_hours:end" content="23:59" />
      <meta name="business:business_hours:day" content="الجمعة" />
      <meta name="business:business_hours:start" content="00:00" />
      <meta name="business:business_hours:end" content="23:59" />
      <meta name="business:business_hours:day" content="السبت" />
      <meta name="business:business_hours:start" content="00:00" />
      <meta name="business:business_hours:end" content="23:59" />
    </Helmet>
  );
};

export default SEOOptimized;