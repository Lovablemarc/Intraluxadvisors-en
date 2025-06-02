import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import { Speech } from "lucide-react";

export default function TestimonialsSection() {
  const { language } = useLanguage();

  const testimonials = [
    {
      textKey: "testimonial1_text",
      authorKey: "testimonial1_author",
    },
    {
      textKey: "testimonial2_text",
      authorKey: "testimonial2_author",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title={getText("testimonials_title", language)} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow relative"
            >
              <div className="absolute top-6 left-6">
                <Speech className="w-8 h-8 text-gold/30" />
              </div>
              <div className="pt-8">
                <p className="text-gray-700 mb-6 italic">"{getText(testimonial.textKey, language)}"</p>
                <p className="font-semibold text-sm text-gray-500">{getText(testimonial.authorKey, language)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}