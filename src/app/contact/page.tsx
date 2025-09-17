"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  Mail, Phone, MapPin, Clock, Send, Users, Heart, MessageSquare, 
  CheckCircle, BookOpen, Loader2
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
          type: 'contact',
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
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
                <MessageSquare className="mr-2" size={16} />
                Contact & Support
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Contactez</span>
              <br />
              <span className="text-white">REFLET</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Nous sommes là pour vous accompagner dans votre parcours de leadership féminin
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="mr-2" size={20} />
                Envoyer un message
              </Link>
              <Link
                href="#contact-info"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <MapPin className="mr-2" size={20} />
                Nos coordonnées
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="mr-2" size={16} />
              Formulaire de Contact
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Envoyez-nous un Message
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre parcours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de Contact */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg p-8 shadow-2xl border border-gray-100">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                  Remplissez le formulaire
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Message de statut */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={20} />
                        <p className="text-green-700 font-medium">
                          Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <MessageSquare className="text-red-500 mr-2" size={20} />
                        <p className="text-red-700 font-medium">
                          Erreur lors de l'envoi du message. Veuillez réessayer.
                        </p>
                      </div>
                    </div>
                  )}

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
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="+221 77 247 29 29"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="programmes">Informations sur les programmes</option>
                      <option value="inscription">Inscription à un programme</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="media">Demande média</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border-2 border-secondary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Décrivez votre demande ou votre projet..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Informations de Contact */}
            <motion.div
              id="contact-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-8">
                  Nos Coordonnées
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                        Adresse
                      </h4>
                      <p className="text-neutral-dark">
                        Siège Social : Bambilor<br />
                        Dakar, Sénégal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                      <Phone className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                        Téléphone
                      </h4>
                      <p className="text-neutral-dark">
                        77 229 89 74<br />
                        77 247 29 29
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                        Email
                      </h4>
                      <p className="text-neutral-dark">
                        presidente@reseaureflet.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                      <Clock className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                        Horaires
                      </h4>
                      <p className="text-neutral-dark">
                        Lundi - Vendredi : 8h - 18h<br />
                        Samedi : 9h - 13h<br />
                        Dimanche : Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                  Trouvez-nous
                </h3>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-48 rounded-lg flex items-center justify-center">
                  <a 
                    href="https://maps.app.goo.gl/4Vn4fEVSk8HKqLpu9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <MapPin className="mr-2" size={20} />
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="mr-2" size={16} />
              Questions Fréquentes
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              FAQ REFLET
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Comment puis-je m'inscrire à un programme REFLET ?",
                answer: "Vous pouvez vous inscrire en remplissant le formulaire de candidature en ligne sur notre site, ou en nous contactant directement. Nous organisons ensuite un entretien de motivation pour évaluer votre adéquation avec nos programmes."
              },
              {
                question: "Les programmes REFLET sont-ils gratuits ?",
                answer: "Oui, tous nos programmes sont entièrement gratuits grâce au soutien de nos partenaires et donateurs. Nous croyons que l'accès à la formation ne doit pas être un obstacle au développement du leadership féminin."
              },
              {
                question: "Quels sont les critères d'admission ?",
                answer: "Nous recherchons des femmes motivées, engagées et désireuses de développer leur leadership. L'âge, le niveau d'études ou l'expérience professionnelle ne sont pas des critères restrictifs. La motivation et l'engagement sont nos priorités."
              },
              {
                question: "Proposez-vous des formations en ligne ?",
                answer: "Oui, nous proposons un format hybride avec des sessions en ligne et en présentiel. Cela nous permet d'atteindre des femmes dans toutes les régions du Sénégal et même au-delà."
              },
              {
                question: "Comment puis-je devenir membre de REFLET ?",
                answer: "Pour devenir membre, vous devez participer à l'un de nos programmes et démontrer votre engagement envers nos valeurs. Les membres bénéficient d'un accès privilégié à nos événements et réseaux."
              }
            ].map((faq, index) => (
              <motion.div
                key={`faq-${faq.question.substring(0, 30).replace(/\s+/g, '-').toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-primary mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-dark leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
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
                Rejoignez REFLET
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Prête à Rejoindre REFLET ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Rejoignez notre communauté de femmes leaders et transformez votre potentiel
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center"><Link
                  href="/programmes"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="mr-2" size={20} />
                  Découvrir nos programmes
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
