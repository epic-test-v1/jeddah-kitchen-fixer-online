import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbSEOProps {
  items: BreadcrumbItem[];
  currentPage?: string;
}

const BreadcrumbSEO = ({ items, currentPage }: BreadcrumbSEOProps) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href
    }))
  };

  // Add current page if provided
  if (currentPage) {
    breadcrumbData.itemListElement.push({
      "@type": "ListItem",
      "position": items.length + 1,
      "name": currentPage,
      "item": window.location.href
    });
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSEO;