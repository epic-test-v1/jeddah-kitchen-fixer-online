import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOOptimized from "@/components/SEOOptimized";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import { Phone, MessageCircle, MapPin, Clock, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleCallNow = () => {
    window.location.href = "tel:0547815202";
    if (window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: 'contact_page_call_button'
      });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966547815202?text=مرحباً، أريد الاستفسار عن خدمات صيانة مطابخ الألمنيوم في جدة", "_blank");
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'contact_page_whatsapp_button'
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `مرحباً، أريد الاستفسار عن:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
${formData.email ? `البريد الإلكتروني: ${formData.email}` : ''}
نوع الخدمة: ${formData.service}
التفاصيل: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/966547815202?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    if (window.gtag) {
      window.gtag('event', 'form_submission', {
        event_category: 'contact',
        event_label: 'contact_form'
      });
    }

    toast({
      title: "تم إرسال الرسالة",
      description: "سيتم توجيهك إلى واتساب لإكمال المحادثة",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      content: "0547815202",
      action: handleCallNow
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      content: "0547815202",
      action: handleWhatsApp
    },
    {
      icon: MapPin,
      title: "المنطقة",
      content: "جدة، المملكة العربية السعودية",
      action: null
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      content: "24/7 خدمة على مدار الساعة",
      action: null
    }
  ];

  const services = [
    "صيانة مطابخ الألمنيوم",
    "تركيب مطابخ جديدة",
    "إصلاح أبواب المطابخ",
    "تجديد وتحديث المطابخ",
    "صيانة طاولات الألمنيوم",
    "خدمات الطوارئ",
    "استشارة مجانية"
  ];

  return (
    <>
      <SEOOptimized 
        title="تواصل معنا - خدمات صيانة مطابخ الألمنيوم في جدة"
        description="تواصل مع أفضل فريق صيانة مطابخ الألمنيوم في جدة. خدمة 24/7، استشارة مجانية، أسعار منافسة. اتصل الآن 0547815202"
        keywords="تواصل معنا، صيانة مطابخ جدة، رقم صيانة مطابخ، خدمة عملاء، فني مطابخ جدة"
        canonical="https://www.jeddah-aluminum-kitchen.com/contact"
      />
      <StructuredData 
        type="LocalBusiness"
        title="تواصل مع خدمات صيانة مطابخ الألمنيوم في جدة"
        description="معلومات التواصل مع أفضل فريق صيانة مطابخ الألمنيوم في جدة"
        url="https://www.jeddah-aluminum-kitchen.com/contact"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100" dir="rtl">
        <Header />
        
        <main className="pt-20">
          <BreadcrumbSEO 
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "تواصل معنا", href: "/contact" }
            ]}
          />
          
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                تواصل معنا
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا للحصول على أفضل خدمات صيانة مطابخ الألمنيوم في جدة
              </p>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="card-elegant text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {info.content}
                        </p>
                        {info.action && (
                          <Button 
                            onClick={info.action}
                            variant="outline"
                            className="w-full"
                          >
                            تواصل الآن
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Contact Form and Quick Actions */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="card-elegant">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      احصل على عرض سعر مجاني
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الاسم *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم الهاتف *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="05XXXXXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          البريد الإلكتروني (اختياري)
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          نوع الخدمة المطلوبة *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">اختر نوع الخدمة</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          تفاصيل إضافية
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full"
                          placeholder="اكتب تفاصيل المشكلة أو الخدمة المطلوبة..."
                        />
                      </div>

                      <Button type="submit" className="w-full btn-professional text-lg py-3">
                        إرسال الطلب عبر واتساب
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        تواصل سريع
                      </h3>
                      <div className="space-y-4">
                        <Button 
                          onClick={handleCallNow}
                          className="w-full btn-professional text-lg py-3"
                        >
                          <Phone className="ml-2 h-5 w-5" />
                          اتصل الآن: 0547815202
                        </Button>
                        <Button 
                          onClick={handleWhatsApp}
                          variant="outline" 
                          className="w-full text-lg py-3 border-green-500 text-green-600 hover:bg-green-50"
                        >
                          <MessageCircle className="ml-2 h-5 w-5" />
                          واتساب: 0547815202
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        لماذا تختارنا؟
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                          <span>خدمة 24/7 على مدار الساعة</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                          <span>استشارة وتقييم مجاني</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                          <span>ضمان شامل على الأعمال</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                          <span>أسعار منافسة</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                          <span>فريق محترف ومدرب</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                          <span>خبرة 15+ سنة</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant bg-gradient-to-r from-blue-50 to-blue-100">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">
                        خدمة الطوارئ
                      </h3>
                      <p className="text-blue-700 mb-4">
                        متاحون على مدار الساعة لحل مشاكل المطابخ العاجلة
                      </p>
                      <Button 
                        onClick={handleCallNow}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        اتصل للطوارئ
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;