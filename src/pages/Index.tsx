
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

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
        event_label: 'header_call_button'
      });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966547815202?text=مرحباً، أريد الاستفسار عن خدمات صيانة مطابخ الألمنيوم في جدة", "_blank");
    // Track WhatsApp click for analytics
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'header_whatsapp_button'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100" dir="rtl">
      <Header />
      <Hero onCallNow={handleCallNow} onWhatsApp={handleWhatsApp} />
      <Services />
      <Features />
      <Contact />
      <CallToAction onCallNow={handleCallNow} onWhatsApp={handleWhatsApp} />
      <Footer />
    </div>
  );
};

export default Index;
