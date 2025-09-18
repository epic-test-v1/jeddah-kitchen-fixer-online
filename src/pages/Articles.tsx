import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOOptimized from "@/components/SEOOptimized";
import BreadcrumbSEO from "@/components/BreadcrumbSEO";
import SocialShare from "@/components/SocialShare";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "أفضل طرق صيانة مطابخ الألمنيوم في جدة",
      summary: "تعرف على أهم النصائح للحفاظ على مطبخك من الألمنيوم وطرق تجنب الأعطال الشائعة",
      date: "2024-01-15",
      readTime: "5 دقائق",
      category: "صيانة",
      slug: "maintenance-tips-aluminum-kitchens"
    },
    {
      id: 2,
      title: "مزايا مطابخ الألمنيوم مقارنة بالخشب",
      summary: "مقارنة شاملة بين مطابخ الألمنيوم والخشب من ناحية التكلفة والمتانة والصيانة",
      date: "2024-01-10",
      readTime: "7 دقائق",
      category: "معلومات",
      slug: "aluminum-vs-wood-kitchens"
    },
    {
      id: 3,
      title: "كيفية اختيار أفضل تصميم لمطبخ الألمنيوم",
      summary: "دليل شامل لاختيار التصميم المناسب لمطبخك مع أحدث الاتجاهات في التصميم",
      date: "2024-01-05",
      readTime: "6 دقائق",
      category: "تصميم",
      slug: "choosing-aluminum-kitchen-design"
    },
    {
      id: 4,
      title: "أسباب تلف مطابخ الألمنيوم وطرق تجنبها",
      summary: "تعرف على الأسباب الرئيسية لتلف مطابخ الألمنيوم وكيفية الوقاية منها",
      date: "2023-12-28",
      readTime: "4 دقائق",
      category: "صيانة",
      slug: "aluminum-kitchen-damage-prevention"
    },
    {
      id: 5,
      title: "تكلفة صيانة مطابخ الألمنيوم في جدة 2024",
      summary: "دليل الأسعار المحدث لخدمات صيانة مطابخ الألمنيوم في جدة مع نصائح لتوفير التكاليف",
      date: "2023-12-20",
      readTime: "8 دقائق",
      category: "أسعار",
      slug: "aluminum-kitchen-maintenance-costs-jeddah"
    },
    {
      id: 6,
      title: "نصائح للعناية اليومية بمطبخ الألمنيوم",
      summary: "روتين يومي بسيط للحفاظ على مطبخك من الألمنيوم في أفضل حالة",
      date: "2023-12-15",
      readTime: "3 دقائق",
      category: "العناية",
      slug: "daily-aluminum-kitchen-care"
    }
  ];

  const categories = ["جميع المقالات", "صيانة", "معلومات", "تصميم", "أسعار", "العناية"];

  return (
    <>
      <SEOOptimized 
        title="مقالات ونصائح صيانة مطابخ الألمنيوم في جدة"
        description="مقالات ونصائح مفيدة حول صيانة وتركيب مطابخ الألمنيوم في جدة. تعرف على أفضل الممارسات والحلول للمشاكل الشائعة"
        keywords="مقالات مطابخ ألمنيوم, نصائح صيانة مطابخ, تصميم مطابخ جدة, معلومات مطابخ ألمنيوم"
        canonical="https://www.jeddah-aluminum-kitchen.com/articles"
      />
      
      <div className="min-h-screen bg-background" dir="rtl">
        <Header />
        
        <main className="pt-20">
          <BreadcrumbSEO 
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "المقالات", href: "/articles" }
            ]}
          />
          
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                مقالات ونصائح مطابخ الألمنيوم
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                اكتشف أحدث المقالات والنصائح حول صيانة وتركيب مطابخ الألمنيوم في جدة. 
                معلومات مفيدة من خبراء المجال لمساعدتك في الحفاظ على مطبخك.
              </p>
              
              <div className="flex justify-center">
                <SocialShare 
                  title="مقالات صيانة مطابخ الألمنيوم في جدة"
                  description="اكتشف أحدث النصائح والمعلومات حول صيانة مطابخ الألمنيوم"
                />
              </div>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="pb-8 px-4">
            <div className="container mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <Badge 
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 text-sm hover:bg-blue-50"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-8 px-4 bg-white">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card key={article.id} className="card-elegant hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500 gap-4">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 ml-1" />
                            {new Date(article.date).toLocaleDateString('ar-SA')}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 ml-1" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.summary}
                      </p>
                      
                      <Link 
                        to={`/articles/${article.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                      >
                        اقرأ المزيد
                        <ArrowRight className="h-4 w-4 mr-2" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ابق على اطلاع بأحدث النصائح
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                اشترك في قائمتنا البريدية للحصول على أحدث المقالات والنصائح حول صيانة مطابخ الألمنيوم
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني"
                  className="px-4 py-3 rounded-lg text-gray-800 flex-1"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  اشتراك
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Articles;