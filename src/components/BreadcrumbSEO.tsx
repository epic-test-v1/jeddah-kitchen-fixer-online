import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSEOProps {
  items: BreadcrumbItem[];
}

const BreadcrumbSEO = ({ items }: BreadcrumbSEOProps) => {
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        ...(item.href && { "item": `https://jeddah-aluminum-kitchen.com${item.href}` })
      }))
    };
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      <nav className="flex items-center space-x-1 text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronLeft className="w-4 h-4 mx-1" />}
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-primary transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-gray-800" itemProp="name" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbSEO;