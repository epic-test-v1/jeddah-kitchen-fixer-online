import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: "LocalBusiness" | "Article" | "Service";
  title?: string;
  description?: string;
  url?: string;
}

const StructuredData = ({ 
  type = "LocalBusiness", 
  title = "صيانة مطابخ الألمنيوم جدة",
  description = "خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة بأسعار مناسبة وجودة عالية",
  url = "https://jeddah-aluminum-kitchen.com/"
}: StructuredDataProps) => {
  
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      "name": title,
      "description": description,
      "url": url,
    };

    if (type === "LocalBusiness") {
      return {
        ...baseData,
        "telephone": "+966547815202",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "جدة",
          "addressRegion": "منطقة مكة المكرمة",
          "addressCountry": "SA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 21.485811,
          "longitude": 39.192505
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "areaServed": {
          "@type": "City",
          "name": "جدة"
        },
        "serviceType": "صيانة مطابخ الألمنيوم",
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات صيانة المطابخ",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "صيانة مطابخ الألمنيوم",
                "description": "إصلاح وصيانة شاملة لمطابخ الألمنيوم"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "تركيب مطابخ جديدة",
                "description": "تركيب مطابخ الألمنيوم بأحدث التقنيات"
              }
            }
          ]
        }
      };
    }

    if (type === "Service") {
      return {
        ...baseData,
        "provider": {
          "@type": "LocalBusiness",
          "name": "صيانة مطابخ الألمنيوم جدة",
          "telephone": "+966547815202"
        },
        "areaServed": "جدة",
        "serviceType": "Kitchen Maintenance"
      };
    }

    return baseData;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;