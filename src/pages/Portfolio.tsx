import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import vod1 from "../assets/VID-20250823-WA0001.mp4"
import vod2 from "../assets/VID-20250823-WA0002.mp4"
import vod3 from "../assets/VID-20250824-WA0001.mp4"
import vod4 from "../assets/VID-20250824-WA0002.mp4"
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Salon de l\'Auto 2024',
      brand: 'Mercedes-Benz',
      location: 'Paris Expo',
      date: 'Mars 2024',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Stand de 200m² avec espace VIP et présentation de 6 véhicules premium',
      services: ['Stand sur-mesure', 'Hôtesses bilingues', 'Animation']
    },
    {
      id: 2,
      title: 'Tech Innovation Fair 2024',
      brand: 'TechCorp',
      location: 'Lyon Convention Center',
      date: 'Février 2024',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Espace technologique interactif avec démonstrations en live',
      services: ['Design moderne', 'Personnel technique', 'Multimédia']
    },
    {
      id: 3,
      title: 'Foire Internationale du Luxe',
      brand: 'LuxuryBrands',
      location: 'Monaco',
      date: 'Janvier 2024',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Stand premium avec matériaux nobles et éclairage sur-mesure',
      services: ['Matériaux premium', 'Éclairage LED', 'Service concierge']
    },
    {
      id: 4,
      title: 'Salon de la Mode 2023',
      brand: 'Fashion Week',
      location: 'Paris Fashion Week',
      date: 'Octobre 2023',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Espace défilé et showroom avec podium et vestiaires',
      services: ['Podium professionnel', 'Éclairage scénique', 'Mannequins']
    },
    {
      id: 5,
      title: 'Expo Alimentaire Bio',
      brand: 'BioBrand',
      location: 'Marseille',
      date: 'Septembre 2023',
      image: 'https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Stand écologique avec dégustations et espace convivial',
      services: ['Matériaux éco-responsables', 'Dégustation', 'Animation culinaire']
    },
    {
      id: 6,
      title: 'Salon de l\'Immobilier',
      brand: 'PropertyGroup',
      location: 'Nice',
      date: 'Août 2023',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Espace de conseil avec maquettes et présentations 3D',
      services: ['Écrans interactifs', 'Maquettes', 'Conseillers spécialisés']
    }
  ];
 const projectsVod = [
    {
      id: 1,
      vod:vod1,
      title: 'Djazagro',
      description: 'Stand de 200m² avec espace VIP ',
      services: ['Stand sur-mesure']
    },
    {
      id: 2,
      vod:vod2,
      title: 'Djazagro',
      description: 'Stand de 200m² avec espace VIP ',
      services: ['Stand sur-mesure']
    },

    {
      id: 3,
       vod:vod3,
      title: 'Equip auto',
      description: 'Stand de 200m² avec espace VIP ',
      services: ['Stand sur-mesure']
    },
      {
      id: 4,
      vod:vod4,
      title: 'Djazagro',
      description: 'Stand de 200m² avec espace VIP ',
      services: ['Stand sur-mesure']
    },
  ]
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Nos <span className="text-yellow-500">Réalisations</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos projets les plus marquants et l'excellence de nos prestations 
            à travers une sélection de stands exceptionnels.
          </p>
        </div>
      </section>


 <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Réalisations en <span className="text-yellow-500">Vidéo</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre personnel en action lors des plus grands événements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video placeholders - Replace with your actual videos */}
    {projectsVod.map((vod,index)=>(
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 bg-gray-900 flex items-center justify-center">
             
                  <video controls style={{ width: "100%",height: "100%" }} className="rounded-lg">
                  <source src={vod.vod} />
                  Your browser does not support the video tag.
                </video>
                 
           
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vod.title}</h3>
                <p className="text-gray-600 mb-4">{vod.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2:30 min</span>
                {vod.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                </div>
              </div>
            </div>
    ))}

    
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Vous souhaitez voir plus de nos réalisations en vidéo ?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Contactez-nous</span>
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.brand}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Services fournis :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;