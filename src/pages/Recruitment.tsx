import React from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Star, Users, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from "emailjs-com";

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

// Convertir un fichier en base64
const toBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const Recruitment = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Conversion des fichiers en base64
      const cvFile = data.cv[0];
      const photoFile = data.photo[0];

      const cvBase64 = await toBase64(cvFile);
      const photoBase64 = await toBase64(photoFile);

      // Envoi avec EmailJS
      await emailjs.send(
        "service_x9o8bg6",   // Remplace par ton service ID
        "template_d9u51qf",  // Remplace par ton template ID
        {
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
          city: data.city,
          phone: data.phone,
          email: data.email,
          experience: data.experience,
          cv_base64: cvBase64,
          photo_base64: photoBase64,
        },
        "C06uufgh2BHldO0Gz"    // Remplace par ta public key
      );

      alert("Candidature envoyée avec succès !");
    } catch (err) {
      console.error("Erreur:", err);
      alert("Erreur lors de l'envoi.");
    }
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('lastName')} *
                  </label>
                  <input
                    type="text"
                    {...register('lastName', { required: 'Le nom est requis' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Votre nom"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('age')} *</label>
                  <input
                    type="number"
                    {...register('age', { required: 'L\'âge est requis', min: 18, max: 65 })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Votre âge"
                  />
                  {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('city')} *</label>
                  <input
                    type="text"
                    {...register('city', { required: 'La ville est requise' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Votre ville"
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('phone')} *</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Le téléphone est requis' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Votre téléphone"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')} *</label>
                  <input
                    type="email"
                    {...register('email', { required: 'L\'email est requis' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="votre@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('experience')} *</label>
                <textarea
                  {...register('experience', { required: 'L\'expérience est requise' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Décrivez votre expérience..."
                />
                {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('uploadCV')} *</label>
                  <input
                    type="file"
                    {...register('cv', { required: 'Le CV est requis' })}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  {errors.cv && <p className="mt-1 text-sm text-red-600">{errors.cv.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('uploadPhoto')} *</label>
                  <input
                    type="file"
                    {...register('photo', { required: 'La photo est requise' })}
                    accept=".jpg,.jpeg,.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                  {errors.photo && <p className="mt-1 text-sm text-red-600">{errors.photo.message}</p>}
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
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
