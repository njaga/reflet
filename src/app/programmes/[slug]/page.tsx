"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, Target, Clock, CheckCircle, Heart, Star, Quote, 
  Award, BookOpen, ArrowLeft, User, Mail
} from "lucide-react";

export default function ProgrammeDetail({ params }: { readonly params: { slug: string } }) {
  // Données des programmes (en production, cela viendrait d'une API)
  const programmes = [
    {
      id: 1,
      title: "Leadership Féminin Transformationnel",
      description: "Un programme complet pour développer vos compétences en leadership et diriger avec confiance et authenticité.",
      image: "/images/programmes/leadership-feminin.jpg",
      duration: "6 mois",
      format: "Hybride",
      level: "Intermédiaire",
      price: "Gratuit",
      features: [
        "Formation en leadership situationnel",
        "Coaching individuel et de groupe",
        "Réseautage avec des femmes leaders",
        "Projet d'impact communautaire",
        "Certification REFLET"
      ],
      schedule: "Samedis 9h-17h",
      location: "Dakar, Sénégal",
      slug: "leadership-feminin-transformationnel",
      detailedDescription: "Ce programme révolutionnaire vous accompagne dans votre transformation en leader authentique et efficace. À travers des modules pratiques, des sessions de coaching personnalisées et des projets concrets, vous développerez les compétences essentielles du leadership moderne.",
      objectives: [
        "Développer votre style de leadership personnel",
        "Maîtriser la communication assertive et l'écoute active",
        "Gérer efficacement les équipes et les conflits",
        "Créer un impact positif dans votre communauté",
        "Construire un réseau de femmes leaders inspirantes"
      ],
      curriculum: [
        {
          module: "Module 1: Fondements du Leadership",
          duration: "2 semaines",
          topics: ["Définition du leadership", "Styles de leadership", "Leadership situationnel", "Développement de l'authenticité"]
        },
        {
          module: "Module 2: Communication & Influence",
          duration: "3 semaines",
          topics: ["Communication assertive", "Écoute active", "Prise de parole en public", "Négociation et influence"]
        },
        {
          module: "Module 3: Gestion d'Équipe",
          duration: "4 semaines",
          topics: ["Recrutement et sélection", "Motivation d'équipe", "Gestion des conflits", "Délégation efficace"]
        },
        {
          module: "Module 4: Impact Communautaire",
          duration: "3 semaines",
          topics: ["Leadership communautaire", "Projets d'impact social", "Partenariats stratégiques", "Mesure d'impact"]
        }
      ],
      instructors: [
        {
          name: "Aminata Diallo",
          role: "Formatrice Principale",
          expertise: "Leadership Transformationnel",
          image: "/images/team/aminata-diallo.jpg"
        },
        {
          name: "Fatou Sarr",
          role: "Coach Certifiée",
          expertise: "Développement Personnel",
          image: "/images/team/fatou-sarr.jpg"
        }
      ],
      testimonials: [
        {
          name: "Mariama Ba",
          role: "Directrice Marketing",
          company: "TechSenegal",
          quote: "Ce programme a transformé ma façon de diriger. Je suis maintenant plus confiante et efficace dans mon rôle de manager.",
          rating: 5
        },
        {
          name: "Khadija Ndiaye",
          role: "Entrepreneure",
          company: "Green Solutions",
          quote: "Les techniques apprises m'ont aidée à développer mon entreprise et à inspirer mon équipe.",
          rating: 5
        }
      ]
    }
  ];

  const programme = programmes.find(p => p.slug === params.slug);

  if (!programme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Programme non trouvé</h1>
          <Link href="/programmes" className="text-secondary hover:underline">Retour aux programmes</Link>
        </div>
      </div>
    );
  }

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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/programmes" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6">
              <ArrowLeft className="mr-2" size={16} />
              Retour aux programmes
            </Link>
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <BookOpen className="mr-2" size={16} />
              Programme Détaillé
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {programme.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {programme.detailedDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-white/90">
                  <Clock className="mr-2" size={20} />
                  <span>{programme.duration}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Users className="mr-2" size={20} />
                  <span>{programme.format}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Target className="mr-2" size={20} />
                  <span>{programme.level}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Heart className="mr-2" size={20} />
                  S'inscrire maintenant
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <BookOpen className="mr-2" size={20} />
                  Voir le programme
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-3">
                    <Award className="mr-2" size={16} />
                    {programme.price}
                  </div>
                  <p className="text-white/90 text-lg">{programme.schedule}</p>
                  <p className="text-white/80">{programme.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectifs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <Target className="mr-2" size={16} />
              Objectifs du Programme
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Ce Que Vous Allez Accomplir
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Des objectifs concrets et mesurables pour votre transformation en leader
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programme.objectives.map((objective, index) => (
              <motion.div
                key={`objective-${objective}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Objectif {index + 1}
                </h3>
                <p className="text-neutral-dark leading-relaxed">
                  {objective}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <BookOpen className="mr-2" size={16} />
              Programme Détaillé
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Curriculum Complet
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Un parcours structuré et progressif pour votre développement
            </p>
          </motion.div>

          <div className="space-y-8">
            {programme.curriculum.map((module, index) => (
              <motion.div
                key={`module-${module.module}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                      {module.module}
                    </h3>
                    <p className="text-secondary font-semibold">{module.duration}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={`topic-${module.module}-${topic}`} className="flex items-center">
                      <CheckCircle className="text-secondary mr-3 flex-shrink-0" size={16} />
                      <span className="text-neutral-dark">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructeurs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <Users className="mr-2" size={16} />
              Nos Formatrices
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Apprenez des Meilleures
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Des expertes passionnées qui vous accompagneront dans votre parcours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programme.instructors.map((instructor, index) => (
              <motion.div
                key={`instructor-${instructor.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-secondary to-secondary/80 rounded-full mx-auto mb-6 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {instructor.name}
                </h3>
                <p className="text-secondary font-semibold mb-2">{instructor.role}</p>
                <p className="text-neutral-dark mb-4">{instructor.expertise}</p>
                <div className="flex justify-center space-x-4">
                  <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                    <Mail size={20} />
                  </Link>
                  <Link href="/equipe" className="text-primary hover:text-primary/80 transition-colors">
                    <User size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <Quote className="mr-2" size={16} />
              Témoignages
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Elles Témoignent
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Découvrez les transformations vécues par nos participantes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programme.testimonials.map((testimonial, index) => (
              <motion.div
                key={`testimonial-${testimonial.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mr-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary font-semibold text-sm">{testimonial.role}</p>
                    <p className="text-neutral-dark text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-neutral-dark italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={`star-${testimonial.name}-${i}`} className="text-secondary fill-current" size={16} />
                  ))}
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
                <Heart className="mr-2" size={16} />
                Rejoignez Ce Programme
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Prête à Transformer Votre Leadership ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez des dizaines de femmes qui ont déjà transformé leur leadership grâce à ce programme
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Heart className="mr-2" size={20} />
                  S'inscrire maintenant
                </a>
                <a
                  href="/programmes"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Voir tous les programmes
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
