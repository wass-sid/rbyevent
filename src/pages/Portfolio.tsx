import React from "react";
import { Calendar, MapPin } from "lucide-react";
// j'imagine que ton hook est là
import vod1 from "../assets/VID-20250823-WA0001.mp4";
import vod2 from "../assets/VID-20250823-WA0002.mp4";
import vod3 from "../assets/VID-20250824-WA0001.mp4";
import vod4 from "../assets/VID-20250824-WA0002.mp4";
import vod5 from "../assets/WhatsApp Vidéo 2025-08-30 à 15.57.03_02919c78.mp4";
import salon1 from "../assets/salon1.jpg";
import salon2 from "../assets/salon2.png";
import salon3 from "../assets/salon3.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.webp";
import { useLanguage } from "../contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Djazagro 2025",
      brand: "Djazagro",
      location: t("portfolio_project_location_algiersafex"),
      date: t("portfolio_project_date_april2025"),
      image: img1,
      description: t("portfolio_project1_description"),
      services: [t("service_custom_stand"), t("service_hostesses")],
    },
    {
      id: 2,
      title: "Equip auto 2025",
      brand: "Equip auto",
      location: t("portfolio_project_location_algiersafex"),
      date: t("portfolio_project_date_february2025"),
      image: img2,
      description: t("portfolio_project2_description"),
      services: [
        t("service_modern_design"),
        t("service_custom_stand"),
        t("service_hostesses"),
      ],
    },
    {
      id: 5,
      title: "Pollutec 2025",
      brand: "Pollutec",
      location: t("portfolio_project_location_algiersafex"),
      date: t("portfolio_project_date_may2025"),
      image: img3,
      description: t("portfolio_project3_description"),
      services: [
        t("service_modern_design"),
        t("service_custom_stand"),
        t("service_hostesses"),
      ],
    },
  ];

  const projectsVod = [
    {
      id: 1,
      vod: vod1,
      title: "Djazagro",
      description: t("portfolio_vod_description"),
      services: [t("service_custom_stand")],
      poster: salon1,
      bg: "#202E59",
      time: "0:10",
    },
    {
      id: 2,
      vod: vod2,
      title: "Djazagro",
      description: t("portfolio_vod_description"),
      services: [t("service_custom_stand")],
      poster: salon1,
      bg: "#202E59",
      time: "0:32",
    },
    {
      id: 3,
      vod: vod3,
      title: "Equip auto",
      description: t("portfolio_vod_description"),
      services: [t("service_custom_stand")],
      poster: salon2,
      bg: "#233946",
      time: "0:36",
    },
    {
      id: 4,
      vod: vod4,
      title: "Djazagro",
      description: t("portfolio_vod_description"),
      services: [t("service_custom_stand")],
      poster: salon1,
      bg: "#202E59",
      time: "0:43",
    },
    {
      id: 5,
      vod: vod5,
      title: "Chocaf",
      description: t("portfolio_vod_description"),
      services: [t("service_custom_stand")],
      poster: salon3,
      bg: "black",
      time: "1:48",
    },
  ];

  return (
    <div className="pt-16">
      {/* Section titre */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {t("portfolio_title")}{" "}
            <span className="text-yellow-500">{t("portfolio_highlight")}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("portfolio_description")}
          </p>
        </div>
      </section>

      {/* Section vidéos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("portfolio_video_title")}{" "}
              <span className="text-yellow-500">{t("portfolio_video_highlight")}</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("portfolio_video_description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsVod.map((vod, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 bg-gray-900 flex items-center justify-center">
                  <video
                    controls
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: vod.bg,
                    }}
                    className="rounded-lg"
                    poster={vod.poster}
                  >
                    <source src={vod.vod} />
                    {t("video_not_supported")}
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {vod.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{vod.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{vod.time} min</span>
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
              {t("portfolio_more_videos")}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>{t("portfolio_contact")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section projets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

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
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      {t("services_title")}
                    </h4>
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
