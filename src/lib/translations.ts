export type Language = 'en';

interface Translations {
  [key: string]: {
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  nav_intrastat: {
    en: "Intrastat",
  },
  nav_process: {
    en: "Process",
  },
  nav_b2b: {
    en: "B2B Partners",
  },
  nav_resources: {
    en: "Resources",
  },
  nav_contact: {
    en: "Contact",
  },

  // Hero
  hero_title: {
    en: "Intrastat Services Luxembourg",
  },
  hero_subtitle: {
    en: "Save €12,000+ Annually While Ensuring 100% Compliance",
  },
  hero_savings_title: {
    en: "Average Penalty per Violation",
  },
  hero_time_title: {
    en: "Time Saved per Month",
  },
  hero_cost_title: {
    en: "Monthly Labor Cost Savings",
  },
  cta_discovery: {
    en: "Book Your Free Discovery Call",
  },
  cta_roi: {
    en: "Calculate Your ROI",
  },

  // ROI Section
  roi_title: {
    en: "Your Return on Investment",
  },
  roi_subtitle: {
    en: "See how much you can save with our service",
  },
  roi_without_title: {
    en: "Without Our Service",
  },
  roi_with_title: {
    en: "With Our Service",
  },
  roi_processing_time: {
    en: "Internal Processing Time",
  },
  roi_error_rate: {
    en: "Risk of Penalties",
  },
  roi_annual_cost: {
    en: "Annual Processing Cost",
  },
  roi_review_time: {
    en: "Client Review Time",
  },
  roi_compliance: {
    en: "100% Compliance Guaranteed",
  },
  roi_annual_savings: {
    en: "Annual Savings",
  },

  // Guarantees Section
  guarantees_title: {
    en: "Our Service Guarantees",
  },
  guarantees_subtitle: {
    en: "Backed by years of excellence in Intrastat compliance",
  },
  guarantee_compliance: {
    en: "100% Compliance",
  },
  guarantee_time: {
    en: "Time Savings",
  },
  guarantee_quality: {
    en: "Expert Quality",
  },
  guarantee_satisfaction: {
    en: "Client Satisfaction",
  },

  // Limited Time Offer
  limited_offer: {
    en: "Limited Time Offer",
  },
  setup_slots: {
    en: "Setup slots available this month only • Currently accepting 25 new clients",
  },

  // Why Section
  why_title: {
    en: "Why Comply with Intrastat?",
  },
  why_legal_title: {
    en: "Legal Requirement",
  },
  why_legal_desc: {
    en: "Avoid fines & penalties",
  },
  why_customs_title: {
    en: "Customs Visibility",
  },
  why_customs_desc: {
    en: "Track your EU flows precisely",
  },
  why_logistics_title: {
    en: "Logistics Optimization",
  },
  why_logistics_desc: {
    en: "Better control costs & inventory",
  },

  // Process Section
  process_title: {
    en: "Our 4-Step Process",
  },
  process_step1_title: {
    en: "Kick-off & Onboarding",
  },
  process_step1_desc: {
    en: "Set up access & data flows",
  },
  process_step2_title: {
    en: "Data Collection & Validation",
  },
  process_step2_desc: {
    en: "ERP/WMS integration",
  },
  process_step3_title: {
    en: "Client Review",
  },
  process_step3_desc: {
    en: "Approve draft via secure portal",
  },
  process_step4_title: {
    en: "Filing & Reporting",
  },
  process_step4_desc: {
    en: "Submit to customs & deliver acknowledgment",
  },

  // B2B Section
  b2b_title: {
    en: "B2B Solutions",
  },
  b2b_intro: {
    en: "Tailored compliance solutions for businesses with complex intra-EU trade flows",
  },
  b2b_portal: {
    en: "Partner Portal",
  },
  b2b_sla: {
    en: "Dedicated SLAs",
  },
  b2b_support: {
    en: "24/48h Support",
  },
  b2b_api: {
    en: "API & Integrations",
  },
  b2b_cta: {
    en: "Contact Our B2B Team",
  },

  // Resources Section
  resources_title: {
    en: "Resources",
  },
  resources_pdf: {
    en: "PDF Guide",
  },
  resources_excel: {
    en: "Excel Checklist",
  },
  resources_faq: {
    en: "Online FAQ",
  },
  resources_download: {
    en: "Download",
  },
  resources_view: {
    en: "View",
  },

  // Testimonials Section
  testimonials_title: {
    en: "Client Testimonials",
  },
  testimonial1_text: {
    en: "IntraLux Advisors has simplified our Intrastat compliance process immensely. Their team is responsive and truly understands Luxembourg's requirements.",
  },
  testimonial1_author: {
    en: "Finance Director, Manufacturing Company",
  },
  testimonial2_text: {
    en: "Outsourcing our Intrastat filings to IntraLux was one of our best decisions. They've reduced our administrative burden and eliminated costly errors.",
  },
  testimonial2_author: {
    en: "Logistics Manager, Distribution Company",
  },

  // Contact Section
  contact_title: {
    en: "Get Your Personalized Quote",
  },
  contact_company: {
    en: "Company Name",
  },
  contact_name: {
    en: "Contact Name",
  },
  contact_email: {
    en: "Email",
  },
  contact_phone: {
    en: "Phone",
  },
  contact_invoices: {
    en: "Number of invoices per month",
  },
  contact_lines: {
    en: "Number of Intrastat lines per month",
  },
  contact_yearly: {
    en: "Estimated lines per year",
  },
  contact_message: {
    en: "Message / Additional details",
  },
  contact_submit: {
    en: "Submit Request",
  },
  contact_address_title: {
    en: "Our Office",
  },

  // Footer
  footer_copyright: {
    en: "© 2025 IntraLux Advisors",
  },
  footer_legal: {
    en: "Legal Notice",
  },
  footer_privacy: {
    en: "Privacy Policy",
  },
};

export const getText = (key: string, language: Language): string => {
  if (translations[key]) {
    return translations[key][language];
  }
  console.warn(`Translation key not found: ${key}`);
  return key;
};

export const routes = {
  en: '/en'
};