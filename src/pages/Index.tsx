
import { Phone, MapPin, Clock, Star, Wrench, Settings, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      title: "صيانة وإصلاح المطابخ",
      description: "إصلاح جميع أعطال مطابخ الألمنيوم والخشب",
      icon: Wrench
    },
    {
      title: "تركيب مطابخ جديدة",
      description: "تركيب مطابخ الألمنيوم بأحدث التقنيات",
      icon: Settings
    },
    {
      title: "صيانة دورية",
      description: "خدمات الصيانة الدورية للحفاظ على جودة المطبخ",
      icon: CheckCircle
    }
  ];

  const handleCallNow = () => {
    window.location.href = "tel:0547815202";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966547815202?text=مرحباً، أريد الاستفسار عن خدمات صيانة المطابخ", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Settings className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">صيانة مطابخ الألمنيوم</h1>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>جدة - المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            خدمات صيانة مطابخ الألمنيوم الاحترافية
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نقدم خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة بأعلى جودة وأفضل الأسعار
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCallNow}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل الآن: 0547815202
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              variant="outline" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg border-2 border-white"
            >
              واتساب
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">خدماتنا</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">لماذا تختارنا؟</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">جودة عالية</h4>
              <p className="text-gray-600">نستخدم أفضل المواد والأدوات</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">سرعة في الإنجاز</h4>
              <p className="text-gray-600">نلتزم بالمواعيد المحددة</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">ضمان الجودة</h4>
              <p className="text-gray-600">ضمان على جميع أعمالنا</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">خدمة 24/7</h4>
              <p className="text-gray-600">متاحون في أي وقت</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">تواصل معنا</h3>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">احتاج لصيانة مطبخك؟</h3>
          <p className="text-xl mb-8">اتصل بنا الآن واحصل على خدمة سريعة واحترافية</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCallNow}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل الآن
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              variant="outline" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg border-2 border-white"
            >
              تواصل عبر الواتساب
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
            <Settings className="h-6 w-6 text-blue-400" />
            <h4 className="text-xl font-bold">صيانة مطابخ الألمنيوم - جدة</h4>
          </div>
          <p className="text-gray-400 mb-4">خدمات صيانة احترافية لمطابخ الألمنيوم في جدة</p>
          <div className="flex items-center justify-center space-x-4 space-x-reverse">
            <span className="text-green-400 font-bold">0547815202</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">جدة - المملكة العربية السعودية</span>
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
