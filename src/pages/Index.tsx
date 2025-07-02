import { Phone, MapPin, Clock, Star, Wrench, Settings, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Index = () => {
  const services = [
    {
      title: "صيانة وإصلاح مطابخ الألمنيوم",
      description: "إصلاح جميع أعطال مطابخ الألمنيوم والخشب بخبرة أكثر من 10 سنوات في جدة",
      icon: Wrench
    },
    {
      title: "تركيب مطابخ الألمنيوم الجديدة",
      description: "تركيب مطابخ الألمنيوم بأحدث التقنيات والتصاميم العصرية في جدة",
      icon: Settings
    },
    {
      title: "الصيانة الدورية والطارئة",
      description: "خدمات الصيانة الدورية والطارئة للحفاظ على جودة مطبخك - متاح 24 ساعة",
      icon: CheckCircle
    }
  ];

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
      {/* Header with improved SEO structure */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Settings className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">صيانة مطابخ الألمنيوم في جدة</h1>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>جدة - المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section with better SEO content */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            أفضل خدمات صيانة مطابخ الألمنيوم في جدة
          </h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            نقدم خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة بأعلى جودة وأفضل الأسعار. 
            خبرة أكثر من 10 سنوات في صيانة وتركيب المطابخ.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            صيانة شاملة • إصلاح فوري • خدمة 24 ساعة • ضمان على جميع الأعمال
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCallNow}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              aria-label="اتصل لطلب خدمة صيانة المطابخ"
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل الآن: 0547815202
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              variant="outline" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg border-2 border-white"
              aria-label="تواصل عبر الواتساب لخدمات صيانة المطابخ"
            >
              تواصل عبر الواتساب
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-16" id="services">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">خدمات صيانة مطابخ الألمنيوم في جدة</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات صيانة وإصلاح مطابخ الألمنيوم لسكان جدة بأسعار تنافسية وجودة عالية
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300" itemScope itemType="https://schema.org/Service">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-800" itemProp="name">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base" itemProp="description">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 bg-white" id="why-choose-us">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">لماذا نحن الأفضل في صيانة مطابخ الألمنيوم بجدة؟</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            اختر الأفضل لصيانة مطبخك - خبرة واحترافية وأسعار مناسبة
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" itemScope itemType="https://schema.org/Thing">
              <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2" itemProp="name">جودة عالية مضمونة</h4>
              <p className="text-gray-600" itemProp="description">نستخدم أفضل المواد والأدوات الأصلية</p>
            </div>
            <div className="text-center" itemScope itemType="https://schema.org/Thing">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2" itemProp="name">سرعة في الإنجاز</h4>
              <p className="text-gray-600" itemProp="description">نلتزم بالمواعيد ونقدم خدمة سريعة</p>
            </div>
            <div className="text-center" itemScope itemType="https://schema.org/Thing">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2" itemProp="name">ضمان شامل</h4>
              <p className="text-gray-600" itemProp="description">ضمان على جميع أعمال الصيانة والإصلاح</p>
            </div>
            <div className="text-center" itemScope itemType="https://schema.org/Thing">
              <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2" itemProp="name">خدمة على مدار الساعة</h4>
              <p className="text-gray-600" itemProp="description">متاحون 24/7 لحالات الطوارئ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-16 bg-gray-50" id="contact" itemScope itemType="https://schema.org/ContactPoint">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">تواصل معنا لصيانة مطبخك</h3>
            <p className="text-center text-gray-600 mb-12">
              اتصل بنا الآن للحصول على استشارة مجانية وعرض سعر لصيانة مطبخك
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">اتصل بنا مباشرة</CardTitle>
                  <CardDescription>نحن هنا لخدمتك في أي وقت</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center space-x-3 space-x-reverse">
                    <Phone className="h-6 w-6 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">0547815202</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">جدة - المملكة العربية السعودية</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-600">متاح 24 ساعة - 7 أيام في الأسبوع</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-800">خدماتنا تشمل</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>صيانة وإصلاح مطابخ الألمنيوم</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>تركيب مطابخ جديدة</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>صيانة الأدراج والخزائن</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>تغيير المفصلات والمقابض</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>صيانة دورية شاملة</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">مطبخك يحتاج صيانة؟ اتصل بالخبراء الآن!</h3>
          <p className="text-xl mb-2">خدمة سريعة • أسعار مناسبة • ضمان شامل</p>
          <p className="text-lg mb-8 opacity-90">نصلك في أي مكان في جدة خلال ساعة واحدة</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCallNow}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل الآن - 0547815202
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              variant="outline" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg border-2 border-white"
            >
              استشارة مجانية عبر الواتساب
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with structured data */}
      <footer className="bg-gray-800 text-white py-8" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
            <Settings className="h-6 w-6 text-blue-400" />
            <h4 className="text-xl font-bold" itemProp="name">صيانة مطابخ الألمنيوم - جدة</h4>
          </div>
          <p className="text-gray-400 mb-4" itemProp="description">
            خدمات صيانة احترافية لمطابخ الألمنيوم في جدة - خبرة أكثر من 10 سنوات
          </p>
          <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
            <span className="text-green-400 font-bold" itemProp="telephone">0547815202</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400" itemProp="address">جدة - المملكة العربية السعودية</span>
          </div>
          <div className="text-sm text-gray-400 mb-4">
            <p>المناطق التي نخدمها: الحمراء، الروضة، النسيم، الصفا، حي السلامة، الخالدية، الشاطئ، البلد</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2024 صيانة مطابخ الألمنيوم جدة. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
