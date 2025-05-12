
import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";

export default function ProcessSection() {
  const { language } = useLanguage();

  const steps = [
    {
      number: 1,
      titleKey: "process_step1_title",
      descKey: "process_step1_desc",
    },
    {
      number: 2,
      titleKey: "process_step2_title",
      descKey: "process_step2_desc",
    },
    {
      number: 3,
      titleKey: "process_step3_title",
      descKey: "process_step3_desc",
    },
    {
      number: 4,
      titleKey: "process_step4_title",
      descKey: "process_step4_desc",
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={getText("process_title", language)} />
        
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-gold/30 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-start">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center text-2xl font-bold relative z-10">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{getText(step.titleKey, language)}</h3>
                  <p className="text-gray-600 text-center md:text-left">{getText(step.descKey, language)}</p>
                </div>
                <div className="md:w-1/2">
                  <div className={cn(
                    "h-40 md:h-60 w-full rounded-lg flex items-center justify-center bg-gray-100",
                    index % 2 === 0 ? "bg-gradient-to-r from-gray-100 to-gray-200" : "bg-gradient-to-l from-gray-100 to-gray-200"
                  )}>
                    <div className="text-5xl font-bold text-gold/20">{`STEP ${step.number}`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
