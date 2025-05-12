
import { useLanguage } from "@/lib/LanguageContext";

export default function StructuredData() {
  const { language } = useLanguage();
  
  // Schema data based on selected language
  const schemas = {
    en: {
      name: "IntraLux Advisors",
      description: "Fast, reliable Intrastat compliance for your intra-EU trade. Expert services for Luxembourg businesses.",
      url: "https://intraluxadvisors.com/en",
    },
    fr: {
      name: "IntraLux Advisors",
      description: "Conformité Intrastat rapide et fiable pour vos échanges intra-UE. Services experts pour entreprises luxembourgeoises.",
      url: "https://intraluxadvisors.com/fr",
    },
    de: {
      name: "IntraLux Advisors",
      description: "Schnelle, zuverlässige Intrastat-Einhaltung für Ihren inner-europäischen Handel. Expertendienstleistungen für luxemburgische Unternehmen.",
      url: "https://intraluxadvisors.com/de",
    },
  };

  const currentSchema = schemas[language];
  
  // LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": currentSchema.url,
    "name": currentSchema.name,
    "image": "https://intraluxadvisors.com/images/logo.png",
    "url": currentSchema.url,
    "telephone": "+352 691 486 875",
    "email": "info@intraluxadvisors.com",
    "description": currentSchema.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2A Rue des Capucins",
      "addressLocality": "Ville-Haute",
      "postalCode": "1313",
      "addressCountry": "LU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.6116,
      "longitude": 6.1319
    },
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00"
  };
  
  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Intrastat Compliance Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": currentSchema.name,
      "sameAs": currentSchema.url
    },
    "areaServed": {
      "@type": "Country",
      "name": "Luxembourg"
    },
    "description": currentSchema.description,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": {
        "@type": "Country",
        "name": "Luxembourg"
      }
    }
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  );
}
