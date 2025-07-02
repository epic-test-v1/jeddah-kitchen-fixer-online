
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onCallNow: () => void;
  onWhatsApp: () => void;
}

const Hero = ({ onCallNow, onWhatsApp }: HeroProps) => {
  return (
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
            onClick={onCallNow}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            aria-label="اتصل لطلب خدمة صيانة المطابخ"
          >
            <Phone className="ml-2 h-5 w-5" />
            اتصل الآن: 0547815202
          </Button>
          <Button 
            onClick={onWhatsApp}
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
  );
};

export default Hero;
