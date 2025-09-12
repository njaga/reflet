"use client";

import { motion } from "framer-motion";
import { 
  Shield, Globe, Heart, ExternalLink, Mail, Cookie, Settings, Eye, AlertCircle
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function PolitiqueCookies() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Cookies Essentiels",
      description: "Nécessaires au fonctionnement du site",
      color: "primary",
      examples: ["Session utilisateur", "Sécurité", "Préférences de base"]
    },
    {
      icon: Globe,
      title: "Cookies Analytiques",
      description: "Google Analytics pour analyser le trafic",
      color: "secondary",
      examples: ["Pages visitées", "Durée de visite", "Source du trafic"]
    },
    {
      icon: Heart,
      title: "Cookies de Fonctionnalité",
      description: "Amélioration de l'expérience utilisateur",
      color: "primary",
      examples: ["Préférences langue", "Paramètres d'affichage", "Contenu personnalisé"]
    },
    {
      icon: Settings,
      title: "Cookies Techniques",
      description: "Support technique et maintenance",
      color: "secondary",
      examples: ["Diagnostic", "Performance", "Erreurs système"]
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
                <Cookie className="mr-2" size={16} />
                Politique des Cookies
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text-secondary">Politique des</span>
              <br />
              <span className="text-white">Cookies</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Utilisation des cookies et technologies de suivi sur notre site
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

      {/* Types de Cookies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <Cookie className="mr-2" size={16} />
              Types de Cookies
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Cookies Utilisés sur le Site
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Les différents types de cookies que nous utilisons et leur finalité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {cookieTypes.map((cookieType, index) => (
              <motion.div
                key={`cookie-${cookieType.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                      cookieType.color === "primary" 
                        ? "bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30" 
                        : "bg-gradient-to-br from-secondary/20 to-secondary/30 group-hover:from-secondary/30 group-hover:to-secondary/40"
                    }`}>
                      <cookieType.icon 
                        className={`${cookieType.color === "primary" ? "text-primary" : "text-secondary"} group-hover:scale-110 transition-transform duration-300`} 
                        size={32} 
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                        {cookieType.title}
                      </h3>
                      <p className="text-neutral-dark leading-relaxed">
                        {cookieType.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2 text-sm">Exemples :</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-neutral-dark">
                      {cookieType.examples.map((example) => (
                        <li key={`example-${example}`}>{example}</li>
                      ))}
                    </ul>
                  </div>
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
                <Settings className="mr-2" size={16} />
                Politique Détaillée
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Politique des Cookies Complète
              </h2>
            </motion.div>

            <div className="space-y-8">
              {/* Qu'est-ce qu'un Cookie */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Cookie className="mr-3" size={24} />
                  Qu'est-ce qu'un Cookie ?
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site web. Les cookies permettent au site de reconnaître votre appareil et de mémoriser certaines informations sur vos préférences ou actions passées.</p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Types de cookies :</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                      <li><strong>Cookies persistants :</strong> Restent sur votre appareil pendant une période définie</li>
                      <li><strong>Cookies internes :</strong> Définis par notre site</li>
                      <li><strong>Cookies tiers :</strong> Définis par des services externes (Google Analytics)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Cookies Utilisés */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  Cookies Utilisés sur Notre Site
                </h3>
                <div className="space-y-6 text-neutral-dark">
                  
                  {/* Cookies Essentiels */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-4 flex items-center">
                      <Shield className="mr-2" size={20} />
                      Cookies Essentiels
                    </h4>
                    <p className="mb-3">Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium mb-2">Cookies de session :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Maintien de la session utilisateur</li>
                          <li>Sécurité et authentification</li>
                          <li>Panier d'achat (si applicable)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Cookies de préférences :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Langue préférée</li>
                          <li>Paramètres d'affichage</li>
                          <li>Thème (clair/sombre)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Google Analytics */}
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-4 flex items-center">
                      <Eye className="mr-2" size={20} />
                      Google Analytics
                    </h4>
                    <p className="mb-3">Nous utilisons Google Analytics pour analyser l'utilisation de notre site et améliorer nos services.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium mb-2">Données collectées :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Pages visitées</li>
                          <li>Durée de visite</li>
                          <li>Source du trafic</li>
                          <li>Appareil utilisé</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Finalité :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Statistiques d'utilisation</li>
                          <li>Amélioration du site</li>
                          <li>Analyse du comportement</li>
                          <li>Optimisation du contenu</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white/50 rounded-lg">
                      <p className="text-sm"><strong>Important :</strong> Les données Google Analytics sont anonymisées et ne permettent pas de vous identifier personnellement.</p>
                    </div>
                  </div>

                  {/* Cookies de Fonctionnalité */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-4 flex items-center">
                      <Heart className="mr-2" size={20} />
                      Cookies de Fonctionnalité
                    </h4>
                    <p className="mb-3">Ces cookies améliorent votre expérience sur le site en mémorisant vos préférences.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium mb-2">Préférences utilisateur :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Langue de navigation</li>
                          <li>Région géographique</li>
                          <li>Paramètres d'accessibilité</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Personnalisation :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                          <li>Contenu recommandé</li>
                          <li>Préférences de communication</li>
                          <li>Historique des interactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Gestion des Cookies */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Settings className="mr-3" size={24} />
                  Gestion de vos Cookies
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Vous pouvez contrôler et gérer les cookies de plusieurs façons :</p>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Paramètres du Navigateur</h4>
                      <p className="mb-3">La plupart des navigateurs vous permettent de :</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Voir quels cookies sont stockés</li>
                        <li>Supprimer les cookies existants</li>
                        <li>Bloquer les cookies futurs</li>
                        <li>Recevoir une notification avant l'installation de cookies</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Instructions par Navigateur</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium mb-2">Chrome :</p>
                          <p className="text-sm">Paramètres &gt; Confidentialité et sécurité &gt; Cookies</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Firefox :</p>
                          <p className="text-sm">Options &gt; Vie privée et sécurité &gt; Cookies</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Safari :</p>
                          <p className="text-sm">Préférences &gt; Confidentialité &gt; Cookies</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Edge :</p>
                          <p className="text-sm">Paramètres &gt; Cookies et autorisations de site</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Consentement</h4>
                      <p>En continuant à utiliser notre site, vous acceptez l'utilisation de cookies conformément à cette politique.</p>
                      <p className="mt-2">Vous pouvez retirer votre consentement à tout moment en modifiant les paramètres de votre navigateur.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Cookies Tiers */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  Cookies Tiers
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Notre site peut contenir des cookies provenant de services tiers :</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Google Analytics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium mb-2">Finalité :</p>
                          <p className="text-sm">Analyse du trafic et des performances du site</p>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Durée :</p>
                          <p className="text-sm">Jusqu'à 2 ans</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="font-medium mb-2">Désactivation :</p>
                        <p className="text-sm">Vous pouvez désactiver Google Analytics en installant le module complémentaire de désactivation de Google Analytics ou en modifiant les paramètres de votre navigateur.</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Autres Services</h4>
                      <p>Si nous intégrons d'autres services tiers à l'avenir (réseaux sociaux, cartes interactives, etc.), nous vous en informerons et mettrons à jour cette politique.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Impact de la Désactivation */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <AlertCircle className="mr-3" size={24} />
                  Impact de la Désactivation des Cookies
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Si vous choisissez de désactiver les cookies, voici ce qui peut être affecté :</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Cookies Essentiels</h4>
                        <p className="text-sm">Le site peut ne pas fonctionner correctement (problèmes de connexion, perte de préférences).</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Google Analytics</h4>
                        <p className="text-sm">Nous ne pourrons pas analyser l'utilisation du site pour l'améliorer.</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Fonctionnalités</h4>
                        <p className="text-sm">Certaines fonctionnalités personnalisées peuvent ne pas être disponibles.</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Expérience</h4>
                        <p className="text-sm">Votre expérience de navigation peut être moins fluide.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Contact */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Mail className="mr-3" size={24} />
                  Contact et Questions
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Pour toute question concernant notre utilisation des cookies :</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">REFLET</h4>
                      <p><strong>Email :</strong> presidente@reseaureflet.com</p>
                      <p><strong>Téléphone :</strong> 772298974 / 77 247 29 29</p>
                      <p><strong>Adresse :</strong> Bambilor, Dakar, Sénégal</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Support Technique</h4>
                      <p><strong>Kamit Digital Solution & Innovation</strong></p>
                      <p><strong>Email :</strong> hello@kamit.tech</p>
                      <p><strong>Téléphone :</strong> +221 76 129 13 36</p>
                    </div>
                  </div>
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
                Questions sur les Cookies
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Une Question sur les Cookies ?
              </h2>
              <p className="text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
                Pour toute question concernant notre utilisation des cookies, n'hésitez pas à nous contacter.
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
