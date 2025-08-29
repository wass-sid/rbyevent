import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Settings, Award, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import pers from "../assets/person.jpg"
import serv2 from "../assets/service2.jpg"
import serv1 from "../assets/service1.jpg"

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Settings,
      title: t('serviceStands'),
      description: t('serviceStandsDesc'),
      image: serv2
    },
    {
      icon: Award,
      title: t('serviceSetup'),
      description: t('serviceSetupDesc'),
      image: serv1
    },
    {
      icon: Users,
      title: t('serviceStaff'),
      description: t('serviceStaffDesc'),
      image: pers
    }
  ];

  const partners = [
    'Djazagro', 'Pollutec', 'Équip Auto', 'CHOCAF'
  ];

  const testimonials = [
    {
      text: "Une équipe professionnelle qui a parfaitement réalisé notre stand au Salon de l'Auto. Service impeccable !",
      author: "Marie Dubois",
      company: "Directrice Marketing - AutoFrance"
    },
    {
      text: "Grâce à RBey Events, notre présence au salon a été un véritable succès. Personnel qualifié et stands magnifiques.",
      author: "Pierre Martin",
      company: "CEO - TechInnovation"
    },
    {
      text: "10 ans de collaboration et toujours la même excellence. Je recommande vivement leurs services.",
      author: "Sophie Leclerc",
      company: "Responsable Événements - LuxuryBrands"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url(${pers})`
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-yellow-500">{t('heroTitle').split(' ')[0]}</span>
            <span className="ml-4">{t('heroTitle').split(' ')[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>{t('discoverButton')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('servicesTitle')}</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-yellow-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('partnersTitle')}</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonialsTitle')}</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;