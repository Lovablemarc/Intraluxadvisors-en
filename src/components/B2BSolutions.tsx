
import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import GoldButton from "./GoldButton";
import { OfficeBuilding, Clock, Users, Api } from "lucide-react";

export default function B2BSolutions() {
  const { language } = useLanguage();

  const features = [
    {
      icon: <OfficeBuilding className="w-12 h-12 text-gold" />,
      titleKey: "b2b_portal",
    },
    {
      icon: <Clock className="w-12 h-12 text-gold" />,
      titleKey: "b2b_sla",
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      titleKey: "b2b_support",
    },
    {
      icon: <Api className="w-12 h-12 text-gold" />,
      titleKey: "b2b_api",
    },
  ];

  return (
    <section id="b2b" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={getText("b2b_title", language)} 
          subtitle={getText("b2b_intro", language)} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{getText(feature.titleKey, language)}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <GoldButton
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {getText("b2b_cta", language)}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
