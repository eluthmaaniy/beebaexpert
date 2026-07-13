import { profileImageUrl, telegramLink } from "@/app/lib/data";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Beeba Expert",
  description:
    "Shopify expert helping store owners design, build, and optimize ecommerce stores that convert.",
  url: "https://beebaexpert.com",
  image: profileImageUrl,
  priceRange: "$$",
  areaServed: "Worldwide",
  sameAs: [telegramLink],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
