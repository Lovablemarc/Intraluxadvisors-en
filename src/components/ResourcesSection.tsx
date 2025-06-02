import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import GoldButton from "./GoldButton";
import { FileText, FileSpreadsheet, HelpCircle } from "lucide-react";

export default function ResourcesSection() {
  const { language } = useLanguage();

  const resources = [
    {
      icon: <FileText className="w-16 h-16 text-gold" />,
      titleKey: "resources_pdf",
      buttonKey: "resources_download",
      link: "https://raw.githubusercontent.com/Lovablemarc/Intraluxadvisors-en/main/downloads/IntraluxAdvisors_Guide_EN.pdf",
      filename: "IntraluxAdvisors_Guide.pdf"
    },
    {
      icon: <FileSpreadsheet className="w-16 h-16 text-gold" />,
      titleKey: "resources_excel",
      buttonKey: "resources_download",
      link: "https://raw.githubusercontent.com/Lovablemarc/Intraluxadvisors-en/main/downloads/IntraluxAdvisors_CHECKLIST_EN.pdf",
      filename: "IntraluxAdvisors_Checklist.pdf"
    },
    {
      icon: <HelpCircle className="w-16 h-16 text-gold" />,
      titleKey: "resources_faq",
      buttonKey: "resources_view",
      link: "#",
      filename: ""
    },
  ];

  const handleDownload = (url: string, filename: string) => {
    if (url === "#") return;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                onClick={() => handleDownload(resource.link, resource.filename)}
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