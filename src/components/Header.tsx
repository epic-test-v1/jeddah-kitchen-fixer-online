
import { MapPin, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Settings className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">صيانة مطابخ الألمنيوم في جدة</h1>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>جدة - المملكة العربية السعودية</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
