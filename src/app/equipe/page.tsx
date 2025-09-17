"use client";

import { motion } from "framer-motion";
import { 
  Mail, Award, Users, Target, Heart, Star, TrendingUp, Briefcase
} from "lucide-react";

export default function Equipe() {
  const teamMembers = [
    {
      name: "Binta Ndiaye BA",
      role: "Présidente du Réseau",
      bio: "Spécialiste en Banque-Assurance, Présidente du Réseau des Femmes Leaders autour de Thierno Amadou Ba. Adresse : Bignona, médina plateau (Ziguinchor-Sénégal).",
      image: "/images/team/fatou-diagne.jpg",
      linkedin: "#",
      email: "presidente@reseaureflet.com"
    },
    {
      name: "Yandé Gaye",
      role: "Secrétaire Général",
      bio: "Secrétaire Général du réseau REFLET, membre fondateur. Responsable de l'administration et de la coordination des activités du réseau.",
      image: "/images/team/mariama-sow.jpg",
      linkedin: "#",
      email: "yande.gaye@reseaureflet.com"
    }
  ];

  const teamStats = [
    { icon: Users, number: "2", label: "Membres fondateurs", color: "primary" },
    { icon: Award, number: "2022", label: "Année de création", color: "secondary" },
    { icon: Target, number: "Bambilor", label: "Siège social", color: "primary" },
    { icon: Heart, number: "30 Avril", label: "Date de création", color: "secondary" }
  ];

  const teamValues = [
    {
      icon: Heart,
      title: "Ouverture",
      description: "Le Réseau ne connaît pas de frontières géographiques, ni confrériques. Il entend regrouper toutes les femmes."
    },
    {
      icon: Award,
      title: "Solidarité",
      description: "Actions sociales envers les femmes en déficit de moyens matériels et financiers dû à un concours de circonstances défavorables."
    },
    {
      icon: Users,
      title: "Progrès",
      description: "Catalyseur des valeurs sûres de la gent féminine pour faire émerger une nouvelle génération de femmes élites."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Promotion de la culture de l'excellence pour permettre aux femmes d'atteindre les plus hauts niveaux de responsabilité."
    }
  ];

  const advisors = [
    {
      name: "Mme Mbengue",
      role: "Formatrice Leadership",
      bio: "Formatrice en leadership et développement personnel au CEDAF de Bambilor.",
      expertise: "Formation Leadership"
    },
    {
      name: "Mme Fatou GAYE",
      role: "Formatrice Transformation",
      bio: "Formatrice spécialisée dans la transformation des produits locaux, jus de fruits et sirop.",
      expertise: "Transformation Produits"
    },
    {
      name: "Mr BACHIR",
      role: "Formateur Leadership",
      bio: "Formateur en leadership au CEDAF de Bambilor pour le développement des compétences.",
      expertise: "Formation Leadership"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-24 overflow-hidden">
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
                <Users className="mr-2" size={16} />
                Notre Équipe Dirigeante
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Notre</span>
              <br />
              <span className="text-white">Équipe</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Des femmes leaders passionnées et engagées pour transformer le leadership féminin au Sénégal
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <Heart className="mr-2" size={20} />
                Rejoindre notre équipe
              </a>
              <a
                href="/programmes"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <Target className="mr-2" size={20} />
                Nos programmes
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
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
              Notre Équipe en Chiffres
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Une Équipe d'Exception
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Découvrez les forces qui font de notre équipe un moteur de transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={`team-stat-${stat.label}`}
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

      {/* Biographie Thierno Amadou BA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <Award className="mr-2" size={16} />
              Fondateur & Guide Spirituel
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Thierno Amadou BA
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Khalif de Bambilor et figure éminente du développement social et religieux
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/team/aminata-traore.jpg"
                      alt="Thierno Amadou BA"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center">
                    <Award className="text-primary" size={32} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Ascension au trône de khalifa
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    En 2001, Thierno Amadou Ba accède au trône de khalife de Bambilor, une position qui lui permet de renforcer son rôle de guide spirituel tout en menant des actions concrètes pour le développement de sa communauté. Sous sa direction, Bambilor est devenue une référence pour la promotion de l'unité et du développement endogène, où la dimension spirituelle se mêle harmonieusement aux besoins de modernité.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Initiatives et contributions
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    Thierno Amadou Ba a lancé de nombreuses initiatives destinées à promouvoir le développement humain et spirituel. Il est le fondateur de l'ONG Fawzywanadiaty, qui œuvre dans divers secteurs tels que l'éducation, la santé, l'intégration des immigrés, la réinsertion sociale, et la formation professionnelle. Une de ses contributions majeures a été la création du Réseau des Femmes Leaders autour de Thierno (REFLET).
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                  Engagement international
                </h3>
                <p className="text-neutral-dark leading-relaxed mb-4">
                  L'engagement de Thierno Amadou Ba dépasse les frontières sénégalaises. Il effectue des tournées annuelles en Europe et aux États-Unis, où il rencontre des autorités et des leaders communautaires pour promouvoir le dialogue interreligieux et la diplomatie religieuse.
                </p>
                <p className="text-neutral-dark leading-relaxed">
                  Une rencontre particulièrement marquante a eu lieu au Vatican le 3 octobre 2022, où il a discuté de la géopolitique mondiale, des conflits interreligieux et des conditions de vie des immigrés avec les autorités vaticanes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg p-8"
              >
                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                  Distinctions et honneurs
                </h3>
                <ul className="space-y-3 text-neutral-dark">
                  <li className="flex items-start">
                    <Star className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Citoyen d'honneur par la ville de Memphis et l'Association des Maires Noirs de l'État de Géorgie (2012)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Chevalier de l'ordre national du Mérite par le Gouvernement du Sénégal (2017)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-secondary mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>Classé parmi les 50 personnalités les plus influentes de l'Afrique de l'Ouest par le magazine Influences (2021)</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 text-center"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">
                Une reconnaissance internationale
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                L'homme auquel nous rendons hommage aujourd'hui, Thierno Amadou Ba, incarne une vision du leadership où la foi, l'engagement social et l'ouverture internationale se rencontrent. Il représente une source d'inspiration pour les générations futures et un modèle de diplomatie religieuse en action, contribuant activement à la construction d'un monde plus pacifique et plus solide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Équipe Principale */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <Users className="mr-2" size={16} />
              Équipe de Direction
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Les Femmes qui Dirigent REFLET
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Une équipe diversifiée et expérimentée, unie par la passion du leadership féminin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={`team-member-${member.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center">
                      <Award className="text-primary" size={16} />
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-4">{member.role}</p>
                  
                  <p className="text-neutral-dark text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <Heart className="mr-2" size={16} />
              Nos Valeurs
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Les Valeurs qui Nous Unissent
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Des principes fondamentaux qui guident notre action et façonnent notre culture d'équipe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={`team-value-${value.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseil Consultatif */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <Award className="mr-2" size={16} />
              Conseil Consultatif
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Conseillères d'Exception
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Des expertes reconnues qui nous accompagnent dans notre mission de transformation du leadership féminin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={`advisor-${advisor.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-primary" size={40} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Star className="text-white" size={16} />
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-4">{advisor.role}</p>
                  
                  <p className="text-neutral-dark text-sm leading-relaxed mb-6">
                    {advisor.bio}
                  </p>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm">
                    <Briefcase className="mr-1" size={12} />
                    {advisor.expertise}
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
                Rejoignez Notre Mission
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Prête à Transformer le Leadership Féminin ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez notre équipe de femmes leaders passionnées et participez à la transformation du leadership féminin au Sénégal
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Heart className="mr-2" size={20} />
                  Rejoindre notre équipe
                </a>
                <a
                  href="/programmes"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <Target className="mr-2" size={20} />
                  Découvrir nos programmes
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}