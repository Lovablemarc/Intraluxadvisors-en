import SectionTitle from "./SectionTitle";
import { Shield, Clock, Award, Star } from "lucide-react";

export default function GuaranteesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Service Guarantees" 
          subtitle="Backed by years of excellence in Intrastat compliance"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">100% Compliance</h3>
            <div className="text-sm text-gray-600">
              Zero penalties for clients in 3+ years
              <br />
              99.8% on-time submission rate
            </div>
          </div>
          
          <div className="text-center">
            <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Time Savings</h3>
            <div className="text-sm text-gray-600">
              Reduce workload by 90%
              <br />
              15-minute monthly review
            </div>
          </div>
          
          <div className="text-center">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Quality</h3>
            <div className="text-sm text-gray-600">
              99.9% commodity code accuracy
              <br />
              100% data completeness
            </div>
          </div>
          
          <div className="text-center">
            <Star className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
            <div className="text-sm text-gray-600">
              4.9/5 satisfaction score
              <br />
              24-48h processing time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}