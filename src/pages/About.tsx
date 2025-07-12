import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOOptimized from "@/components/SEOOptimized";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import { Phone, MessageCircle, Users, Award, Clock, CheckCircle, Star, Shield, Target, Heart } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const About = () => {
  const handleCallNow = () => {
    window.location.href = "tel:0547815202";
    if (window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: 'about_page_call_button'
      });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/966547815202?text=مرحباً، أريد الاستفسار عن خدمات صيانة مطابخ الألمنيوم في جدة", "_blank");
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'about_page_whatsapp_button'
      });
    }
  };

  const stats = [
    { icon: Users, number: "500+", label: "عميل راضي" },
    { icon: Award, number: "15+", label: "سنة خبرة" },
    { icon: CheckCircle, number: "1000+", label: "مشروع مكتمل" },
    { icon: Clock, number: "24/7", label: "خدمة متاحة" }
  ];

  const values = [
    {
      icon: Shield,
      title: "الجودة والثقة",
      description: "نلتزم بأعلى معايير الجودة في جميع أعمالنا مع ضمان شامل على الخدمات"
    },
    {
      icon: Target,
      title: "الدقة في المواعيد",
      description: "نحترم وقت عملائنا ونضمن إنجاز الأعمال في الوقت المحدد"
    },
    {
      icon: Heart,
      title: "رضا العملاء",
      description: "رضا عملائنا هو أولويتنا القصوى ونسعى لتقديم خدمة استثنائية"
    },
    {
      icon: Star,
      title: "التميز والإبداع",
      description: "نسعى للتميز في كل عمل نقوم به ونبدع في الحلول المقدمة"
    }
  ];

  const team = [
    {
      name: "أحمد محمد",
      role: "مدير فني أول",
      experience: "15+ سنة خبرة",
      speciality: "تخصص في صيانة وتركيب مطابخ الألمنيوم"
    },
    {
      name: "محمد عبدالله",
      role: "فني صيانة متخصص",
      experience: "12+ سنة خبرة",
      speciality: "خبير في إصلاح وتجديد المطابخ"
    },
    {
      name: "عبدالرحمن أحمد",
      role: "مستشار تصميم",
      experience: "10+ سنة خبرة",
      speciality: "تصميم وتخطيط مطابخ عصرية"
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: "بداية الرحلة",
      description: "تأسيس الشركة بفكرة تقديم أفضل خدمات صيانة مطابخ الألمنيوم في جدة"
    },
    {
      year: "2015",
      title: "توسيع الخدمات",
      description: "إضافة خدمات التركيب والتجديد مع توسيع فريق العمل"
    },
    {
      year: "2020",
      title: "التطوير التقني",
      description: "اعتماد أحدث التقنيات والأدوات في صيانة مطابخ الألمنيوم"
    },
    {
      year: "2025",
      title: "القيادة في السوق",
      description: "أصبحنا الخيار الأول لعملاء جدة في صيانة مطابخ الألمنيوم"
    }
  ];

  return (
    <>
      <SEOOptimized 
        title="من نحن - أفضل شركة صيانة مطابخ الألمنيوم في جدة"
        description="تعرف على فريق خبراء صيانة مطابخ الألمنيوم في جدة. خبرة 15+ سنة، فريق محترف، ضمان شامل. نقدم أفضل خدمات الصيانة والتركيب في جدة"
        keywords="من نحن، شركة صيانة مطابخ جدة، فريق متخصص، خبرة صيانة مطابخ، أفضل فنيين مطابخ جدة"
        canonical="https://jeddah-aluminum-kitchen.com/about"
      />
      <StructuredData 
        type="LocalBusiness"
        title="من نحن - شركة صيانة مطابخ الألمنيوم في جدة"
        description="معلومات عن أفضل شركة صيانة مطابخ الألمنيوم في جدة وفريق العمل المتخصص"
        url="https://jeddah-aluminum-kitchen.com/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100" dir="rtl">
        <Header />
        
        <main className="pt-20">
          <BreadcrumbSEO 
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "من نحن", href: "/about" }
            ]}
          />
          
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                من نحن
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                نحن فريق متخصص في صيانة وتركيب مطابخ الألمنيوم في جدة منذ أكثر من 15 عامًا. 
                نقدم خدمات احترافية بأعلى معايير الجودة وأسعار منافسة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCallNow}
                  className="btn-professional text-lg px-8 py-3"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  تواصل معنا: 0547815202
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline" 
                  className="text-lg px-8 py-3 border-green-500 text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  واتساب
                </Button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-10 w-10 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-800 mb-2">
                        {stat.number}
                      </div>
                      <p className="text-gray-600 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* About Content */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    قصتنا
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    بدأنا رحلتنا في عام 2009 بهدف تقديم أفضل خدمات صيانة مطابخ الألمنيوم في جدة. 
                    على مر السنين، نجحنا في بناء سمعة قوية وثقة عملائنا من خلال الالتزام بالجودة والمهنية.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    اليوم، نفخر بكوننا الخيار الأول لمئات العملاء في جدة لجميع احتياجات صيانة وتركيب مطابخ الألمنيوم. 
                    فريقنا المتخصص يضم نخبة من الفنيين المهرة والمدربين على أحدث التقنيات.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span className="text-gray-700">خبرة 15+ سنة</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span className="text-gray-700">فريق محترف</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span className="text-gray-700">ضمان شامل</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      <span className="text-gray-700">خدمة 24/7</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Card className="card-elegant">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        رؤيتنا
                      </h3>
                      <p className="text-gray-600 mb-6">
                        أن نكون الشركة الرائدة في مجال صيانة مطابخ الألمنيوم في المملكة العربية السعودية، 
                        نقدم خدمات متميزة تفوق توقعات عملائنا.
                      </p>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        مهمتنا
                      </h3>
                      <p className="text-gray-600">
                        تقديم خدمات صيانة وتركيب مطابخ الألمنيوم بأعلى معايير الجودة والمهنية، 
                        مع الالتزام بالمواعيد وتقديم أسعار منافسة تناسب جميع العملاء.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                قيمنا ومبادئنا
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="card-elegant text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                فريق العمل
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="card-elegant text-center">
                    <CardContent className="p-6">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-12 w-12 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 mb-2">
                        {member.experience}
                      </p>
                      <p className="text-sm text-gray-500">
                        {member.speciality}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                مسيرتنا عبر السنين
              </h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.year}
                    </div>
                    <Card className="card-elegant flex-1">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                انضم إلى عملائنا الراضين
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                اكتشف لماذا يثق المئات من العملاء في جدة بخدماتنا. تواصل معنا اليوم واحصل على استشارة مجانية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleCallNow}
                  variant="secondary"
                  className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  0547815202
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline" 
                  className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  واتساب
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;