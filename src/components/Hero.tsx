
import { Phone, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroKitchen from "@/assets/hero-kitchen.jpg";

interface HeroProps {
  onCallNow: () => void;
  onWhatsApp: () => void;
}

const Hero = ({ onCallNow, onWhatsApp }: HeroProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroKitchen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" itemProp="name">
          صيانة مطابخ الألمنيوم
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-green-400 font-semibold">
          بجدة - خدمات احترافية
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed" itemProp="description">
          نوفر أفضل خدمات صيانة وإصلاح مطابخ الألمنيوم في جدة
          <br />
          بجودة عالية وأسعار منافسة
        </p>
        
        <div className="mb-8">
          <Button 
            onClick={onCallNow}
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            aria-label="اتصل لطلب خدمة صيانة المطابخ"
          >
            <Phone className="ml-3 h-6 w-6" />
            اتصل الآن: 0547815202
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
          <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">استجابة سريعة</span>
          </div>
          
          <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">جدة وضواحيها</span>
          </div>
          
          <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">خدمة متميزة</span>
          </div>
        </div>
      </div>
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
    </section>
  );
};

export default Hero;
