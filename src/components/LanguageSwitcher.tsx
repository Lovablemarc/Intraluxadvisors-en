
import { useLanguage } from "@/lib/LanguageContext";
import { routes } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex space-x-1 items-center">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 text-sm",
          language === 'en' && "font-semibold text-gold"
        )}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <span className="text-gray-300">|</span>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 text-sm",
          language === 'fr' && "font-semibold text-gold"
        )}
        onClick={() => setLanguage('fr')}
      >
        FR
      </Button>
      <span className="text-gray-300">|</span>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 text-sm",
          language === 'de' && "font-semibold text-gold"
        )}
        onClick={() => setLanguage('de')}
      >
        DE
      </Button>
    </div>
  );
}
