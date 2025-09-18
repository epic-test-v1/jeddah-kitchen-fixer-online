
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SEOOptimized from "@/components/SEOOptimized";
import StructuredData from "@/components/StructuredData";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Index = () => {
  const handleCallNow = () => {
    window.location.href = "tel:0547815202";
    
    // Track conversion
    if ((window as any).trackPhoneCall) {
      (window as any).trackPhoneCall();
    }
    
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
    
    // Track conversion
    if ((window as any).trackWhatsAppClick) {
      (window as any).trackWhatsAppClick();
    }
    
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'header_whatsapp_button',
        value: 1
      });
    }
  };


  return (
    <>
      <SEOOptimized 
        title="صيانة مطابخ الألمنيوم في جدة - خدمات احترافية | 0547815202"
        description="أفضل خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة. صيانة شاملة، تركيب، وإصلاح جميع أنواع المطابخ بأسعار مناسبة وجودة عالية. اتصل الآن 0547815202 - خدمة 24 ساعة"
        keywords="صيانة مطابخ الألمنيوم جدة، إصلاح مطابخ جدة، تركيب مطابخ الألمنيوم، صيانة مطابخ، مطابخ الألمنيوم جدة"
        canonical="https://www.jeddah-aluminum-kitchen.com/"
        ogImage="https://www.jeddah-aluminum-kitchen.com/og-image.jpg"
        type="website"
      />
      <StructuredData type="LocalBusiness" />
      <div className="min-h-screen bg-background" dir="rtl">
        <Header />
        <Hero onCallNow={handleCallNow} onWhatsApp={handleWhatsApp} />
        <Services />
        <Features />
        <Articles />
        <Contact />
        <CallToAction onCallNow={handleCallNow} onWhatsApp={handleWhatsApp} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
