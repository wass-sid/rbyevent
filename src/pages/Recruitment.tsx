import React from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Star, Users, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  phone: string;
  email: string;
  experience: string;
  cv: FileList;
  photo: FileList;
}

const Recruitment = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // In a real application, you would handle file uploads and form submission
    console.log('Form data:', data);
    
    // Create email content
    const emailSubject = 'Nouvelle candidature - Hôte/Hôtesse d\'événements';
    const emailBody = `
Nouvelle candidature reçue :

Nom : ${data.lastName}
Prénom : ${data.firstName}
Âge : ${data.age}
Ville : ${data.city}
Téléphone : ${data.phone}
Email : ${data.email}
Expérience : ${data.experience}

CV et photo en pièces jointes.
    `;

    // Create mailto link
    const mailtoLink = `mailto:rbeyevents@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const benefits = [
    {
      icon: Star,
      title: 'Événements Prestigieux',
      description: 'Participez aux plus grands salons et foires de France et d\'Europe'
    },
    {
      icon: Users,
      title: 'Équipe Dynamique',
      description: 'Rejoignez une équipe passionnée et professionnelle'
    },
    {
      icon: Globe,
      title: 'Missions Variées',
      description: 'Découvrez différents secteurs et élargissez vos compétences'
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('recruitmentTitle')}</h1>
          <h2 className="text-2xl mb-6">{t('recruitmentSubtitle')}</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {t('recruitmentIntro')}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Formulaire de Candidature
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('firstName')} *
                  </label>
                  <input
                    type="text"
                    {...register('firstName', { required: 'Le prénom est requis' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('lastName')} *
                  </label>
                  <input
                    type="text"
                    {...register('lastName', { required: 'Le nom est requis' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('age')} *
                  </label>
                  <input
                    type="number"
                    {...register('age', { required: 'L\'âge est requis', min: 18, max: 65 })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Votre âge"
                  />
                  {errors.age && (
                    <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('city')} *
                  </label>
                  <input
                    type="text"
                    {...register('city', { required: 'La ville est requise' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Votre ville"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('phone')} *
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Le téléphone est requis' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Votre téléphone"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: 'L\'email est requis' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('experience')} *
                </label>
                <textarea
                  {...register('experience', { required: 'L\'expérience est requise' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Décrivez votre expérience dans l'événementiel, l'accueil ou la vente..."
                />
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('uploadCV')} * (PDF, Word)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      {...register('cv', { required: 'Le CV est requis' })}
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                    />
                    <Upload className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  </div>
                  {errors.cv && (
                    <p className="mt-1 text-sm text-red-600">{errors.cv.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('uploadPhoto')} * (JPG, PNG)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      {...register('photo', { required: 'La photo est requise' })}
                      accept=".jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                    />
                    <Upload className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  </div>
                  {errors.photo && (
                    <p className="mt-1 text-sm text-red-600">{errors.photo.message}</p>
                  )}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t('send')} ma Candidature
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;