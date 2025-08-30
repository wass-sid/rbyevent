import React, { createContext, useContext, useState } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    portfolio: "Réalisations",
    recruitment: "Recrutement",
    contact: "Contact",

    // Home page
    heroTitle: "RBey Events Événementielle",
    heroSubtitle: "Votre partenaire de confiance pour des stands exceptionnels",
    heroDescription:
      "RB Events propose une gamme complète de services pour accompagner les entreprises dans leurs événements professionnels. Nous mettons à disposition des stewards et des hôtesses (OTS) pour l’accueil et l’orientation des visiteurs, des assistants de montage pour la mise en place des stands, ainsi que des solutions de conception et réalisation de stands personnalisés. Nous accompagnons également les entreprises en facilitant la participation de leurs exposants aux salons. En complément, nous proposons la location d’équipements (PC, imprimantes, systèmes de check-in/check-out, etc.) afin de garantir une organisation fluide et professionnelle",
    discoverButton: "Découvrez nos réalisations",

    // Services
    servicesTitle: "Nos Services",
    serviceStands: "conception des stands",
    serviceStandsDesc:
      "Stands modulaires et sur-mesure pour tous types d'événements",
    serviceSetup: "assistants de montage",
    serviceSetupDesc:
      "Design et installation complète de vos espaces événementiels",
    serviceStaff: "Hôtesses, stewards",
    serviceStaffDesc:
      "Hôtesses et hôtes qualifiés pour représenter votre marque",

    // Partners
    partnersTitle: "Nos Partenaires de Confiance",

    // Testimonials
    testimonialsTitle: "Témoignages Clients",

    // Recruitment
    recruitmentTitle: "Rejoignez Notre Équipe",
    recruitmentSubtitle: "Devenez Hôtesse/Hôte d'Événements",
    recruitmentIntro:
      "Vous aimez les événements ? Rejoignez notre équipe d'hôtesses pour représenter de grandes marques dans des foires nationales et internationales.",
    FormulaireTitle: "Formulaire de Candidature",
    subtitle1: "Événements Prestigieux",
    subsubtitle1:
      "Participez aux plus grands salons et foires d'Algerie et d'afrique",
    subtitle2: "Équipe Dynamique",
    subsubtitle2: "Rejoignez une équipe passionnée et professionnelle",
    subtitle3: "Missions Variées",
    subsubtitle3: "Découvrez différents secteurs et élargissez vos compétences",
    // Contact
    contactTitle: "Contactez-nous",
    contactdes:
      "Une question ? Un projet ? Notre équipe est là pour vous accompagner dans la réalisation de vos événements exceptionnels.",
    address: "Adresse",
    phone: "Téléphone",
    email: "Email",
    ourcontact: " Nos Coordonnées",
    sendMail: "Envoyez-nous un mail pour un devis",

    // Forms
    firstName: "Prénom",
    lastName: "Nom",
    age: "Âge",
    city: "Ville",
    experience: "Expérience",
    message: "Message",
    send: "Envoyer",
    uploadCV: "Télécharger CV",
    uploadPhoto: "Photo professionnelle",
    fullNameLabel: "Nom complet *",
    fullNamePlaceholder: "Votre nom complet",
    emailLabel: "Email *",
    emailPlaceholder: "votre@email.com",
    phoneLabel: "Téléphone",
    phonePlaceholder: "Votre téléphone",
    salonLabel: "Salon",
    salonPlaceholder: "Nom de votre salon",
    hostessesLabel: "Nombre de Hôtesses / Stewards *",
    hostessesPlaceholder: "Nombre de Hôtesses / Stewards",
    setupAssistantsLabel: "Nombre Assistants de montage *",
    setupAssistantsPlaceholder: "Nombre Assistants de montage",
    equipmentLabel: "Matériels nécessaires",
    equipmentPlaceholder: "Citer les matériels nécessaires",
    messageLabel: "Message *",
    messagePlaceholder: "Décrivez votre projet ou votre demande...",
    placeholder_firstName: "Votre prénom",
    placeholder_lastName: "Votre nom",
    placeholder_age: "Votre âge",
    placeholder_city: "Votre ville",
    placeholder_phone: "Votre téléphone",
    placeholder_email: "votre@email.com",
    placeholder_experience: "Votre expérience",
    placeholder_experienceDescription: "Décrivez votre expérience...",
    // TITRES & SECTIONS
    portfolio_title: "Nos",
    portfolio_highlight: "Réalisations",
    portfolio_description:
      "Découvrez nos projets les plus marquants et l'excellence de nos prestations à travers une sélection de stands exceptionnels.",
    portfolio_video_title: "Nos Réalisations en",
    portfolio_video_highlight: "Vidéo",
    portfolio_video_description:
      "Découvrez notre personnel en action lors des plus grands événements",
    portfolio_more_videos:
      "Vous souhaitez voir plus de nos réalisations en vidéo ?",
    portfolio_contact: "Contactez-nous",

    // PROJETS (lieu + dates)
    portfolio_project_location_algiersafex: "Alger safex",
    portfolio_project_date_april2025: "Avril 2025",
    portfolio_project_date_february2025: "Février 2025",
    portfolio_project_date_may2025: "Mai 2025",

    // DESCRIPTIONS DE PROJETS
    portfolio_project1_description:
      "Stand de 200m² avec espace VIP et présentation",
    portfolio_project2_description:
      "Espace technologique interactif avec démonstrations en live",
    portfolio_project3_description: "Stand écologique avec espace convivial",

    // VIDEOS
    portfolio_vod_description: "Stand de 200m² avec espace VIP",
    video_not_supported: "Votre navigateur ne supporte pas la balise vidéo.",

    // SERVICES
    services_title: "Services fournis :",
    service_custom_stand: "Stand sur-mesure",
    service_hostesses: "Hôtesses",
    service_modern_design: "Design moderne",
  },
  en: {
    // Navigation
    home: "Home",
    portfolio: "Portfolio",
    recruitment: "Recruitment",
    contact: "Contact",

    // Home page
    heroTitle: "RBey Events",
    heroSubtitle: "Your trusted partner for exceptional exhibition stands",
    heroDescription:
      "RB Events offers a full range of services to support companies in their professional events. We provide stewards and hostesses (OTS) for welcoming and guiding visitors, setup assistants for stand installation, as well as customized stand design and construction solutions. We also support companies by facilitating their exhibitors’ participation in trade shows. In addition, we offer equipment rental (PCs, printers, check-in/check-out systems, etc.) to ensure smooth and professional event organization.",
    discoverButton: "Discover our projects",

    // Services
    servicesTitle: "Our Services",
    serviceStands: "Stand Rental",
    serviceStandsDesc: "Modular and custom stands for all types of events",
    serviceSetup: "Setup & Design",
    serviceSetupDesc: "Complete design and installation of your event spaces",
    serviceStaff: "Event Staff",
    serviceStaffDesc: "Qualified hostesses and hosts to represent your brand",

    // Partners
    partnersTitle: "Our Trusted Partners",

    // Testimonials
    testimonialsTitle: "Client Testimonials",

    // Recruitment
    recruitmentTitle: "Join Our Team",
    recruitmentSubtitle: "Become an Event Host/Hostess",
    recruitmentIntro:
      "Do you love events? Join our team of hostesses to represent major brands at national and international trade shows.",
    FormulaireTitle: "FormulaireTitle",
    subtitle1: "Prestigious Events",
    subsubtitle1:
      "Take part in the biggest trade shows and fairs in Algeria and Africa",
    subtitle2: "Dynamic Team",
    subsubtitle2: "Join a passionate and professional team",
    subtitle3: "Diverse Missions",
    subsubtitle3: "Discover different sectors and broaden your skills",

    // Contact
    contactTitle: "Contact Us",
    contactdes:
      "A question? A project? Our team is here to support you in bringing your exceptional events to life",
    address: "Address",
    phone: "Phone",
    email: "Email",
    ourcontact: "Contact Information",
    sendMail: "Send us an email for a quote",

    // Forms
    firstName: "First Name",
    lastName: "Last Name",
    age: "Age",
    city: "City",
    experience: "Experience",
    message: "Message",
    send: "Send",
    uploadCV: "Upload CV",
    uploadPhoto: "Professional photo",
    fullNameLabel: "Full Name *",
    fullNamePlaceholder: "Your full name",
    emailLabel: "Email *",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone",
    phonePlaceholder: "Your phone number",
    salonLabel: "Salon",
    salonPlaceholder: "Name of your salon",
    hostessesLabel: "Number of Hostesses / Stewards *",
    hostessesPlaceholder: "Number of Hostesses / Stewards",
    setupAssistantsLabel: "Number of Setup Assistants *",
    setupAssistantsPlaceholder: "Number of Setup Assistants",
    equipmentLabel: "Required Equipment",
    equipmentPlaceholder: "List the required equipment",
    messageLabel: "Message *",
    messagePlaceholder: "Describe your project or request...",
    placeholder_firstName: "Your first name",
    placeholder_lastName: "Your last name",
    placeholder_age: "Your age",
    placeholder_city: "Your city",
    placeholder_phone: "Your phone number",
    placeholder_email: "your@email.com",
    placeholder_experience: "Your experience",
    placeholder_experienceDescription: "Describe your experience...",
    // TITLES & SECTIONS
    portfolio_title: "Our",
    portfolio_highlight: "Achievements",
    portfolio_description:
      "Discover our most remarkable projects and the excellence of our services through a selection of exceptional stands.",
    portfolio_video_title: "Our Achievements in",
    portfolio_video_highlight: "Video",
    portfolio_video_description:
      "See our staff in action at the biggest events",
    portfolio_more_videos:
      "Would you like to see more of our video achievements?",
    portfolio_contact: "Contact us",

    // PROJECTS (location + dates)
    portfolio_project_location_algiersafex: "Algiers Safex",
    portfolio_project_date_april2025: "April 2025",
    portfolio_project_date_february2025: "February 2025",
    portfolio_project_date_may2025: "May 2025",

    // PROJECT DESCRIPTIONS
    portfolio_project1_description:
      "200m² booth with VIP area and presentation space",
    portfolio_project2_description:
      "Interactive tech space with live demonstrations",
    portfolio_project3_description: "Eco-friendly booth with a welcoming space",

    // VIDEOS
    portfolio_vod_description: "200m² booth with VIP area",
    video_not_supported: "Your browser does not support the video tag.",

    // SERVICES
    services_title: "Services provided:",
    service_custom_stand: "Custom stand",
    service_hostesses: "Hostesses",
    service_modern_design: "Modern design",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["fr"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
