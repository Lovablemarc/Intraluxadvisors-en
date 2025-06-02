import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Link } from "react-router-dom";
import GoldButton from "./GoldButton";

export default function CookieConsent() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // Here you would initialize your analytics and other cookies
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    // Here you would ensure only essential cookies are used
  };

  if (!isVisible) return null;

  const translations = {
    title: {
      en: "Cookie Settings",
      fr: "Paramètres des cookies",
      de: "Cookie-Einstellungen"
    },
    description: {
      en: "We use cookies to enhance your browsing experience and analyze our traffic. By clicking \"Accept All", you consent to our use of cookies.",
      fr: "Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser notre trafic. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies.",
      de: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und unseren Verkehr zu analysieren. Durch Klicken auf „Alle akzeptieren\" stimmen Sie der Verwendung von Cookies zu."
    },
    accept: {
      en: "Accept All",
      fr: "Tout accepter",
      de: "Alle akzeptieren"
    },
    decline: {
      en: "Essential Only",
      fr: "Essentiels uniquement",
      de: "Nur essenzielle"
    },
    privacy: {
      en: "Privacy Policy",
      fr: "Politique de confidentialité",
      de: "Datenschutzerklärung"
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              {translations.title[language]}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              {translations.description[language]}
            </p>
            <Link 
              to="/privacy-policy" 
              className="text-sm text-gold hover:underline"
            >
              {translations.privacy[language]}
            </Link>
          </div>
          <div className="flex gap-3">
            <GoldButton
              variant="outline"
              onClick={handleDecline}
            >
              {translations.decline[language]}
            </GoldButton>
            <GoldButton
              onClick={handleAccept}
            >
              {translations.accept[language]}
            </GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
}