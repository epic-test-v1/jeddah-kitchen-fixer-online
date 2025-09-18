import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: "LocalBusiness" | "Article" | "Service" | "FAQPage" | "Review";
  title?: string;
  description?: string;
  url?: string;
}

const StructuredData = ({ 
  type = "LocalBusiness", 
  title = "صيانة مطابخ الألمنيوم جدة",
  description = "خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة بأسعار مناسبة وجودة عالية",
  url = "https://www.jeddah-aluminum-kitchen.com/"
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
        "alternateName": "صيانة مطابخ جدة",
        "telephone": "+966547815202",
        "email": "info@jeddah-aluminum-kitchen.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "جدة",
          "addressRegion": "منطقة مكة المكرمة",
          "addressCountry": "SA",
          "postalCode": "21421",
          "streetAddress": "جدة، المملكة العربية السعودية"
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
        "paymentAccepted": "Cash, Credit Card",
        "currenciesAccepted": "SAR",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "أحمد محمد"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "خدمة ممتازة وسعر مناسب، أصلحوا مطبخي بسرعة وجودة عالية"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "فاطمة علي"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "فريق محترف وعمل دقيق، أنصح بالتعامل معهم"
          }
        ],
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
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "إصلاح خزائن المطبخ",
                "description": "إصلاح وتجديد خزائن المطبخ"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "صيانة أدراج المطبخ",
                "description": "إصلاح وتجديد أدراج المطبخ"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تغيير مفصلات المطبخ",
                "description": "تغيير وإصلاح مفصلات خزائن المطبخ"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "خدمة الطوارئ 24 ساعة",
                "description": "خدمة إصلاح عاجل على مدار الساعة"
              }
            }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/jeddahkitchenrepair",
          "https://www.instagram.com/jeddahkitchenrepair",
          "https://twitter.com/jeddah_kitchen"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+966547815202",
          "contactType": "customer service",
          "availableLanguage": "Arabic",
          "areaServed": "SA"
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
        "serviceType": "Kitchen Maintenance",
        "serviceOutput": "صيانة وإصلاح مطابخ الألمنيوم"
      };
    }

    if (type === "FAQPage") {
      return {
        ...baseData,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما هي خدمات صيانة مطابخ الألمنيوم التي تقدمونها؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نقدم خدمات شاملة تشمل صيانة مطابخ الألمنيوم، تركيب مطابخ جديدة، إصلاح خزائن المطبخ، صيانة أدراج المطبخ، وتغيير مفصلات المطبخ."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقدمون خدمة 24 ساعة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نقدم خدمة الطوارئ على مدار الساعة لجميع أنواع إصلاحات المطابخ العاجلة."
            }
          },
          {
            "@type": "Question",
            "name": "ما هي المناطق التي تخدمونها في جدة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نخدم جميع مناطق جدة بما في ذلك شمال جدة، جنوب جدة، شرق جدة، غرب جدة، والمناطق المحيطة."
            }
          },
          {
            "@type": "Question",
            "name": "كم تستغرق عملية إصلاح المطبخ؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تختلف مدة الإصلاح حسب نوع المشكلة، لكن معظم الإصلاحات تتم في نفس اليوم أو خلال 24 ساعة."
            }
          },
          {
            "@type": "Question",
            "name": "هل أسعاركم مناسبة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نقدم أسعار مناسبة وشفافة مع ضمان الجودة العالية في جميع خدماتنا."
            }
          }
        ]
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