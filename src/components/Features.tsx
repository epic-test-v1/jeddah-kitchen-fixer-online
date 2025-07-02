
import { Star, Clock, CheckCircle, Phone } from "lucide-react";

const Features = () => {
  return (
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
  );
};

export default Features;
