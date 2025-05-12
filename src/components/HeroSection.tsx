
import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import GoldButton from "./GoldButton";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-pattern">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/90"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            {getText("hero_title", language)}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700">
            {getText("hero_subtitle", language)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <GoldButton 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {getText("cta_quote", language)}
            </GoldButton>
            <GoldButton 
              variant="outline"
              onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {getText("cta_learn", language)}
            </GoldButton>
          </div>
        </div>
      </div>
      
      {/* Abstract gradient in bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gold/10 rounded-full blur-3xl"></div>
    </section>
  );
}
