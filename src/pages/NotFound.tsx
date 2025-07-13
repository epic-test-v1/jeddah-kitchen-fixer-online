import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const handleCallNow = () => {
    window.location.href = "tel:0547815202";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4" dir="rtl">
      <Card className="max-w-2xl w-full text-center">
        <CardHeader>
          <div className="mx-auto mb-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-blue-600 font-bold">404</span>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
            الصفحة غير موجودة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600 text-lg">
            عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون حُذفت أو نُقلت إلى موقع آخر.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              هل تحتاج لخدمات صيانة مطابخ الألمنيوم؟
            </h3>
            <p className="text-gray-600 mb-4">
              نحن متاحون 24 ساعة لتقديم أفضل خدمات الصيانة في جدة
            </p>
            <Button 
              onClick={handleCallNow}
              className="bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              <Phone className="ml-2 h-5 w-5" />
              اتصل الآن: 0547815202
            </Button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">روابط مفيدة:</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Link to="/services" className="text-blue-600 hover:text-blue-700">خدماتنا</Link>
              <Link to="/contact" className="text-blue-600 hover:text-blue-700">تواصل معنا</Link>
              <Link to="/articles" className="text-blue-600 hover:text-blue-700">المقالات</Link>
              <Link to="/about" className="text-blue-600 hover:text-blue-700">من نحن</Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Home className="ml-2 h-4 w-4" />
                العودة للصفحة الرئيسية
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
