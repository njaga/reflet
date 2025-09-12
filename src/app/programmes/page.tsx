"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, Target, Calendar, Clock, MapPin, CheckCircle, Heart, Star, 
  Globe, Zap, TrendingUp, Lightbulb, Award, BookOpen, ArrowRight
} from "lucide-react";

export default function Programmes() {
  const programmes = [
    {
      id: 1,
      title: "Formation Leadership et Développement Personnel",
      description: "Formation dispensée par Mme Mbengue au CEDAF de Bambilor pour développer les compétences en leadership des membres du réseau.",
      image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
      duration: "1 jour",
      format: "Présentiel",
      level: "Tous niveaux",
      price: "Gratuit",
      features: [
        "Formation en leadership situationnel",
        "Développement personnel",
        "Renforcement des capacités",
        "Échanges et partage d'expériences",
        "Certification REFLET"
      ],
      schedule: "9 Septembre 2023",
      location: "CEDAF, Bambilor",
      slug: "formation-leadership-developpement-personnel"
    },
    {
      id: 2,
      title: "Formation Transformation des Produits Locaux",
      description: "Formation sur la transformation des produits locaux, jus de fruits et sirop dispensée par Mme Fatou GAYE.",
      image: "/images/actualites/partenariat-ucad.png",
      duration: "1 jour",
      format: "Présentiel",
      level: "Débutant",
      price: "Gratuit",
      features: [
        "Transformation des produits locaux",
        "Fabrication de jus de fruits",
        "Production de sirop",
        "Techniques de conservation",
        "Accès aux ressources locales"
      ],
      schedule: "11 Septembre 2023",
      location: "Rufisque",
      slug: "formation-transformation-produits-locaux"
    },
    {
      id: 3,
      title: "Actions Sociales et Solidarité",
      description: "Programme d'actions sociales envers les femmes en déficit de moyens matériels et financiers.",
      image: "/images/actualites/temoignage-khadija-startup.png",
      duration: "Continue",
      format: "Actions sur le terrain",
      level: "Tous niveaux",
      price: "Gratuit",
      features: [
        "Don de moustiquaires aux sinistrés",
        "Dépistage médical gratuit",
        "Soutien aux femmes vulnérables",
        "Actions de solidarité",
        "Appui aux communautés"
      ],
      schedule: "Selon les besoins",
      location: "Bambilor et environs",
      slug: "actions-sociales-solidarite"
    },
    {
      id: 4,
      title: "Financement et Appui aux Membres",
      description: "Programme de financement et d'appui aux membres du réseau pour leur développement économique.",
      image: "/images/actualites/financement-membres-reseau.jpeg",
      duration: "Sur mesure",
      format: "Individuel",
      level: "Membres actifs",
      price: "Gratuit",
      features: [
        "Financement de projets",
        "Appui financier aux membres",
        "Accompagnement personnalisé",
        "Suivi des projets financés",
        "Réseau de soutien"
      ],
      schedule: "25-30 Décembre 2023",
      location: "Théâtre National Daniel Sorano",
      slug: "financement-appui-membres"
    }
  ];

  const programmeStats = [
    { icon: Users, number: "2022", label: "Année de création", color: "primary" },
    { icon: Target, number: "Bambilor", label: "Siège social", color: "secondary" },
    { icon: Award, number: "30 Avril", label: "Date de création", color: "primary" },
    { icon: Heart, number: "2023", label: "Lancement officiel", color: "secondary" }
  ];

  const programmeBenefits = [
    {
      icon: Lightbulb,
      title: "Formation de Qualité",
      description: "Programmes conçus par des expertes et adaptés au contexte sénégalais."
    },
    {
      icon: Users,
      title: "Réseau Solidaire",
      description: "Rejoignez une communauté de femmes leaders motivées et bienveillantes."
    },
    {
      icon: Target,
      title: "Accompagnement Personnalisé",
      description: "Mentorat et coaching adaptés à vos objectifs et votre niveau."
    },
    {
      icon: Award,
      title: "Certification Reconue",
      description: "Obtenez des certifications valorisées sur le marché du travail."
    }
  ];

  const programmeFormats = [
    {
      icon: Users,
      title: "Présentiel",
      description: "Formations en face-à-face pour une interaction maximale",
      color: "primary"
    },
    {
      icon: Globe,
      title: "En ligne",
      description: "Formations digitales flexibles et accessibles",
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Hybride",
      description: "Combinaison optimale de présentiel et digital",
      color: "primary"
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
                <BookOpen className="mr-2" size={16} />
                Nos Programmes de Formation
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Nos</span>
              <br />
              <span className="text-white">Programmes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Des formations complètes pour développer votre leadership et transformer votre carrière professionnelle
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <Heart className="mr-2" size={20} />
                S'inscrire maintenant
              </Link>
              <Link
                href="#programmes"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <ArrowRight className="mr-2" size={20} />
                Découvrir les programmes
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programme Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="mr-2" size={16} />
              Nos Résultats
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Des Programmes qui Transforment
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Découvrez l'impact de nos programmes sur le développement du leadership féminin au Sénégal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {programmeStats.map((stat, index) => (
              <motion.div
                key={`programme-stat-${stat.label}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    stat.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/20'
                  }`}>
                    <stat.icon className={`${stat.color === 'primary' ? 'text-primary' : 'text-secondary'}`} size={32} />
                  </div>
                  <h3 className="font-heading text-4xl font-bold mb-2 text-primary">{stat.number}</h3>
                  <p className="text-neutral-dark">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <Star className="mr-2" size={16} />
              Pourquoi Choisir REFLET
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Les Avantages de Nos Programmes
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Des formations conçues spécifiquement pour répondre aux besoins des femmes leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programmeBenefits.map((benefit, index) => (
              <motion.div
                key={`programme-benefit-${benefit.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Formats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <Globe className="mr-2" size={16} />
              Formats de Formation
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Des Formats Adaptés à Vos Besoins
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Choisissez le format qui correspond le mieux à votre emploi du temps et vos préférences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programmeFormats.map((format, index) => (
              <motion.div
                key={`programme-format-${format.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow h-full">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    format.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/20'
                  }`}>
                    <format.icon className={`${format.color === 'primary' ? 'text-primary' : 'text-secondary'}`} size={32} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">
                    {format.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    {format.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Grid */}
      <section id="programmes" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <BookOpen className="mr-2" size={16} />
              Nos Programmes
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Découvrez Nos Formations
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Des programmes complets adaptés à vos besoins et votre niveau
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programmes.map((programme, index) => (
              <motion.div
                key={`programme-${programme.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                  {/* Image du programme */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={programme.image}
                      alt={programme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="inline-flex items-center px-3 py-1 bg-secondary text-primary rounded-full text-sm font-semibold mb-2">
                        <Award className="mr-1" size={12} />
                        {programme.price}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {programme.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-neutral-dark leading-relaxed mb-6">
                      {programme.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="text-primary mr-2" size={16} />
                        <span className="text-sm text-neutral-dark">{programme.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="text-primary mr-2" size={16} />
                        <span className="text-sm text-neutral-dark">{programme.format}</span>
                      </div>
                      <div className="flex items-center">
                        <Target className="text-primary mr-2" size={16} />
                        <span className="text-sm text-neutral-dark">{programme.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="text-primary mr-2" size={16} />
                        <span className="text-sm text-neutral-dark">{programme.schedule}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <MapPin className="text-primary mr-2" size={16} />
                        <span className="text-sm text-neutral-dark">{programme.location}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-heading text-lg font-semibold text-primary mb-3">
                        Ce que vous allez apprendre :
                      </h4>
                      <ul className="space-y-2">
                        {programme.features.slice(0, 3).map((feature, idx) => (
                          <li key={`feature-${programme.id}-${feature.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`} className="flex items-start">
                            <CheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                            <span className="text-sm text-neutral-dark">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={`/programmes/${programme.slug}`}
                        className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                      >
                        Voir les détails
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 bg-secondary text-primary py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-center"
                      >
                        S'inscrire
                      </Link>
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
                Prête à Transformer Votre Carrière ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez des centaines de femmes qui ont déjà transformé leur leadership grâce à nos programmes REFLET
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Heart className="mr-2" size={20} />
                  S'inscrire maintenant
                </Link>
                <Link
                  href="/equipe"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <Users className="mr-2" size={20} />
                  Rencontrer l'équipe
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}