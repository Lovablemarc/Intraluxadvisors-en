
import { useLanguage } from "@/lib/LanguageContext";
import { routes } from "@/lib/translations";
import { Helmet } from "react-helmet";

interface SEOProps {
  baseUrl?: string;
}

export default function SEOHelmet({ baseUrl = "https://intraluxadvisors.com" }: SEOProps) {
  const { language } = useLanguage();

  // Define metadata per language
  const metadata = {
    en: {
      title: "IntraLux Advisors | Intrastat Services Luxembourg",
      description: "Fast, reliable Intrastat compliance for your intra-EU trade. Expert services for Luxembourg businesses.",
    },
    fr: {
      title: "IntraLux Advisors | Services Intrastat Luxembourg",
      description: "Conformité Intrastat rapide et fiable pour vos échanges intra-UE. Services experts pour entreprises luxembourgeoises.",
    },
    de: {
      title: "IntraLux Advisors | Intrastat-Dienstleistungen Luxemburg",
      description: "Schnelle, zuverlässige Intrastat-Einhaltung für Ihren inner-europäischen Handel. Expertendienstleistungen für luxemburgische Unternehmen.",
    },
  };

  const currentMeta = metadata[language];

  return (
    <Helmet>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${routes[language]}`} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentMeta.title} />
      <meta name="twitter:description" content={currentMeta.description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      
      {/* Canonical and hreflang tags */}
      <link rel="canonical" href={`${baseUrl}${routes[language]}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${routes.en}`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}${routes.fr}`} />
      <link rel="alternate" hrefLang="de" href={`${baseUrl}${routes.de}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${routes.en}`} />
    </Helmet>
  );
}
