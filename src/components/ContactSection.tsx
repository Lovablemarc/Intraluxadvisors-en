import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import GoldButton from "./GoldButton";
import { Mail, Phone, MapPin, Languages } from "lucide-react";

export default function ContactSection() {
  const { language } = useLanguage();

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Intrastat Services Inquiry");
    const body = encodeURIComponent(`
Hello IntraLux Advisors,

I would like to inquire about your Intrastat services.

Company Details:
- Company Name: 
- Contact Person: 
- Phone Number: 

Monthly Volume:
- Average monthly invoices: 
- Average items per invoice: 
- Estimated yearly items: 

Additional Information:
[Please add any specific requirements or questions]

Best regards,
`);
    
    window.open(`mailto:info@intraluxadvisors.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={getText("contact_title", language)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 font-playfair">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              Ready to simplify your Intrastat compliance? Our team is here to help. 
              Contact us for a personalized consultation and discover how we can save 
              you time and ensure 100% compliance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <GoldButton onClick={handleEmailClick}>
                    Send Email
                  </GoldButton>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p>
                    <a href="tel:+352691486875" className="text-gold hover:underline">
                      +352 691 486 875
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Monday - Friday, 9:00 - 18:00 CET
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4 font-playfair">
              {getText("contact_address_title", language)}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Office Location</h4>
                  <p>IntraLux Advisors</p>
                  <p>2A Rue des Capucins</p>
                  <p>1313 Ville-Haute</p>
                  <p>Luxembourg</p>
                  <div className="mt-2 space-y-1">
                    <p>
                      <a href="mailto:info@intraluxadvisors.com" className="text-gold hover:underline">
                        info@intraluxadvisors.com
                      </a>
                    </p>
                    <p>
                      <a href="tel:+352691486875" className="text-gold hover:underline">
                        Tel: +352 691 486 875
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Languages className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Languages We Speak:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    <li>🇱🇺 Luxembourgish</li>
                    <li>🇫🇷 French</li>
                    <li>🇩🇪 German</li>
                    <li>🇬🇧 English</li>
                    <li>🇪🇸 Spanish</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}