import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    portfolio: 'Réalisations',
    recruitment: 'Recrutement',
    contact: 'Contact',
    
    // Home page
    heroTitle: 'RBey Events Événementielle',
    heroSubtitle: 'Votre partenaire de confiance pour des stands exceptionnels',
    heroDescription: 'RB Events propose une gamme complète de services pour accompagner les entreprises dans leurs événements professionnels. Nous mettons à disposition des stewards et des hôtesses (OTS) pour l’accueil et l’orientation des visiteurs, des assistants de montage pour la mise en place des stands, ainsi que des solutions de conception et réalisation de stands personnalisés. Nous accompagnons également les entreprises en facilitant la participation de leurs exposants aux salons. En complément, nous proposons la location d’équipements (PC, imprimantes, systèmes de check-in/check-out, etc.) afin de garantir une organisation fluide et professionnelle',
    discoverButton: 'Découvrez nos réalisations',
    
    // Services
    servicesTitle: 'Nos Services',
    serviceStands: 'conception des stands',
    serviceStandsDesc: 'Stands modulaires et sur-mesure pour tous types d\'événements',
    serviceSetup: 'assistants de montage',
    serviceSetupDesc: 'Design et installation complète de vos espaces événementiels',
    serviceStaff: 'Hôtesses, stewards',
    serviceStaffDesc: 'Hôtesses et hôtes qualifiés pour représenter votre marque',
    
    // Partners
    partnersTitle: 'Nos Partenaires de Confiance',
    
    // Testimonials
    testimonialsTitle: 'Témoignages Clients',
    
    // Recruitment
    recruitmentTitle: 'Rejoignez Notre Équipe',
    recruitmentSubtitle: 'Devenez Hôtesse/Hôte d\'Événements',
    recruitmentIntro: 'Vous aimez les événements ? Rejoignez notre équipe d\'hôtesses pour représenter de grandes marques dans des foires nationales et internationales.',
    
    // Contact
    contactTitle: 'Contactez-nous',
    address: 'Adresse',
    phone: 'Téléphone',
    email: 'Email',
    
    // Forms
    firstName: 'Prénom',
    lastName: 'Nom',
    age: 'Âge',
    city: 'Ville',
    experience: 'Expérience',
    message: 'Message',
    send: 'Envoyer',
    uploadCV: 'Télécharger CV',
    uploadPhoto: 'Photo professionnelle',
  },
  en: {
    // Navigation
    home: 'Home',
    portfolio: 'Portfolio',
    recruitment: 'Recruitment',
    contact: 'Contact',
    
    // Home page
    heroTitle: 'RBey Events',
    heroSubtitle: 'Your trusted partner for exceptional exhibition stands',
 heroDescription: "RB Events offers a full range of services to support companies in their professional events. We provide stewards and hostesses (OTS) for welcoming and guiding visitors, setup assistants for stand installation, as well as customized stand design and construction solutions. We also support companies by facilitating their exhibitors’ participation in trade shows. In addition, we offer equipment rental (PCs, printers, check-in/check-out systems, etc.) to ensure smooth and professional event organization.",
    discoverButton: 'Discover our projects',
    
    // Services
    servicesTitle: 'Our Services',
    serviceStands: 'Stand Rental',
    serviceStandsDesc: 'Modular and custom stands for all types of events',
    serviceSetup: 'Setup & Design',
    serviceSetupDesc: 'Complete design and installation of your event spaces',
    serviceStaff: 'Event Staff',
    serviceStaffDesc: 'Qualified hostesses and hosts to represent your brand',
    
    // Partners
    partnersTitle: 'Our Trusted Partners',
    
    // Testimonials
    testimonialsTitle: 'Client Testimonials',
    
    // Recruitment
    recruitmentTitle: 'Join Our Team',
    recruitmentSubtitle: 'Become an Event Host/Hostess',
    recruitmentIntro: 'Do you love events? Join our team of hostesses to represent major brands at national and international trade shows.',
    
    // Contact
    contactTitle: 'Contact Us',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    
    // Forms
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    city: 'City',
    experience: 'Experience',
    message: 'Message',
    send: 'Send',
    uploadCV: 'Upload CV',
    uploadPhoto: 'Professional photo',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};