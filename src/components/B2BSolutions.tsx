import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import GoldButton from "./GoldButton";
import { Shield, Clock, Users, FileCheck } from "lucide-react";

export default function B2BSolutions() {
  const { language } = useLanguage();
  
  const openCalendly = () => {
    window.open("https://calendly.com/toprankagentur/15-minutes-discovery-call-intrastat", "_blank");
  };

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-gold" />,
      title: "Dedicated Support",
      description: "Personal account manager for your business with direct communication channels"
    },
    {
      icon: <Clock className="w-12 h-12 text-gold" />,
      title: "Priority Processing",
      description: "Fast-track handling of your submissions with premium response times"
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: "Multi-Branch Support",
      description: "Unified reporting for multiple business locations and divisions"
    },
    {
      icon: <FileCheck className="w-12 h-12 text-gold" />,
      title: "Enhanced Reporting",
      description: "Detailed monthly summaries and compliance documentation"
    },
  ];

  return (
    <section id="b2b" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Enterprise Solutions" 
          subtitle="Tailored compliance solutions for businesses with complex trade flows"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span>Volume-based pricing for multiple declarations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span>Customized reporting templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span>Dedicated compliance manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span>Priority support response</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-4">Ready to streamline your Intrastat compliance?</div>
              <GoldButton onClick={openCalendly} className="text-lg">
                Schedule Enterprise Consultation
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}