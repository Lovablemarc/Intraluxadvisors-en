import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";
import GoldButton from "./GoldButton";
import { FileCheck, Database, ClipboardCheck, Send } from "lucide-react";

export default function ProcessSection() {
  const { language } = useLanguage();
  
  const openCalendly = () => {
    window.open("https://calendly.com/toprankagentur/15-minutes-discovery-call-intrastat", "_blank");
  };

  const steps = [
    {
      number: 1,
      icon: <FileCheck className="w-12 h-12 text-gold" />,
      titleKey: "process_step1_title",
      descKey: "process_step1_desc",
      details: [
        "Initial consultation",
        "System access setup",
        "Data flow configuration",
        "Team onboarding"
      ]
    },
    {
      number: 2,
      icon: <Database className="w-12 h-12 text-gold" />,
      titleKey: "process_step2_title",
      descKey: "process_step2_desc",
      details: [
        "Automated data extraction",
        "Real-time validation",
        "Error detection",
        "Data enrichment"
      ]
    },
    {
      number: 3,
      icon: <ClipboardCheck className="w-12 h-12 text-gold" />,
      titleKey: "process_step3_title",
      descKey: "process_step3_desc",
      details: [
        "Draft review",
        "Quick approval process",
        "Secure portal access",
        "Real-time updates"
      ]
    },
    {
      number: 4,
      icon: <Send className="w-12 h-12 text-gold" />,
      titleKey: "process_step4_title",
      descKey: "process_step4_desc",
      details: [
        "Automated submission",
        "Instant confirmation",
        "Digital archiving",
        "Compliance tracking"
      ]
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={getText("process_title", language)}
          subtitle="Simple, efficient, and fully compliant process"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  {step.icon}
                </div>
                <div className="text-4xl font-bold text-gold">{step.number}</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {getText(step.titleKey, language)}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {getText(step.descKey, language)}
              </p>
              
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6">
            Ready to streamline your Intrastat compliance?
          </p>
          <GoldButton onClick={openCalendly} className="text-lg">
            Schedule Your Free Process Review
          </GoldButton>
        </div>
      </div>
    </section>
  );
}