import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import GoldButton from "./GoldButton";

export default function HeroSection() {
  const { language } = useLanguage();

  const openCalendly = () => {
    window.open("https://calendly.com/toprankagentur/15-minutes-discovery-call-intrastat", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center hero-pattern pt-32"> {/* Added pt-32 for more spacing */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/90"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            {getText("hero_title", language)}
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-gold font-semibold">
            Save €12,000+ Annually While Ensuring 100% Compliance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
            <div className="bg-white/80 p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-gold mb-2">€2.5-15K</div>
              <div className="text-sm">Average Penalty per Violation</div>
            </div>
            <div className="bg-white/80 p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-gold mb-2">6-8h</div>
              <div className="text-sm">Time Saved per Month</div>
            </div>
            <div className="bg-white/80 p-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-gold mb-2">€510-680</div>
              <div className="text-sm">Monthly Labor Cost Savings</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GoldButton 
              onClick={openCalendly}
              className="text-lg py-6 px-8"
            >
              Book Your Free Discovery Call
            </GoldButton>
            <GoldButton 
              variant="outline"
              onClick={() => document.getElementById('roi')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg"
            >
              Calculate Your ROI
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}