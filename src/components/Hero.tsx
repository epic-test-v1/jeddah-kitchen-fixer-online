
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageOptimized from "@/components/ImageOptimized";
import heroKitchen from "@/assets/hero-kitchen.jpg";

interface HeroProps {
  onCallNow: () => void;
  onWhatsApp: () => void;
}

const Hero = ({ onCallNow, onWhatsApp }: HeroProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" itemProp="name">
          أفضل خدمات صيانة مطابخ الألمنيوم في جدة
        </h1>
        <p className="text-xl mb-4 max-w-3xl mx-auto" itemProp="description">
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
        
        <div className="mt-12 max-w-4xl mx-auto">
          <ImageOptimized
            src={heroKitchen}
            alt="مطبخ ألمنيوم حديث في جدة - خدمات صيانة احترافية"
            className="rounded-lg shadow-xl"
            width={800}
            height={450}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
