
import { Wrench, Settings, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
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

  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">خدمات صيانة مطابخ الألمنيوم في جدة</h2>
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
  );
};

export default Services;
