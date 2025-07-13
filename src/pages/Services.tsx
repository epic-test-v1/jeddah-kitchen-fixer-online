import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOOptimized from "@/components/SEOOptimized";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import { Phone, MessageCircle, CheckCircle, Clock, Users, Star } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Services = () => {
  const handleCallNow = () => {
    window.location.href = "tel:0547815202";
    if (window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: 'services_call_button'
      });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966547815202?text=مرحباً، أريد الاستفسار عن خدمات صيانة مطابخ الألمنيوم في جدة", "_blank");
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'services_whatsapp_button'
      });
    }
  };

  const services = [
    {
      title: "صيانة مطابخ الألمنيوم",
      description: "خدمات صيانة شاملة لمطابخ الألمنيوم في جدة مع ضمان الجودة والمتانة",
      features: ["إصلاح الخدوش", "استبدال القطع التالفة", "تجديد الطلاء", "صيانة دورية"],
      duration: "2-4 ساعات"
    },
    {
      title: "تركيب مطابخ ألمنيوم جديدة",
      description: "تركيب مطابخ ألمنيوم عالية الجودة مع تصميمات عصرية وأسعار منافسة",
      features: ["تصميم مخصص", "مواد عالية الجودة", "تركيب احترافي", "ضمان شامل"],
      duration: "1-3 أيام"
    },
    {
      title: "إصلاح أبواب المطابخ",
      description: "إصلاح وصيانة أبواب مطابخ الألمنيوم مع استبدال المفصلات والأقفال",
      features: ["إصلاح المفصلات", "تبديل الأقفال", "ضبط الأبواب", "تشحيم المتحركات"],
      duration: "1-2 ساعة"
    },
    {
      title: "تجديد وتحديث المطابخ",
      description: "تحديث وتجديد مطابخ الألمنيوم القديمة لتبدو كالجديدة تماماً",
      features: ["إعادة طلاء", "تحديث التصميم", "إضافة ملحقات", "تحسين الوظائف"],
      duration: "1-2 يوم"
    },
    {
      title: "صيانة طاولات الألمنيوم",
      description: "صيانة وإصلاح طاولات المطبخ المصنوعة من الألمنيوم",
      features: ["تقوية الهيكل", "إصلاح السطح", "تنظيف عميق", "حماية من التآكل"],
      duration: "1-2 ساعة"
    },
    {
      title: "خدمات الطوارئ",
      description: "خدمة صيانة طوارئ 24 ساعه لحل المشاكل العاجلة",
      features: ["متاح 24/7", "استجابة سريعة", "حلول فورية", "أسعار عادلة"],
      duration: "فوري"
    }
  ];

  const whyChooseUs = [
    { icon: Star, title: "خبرة 15+ سنة", description: "فريق من الخبراء في صيانة مطابخ الألمنيوم" },
    { icon: CheckCircle, title: "ضمان الجودة", description: "ضمان شامل على جميع أعمال الصيانة" },
    { icon: Clock, title: "سرعة في التنفيذ", description: "إنجاز الأعمال في الوقت المحدد" },
    { icon: Users, title: "فريق محترف", description: "فنيين مدربين ومؤهلين" }
  ];

  return (
    <>
      <SEOOptimized 
        title="خدمات صيانة مطابخ الألمنيوم في جدة - أفضل الأسعار والجودة"
        description="خدمات شاملة لصيانة وتركيب وإصلاح مطابخ الألمنيوم في جدة. فريق محترف، أسعار منافسة، ضمان شامل. اتصل الآن 0547815202"
        keywords="صيانة مطابخ ألمنيوم جدة, تركيب مطابخ ألمنيوم, إصلاح مطابخ, خدمات مطابخ جدة, صيانة ألمنيوم"
        canonical="https://jeddah-aluminum-kitchen.com/services"
      />
      <StructuredData 
        type="Service"
        title="خدمات صيانة مطابخ الألمنيوم في جدة"
        description="خدمات شاملة لصيانة وتركيب وإصلاح مطابخ الألمنيوم في جدة مع ضمان الجودة"
        url="https://jeddah-aluminum-kitchen.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100" dir="rtl">
        <Header />
        
        <main className="pt-20">
          <BreadcrumbSEO 
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "خدماتنا", href: "/services" }
            ]}
          />
          
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                خدمات صيانة مطابخ الألمنيوم في جدة
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                نقدم أفضل خدمات صيانة وتركيب مطابخ الألمنيوم في جدة مع ضمان الجودة وأسعار منافسة. 
                فريق محترف من الفنيين المتخصصين لخدمتكم على مدار الساعة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCallNow}
                  className="btn-professional text-lg px-8 py-3"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل الآن: 0547815202
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline" 
                  className="text-lg px-8 py-3 border-green-500 text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  واتساب
                </Button>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                خدماتنا المتخصصة
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="card-elegant hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">المميزات:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-end items-center">
                        <Badge variant="outline" className="text-gray-600">
                          <Clock className="h-3 w-3 ml-1" />
                          {service.duration}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                لماذا تختارنا؟
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                احصل على استشارة مجانية الآن
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                تواصل معنا للحصول على عرض سعر مجاني وتقييم حالة مطبخك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCallNow}
                  variant="secondary"
                  className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  0547815202
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline" 
                  className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  واتساب
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;