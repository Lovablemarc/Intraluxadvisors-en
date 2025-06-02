import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import { CheckCircle2 } from "lucide-react";

export default function StorySection() {
  const { language } = useLanguage();

  const benefits = [
    "Reduced monthly processing time from 8 hours to 30 minutes",
    "Zero penalties in 5+ years of service",
    "Direct communication with dedicated account manager",
    "Seamless email-based data submission process",
    "Proactive deadline reminders and updates"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Client Success Story" />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 font-playfair">LuxTrade Solutions S.A.</h3>
                <p className="text-gray-600 mb-6">
                  A Luxembourg-based distribution company handling over 500 monthly transactions across the EU faced significant challenges with their Intrastat reporting:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Before IntraLux Advisors:</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• 8+ hours monthly on manual processing</li>
                      <li>• Frequent deadline stress</li>
                      <li>• Multiple revision requests</li>
                      <li>• Risk of penalties</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">After IntraLux Advisors:</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• 30 minutes monthly review time</li>
                      <li>• Always ahead of deadlines</li>
                      <li>• First-time accuracy</li>
                      <li>• Complete peace of mind</li>
                    </ul>
                  </div>
                </div>

                <blockquote className="border-l-4 border-gold pl-4 py-2 mb-6 italic text-gray-600">
                  "IntraLux Advisors transformed our Intrastat reporting from a monthly headache into a seamless process. Their expertise and proactive communication have been invaluable. We haven't had a single compliance issue in 5 years."
                  <footer className="mt-2 text-sm font-semibold not-italic">
                    - Finance Director, LuxTrade Solutions S.A.
                  </footer>
                </blockquote>

                <h4 className="text-xl font-semibold mb-4">Key Benefits Achieved:</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}