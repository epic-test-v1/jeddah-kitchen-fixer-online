
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
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
  );
};

export default Contact;
