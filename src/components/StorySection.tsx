import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";

export default function StorySection() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={getText("story_title", language)} />
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">{getText("story_p1", language)}</p>
          
          <h3 className="text-2xl font-bold mb-6 mt-12 font-playfair">{getText("challenge_title", language)}</h3>
          
          <h4 className="text-xl font-semibold mb-2">{getText("challenge_subtitle1", language)}</h4>
          <p className="mb-6">{getText("challenge_p1", language)}</p>
          
          <h4 className="text-xl font-semibold mb-2">{getText("challenge_subtitle2", language)}</h4>
          <p className="mb-6">Manual data processing and validation takes significant time away from core business activities. Teams struggle with the complexity of commodity codes and compliance requirements.</p>
          
          <h4 className="text-xl font-semibold mb-2">{getText("challenge_subtitle3", language)}</h4>
          <p className="mb-6">Manual data entry and validation increases the likelihood of errors. Incomplete or inconsistent records can lead to penalties.</p>
          
          <h3 className="text-2xl font-bold mb-4 mt-12 font-playfair">{getText("question_title", language)}</h3>
          <p className="mb-4">{getText("question_p1", language)}</p>
          <blockquote className="border-l-4 border-gold pl-4 py-1 mb-4 italic">
            {getText("question_q1", language)}
          </blockquote>
          <blockquote className="border-l-4 border-gold pl-4 py-1 mb-4 italic">
            {getText("question_q2", language)}
          </blockquote>
          <blockquote className="border-l-4 border-gold pl-4 py-1 mb-8 italic">
            {getText("question_q3", language)}
          </blockquote>
          
          <h3 className="text-2xl font-bold mb-6 mt-12 font-playfair">{getText("solution_title", language)}</h3>
          
          <h4 className="text-xl font-semibold mb-2">{getText("solution_subtitle1", language)}</h4>
          <p className="mb-6">Our team of Luxembourg-based Intrastat specialists ensures accurate and timely submissions while staying current with all regulatory changes.</p>
          
          <h4 className="text-xl font-semibold mb-2">{getText("solution_subtitle2", language)}</h4>
          <p className="mb-6">Simple data submission process with flexible file formats. Our experts handle all the complexity of classification and validation.</p>
          
          <h4 className="text-xl font-semibold mb-2">{getText("solution_subtitle3", language)}</h4>
          <p className="mb-6">Comprehensive monthly reports provide clear visibility into your Intrastat compliance status and submission history.</p>
          
          <h4 className="text-xl font-semibold mb-2">{getText("solution_subtitle4", language)}</h4>
          <p className="mb-6">Full documentation package and expert support for any Luxembourg Customs queries or audits.</p>
          
          <div className="mt-10 p-6 bg-gold/10 border-l-4 border-gold rounded-r-lg">
            <p className="font-semibold">{getText("final_cta", language)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}