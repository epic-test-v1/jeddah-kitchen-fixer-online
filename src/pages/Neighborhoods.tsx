import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, MapPin, Wrench, Settings, CheckCircle } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadcrumbSEO from '../components/BreadcrumbSEO';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Neighborhoods = () => {
  const handleCallNow = () => {
    window.open('tel:0547815202', '_self');
    if (window.gtag) {
      window.gtag('event', 'call_button_click', {
        event_category: 'engagement',
        event_label: 'phone_call_neighborhoods'
      });
    }
  };

  const handleWhatsApp = () => {
    const message = 'السلام عليكم، أحتاج إلى خدمة صيانة مطابخ الألمنيوم';
    window.open(`https://wa.me/966547815202?text=${encodeURIComponent(message)}`, '_blank');
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'whatsapp_neighborhoods'
      });
    }
  };

  const neighborhoods = [
    'الروضة', 'الصفا', 'النسيم', 'العزيزية', 'السلامة', 'الحمراء', 'الشاطئ', 'المروة',
    'البوادي', 'السامر', 'النهضة', 'أبحر الشمالية', 'أبحر الجنوبية', 'الفيحاء', 'الجامعة',
    'البلد', 'الرحاب', 'البساتين', 'الكندرة', 'الرويس', 'المحمدية', 'النعيم', 'مشرفة',
    'بني مالك', 'الثغر', 'الشرفية', 'الحرازات', 'الخالدية', 'الهنداوية', 'الأندلس',
    'الفيصلية', 'الربوة', 'الأمير فواز', 'القرينية', 'الواحة', 'الروابي', 'المنار',
    'الإسكان', 'طيبة', 'قويزة', 'السنابل', 'الرغامة', 'المطار القديم', 'الرحمانية',
    'مدائن الفهد', 'السليمانية', 'الكيلو 14', 'الحرمين', 'الفضيلة', 'الهدى',
    'الأجواد', 'الأمير عبدالمجيد', 'الأمير فواز الجنوبي', 'الأمير فواز الشمالي',
    'الإسكان الجنوبي', 'الإسكان الشمالي', 'البغدادية', 'النخيل', 'الأجاويد',
    'النزلة', 'المنتزهات', 'الورود', 'العدل', 'الفلاح', 'الصالحية', 'القوزين',
    'النزهة', 'الفروسية', 'الربيع', 'الكيلو 10'
  ];

  const services = [
    { icon: Wrench, title: 'صيانة وإصلاح مطابخ الألمنيوم' },
    { icon: Settings, title: 'تركيب مطابخ جديدة' },
    { icon: CheckCircle, title: 'صيانة دورية وطارئة' }
  ];

  return (
    <>
      <Helmet>
        <title>فني مطابخ جدة - خدمات في جميع الأحياء | 0547815202</title>
        <meta name="description" content="فني مطابخ الألمنيوم في جدة - نغطي جميع أحياء جدة بخدمات تركيب وصيانة المطابخ. اتصل الآن 0547815202" />
        <meta name="keywords" content="فني مطابخ جدة, صيانة مطابخ, تركيب مطابخ, مطابخ الألمنيوم, جدة" />
        <link rel="canonical" href="https://www.jeddah-aluminum-kitchen.com/neighborhoods" />
      </Helmet>

      <Header />
      
      <BreadcrumbSEO 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المناطق المخدومة', href: '/neighborhoods' }
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              فني مطابخ جدة - جميع الأحياء
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              نقدم خدمات صيانة وتركيب مطابخ الألمنيوم في جميع أحياء جدة بخبرة أكثر من 10 سنوات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleCallNow}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
              >
                <Phone className="ml-2 h-5 w-5" />
                اتصل الآن: 0547815202
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 text-lg"
              >
                <MessageSquare className="ml-2 h-5 w-5" />
                واتساب
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">خدماتنا المتوفرة</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">المناطق التي نخدمها في جدة</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              نغطي جميع أحياء جدة بخدمات صيانة وتركيب مطابخ الألمنيوم المحترفة
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
              {neighborhoods.map((neighborhood, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-800">حي {neighborhood}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      متوفر 24/7
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Service Description */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">خدماتنا الشاملة في جميع أحياء جدة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-700">تركيب مطابخ الألمنيوم</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• تركيب مطابخ ألمنيوم جديدة</li>
                      <li>• تركيب مطابخ خشبية حديثة</li>
                      <li>• تركيب بمقاسات مخصصة</li>
                      <li>• تصميم حسب المساحة المتاحة</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-700">صيانة وإصلاح</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• إصلاح أبواب ودواليب المطبخ</li>
                      <li>• تعديل المفصلات والأقفال</li>
                      <li>• صيانة دورية وطارئة</li>
                      <li>• تجديد وتحديث المطابخ القديمة</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">للحصول على خدماتنا في أي حي بجدة</h3>
                <p className="text-gray-700 mb-6">
                  متوفرون في جميع أحياء جدة - خدمة سريعة ومضمونة بأسعار تنافسية
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    onClick={handleCallNow}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
                  >
                    <Phone className="ml-2 h-5 w-5" />
                    اتصل الآن: 0547815202
                  </Button>
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  >
                    <MessageSquare className="ml-2 h-5 w-5" />
                    تواصل عبر واتساب
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">لماذا تختارنا؟</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">خبرة أكثر من 10 سنوات</h3>
                  <p className="text-gray-600 text-sm">فريق محترف ومدرب</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">خدمة 24 ساعة</h3>
                  <p className="text-gray-600 text-sm">متاحون في أي وقت</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Settings className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">أسعار تنافسية</h3>
                  <p className="text-gray-600 text-sm">جودة عالية بأسعار مناسبة</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">تغطية شاملة</h3>
                  <p className="text-gray-600 text-sm">جميع أحياء جدة</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Neighborhoods;