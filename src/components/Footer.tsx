import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logoDark.png';
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
                <img className='w-[150px]' src={logo} alt="logo" />
            </h3>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour des événements exceptionnels depuis plus de 10 ans.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-300">alger</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-300">+213 5 60 70 00 73</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-300">rbeyevents@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Location de stands</li>
              <li>Aménagement d'événements</li>
              <li>Personnel événementiel</li>
              <li>Conseil et accompagnement</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 RBeyEvents. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;