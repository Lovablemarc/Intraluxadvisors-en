import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import GoldButton from "./GoldButton";
import { FileText, FileSpreadsheet, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResourcesSection() {
  const { language } = useLanguage();

  const resources = [
    {
      icon: <FileText className="w-16 h-16 text-gold" />,
      titleKey: "resources_pdf",
      buttonKey: "resources_download",
      link: "https://drive.google.com/file/d/1EpcFCjqu5q-_m_GaS6Dvln4tw17shnV-/view?usp=drive_link",
      filename: "IntraluxAdvisors_Guide.pdf",
      isDownload: true
    },
    {
      icon: <FileSpreadsheet className="w-16 h-16 text-gold" />,
      titleKey: "resources_excel",
      buttonKey: "resources_download",
      link: "https://drive.google.com/file/d/1aqQu53Efvm6yxCOfnM9pW2yHVzHJq_Bl/view?usp=drive_link",
      filename: "IntraluxAdvisors_Checklist.pdf",
      isDownload: true
    },
    {
      icon: <HelpCircle className="w-16 h-16 text-gold" />,
      titleKey: "resources_faq",
      buttonKey: "resources_view",
      link: "/faq",
      filename: "",
      isDownload: false
    },
  ];

  const handleDownload = (url: string, filename: string) => {
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
              {resource.isDownload ? (
                <GoldButton
                  variant="outline"
                  onClick={() => handleDownload(resource.link, resource.filename)}
                >
                  {getText(resource.buttonKey, language)}
                </GoldButton>
              ) : (
                <Link to={resource.link}>
                  <GoldButton variant="outline">
                    {getText(resource.buttonKey, language)}
                  </GoldButton>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
