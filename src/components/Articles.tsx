import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SocialShare from "@/components/SocialShare";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Articles = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "أفضل طرق صيانة مطابخ الألمنيوم",
      summary: "تعرف على أهم النصائح للحفاظ على مطبخك من الألمنيوم وطرق تجنب الأعطال الشائعة",
      date: "2024-01-15",
      readTime: "5 دقائق",
      category: "صيانة",
      slug: "maintenance-tips-aluminum-kitchens"
    },
    {
      id: 2,
      title: "مزايا مطابخ الألمنيوم مقارنة بالخشب",
      summary: "مقارنة شاملة بين مطابخ الألمنيوم والخشب من ناحية التكلفة والمتانة",
      date: "2024-01-10",
      readTime: "7 دقائق",
      category: "معلومات",
      slug: "aluminum-vs-wood-kitchens"
    },
    {
      id: 3,
      title: "كيفية اختيار أفضل تصميم لمطبخ الألمنيوم",
      summary: "دليل شامل لاختيار التصميم المناسب لمطبخك مع أحدث الاتجاهات",
      date: "2024-01-05",
      readTime: "6 دقائق",
      category: "تصميم",
      slug: "choosing-aluminum-kitchen-design"
    }
  ];

  return (
    <section className="py-16 bg-white" id="articles">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            مقالات ونصائح مفيدة
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اكتشف أحدث النصائح والمعلومات حول صيانة وتركيب مطابخ الألمنيوم من خبراء المجال
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 gap-3">
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
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
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

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/articles">
              <Button variant="outline" className="px-8 py-3">
                <BookOpen className="ml-2 h-5 w-5" />
                عرض جميع المقالات
              </Button>
            </Link>
            <SocialShare 
              title="مقالات صيانة مطابخ الألمنيوم في جدة"
              description="اكتشف أحدث النصائح والمعلومات حول صيانة مطابخ الألمنيوم"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;