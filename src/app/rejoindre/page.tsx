"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  Send, Users, Heart, MessageSquare, BookOpen, User, Calendar, Target,
  Star, Globe, TrendingUp, Loader2, CheckCircle
} from "lucide-react";

export default function Rejoindre() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    profession: '',
    experience: '',
    education: '',
    sector: '',
    motivation: '',
    goals: '',
    contribution: '',
    programmes: [] as string[],
    availability: '',
    format: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      programmes: checked 
        ? [...prev.programmes, value]
        : prev.programmes.filter(p => p !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'inscription',
          ...formData,
          age: parseInt(formData.age)
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          city: '',
          profession: '',
          experience: '',
          education: '',
          sector: '',
          motivation: '',
          goals: '',
          contribution: '',
          programmes: [],
          availability: '',
          format: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
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

          {/* Design moderne avec 3 avantages principaux */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Avantage Principal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20 h-full">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-white" size={40} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                        Formations & Développement Complet
                      </h3>
                      <p className="text-neutral-dark leading-relaxed mb-4">
                        Accès gratuit à tous nos programmes de formation en leadership, entrepreneuriat et développement personnel. 
                        Mentorat personnalisé et certifications reconnues pour booster votre carrière.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Formations gratuites</span>
                        <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">Mentorat</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Certifications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Avantage Réseau */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border border-secondary/20 h-full">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Users className="text-primary" size={40} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-4">
                      Réseau Solidaire
                    </h3>
                    <p className="text-neutral-dark leading-relaxed mb-4">
                      Rejoignez une communauté de femmes leaders motivées et bienveillantes qui s'entraident et grandissent ensemble.
                    </p>
                    <div className="text-center">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">Communauté</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Avantages secondaires en format horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
              {
                icon: Heart,
                title: "Impact Social",
                  description: "Projets qui transforment positivement la société"
              },
              {
                icon: Globe,
                title: "Opportunités",
                  description: "Partenariats et collaborations exclusives"
              },
              {
                icon: TrendingUp,
                  title: "Croissance",
                  description: "Développement personnel et professionnel continu"
              }
            ].map((avantage, index) => (
              <motion.div
                key={`avantage-${avantage.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <avantage.icon className="text-primary" size={24} />
                  </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-primary mb-1">
                    {avantage.title}
                        </h4>
                        <p className="text-neutral-dark text-sm leading-relaxed">
                    {avantage.description}
                  </p>
                      </div>
                    </div>
                </div>
              </motion.div>
            ))}
            </div>
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
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Message de statut */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <p className="text-green-700 font-medium">
                        Candidature envoyée avec succès ! Nous vous contacterons dans les 48h pour la suite du processus.
                      </p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <MessageSquare className="text-red-500 mr-2" size={20} />
                      <p className="text-red-700 font-medium">
                        Erreur lors de l'envoi de la candidature. Veuillez réessayer.
                      </p>
                    </div>
                  </div>
                )}

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
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="+221 77 247 29 29"
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
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="18"
                        max="65"
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.profession}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.education}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.motivation}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.goals}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.contribution}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                            checked={formData.programmes.includes(programme)}
                            onChange={handleCheckboxChange}
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
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                        value={formData.format}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                    disabled={isSubmitting}
                    className="inline-flex items-center px-12 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Soumission en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Soumettre ma candidature
                      </>
                    )}
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
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <MessageSquare className="mr-2" size={20} />
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
