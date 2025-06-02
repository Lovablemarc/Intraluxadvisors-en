import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";
import GoldButton from "./GoldButton";
import { FileCheck, Upload, ClipboardCheck, Send } from "lucide-react";

export default function ProcessSection() {
  const { language } = useLanguage();
  
  const openCalendly = () => {
    window.open("https://calendly.com/toprankagentur/15-minutes-discovery-call-intrastat", "_blank");
  };

  const steps = [
    {
      number: 1,
      icon: <FileCheck className="w-12 h-12 text-gold" />,
      title: "Initial Setup",
      description: "Quick onboarding process to understand your needs",
      details: [
        "Free consultation call",
        "Requirements gathering",
        "Process explanation",
        "Timeline planning"
      ]
    },
    {
      number: 2,
      icon: <Upload className="w-12 h-12 text-gold" />,
      title: "Data Submission",
      description: "Simple and secure data transfer",
      details: [
        "Flexible file formats accepted",
        "Secure storage link provided",
        "Email submission option",
        "Data verification"
      ]
    },
    {
      number: 3,
      icon: <ClipboardCheck className="w-12 h-12 text-gold" />,
      title: "Processing & Preparation",
      description: "Expert handling of your Intrastat data",
      details: [
        "Data validation",
        "Commodity code verification",
        "Compliance check",
        "Declaration preparation"
      ]
    },
    {
      number: 4,
      icon: <Send className="w-12 h-12 text-gold" />,
      title: "Filing & Confirmation",
      description: "Timely submission to authorities",
      details: [
        "Official submission",
        "Filing confirmation",
        "Documentation provided",
        "Monthly report"
      ]
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Simple 4-Step Process"
          subtitle="Hassle-free Intrastat compliance without complex integrations"
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
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {step.description}
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
            Ready to simplify your Intrastat reporting?
          </p>
          <GoldButton onClick={openCalendly} className="text-lg">
            Book Your Free Consultation
          </GoldButton>
        </div>
      </div>
    </section>
  );
}