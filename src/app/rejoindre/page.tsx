"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Send, Users, Heart, MessageSquare, BookOpen, User, Calendar, Target, Award,
  Star, Quote, Globe, TrendingUp, Lightbulb
} from "lucide-react";

export default function Rejoindre() {
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
                <Heart className="mr-2" size={16} />
                Rejoindre REFLET
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Rejoignez</span>
              <br />
              <span className="text-white">REFLET</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Rejoignez notre communauté de femmes leaders et transformez votre potentiel en impact positif
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#inscription-form"
                className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <User className="mr-2" size={20} />
                S'inscrire maintenant
              </Link>
              <Link
                href="#avantages"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <Star className="mr-2" size={20} />
                Découvrir les avantages
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section id="avantages" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <Star className="mr-2" size={16} />
              Pourquoi Rejoindre REFLET
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Les Avantages d'Être Membre
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Découvrez tous les bénéfices de faire partie de notre communauté de femmes leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Formations Gratuites",
                description: "Accès à tous nos programmes de formation en leadership et entrepreneuriat"
              },
              {
                icon: Users,
                title: "Réseau Solidaire",
                description: "Rejoignez une communauté de femmes leaders motivées et bienveillantes"
              },
              {
                icon: Target,
                title: "Accompagnement",
                description: "Mentorat et coaching personnalisé pour votre développement"
              },
              {
                icon: Award,
                title: "Certification",
                description: "Obtenez des certifications reconnues sur le marché du travail"
              },
              {
                icon: Heart,
                title: "Impact Social",
                description: "Participez à des projets qui transforment positivement la société"
              },
              {
                icon: Globe,
                title: "Opportunités",
                description: "Accès à des opportunités de partenariat et de collaboration"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Participez à des projets innovants et avant-gardistes"
              },
              {
                icon: TrendingUp,
                title: "Développement",
                description: "Croissance personnelle et professionnelle continue"
              }
            ].map((avantage, index) => (
              <motion.div
                key={`avantage-${avantage.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <avantage.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4 text-center">
                    {avantage.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed text-center">
                    {avantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'Inscription */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <Calendar className="mr-2" size={16} />
              Comment Rejoindre
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Processus d'Inscription
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Un processus simple et transparent pour rejoindre notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Candidature",
                description: "Remplissez le formulaire de candidature en ligne",
                icon: MessageSquare
              },
              {
                step: "2",
                title: "Entretien",
                description: "Entretien de motivation avec notre équipe",
                icon: Users
              },
              {
                step: "3",
                title: "Sélection",
                description: "Évaluation et sélection des candidates",
                icon: Target
              },
              {
                step: "4",
                title: "Intégration",
                description: "Bienvenue dans la communauté REFLET",
                icon: Heart
              }
            ].map((etape, index) => (
              <motion.div
                key={`etape-${etape.step}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <etape.icon className="text-white" size={32} />
                  </div>
                  <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {etape.step}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">
                    {etape.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire d'Inscription */}
      <section id="inscription-form" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <User className="mr-2" size={16} />
              Formulaire d'Inscription
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Rejoignez REFLET
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Remplissez ce formulaire pour candidater à notre programme de leadership féminin
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-2xl border border-gray-100"
            >
              <form className="space-y-8">
                {/* Informations Personnelles */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                    Informations Personnelles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-dark mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-neutral-dark mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+221 XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-neutral-dark mb-2">
                        Âge *
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        required
                        min="18"
                        max="65"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Votre âge"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-neutral-dark mb-2">
                        Ville *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Votre ville"
                      />
                    </div>
                  </div>
                </div>

                {/* Informations Professionnelles */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                    Informations Professionnelles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="profession" className="block text-sm font-medium text-neutral-dark mb-2">
                        Profession *
                      </label>
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Votre profession"
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-neutral-dark mb-2">
                        Années d'expérience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="0-2">0-2 ans</option>
                        <option value="3-5">3-5 ans</option>
                        <option value="6-10">6-10 ans</option>
                        <option value="10+">Plus de 10 ans</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-neutral-dark mb-2">
                        Niveau d'études
                      </label>
                      <select
                        id="education"
                        name="education"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="bac">Baccalauréat</option>
                        <option value="licence">Licence</option>
                        <option value="master">Master</option>
                        <option value="doctorat">Doctorat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sector" className="block text-sm font-medium text-neutral-dark mb-2">
                        Secteur d'activité
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="education">Éducation</option>
                        <option value="sante">Santé</option>
                        <option value="technologie">Technologie</option>
                        <option value="commerce">Commerce</option>
                        <option value="finance">Finance</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                    Motivation et Objectifs
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-neutral-dark mb-2">
                        Pourquoi souhaitez-vous rejoindre REFLET ? *
                      </label>
                      <textarea
                        id="motivation"
                        name="motivation"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Décrivez vos motivations et ce que vous attendez de REFLET..."
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="goals" className="block text-sm font-medium text-neutral-dark mb-2">
                        Quels sont vos objectifs de développement ?
                      </label>
                      <textarea
                        id="goals"
                        name="goals"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Décrivez vos objectifs personnels et professionnels..."
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="contribution" className="block text-sm font-medium text-neutral-dark mb-2">
                        Comment pensez-vous contribuer à la communauté REFLET ?
                      </label>
                      <textarea
                        id="contribution"
                        name="contribution"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Décrivez comment vous souhaitez contribuer à notre mission..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Programme d'Intérêt */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                    Programme d'Intérêt
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm text-neutral-dark mb-4">
                      Quel(s) programme(s) vous intéresse(nt) le plus ? (Sélectionnez un ou plusieurs)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Leadership Féminin Transformationnel",
                        "Entrepreneuriat Féminin",
                        "Développement Personnel & Confiance",
                        "Mentorat & Coaching"
                      ].map((programme) => (
                        <label key={`programme-${programme}`} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="programmes"
                            value={programme}
                            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-neutral-dark">{programme}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Disponibilité */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                    Disponibilité
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-neutral-dark mb-2">
                        Disponibilité pour les formations
                      </label>
                      <select
                        id="availability"
                        name="availability"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="weekend">Week-ends</option>
                        <option value="evening">Soirées</option>
                        <option value="morning">Matinées</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="format" className="block text-sm font-medium text-neutral-dark mb-2">
                        Format préféré
                      </label>
                      <select
                        id="format"
                        name="format"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="presentiel">Présentiel</option>
                        <option value="en-ligne">En ligne</option>
                        <option value="hybride">Hybride</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Consentement */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-neutral-dark">
                      J'accepte que mes données personnelles soient utilisées par REFLET dans le cadre de ma candidature et de mon éventuelle participation aux programmes. 
                      Je comprends que ces informations seront traitées de manière confidentielle et conformément à la politique de confidentialité de REFLET. *
                    </label>
                  </div>
                </div>

                {/* Bouton de Soumission */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-12 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl text-lg"
                  >
                    <Send className="mr-2" size={20} />
                    Soumettre ma candidature
                  </button>
                  <p className="text-sm text-neutral-dark mt-4">
                    Nous vous contacterons dans les 48h pour la suite du processus
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
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
              Découvrez les parcours inspirants de nos membres
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aminata Diallo",
                role: "Directrice Marketing",
                company: "TechSenegal",
                quote: "REFLET m'a donné la confiance et les outils nécessaires pour diriger avec assurance. C'est une communauté incroyable !",
                image: "/api/placeholder/80/80"
              },
              {
                name: "Fatou Sarr",
                role: "Entrepreneure",
                company: "Green Solutions",
                quote: "Grâce à REFLET, j'ai pu développer mon entreprise et créer un impact positif dans ma communauté.",
                image: "/api/placeholder/80/80"
              },
              {
                name: "Mariama Ba",
                role: "Manager",
                company: "Banque Internationale",
                quote: "Le mentorat et les formations de REFLET ont transformé ma carrière et ma vision du leadership.",
                image: "/api/placeholder/80/80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={`testimonial-${testimonial.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-secondary to-secondary/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="text-primary" size={32} />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-primary mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary font-semibold text-sm mb-1">{testimonial.role}</p>
                    <p className="text-neutral-dark text-sm">{testimonial.company}</p>
                  </div>
                  <blockquote className="text-neutral-dark italic text-center leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
                Prête à Commencer ?
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Rejoignez REFLET Aujourd'hui
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transformez votre potentiel en impact positif et faites partie d'une communauté de femmes leaders exceptionnelles
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="#inscription-form"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <User className="mr-2" size={20} />
                  S'inscrire maintenant
                </Link>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <MessageSquare className="mr-2" size={20} />
                  Nous contacter
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
