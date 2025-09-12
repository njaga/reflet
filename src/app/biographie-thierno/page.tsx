"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Award, Star, Globe, Heart, Users, Shield, Calendar, MapPin, 
  ChevronRight, BookOpen, Crown
} from "lucide-react";

export default function BiographieThierno() {
  const achievements = [
    {
      year: "2001",
      title: "Accession au Khalifat",
      description: "Thierno Amadou Ba accède au trône de khalife de Bambilor, succédant à feu Thierno Djiby Ousmane Ba",
      icon: Crown,
      color: "from-primary to-primary/80"
    },
    {
      year: "2012",
      title: "Citoyen d'honneur",
      description: "Titre de citoyen d'honneur par la ville de Memphis et l'Association des Maires Noirs de l'État de Géorgie",
      icon: Award,
      color: "from-secondary to-secondary/80"
    },
    {
      year: "2017",
      title: "Chevalier du Mérite",
      description: "Élevé au rang de chevalier de l'ordre national du Mérite par le Gouvernement du Sénégal",
      icon: Star,
      color: "from-primary to-primary/80"
    },
    {
      year: "2021",
      title: "Top 50 Influents",
      description: "Classé parmi les 50 personnalités les plus influentes de l'Afrique de l'Ouest par le magazine Influences",
      icon: Globe,
      color: "from-secondary to-secondary/80"
    },
    {
      year: "2022",
      title: "Rencontre Vatican",
      description: "Rencontre historique au Vatican le 3 octobre 2022 pour discuter de la diplomatie religieuse",
      icon: Heart,
      color: "from-primary to-primary/80"
    },
    {
      year: "2023",
      title: "Reconnaissance UCAD",
      description: "L'Université Gaston Berger de Saint-Louis salue son travail remarquable en diplomatie religieuse",
      icon: BookOpen,
      color: "from-secondary to-secondary/80"
    }
  ];

  const initiatives = [
    {
      title: "ONG Fawzywanadiaty",
      description: "Organisation non gouvernementale œuvrant dans l'éducation, la santé, l'intégration des immigrés, la réinsertion sociale et la formation professionnelle",
      icon: Users,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Réseau REFLET",
      description: "Création du Réseau des Femmes Leaders autour de Thierno (REFLET) pour l'autonomisation et le soutien des femmes",
      icon: Heart,
      color: "bg-secondary/20 text-secondary"
    },
    {
      title: "Bambilor TV",
      description: "Chaîne communautaire contribuant à l'essor de la ville et à la visibilité de ses activités",
      icon: Globe,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Ziara Annuel",
      description: "Événement religieux et communautaire qui attire chaque année des milliers de personnes du Sénégal et de la diaspora",
      icon: Calendar,
      color: "bg-secondary/20 text-secondary"
    }
  ];

  const internationalEngagements = [
    {
      region: "Europe",
      description: "Tournées annuelles en France, Espagne, Belgique et Italie pour promouvoir le dialogue interreligieux",
      highlights: ["15ème tournée européenne", "Rencontres avec autorités locales", "Promotion de la diplomatie religieuse"]
    },
    {
      region: "États-Unis",
      description: "Engagement aux États-Unis avec reconnaissance officielle et rencontres avec des leaders communautaires",
      highlights: ["Citoyen d'honneur Memphis", "Association des Maires Noirs Géorgie", "Dialogue interreligieux"]
    },
    {
      region: "Vatican",
      description: "Rencontre historique au Vatican pour discuter de la géopolitique mondiale et des conflits interreligieux",
      highlights: ["3 octobre 2022", "Géopolitique mondiale", "Conditions des immigrés"]
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
                <Crown className="mr-2" size={16} />
                Khalif de Bambilor
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Thierno</span>
              <br />
              <span className="text-white">Amadou BA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Figure éminente du Sénégal, guide spirituel et diplomate religieux international
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#biographie"
                className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <BookOpen className="mr-2" size={20} />
                Découvrir sa biographie
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <Heart className="mr-2" size={20} />
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portrait Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="w-96 h-96 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/team/thierno-amadou-ba.jpg"
                      alt="Thierno Amadou BA"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center">
                    <Crown className="text-primary" size={40} />
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
                  <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                    Fils de feu Thierno Djiby Ousmane Ba
                  </h2>
                  <p className="text-neutral-dark leading-relaxed text-lg">
                    Thierno Amadou Ba est une figure éminente du Sénégal, reconnu pour son rôle de khalife de Bambilor et son engagement en faveur du développement social, religieux et humanitaire. Fils de feu Thierno Djiby Ousmane Ba, un érudit et guide spirituel musulman respecté, Thierno Amadou Ba a hérité du trône de khalife en 2001.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    Vision du Leadership
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    Dès son jeune âge, il a compris que les défis mondiaux du développement nécessitaient une ouverture bien au-delà de la seule science islamique, intégrant des initiatives sociales et culturelles dans son approche du leadership.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center">
                    <MapPin className="text-primary mr-2" size={18} />
                    <span className="text-neutral-dark font-medium">Bambilor, Sénégal</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-primary mr-2" size={18} />
                    <span className="text-neutral-dark font-medium">Khalif depuis 2001</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline des Réalisations */}
      <section id="biographie" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <Award className="mr-2" size={16} />
              Parcours & Réalisations
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Une Vie au Service du Développement
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Un parcours exceptionnel marqué par l'engagement social, religieux et humanitaire
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center`}>
                      <achievement.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold text-primary">{achievement.year}</span>
                        <h3 className="font-heading text-xl font-bold text-primary">{achievement.title}</h3>
                      </div>
                      <p className="text-neutral-dark leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <Heart className="mr-2" size={16} />
              Initiatives & Contributions
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Un Engagement Multiforme
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Des initiatives concrètes pour le développement humain et spirituel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 ${initiative.color} rounded-full flex items-center justify-center mb-4`}>
                  <initiative.icon size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {initiative.title}
                </h3>
                <p className="text-neutral-dark leading-relaxed">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement International */}
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
              Engagement International
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Diplomatie Religieuse Mondiale
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Un engagement qui dépasse les frontières pour promouvoir la paix et le dialogue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internationalEngagements.map((engagement, index) => (
              <motion.div
                key={engagement.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {engagement.region}
                  </h3>
                </div>
                <p className="text-neutral-dark leading-relaxed mb-4">
                  {engagement.description}
                </p>
                <ul className="space-y-2">
                  {engagement.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <ChevronRight className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm text-neutral-dark">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation Finale */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <Shield className="mx-auto mb-6" size={48} />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                Une Reconnaissance Internationale
              </h2>
              <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8">
                "L'homme auquel nous rendons hommage aujourd'hui, Thierno Amadou Ba, incarne une vision du leadership où la foi, l'engagement social et l'ouverture internationale se rencontrent. Il représente une source d'inspiration pour les générations futures et un modèle de diplomatie religieuse en action, contribuant activement à la construction d'un monde plus pacifique et plus solide."
              </blockquote>
              <div className="flex items-center justify-center gap-4 text-white/80">
                <Award size={20} />
                <span className="font-medium">Figure Éminente du Sénégal</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
