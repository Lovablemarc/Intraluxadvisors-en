import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import GoldButton from "./GoldButton";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactSection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    invoices: "",
    items: "",
    yearly: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    toast.success("Your request has been submitted. We'll get back to you soon!");
    
    // Reset form
    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
      invoices: "",
      items: "",
      yearly: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={getText("contact_title", language)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    {getText("contact_company", language)}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {getText("contact_name", language)}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {getText("contact_email", language)}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {getText("contact_phone", language)}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="invoices" className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Invoices
                  </label>
                  <input
                    type="number"
                    id="invoices"
                    name="invoices"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                    value={formData.invoices}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="items" className="block text-sm font-medium text-gray-700 mb-1">
                    Items per Invoice (avg)
                  </label>
                  <input
                    type="number"
                    id="items"
                    name="items"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                    value={formData.items}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="yearly" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Items/Year
                  </label>
                  <input
                    type="number"
                    id="yearly"
                    name="yearly"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                    value={formData.yearly}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {getText("contact_message", language)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="text-center">
                <GoldButton type="submit">
                  {getText("contact_submit", language)}
                </GoldButton>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-xl font-semibold mb-4 font-playfair">
                {getText("contact_address_title", language)}
              </h3>
              
              <div className="mb-6">
                <div className="bg-gray-100 rounded-lg w-full h-48 mb-4 flex items-center justify-center text-gray-400">
                  [Office Illustration]
                </div>
              </div>
              
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">IntraLux Advisors</p>
                <p>2A Rue des Capucins, 1313 Ville-Haute Luxembourg</p>
                <p>Tel: +352 691 486 875</p>
                <p>
                  <a href="mailto:info@intraluxadvisors.com" className="text-gold hover:underline">
                    info@intraluxadvisors.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}