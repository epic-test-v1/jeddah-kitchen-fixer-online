
import { Settings } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
