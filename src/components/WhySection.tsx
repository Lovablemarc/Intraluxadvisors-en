
import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import { FileCheck, Map, ArrowsUpFromLine } from "lucide-react";

export default function WhySection() {
  const { language } = useLanguage();

  const reasons = [
    {
      icon: <FileCheck size={48} className="text-gold mb-4" />,
      titleKey: "why_legal_title",
      descKey: "why_legal_desc",
    },
    {
      icon: <Map size={48} className="text-gold mb-4" />,
      titleKey: "why_customs_title",
      descKey: "why_customs_desc",
    },
    {
      icon: <ArrowsUpFromLine size={48} className="text-gold mb-4" />,
      titleKey: "why_logistics_title",
      descKey: "why_logistics_desc",
    },
  ];

  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title={getText("why_title", language)} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:-translate-y-2"
            >
              <div className="flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{getText(reason.titleKey, language)}</h3>
              <p className="text-gray-600">{getText(reason.descKey, language)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
