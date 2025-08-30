import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  salon: string;
  message: string;
  Nombrehote: number;
  Nombreassis: number;
  matierels: string;
}

const Contact = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

const onSubmit = (data: ContactFormData) => {
    emailjs.send(
      "service_c1tow8b",   // Remplace par ton Service ID
      "template_jcrmxgf",  // Remplace par ton Template ID
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        salon: data.salon,
        message: data.message,
        nombrehote: data.Nombrehote,
        nombreassis: data.Nombreassis,
        matierels: data.matierels,
      },
      "fnrV-YzVRPUMOL6py"    // Remplace par ton Public Key
    ).then(() => {
      alert("Message envoyé avec succès !");
      reset();
    }).catch((err) => {
      console.error(err);
      alert("Erreur lors de l'envoi du message.");
    });
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           {t('contactdes')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
               {t('ourcontact')}
              </h2>
              
              <div className="space-y-6">
      

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('phone')}</h3>
                    <p className="text-gray-600">+213 5 60 70 00 73</p>
                    <p className="text-gray-600">+213 5 60 45 68 60</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <FaWhatsapp className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('Whatsapp')}</h3>
                    <p className="text-gray-600">+213 5 60 70 00 73</p>
                    <p className="text-gray-600">+213 5 60 45 68 60</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('email')}</h3>
                    <p className="text-gray-600">rbeyevents@gmail.com</p>
                  </div>
                </div>

              
              </div>

              {/* Map */}
             
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
             {t('sendMail')}
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                   {t('fullNameLabel')}
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Le nom est requis' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder={t('fullNamePlaceholder')}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                       {t('emailLabel')}
                      </label>
                      <input
                        type="email"
                        {...register('email', { required: 'L\'email est requis' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder={t('emailPlaceholder')}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phoneLabel')}
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder={t('phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('salonLabel')}
                    </label>
                    <input
                      type="text"
                      {...register('salon')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder={t('salonPlaceholder')}
                    />
                  </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('hostessesLabel')}</label>
                  <input
                    type="number"
                    {...register('Nombrehote', { required: 'Nombre de Hôtesses' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder={t('hostessesPlaceholder')}
                  />
              
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('setupAssistantsLabel')}</label>
                     <input
                    type="number"
                    {...register('Nombreassis', { required: 'Nombre Assistants requis'})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder={t('setupAssistantsPlaceholder')}
                  />
                
                </div>
              </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                     {t('equipmentLabel')}
                    </label>
                    <input
                      type="text"
                      {...register('matierels')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder={t('equipmentPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("messageLabel")}
                    </label>
                    <textarea
                      {...register('message', { required: 'Le message est requis' })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder={t('messagePlaceholder')}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {t('send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;