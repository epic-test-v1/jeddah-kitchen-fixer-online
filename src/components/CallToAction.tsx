
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  onCallNow: () => void;
  onWhatsApp: () => void;
}

const CallToAction = ({ onCallNow, onWhatsApp }: CallToActionProps) => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">مطبخك يحتاج صيانة؟ اتصل بالخبراء الآن!</h3>
        <p className="text-xl mb-2">خدمة سريعة • أسعار مناسبة • ضمان شامل</p>
        <p className="text-lg mb-8 opacity-90">نصلك في أي مكان في جدة خلال ساعة واحدة</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onCallNow}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            <Phone className="ml-2 h-5 w-5" />
            اتصل الآن - 0547815202
          </Button>
          <Button 
            onClick={onWhatsApp}
            size="lg" 
            variant="outline" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg border-2 border-white"
          >
            استشارة مجانية عبر الواتساب
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
