"use client";

import { motion } from "framer-motion";
import { 
  Calendar, MapPin, Users, Heart, Camera, ArrowLeft, Share2, Download
} from "lucide-react";

export default function Galerie() {
  const events = [
    {
      id: 1,
      title: "Lancement Officiel du Réseau REFLET",
      date: "25 Décembre 2023",
      location: "Théâtre National Daniel Sorano",
      description: "Lancement officiel du réseau au Théâtre National Daniel Sorano avec financement de dix membres du réseau.",
      images: [
        "/images/galerie/lancement-sorano-1.jpg",
        "/images/galerie/lancement-sorano-2.jpg",
        "/images/galerie/lancement-sorano-3.jpg",
        "/images/galerie/lancement-sorano-4.jpg"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Formation Leadership par Mr BACHIR",
      date: "20 Août 2022",
      location: "CEDAF, Bambilor",
      description: "Première formation sur le Leadership dispensée par Mr BACHIR au CEDAF de Bambilor, marquant le début des activités du réseau.",
      images: [
        "/images/galerie/formation-bachir-1.jpg",
        "/images/galerie/formation-bachir-2.jpg",
        "/images/galerie/formation-bachir-3.jpg"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Don de Moustiquaires aux Sinistrés",
      date: "7 Septembre 2022",
      location: "Bambilor",
      description: "Action sociale parrainée par le Khalife Thierno Amadou BA pour venir en aide aux sinistrés de Bambilor.",
      images: [
        "/images/galerie/don-moustiquaires-1.jpg",
        "/images/galerie/don-moustiquaires-2.jpg",
        "/images/galerie/don-moustiquaires-3.jpg"
      ],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
                <Camera className="mr-2" size={16} />
                Galerie Photos
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Galerie</span>
              <br />
              <span className="text-white">REFLET</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Découvrez nos moments forts en images : formations, événements et actions sociales
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/actualites"
                className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="mr-2" size={20} />
                Retour aux actualités
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <Heart className="mr-2" size={20} />
                Nous rejoindre
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Événement Principal */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {events.filter(event => event.featured).map((event) => (
            <motion.div
              key={`featured-event-${event.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Événement Principal
                    </span>
                    <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </span>
                  </div>

                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                    {event.title}
                  </h2>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center">
                      <Calendar className="text-primary mr-2" size={18} />
                      <span className="text-neutral-dark font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-primary mr-2" size={18} />
                      <span className="text-neutral-dark">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-neutral-dark leading-relaxed mb-8 text-lg">
                    {event.description}
                  </p>

                  {/* Grille d'images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {event.images.map((image, index) => (
                      <motion.div
                        key={`image-${event.id}-${index}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group/image relative overflow-hidden rounded-lg cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${event.title} ${index + 1}`}
                          className="w-full h-48 object-cover group-hover/image:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex gap-2">
                            <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                              <Share2 size={16} />
                            </button>
                            <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                              <Download size={16} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Autres Événements */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <Camera className="mr-2" size={16} />
              Autres Événements
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Moments Forts
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Découvrez les autres événements marquants de REFLET en images
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.filter(event => !event.featured).map((event, index) => (
              <motion.div
                key={`event-${event.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                  {/* Images de l'événement */}
                  <div className="grid grid-cols-3 gap-0">
                    {event.images.slice(0, 3).map((image, imgIndex) => (
                      <div key={`event-${event.id}-img-${imgIndex}`} className="relative overflow-hidden h-32">
                        <img
                          src={image}
                          alt={`${event.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {event.date}
                      </span>
                      <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {event.location}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-primary mb-3 leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-neutral-dark text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-neutral-dark">
                        <Camera size={12} />
                        <span>{event.images.length} photos</span>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                        Voir toutes les photos →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
                <Heart className="mr-2" size={16} />
                Rejoignez REFLET
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Participez à Nos Prochains Événements
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez REFLET et participez à nos formations, événements et actions sociales
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Heart className="mr-2" size={20} />
                  Rejoindre REFLET
                </a>
                <a
                  href="/programmes"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <Users className="mr-2" size={20} />
                  Nos programmes
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
