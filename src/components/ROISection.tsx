import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import GoldButton from "./GoldButton";
import { Check, Clock, Ban, TrendingUp } from "lucide-react";

export default function ROISection() {
  const openCalendly = () => {
    window.open("https://calendly.com/toprankagentur/15-minutes-discovery-call-intrastat", "_blank");
  };

  return (
    <section id="roi" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Your Return on Investment" 
          subtitle="See how much you can save with our service"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Without Our Service</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="text-red-500 w-6 h-6" />
                <div>
                  <div className="font-semibold">5-8 Hours Monthly</div>
                  <div className="text-sm text-gray-600">Internal Processing Time</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Ban className="text-red-500 w-6 h-6" />
                <div>
                  <div className="font-semibold">15-25% Error Rate</div>
                  <div className="text-sm text-gray-600">Risk of Penalties</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <TrendingUp className="text-red-500 w-6 h-6" />
                <div>
                  <div className="font-semibold">€5,100-8,160</div>
                  <div className="text-sm text-gray-600">Annual Processing Cost</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gold">
            <h3 className="text-2xl font-bold mb-6">With Our Service</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Check className="text-green-500 w-6 h-6" />
                <div>
                  <div className="font-semibold">15 Minutes Monthly</div>
                  <div className="text-sm text-gray-600">Client Review Time</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Check className="text-green-500 w-6 h-6" />
                <div>
                  <div className="font-semibold">0% Error Rate</div>
                  <div className="text-sm text-gray-600">100% Compliance Guaranteed</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Check className="text-green-500 w-6 h-6" />
                <div>
                  <div className="font-semibold">€4,700-7,760</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Standard Package ROI Example</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold mb-2">€3,000</div>
              <div className="text-sm text-gray-600">Annual Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">€10,100+</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">237%</div>
              <div className="text-sm text-gray-600">Minimum ROI</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-6">
            <div className="text-xl font-semibold mb-2">Limited Time Offer</div>
            <div className="text-gold">Setup slots available this month only • Currently accepting 25 new clients</div>
          </div>
          <GoldButton onClick={openCalendly} className="text-lg py-6 px-8">
            Book Your Free Discovery Call Now
          </GoldButton>
        </div>
      </div>
    </section>
  );
}