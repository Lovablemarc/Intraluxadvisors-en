
import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import GoldButton from "./GoldButton";
import { FilePdf, FileExcel, FileQuestion } from "lucide-react";

export default function ResourcesSection() {
  const { language } = useLanguage();

  const resources = [
    {
      icon: <FilePdf className="w-16 h-16 text-gold" />,
      titleKey: "resources_pdf",
      buttonKey: "resources_download",
      link: "#",
    },
    {
      icon: <FileExcel className="w-16 h-16 text-gold" />,
      titleKey: "resources_excel",
      buttonKey: "resources_download",
      link: "#",
    },
    {
      icon: <FileQuestion className="w-16 h-16 text-gold" />,
      titleKey: "resources_faq",
      buttonKey: "resources_view",
      link: "#",
    },
  ];

  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={getText("resources_title", language)} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-6">{resource.icon}</div>
              <h3 className="font-semibold text-xl mb-6">{getText(resource.titleKey, language)}</h3>
              <GoldButton
                variant="outline"
                onClick={() => window.open(resource.link, "_blank")}
              >
                {getText(resource.buttonKey, language)}
              </GoldButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
