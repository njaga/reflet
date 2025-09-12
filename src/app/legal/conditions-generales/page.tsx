"use client";

import { motion } from "framer-motion";
import { 
  Shield, FileText, Users, Globe, Heart, ExternalLink, Mail, CheckCircle, AlertTriangle
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function ConditionsGenerales() {
  const conditions = [
    {
      icon: Users,
      title: "Acceptation des Conditions",
      content: "En utilisant ce site, vous acceptez les présentes conditions générales d'utilisation.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Utilisation du Site",
      content: "Le site doit être utilisé conformément à sa destination et dans le respect des lois.",
      color: "secondary"
    },
    {
      icon: Globe,
      title: "Contenu et Propriété",
      content: "Tout le contenu du site est protégé par les droits de propriété intellectuelle.",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Respect et Éthique",
      content: "Les utilisateurs s'engagent à respecter les valeurs du réseau REFLET.",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 overflow-hidden">
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
              <Badge variant="secondary" size="lg" className="mb-6">
                <Shield className="mr-2" size={16} />
                Conditions Générales
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text-secondary">Conditions</span>
              <br />
              <span className="text-white">Générales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Conditions d'utilisation du site REFLET et de ses services
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                href="/legal"
                variant="secondary"
                size="lg"
                icon={<Shield />}
                className="shadow-custom-lg hover:shadow-2xl"
              >
                Retour aux documents légaux
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vue d'ensemble des Conditions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <FileText className="mr-2" size={16} />
              Vue d'Ensemble
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Conditions d'Utilisation
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Les règles et conditions qui régissent l'utilisation du site REFLET
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {conditions.map((condition, index) => (
              <motion.div
                key={`condition-${condition.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                    condition.color === "primary" 
                      ? "bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30" 
                      : "bg-gradient-to-br from-secondary/20 to-secondary/30 group-hover:from-secondary/30 group-hover:to-secondary/40"
                  }`}>
                    <condition.icon 
                      className={`${condition.color === "primary" ? "text-primary" : "text-secondary"} group-hover:scale-110 transition-transform duration-300`} 
                      size={32} 
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {condition.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    {condition.content}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu Détaillé */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" size="lg" className="mb-6">
                <FileText className="mr-2" size={16} />
                Conditions Détaillées
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Conditions Générales d'Utilisation
              </h2>
            </motion.div>

            <div className="space-y-8">
              {/* Article 1 - Objet */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <FileText className="mr-3" size={24} />
                  Article 1 - Objet
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site web du Réseau des Femmes Leaders autour de Thierno Amadou Ba (REFLET).</p>
                  <p>L'utilisation du site implique l'acceptation pleine et entière des présentes conditions générales d'utilisation.</p>
                </div>
              </Card>

              {/* Article 2 - Acceptation */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <CheckCircle className="mr-3" size={24} />
                  Article 2 - Acceptation des Conditions
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>L'accès et l'utilisation du site REFLET impliquent l'acceptation pleine et entière des présentes conditions générales d'utilisation.</p>
                  <p>Si vous n'acceptez pas ces conditions, nous vous demandons de ne pas utiliser ce site.</p>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Important :</p>
                    <p>Ces conditions peuvent être modifiées à tout moment. Il est de votre responsabilité de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.</p>
                  </div>
                </div>
              </Card>

              {/* Article 3 - Utilisation du Site */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  Article 3 - Utilisation du Site
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Le site REFLET est destiné à :</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Présenter les activités et programmes du réseau REFLET</li>
                    <li>Permettre l'inscription aux programmes de formation</li>
                    <li>Faciliter la communication avec les membres du réseau</li>
                    <li>Partager des informations sur le leadership féminin</li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Utilisations interdites :</h4>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Utilisation à des fins commerciales non autorisées</li>
                      <li>Diffusion de contenus illégaux ou inappropriés</li>
                      <li>Tentative de piratage ou d'intrusion</li>
                      <li>Utilisation de robots ou scripts automatisés</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Article 4 - Propriété Intellectuelle */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Article 4 - Propriété Intellectuelle
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Tous les éléments du site REFLET (textes, images, vidéos, logos, design, etc.) sont protégés par les droits de propriété intellectuelle.</p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Crédits techniques :</h4>
                    <p>Le site a été développé par <strong>Kamit Digital Solution & Innovation</strong> (https://kamit.tech).</p>
                    <p>Contact technique : hello@kamit.tech</p>
                  </div>
                  
                  <p>Il est interdit de reproduire, distribuer, modifier ou utiliser tout ou partie du contenu sans autorisation écrite préalable.</p>
                </div>
              </Card>

              {/* Article 5 - Responsabilité */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <AlertTriangle className="mr-3" size={24} />
                  Article 5 - Limitation de Responsabilité
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>REFLET s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées.</p>
                  
                  <p>REFLET ne pourra être tenu responsable :</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Des dommages directs ou indirects résultant de l'utilisation du site</li>
                    <li>Des interruptions de service ou dysfonctionnements techniques</li>
                    <li>De la perte de données ou d'informations</li>
                    <li>Des actions de tiers ou de contenus externes</li>
                  </ul>
                  
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Support technique :</p>
                    <p>Pour toute question technique, contactez <strong>Kamit Digital Solution & Innovation</strong> à hello@kamit.tech</p>
                  </div>
                </div>
              </Card>

              {/* Article 6 - Protection des Données */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Article 6 - Protection des Données Personnelles
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Le traitement des données personnelles est régi par notre politique de confidentialité, conforme à la loi sénégalaise sur la protection des données.</p>
                  
                  <p>Nous collectons uniquement les données nécessaires à nos activités et nous nous engageons à :</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Protéger vos données personnelles</li>
                    <li>Ne pas les transmettre à des tiers sans votre consentement</li>
                    <li>Vous permettre d'accéder, modifier ou supprimer vos données</li>
                    <li>Utiliser des mesures de sécurité appropriées</li>
                  </ul>
                  
                  <p>Pour toute question sur vos données, contactez-nous à : <strong>presidente@reseaureflet.com</strong></p>
                </div>
              </Card>

              {/* Article 7 - Modification des Conditions */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <FileText className="mr-3" size={24} />
                  Article 7 - Modification des Conditions
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>REFLET se réserve le droit de modifier les présentes conditions générales d'utilisation à tout moment.</p>
                  
                  <p>Les modifications prendront effet dès leur publication sur le site. Il appartient à l'utilisateur de consulter régulièrement cette page.</p>
                  
                  <p>L'utilisation continue du site après modification des conditions vaut acceptation des nouvelles conditions.</p>
                </div>
              </Card>

              {/* Article 8 - Droit Applicable */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Article 8 - Droit Applicable et Juridiction
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Les présentes conditions générales d'utilisation sont soumises au droit sénégalais.</p>
                  
                  <p>En cas de litige, les tribunaux sénégalais seront seuls compétents.</p>
                  
                  <p>Si une ou plusieurs stipulations des présentes conditions sont tenues pour non valides ou déclarées telles en application d'une loi, d'un règlement ou à la suite d'une décision de justice, les autres stipulations gardent toute leur force et leur portée.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" size="lg" className="mb-6">
                <Mail className="mr-2" size={16} />
                Questions sur les Conditions
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Une Question sur les Conditions ?
              </h2>
              <p className="text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
                Pour toute question concernant nos conditions d'utilisation, n'hésitez pas à nous contacter.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Mail />}
                  className="shadow-custom-lg hover:shadow-2xl"
                >
                  Nous contacter
                </Button>
                <a
                  href="https://kamit.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  <ExternalLink className="mr-2" size={20} />
                  Kamit Digital
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
