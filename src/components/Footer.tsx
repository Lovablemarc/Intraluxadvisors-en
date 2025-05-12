
import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>{getText("footer_copyright", language)}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">
              {getText("footer_legal", language)}
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              {getText("footer_privacy", language)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
