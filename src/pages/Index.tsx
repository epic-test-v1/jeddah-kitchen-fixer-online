
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SEOOptimized from "@/components/SEOOptimized";
import StructuredData from "@/components/StructuredData";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import FAQStructuredData from "@/components/FAQStructuredData";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Index = () => {
  const handleCallNow = () => {
    window.location.href = "tel:0547815202";
    // Track call for analytics
    if (window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: 'header_call_button',
        value: 1
      });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966547815202?text=مرحباً، أريد الاستفسار عن خدمات صيانة مطابخ الألمنيوم في جدة", "_blank");
    // Track WhatsApp click for analytics
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'header_whatsapp_button',
        value: 1
      });
    }
  };

  // FAQ data for structured data
  const faqData = [
    {
      question: "ما هي خدمات صيانة مطابخ الألمنيوم التي تقدمونها؟",
      answer: "نقدم خدمات شاملة تشمل صيانة مطابخ الألمنيوم، تركيب مطابخ جديدة، إصلاح خزائن المطبخ، صيانة أدراج المطبخ، وتغيير مفصلات المطبخ."
    },
    {
      question: "هل تقدمون خدمة 24 ساعة؟",
      answer: "نعم، نقدم خدمة الطوارئ على مدار الساعة لجميع أنواع إصلاحات المطابخ العاجلة."
    },
    {
      question: "ما هي المناطق التي تخدمونها في جدة؟",
      answer: "نخدم جميع مناطق جدة بما في ذلك شمال جدة، جنوب جدة، شرق جدة، غرب جدة، والمناطق المحيطة."
    },
    {
      question: "كم تستغرق عملية إصلاح المطبخ؟",
      answer: "تختلف مدة الإصلاح حسب نوع المشكلة، لكن معظم الإصلاحات تتم في نفس اليوم أو خلال 24 ساعة."
    },
    {
      question: "هل أسعاركم مناسبة؟",
      answer: "نعم، نقدم أسعار مناسبة وشفافة مع ضمان الجودة العالية في جميع خدماتنا."
    },
    {
      question: "هل تقدمون ضمان على الأعمال؟",
      answer: "نعم، نقدم ضمان شامل على جميع أعمال الصيانة والتركيب لمدة سنة كاملة."
    },
    {
      question: "ما هي طرق الدفع المقبولة؟",
      answer: "نقبل الدفع النقدي وبطاقات الائتمان، مع إمكانية الدفع بعد إنجاز العمل."
    },
    {
      question: "هل تقدمون خدمة التوصيل؟",
      answer: "نعم، نقدم خدمة التوصيل المجانية لجميع مناطق جدة مع إمكانية الوصول في نفس اليوم."
    }
  ];

  return (
    <>
      <PerformanceOptimizer />
      <SEOOptimized 
        title="صيانة مطابخ الألمنيوم في جدة - خدمات احترافية | 0547815202"
        description="أفضل خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة. صيانة شاملة، تركيب، وإصلاح جميع أنواع المطابخ بأسعار مناسبة وجودة عالية. اتصل الآن 0547815202 - خدمة 24 ساعة"
        keywords="صيانة مطابخ الألمنيوم جدة، إصلاح مطابخ جدة، تركيب مطابخ الألمنيوم، صيانة مطابخ، مطابخ الألمنيوم جدة، نجار مطابخ جدة، إصلاح خزائن المطبخ، صيانة أدراج المطبخ، تغيير مفصلات المطبخ، صيانة مطابخ 24 ساعة جدة، صيانة مطابخ في جدة، إصلاح مطابخ الألمنيوم، تركيب مطابخ جديدة جدة، صيانة خزائن المطبخ، إصلاح أدراج المطبخ، تغيير مفصلات خزائن المطبخ، صيانة مطابخ فاخرة جدة، إصلاح مطابخ حديثة، تركيب مطابخ مودرن، صيانة مطابخ كلاسيك"
        canonical="https://jeddah-aluminum-kitchen.com/"
        ogImage="https://jeddah-aluminum-kitchen.com/og-image.jpg"
        type="website"
        tags={["صيانة مطابخ", "مطابخ الألمنيوم", "جدة", "إصلاح مطابخ", "تركيب مطابخ"]}
      />
      <StructuredData type="LocalBusiness" />
      <FAQStructuredData faqs={faqData} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100" dir="rtl">
        <Header />
        <Hero onCallNow={handleCallNow} onWhatsApp={handleWhatsApp} />
        <Services />
        <Features />
        <Contact />
        <CallToAction onCallNow={handleCallNow} onWhatsApp={handleWhatsApp} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
