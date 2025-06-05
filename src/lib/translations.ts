
export type Language = 'en' | 'fr' | 'de';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    de: string;
  };
}

export const translations: Translations = {
  // Navigation
  nav_intrastat: {
    en: "Intrastat",
    fr: "Intrastat",
    de: "Intrastat",
  },
  nav_process: {
    en: "Process",
    fr: "Processus",
    de: "Ablauf",
  },
  nav_b2b: {
    en: "B2B Partners",
    fr: "Partenaires pro",
    de: "B2B-Partner",
  },
  nav_resources: {
    en: "Resources",
    fr: "Ressources",
    de: "Ressourcen",
  },
  nav_contact: {
    en: "Contact",
    fr: "Contact",
    de: "Kontakt",
  },

  // Hero
  hero_title: {
    en: "Intrastat Services Luxembourg",
    fr: "Services Intrastat Luxembourg",
    de: "Intrastat-Dienstleistungen Luxemburg",
  },
  hero_subtitle: {
    en: "Save €12,000+ Annually While Ensuring 100% Compliance",
    fr: "Économisez plus de 12 000 € par an tout en garantissant une conformité à 100%",
    de: "Sparen Sie jährlich über 12.000 € bei 100%iger Compliance",
  },
  hero_savings_title: {
    en: "Average Penalty per Violation",
    fr: "Pénalité moyenne par violation",
    de: "Durchschnittliche Strafe pro Verstoß",
  },
  hero_time_title: {
    en: "Time Saved per Month",
    fr: "Temps économisé par mois",
    de: "Gesparte Zeit pro Monat",
  },
  hero_cost_title: {
    en: "Monthly Labor Cost Savings",
    fr: "Économies de coûts de main-d'œuvre mensuels",
    de: "Monatliche Arbeitskosten-Einsparungen",
  },
  cta_discovery: {
    en: "Book Your Free Discovery Call",
    fr: "Réservez votre appel découverte gratuit",
    de: "Buchen Sie Ihr kostenloses Beratungsgespräch",
  },
  cta_roi: {
    en: "Calculate Your ROI",
    fr: "Calculez votre ROI",
    de: "Berechnen Sie Ihren ROI",
  },

  // ROI Section
  roi_title: {
    en: "Your Return on Investment",
    fr: "Votre retour sur investissement",
    de: "Ihre Kapitalrendite",
  },
  roi_subtitle: {
    en: "See how much you can save with our service",
    fr: "Voyez combien vous pouvez économiser avec notre service",
    de: "Sehen Sie, wie viel Sie mit unserem Service sparen können",
  },
  roi_without_title: {
    en: "Without Our Service",
    fr: "Sans notre service",
    de: "Ohne unseren Service",
  },
  roi_with_title: {
    en: "With Our Service",
    fr: "Avec notre service",
    de: "Mit unserem Service",
  },
  roi_processing_time: {
    en: "Internal Processing Time",
    fr: "Temps de traitement interne",
    de: "Interne Bearbeitungszeit",
  },
  roi_error_rate: {
    en: "Risk of Penalties",
    fr: "Risque de pénalités",
    de: "Strafenrisiko",
  },
  roi_annual_cost: {
    en: "Annual Processing Cost",
    fr: "Coût de traitement annuel",
    de: "Jährliche Bearbeitungskosten",
  },
  roi_review_time: {
    en: "Client Review Time",
    fr: "Temps de révision client",
    de: "Kundenprüfungszeit",
  },
  roi_compliance: {
    en: "100% Compliance Guaranteed",
    fr: "Conformité 100% garantie",
    de: "100% Compliance garantiert",
  },
  roi_annual_savings: {
    en: "Annual Savings",
    fr: "Économies annuelles",
    de: "Jährliche Einsparungen",
  },

  // Guarantees Section
  guarantees_title: {
    en: "Our Service Guarantees",
    fr: "Nos garanties de service",
    de: "Unsere Service-Garantien",
  },
  guarantees_subtitle: {
    en: "Backed by years of excellence in Intrastat compliance",
    fr: "Soutenu par des années d'excellence en conformité Intrastat",
    de: "Unterstützt durch jahrelange Exzellenz in der Intrastat-Compliance",
  },
  guarantee_compliance: {
    en: "100% Compliance",
    fr: "Conformité 100%",
    de: "100% Compliance",
  },
  guarantee_time: {
    en: "Time Savings",
    fr: "Gain de temps",
    de: "Zeitersparnis",
  },
  guarantee_quality: {
    en: "Expert Quality",
    fr: "Qualité d'expert",
    de: "Expertenqualität",
  },
  guarantee_satisfaction: {
    en: "Client Satisfaction",
    fr: "Satisfaction client",
    de: "Kundenzufriedenheit",
  },

  // Limited Time Offer
  limited_offer: {
    en: "Limited Time Offer",
    fr: "Offre limitée dans le temps",
    de: "Zeitlich begrenztes Angebot",
  },
  setup_slots: {
    en: "Setup slots available this month only • Currently accepting 25 new clients",
    fr: "Créneaux de configuration disponibles ce mois seulement • Accepte actuellement 25 nouveaux clients",
    de: "Setup-Plätze nur diesen Monat verfügbar • Derzeit nehmen wir 25 neue Kunden an",
  },

  // Why Section
  why_title: {
    en: "Why Comply with Intrastat?",
    fr: "Pourquoi se conformer à Intrastat ?",
    de: "Warum Intrastat?",
  },
  why_legal_title: {
    en: "Legal Requirement",
    fr: "Obligation légale",
    de: "Rechtliche Pflicht",
  },
  why_legal_desc: {
    en: "Avoid fines & penalties",
    fr: "Éviter sanctions et pénalités",
    de: "Geldstrafen vermeiden",
  },
  why_customs_title: {
    en: "Customs Visibility",
    fr: "Visibilité douanière",
    de: "Zoll-Transparenz",
  },
  why_customs_desc: {
    en: "Track your EU flows precisely",
    fr: "Suivi précis de vos flux intra-UE",
    de: "Präzise Verfolgung Ihrer EU-Ströme",
  },
  why_logistics_title: {
    en: "Logistics Optimization",
    fr: "Optimisation logistique",
    de: "Logistik-Optimierung",
  },
  why_logistics_desc: {
    en: "Better control costs & inventory",
    fr: "Piloter coûts et stocks",
    de: "Bessere Kosten- und Lagersteuerung",
  },

  // Process Section
  process_title: {
    en: "Our 4-Step Process",
    fr: "Notre processus en 4 étapes",
    de: "Unser 4-Schritte-Prozess",
  },
  process_step1_title: {
    en: "Kick-off & Onboarding",
    fr: "Lancement et intégration",
    de: "Kick-off & Onboarding",
  },
  process_step1_desc: {
    en: "Set up access & data flows",
    fr: "Configuration des accès et flux de données",
    de: "Zugang & Datenflüsse einrichten",
  },
  process_step2_title: {
    en: "Data Collection & Validation",
    fr: "Collecte et validation des données",
    de: "Datensammlung & Validierung",
  },
  process_step2_desc: {
    en: "ERP/WMS integration",
    fr: "Intégration ERP/WMS",
    de: "ERP/WMS-Integration",
  },
  process_step3_title: {
    en: "Client Review",
    fr: "Révision client",
    de: "Kundenprüfung",
  },
  process_step3_desc: {
    en: "Approve draft via secure portal",
    fr: "Approuver le brouillon via portail sécurisé",
    de: "Entwurf über sicheres Portal genehmigen",
  },
  process_step4_title: {
    en: "Filing & Reporting",
    fr: "Dépôt et rapport",
    de: "Einreichung & Berichterstattung",
  },
  process_step4_desc: {
    en: "Submit to customs & deliver acknowledgment",
    fr: "Soumission aux douanes et accusé de réception",
    de: "Bei Zoll einreichen & Bestätigung liefern",
  },

  // B2B Section
  b2b_title: {
    en: "B2B Solutions",
    fr: "Solutions B2B",
    de: "B2B-Lösungen",
  },
  b2b_intro: {
    en: "Tailored compliance solutions for businesses with complex intra-EU trade flows",
    fr: "Solutions de conformité sur mesure pour les entreprises avec des flux commerciaux intra-UE complexes",
    de: "Maßgeschneiderte Compliance-Lösungen für Unternehmen mit komplexen inner-EU-Handelsströmen",
  },
  b2b_portal: {
    en: "Partner Portal",
    fr: "Portail partenaire",
    de: "Partner-Portal",
  },
  b2b_sla: {
    en: "Dedicated SLAs",
    fr: "SLA dédiés",
    de: "Dedizierte SLAs",
  },
  b2b_support: {
    en: "24/48h Support",
    fr: "Support 24/48h",
    de: "24/48h Support",
  },
  b2b_api: {
    en: "API & Integrations",
    fr: "API et intégrations",
    de: "API & Integrationen",
  },
  b2b_cta: {
    en: "Contact Our B2B Team",
    fr: "Contactez notre équipe B2B",
    de: "Kontaktieren Sie unser B2B-Team",
  },

  // Resources Section
  resources_title: {
    en: "Resources",
    fr: "Ressources",
    de: "Ressourcen",
  },
  resources_pdf: {
    en: "PDF Guide",
    fr: "Guide PDF",
    de: "PDF-Leitfaden",
  },
  resources_excel: {
    en: "Excel Checklist",
    fr: "Liste de contrôle Excel",
    de: "Excel-Checkliste",
  },
  resources_faq: {
    en: "Online FAQ",
    fr: "FAQ en ligne",
    de: "Online-FAQ",
  },
  resources_download: {
    en: "Download",
    fr: "Télécharger",
    de: "Herunterladen",
  },
  resources_view: {
    en: "View",
    fr: "Voir",
    de: "Ansehen",
  },

  // Testimonials Section
  testimonials_title: {
    en: "Client Testimonials",
    fr: "Témoignages clients",
    de: "Kundenstimmen",
  },
  testimonial1_text: {
    en: "IntraLux Advisors has simplified our Intrastat compliance process immensely. Their team is responsive and truly understands Luxembourg's requirements.",
    fr: "IntraLux Advisors a énormément simplifié notre processus de conformité Intrastat. Leur équipe est réactive et comprend vraiment les exigences du Luxembourg.",
    de: "IntraLux Advisors hat unseren Intrastat-Compliance-Prozess enorm vereinfacht. Ihr Team ist reaktionsschnell und versteht wirklich die Anforderungen Luxemburgs.",
  },
  testimonial1_author: {
    en: "Finance Director, Manufacturing Company",
    fr: "Directeur financier, entreprise manufacturière",
    de: "Finanzdirektor, Fertigungsunternehmen",
  },
  testimonial2_text: {
    en: "Outsourcing our Intrastat filings to IntraLux was one of our best decisions. They've reduced our administrative burden and eliminated costly errors.",
    fr: "Externaliser nos déclarations Intrastat à IntraLux était l'une de nos meilleures décisions. Ils ont réduit notre charge administrative et éliminé les erreurs coûteuses.",
    de: "Die Auslagerung unserer Intrastat-Meldungen an IntraLux war eine unserer besten Entscheidungen. Sie haben unsere Verwaltungslast reduziert und kostspielige Fehler eliminiert.",
  },
  testimonial2_author: {
    en: "Logistics Manager, Distribution Company",
    fr: "Responsable logistique, entreprise de distribution",
    de: "Logistikmanager, Vertriebsunternehmen",
  },

  // Contact Section
  contact_title: {
    en: "Get Your Personalized Quote",
    fr: "Obtenez votre devis personnalisé",
    de: "Ihr persönliches Angebot",
  },
  contact_company: {
    en: "Company Name",
    fr: "Nom de l'entreprise",
    de: "Firmenname",
  },
  contact_name: {
    en: "Contact Name",
    fr: "Nom du contact",
    de: "Kontaktname",
  },
  contact_email: {
    en: "Email",
    fr: "Email",
    de: "E-Mail",
  },
  contact_phone: {
    en: "Phone",
    fr: "Téléphone",
    de: "Telefon",
  },
  contact_invoices: {
    en: "Number of invoices per month",
    fr: "Nombre de factures par mois",
    de: "Anzahl Rechnungen pro Monat",
  },
  contact_lines: {
    en: "Number of Intrastat lines per month",
    fr: "Nombre de lignes Intrastat par mois",
    de: "Anzahl Intrastat-Positionen pro Monat",
  },
  contact_yearly: {
    en: "Estimated lines per year",
    fr: "Lignes estimées par an",
    de: "Geschätzte Positionen pro Jahr",
  },
  contact_message: {
    en: "Message / Additional details",
    fr: "Message / Détails supplémentaires",
    de: "Nachricht / Zusätzliche Details",
  },
  contact_submit: {
    en: "Submit Request",
    fr: "Soumettre la demande",
    de: "Anfrage senden",
  },
  contact_address_title: {
    en: "Our Office",
    fr: "Notre bureau",
    de: "Unser Büro",
  },

  // Footer
  footer_copyright: {
    en: "© 2025 IntraLux Advisors",
    fr: "© 2025 IntraLux Advisors",
    de: "© 2025 IntraLux Advisors",
  },
  footer_legal: {
    en: "Legal Notice",
    fr: "Mentions légales",
    de: "Impressum",
  },
  footer_privacy: {
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
    de: "Datenschutz",
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
  en: '/en',
  fr: '/fr',
  de: '/de'
};
