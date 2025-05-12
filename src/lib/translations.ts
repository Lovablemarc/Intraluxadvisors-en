
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
    en: "Fast, reliable compliance for your intra-EU trade",
    fr: "Conformité rapide et fiable pour vos échanges intra-UE",
    de: "Schnelle, zuverlässige Einhaltung für Ihren inner-europäischen Handel",
  },
  cta_quote: {
    en: "Request a Quote",
    fr: "Demander un devis",
    de: "Devis anfordern",
  },
  cta_learn: {
    en: "Learn More",
    fr: "En savoir plus",
    de: "Mehr erfahren",
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
    fr: "Processus en 4 étapes",
    de: "Unser 4-Stufen Ablauf",
  },
  process_step1_title: {
    en: "Kick-off & Onboarding",
    fr: "Kick-off & Onboarding",
    de: "Kick-off & Onboarding",
  },
  process_step1_desc: {
    en: "Set up access & data flows",
    fr: "Configurer l'accès et les flux de données",
    de: "Zugang & Datenflüsse einrichten",
  },
  process_step2_title: {
    en: "Data Collection & Validation",
    fr: "Collecte & Validation des données",
    de: "Datenerfassung & Validierung",
  },
  process_step2_desc: {
    en: "ERP/WMS integration",
    fr: "Intégration ERP/WMS",
    de: "ERP/WMS Integration",
  },
  process_step3_title: {
    en: "Client Review",
    fr: "Revue Client",
    de: "Kundenprüfung",
  },
  process_step3_desc: {
    en: "Approve draft via secure portal",
    fr: "Approuver l'ébauche via portail sécurisé",
    de: "Entwurf über sicheres Portal genehmigen",
  },
  process_step4_title: {
    en: "Filing & Reporting",
    fr: "Dépôt & Rapports",
    de: "Einreichung & Berichterstattung",
  },
  process_step4_desc: {
    en: "Submit to customs & deliver acknowledgment",
    fr: "Soumettre aux douanes & livrer l'accusé",
    de: "Zolleinreichung & Bestätigungszustellung",
  },

  // B2B Section
  b2b_title: {
    en: "B2B Solutions",
    fr: "Solutions B2B",
    de: "B2B-Lösungen",
  },
  b2b_intro: {
    en: "Tailored compliance solutions for businesses with complex intra-EU trade flows",
    fr: "Solutions de conformité sur mesure pour les entreprises aux flux commerciaux intra-UE complexes",
    de: "Maßgeschneiderte Compliance-Lösungen für Unternehmen mit komplexen inner-europäischen Handelsströmen",
  },
  b2b_portal: {
    en: "Partner Portal",
    fr: "Portail Partenaire",
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
    fr: "API & Intégrations",
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
    fr: "Checklist Excel",
    de: "Excel-Checkliste",
  },
  resources_faq: {
    en: "Online FAQ",
    fr: "FAQ en ligne",
    de: "Online FAQ",
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
    fr: "Témoignages Clients",
    de: "Kundenstimmen",
  },
  testimonial1_text: {
    en: "IntraLux Advisors has simplified our Intrastat compliance process immensely. Their team is responsive and truly understands Luxembourg's requirements.",
    fr: "IntraLux Advisors a considérablement simplifié notre processus de conformité Intrastat. Leur équipe est réactive et comprend parfaitement les exigences luxembourgeoises.",
    de: "IntraLux Advisors hat unseren Intrastat-Compliance-Prozess enorm vereinfacht. Ihr Team ist reaktionsschnell und versteht die luxemburgischen Anforderungen wirklich.",
  },
  testimonial1_author: {
    en: "Finance Director, Manufacturing Company",
    fr: "Directeur Financier, Entreprise Industrielle",
    de: "Finanzdirektor, Fertigungsunternehmen",
  },
  testimonial2_text: {
    en: "Outsourcing our Intrastat filings to IntraLux was one of our best decisions. They've reduced our administrative burden and eliminated costly errors.",
    fr: "Externaliser nos déclarations Intrastat à IntraLux a été l'une de nos meilleures décisions. Ils ont réduit notre charge administrative et éliminé les erreurs coûteuses.",
    de: "Die Auslagerung unserer Intrastat-Einreichungen an IntraLux war eine unserer besten Entscheidungen. Sie haben unseren Verwaltungsaufwand reduziert und kostspielige Fehler eliminiert.",
  },
  testimonial2_author: {
    en: "Logistics Manager, Distribution Company",
    fr: "Responsable Logistique, Société de Distribution",
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
    fr: "Société",
    de: "Firmenname",
  },
  contact_name: {
    en: "Contact Name",
    fr: "Nom",
    de: "Name",
  },
  contact_email: {
    en: "Email",
    fr: "Email",
    de: "Email",
  },
  contact_phone: {
    en: "Phone",
    fr: "Téléphone",
    de: "Telefon",
  },
  contact_invoices: {
    en: "Number of invoices per month",
    fr: "Nombre de factures/mois",
    de: "Anzahl Rechnungen/Monat",
  },
  contact_lines: {
    en: "Number of Intrastat lines per month",
    fr: "Nombre de lignes Intrastat/mois",
    de: "Anzahl Intrastat-Positionen/Monat",
  },
  contact_yearly: {
    en: "Estimated lines per year",
    fr: "Lignes estimées/an",
    de: "Geschätzte Positionen/Jahr",
  },
  contact_message: {
    en: "Message / Additional details",
    fr: "Message",
    de: "Nachricht",
  },
  contact_submit: {
    en: "Submit Request",
    fr: "Envoyer la demande",
    de: "Anfrage senden",
  },
  contact_address_title: {
    en: "Our Office",
    fr: "Notre Bureau",
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
  
  // Story content
  story_title: {
    en: "A Luxembourg Success Story",
    fr: "Une histoire de réussite luxembourgeoise",
    de: "Eine Luxemburger Erfolgsgeschichte",
  },
  story_p1: {
    en: "A growing company in Luxembourg has recently exceeded the Intrastat filing threshold due to a surge in intra-EU trade. Under Luxembourg law, businesses surpassing these limits must submit detailed monthly Intrastat declarations, reporting all goods dispatched and received within the EU.",
    fr: "Une entreprise en pleine croissance au Luxembourg a récemment dépassé le seuil de déclaration Intrastat en raison d'une augmentation des échanges intra-UE. Selon la loi luxembourgeoise, les entreprises dépassant ces limites doivent soumettre des déclarations Intrastat mensuelles détaillées, rapportant tous les biens expédiés et reçus au sein de l'UE.",
    de: "Ein wachsendes Unternehmen in Luxemburg hat aufgrund eines Anstiegs des inner-EU-Handels kürzlich die Intrastat-Meldeschwelle überschritten. Nach luxemburgischem Recht müssen Unternehmen, die diese Grenzen überschreiten, detaillierte monatliche Intrastat-Erklärungen einreichen und alle innerhalb der EU versandten und empfangenen Waren melden.",
  },
  challenge_title: {
    en: "The Challenge",
    fr: "Le Défi",
    de: "Die Herausforderung",
  },
  challenge_subtitle1: {
    en: "Complexity & Compliance Risk",
    fr: "Complexité et risque de conformité",
    de: "Komplexität und Compliance-Risiko",
  },
  challenge_p1: {
    en: "Intrastat rules are intricate, with constantly evolving thresholds, exemption criteria, and data-capture requirements. Misclassification of goods, incorrect unit values, or late submissions can trigger hefty administrative fines and audit scrutiny.",
    fr: "Les règles Intrastat sont complexes, avec des seuils, des critères d'exemption et des exigences de capture de données en constante évolution. Une mauvaise classification des marchandises, des valeurs unitaires incorrectes ou des soumissions tardives peuvent déclencher de lourdes amendes administratives et un examen d'audit.",
    de: "Die Intrastat-Regeln sind komplex, mit sich ständig ändernden Schwellenwerten, Ausnahmekriterien und Datenerfassungsanforderungen. Falsche Klassifizierung von Waren, falsche Einheitswerte oder verspätete Einreichungen können zu hohen Verwaltungsstrafen und Prüfungen führen.",
  },
  challenge_subtitle2: {
    en: "Resource Drain",
    fr: "Perte de ressources",
    de: "Ressourcenverschwendung",
  },
  challenge_p2: {
    en: "Internal teams lack the specialized expertise to track, compile, and validate all transaction details accurately. Significant time is diverted from core business activities—logistics, procurement, and finance—to manage Intrastat paperwork.",
    fr: "Les équipes internes manquent d'expertise spécialisée pour suivre, compiler et valider avec précision tous les détails des transactions. Un temps considérable est détourné des activités commerciales principales - logistique, achats et finances - pour gérer la paperasserie Intrastat.",
    de: "Internen Teams fehlt das Fachwissen, um alle Transaktionsdetails genau zu verfolgen, zusammenzustellen und zu validieren. Erhebliche Zeit wird von Kerngeschäftsaktivitäten - Logistik, Beschaffung und Finanzen - abgezweigt, um Intrastat-Papierkram zu verwalten.",
  },
  challenge_subtitle3: {
    en: "Data Integrity Challenges",
    fr: "Défis d'intégrité des données",
    de: "Herausforderungen bei der Datenintegrität",
  },
  challenge_p3: {
    en: "Disparate IT systems and manual data entry increase the likelihood of errors. Incomplete or inconsistent records undermine regulatory confidence and can lead to penalties.",
    fr: "Des systèmes informatiques disparates et la saisie manuelle des données augmentent la probabilité d'erreurs. Des enregistrements incomplets ou incohérents minent la confiance réglementaire et peuvent entraîner des pénalités.",
    de: "Unterschiedliche IT-Systeme und manuelle Dateneingabe erhöhen die Wahrscheinlichkeit von Fehlern. Unvollständige oder inkonsistente Aufzeichnungen untergraben das Vertrauen der Regulierungsbehörden und können zu Strafen führen.",
  },
  question_title: {
    en: "\"How Do We Do This?\"",
    fr: "\"Comment faire cela ?\"",
    de: "\"Wie machen wir das?\"",
  },
  question_p1: {
    en: "The decision-makers are asking:",
    fr: "Les décideurs se demandent :",
    de: "Die Entscheidungsträger fragen:",
  },
  question_q1: {
    en: "\"How can we ensure 100% compliance with Luxembourg's Intrastat requirements without overburdening our staff?\"",
    fr: "\"Comment pouvons-nous assurer une conformité à 100% avec les exigences Intrastat du Luxembourg sans surcharger notre personnel ?\"",
    de: "\"Wie können wir 100% Einhaltung der luxemburgischen Intrastat-Anforderungen sicherstellen, ohne unser Personal zu überlasten?\"",
  },
  question_q2: {
    en: "\"What processes or tools will give us timely, accurate reporting to avoid fines?\"",
    fr: "\"Quels processus ou outils nous donneront des rapports précis et opportuns pour éviter les amendes ?\"",
    de: "\"Welche Prozesse oder Tools werden uns rechtzeitige, genaue Berichte liefern, um Strafen zu vermeiden?\"",
  },
  question_q3: {
    en: "\"Is there an expert partner who understands our industry's specific flows and can integrate seamlessly with our ERP systems?\"",
    fr: "\"Existe-t-il un partenaire expert qui comprend les flux spécifiques de notre industrie et peut s'intégrer parfaitement à nos systèmes ERP ?\"",
    de: "\"Gibt es einen Expertenpartner, der die spezifischen Abläufe unserer Branche versteht und sich nahtlos in unsere ERP-Systeme integrieren kann?\"",
  },
  solution_title: {
    en: "Our Solution",
    fr: "Notre Solution",
    de: "Unsere Lösung",
  },
  solution_subtitle1: {
    en: "Dedicated Expertise",
    fr: "Expertise dédiée",
    de: "Dedizierte Expertise",
  },
  solution_p1: {
    en: "A team of Luxembourg-based Intrastat specialists who stay up-to-date on all regulatory changes and threshold adjustments.",
    fr: "Une équipe de spécialistes Intrastat basés au Luxembourg qui restent à jour sur tous les changements réglementaires et ajustements de seuils.",
    de: "Ein Team von in Luxemburg ansässigen Intrastat-Spezialisten, die über alle regulatorischen Änderungen und Schwellenwertanpassungen auf dem Laufenden bleiben.",
  },
  solution_subtitle2: {
    en: "End-to-End Process Management",
    fr: "Gestion de processus de bout en bout",
    de: "End-to-End Prozessmanagement",
  },
  solution_p2: {
    en: "From data extraction in your ERP to classification, validation, and e-submission of monthly declarations. Automated checks for unit values, commodity codes, and partner VAT statuses to eliminate human error.",
    fr: "De l'extraction de données dans votre ERP à la classification, la validation et la soumission électronique des déclarations mensuelles. Vérifications automatisées des valeurs unitaires, des codes de marchandises et des statuts de TVA des partenaires pour éliminer l'erreur humaine.",
    de: "Von der Datenextraktion in Ihrem ERP bis zur Klassifizierung, Validierung und elektronischen Einreichung monatlicher Meldungen. Automatisierte Prüfungen für Einheitswerte, Warencodes und MwSt-Status der Partner zur Eliminierung menschlicher Fehler.",
  },
  solution_subtitle3: {
    en: "Seamless Integration & Reporting",
    fr: "Intégration et rapports transparents",
    de: "Nahtlose Integration & Berichterstattung",
  },
  solution_p3: {
    en: "Tailored connectors to your existing systems (SAP, Oracle, Microsoft Dynamics, etc.) for real-time data synchronization. Custom dashboards provide instant visibility into impending thresholds and past filing performance.",
    fr: "Connecteurs sur mesure à vos systèmes existants (SAP, Oracle, Microsoft Dynamics, etc.) pour une synchronisation des données en temps réel. Des tableaux de bord personnalisés offrent une visibilité instantanée sur les seuils imminents et les performances de dépôt passées.",
    de: "Maßgeschneiderte Konnektoren für Ihre bestehenden Systeme (SAP, Oracle, Microsoft Dynamics usw.) für Echtzeit-Datensynchronisierung. Benutzerdefinierte Dashboards bieten sofortige Einblicke in bevorstehende Schwellenwerte und bisherige Einreichungsleistungen.",
  },
  solution_subtitle4: {
    en: "Audit Support & Peace of Mind",
    fr: "Support d'audit et tranquillité d'esprit",
    de: "Audit-Unterstützung & Seelenfrieden",
  },
  solution_p4: {
    en: "Full documentation package and expert backup in case of Luxembourg Customs queries or audits. Proactive alerts on legislative updates and recommended actions.",
    fr: "Ensemble complet de documentation et sauvegarde d'experts en cas de requêtes ou d'audits des douanes luxembourgeoises. Alertes proactives sur les mises à jour législatives et les actions recommandées.",
    de: "Vollständiges Dokumentationspaket und Expertenunterstützung bei Anfragen oder Prüfungen durch den luxemburgischen Zoll. Proaktive Warnungen zu gesetzlichen Aktualisierungen und empfohlenen Maßnahmen.",
  },
  final_cta: {
    en: "Don't let Intrastat obligations slow down your growth or expose you to penalties. Contact IntraLux Advisors today for a free consultation, and discover how our tailored compliance services can safeguard your Luxembourg operations—so you can focus on expanding your business with confidence!",
    fr: "Ne laissez pas les obligations Intrastat ralentir votre croissance ou vous exposer à des pénalités. Contactez IntraLux Advisors aujourd'hui pour une consultation gratuite, et découvrez comment nos services de conformité sur mesure peuvent protéger vos opérations au Luxembourg—afin que vous puissiez vous concentrer sur le développement de votre entreprise en toute confiance !",
    de: "Lassen Sie nicht zu, dass Intrastat-Verpflichtungen Ihr Wachstum verlangsamen oder Sie Strafen aussetzen. Kontaktieren Sie IntraLux Advisors noch heute für eine kostenlose Beratung und entdecken Sie, wie unsere maßgeschneiderten Compliance-Dienste Ihre Luxemburger Geschäfte schützen können—damit Sie sich mit Zuversicht auf die Expansion Ihres Unternehmens konzentrieren können!",
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
