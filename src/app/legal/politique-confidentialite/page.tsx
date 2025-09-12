"use client";

import { motion } from "framer-motion";
import { 
  Shield, Users, Globe, Heart, Award, ExternalLink, Mail, Lock, Eye, Database, AlertCircle
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function PolitiqueConfidentialite() {
  const dataTypes = [
    {
      icon: Users,
      title: "Données d'Identification",
      description: "Nom, prénom, adresse email, numéro de téléphone",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Données de Connexion",
      description: "Adresse IP, données de navigation",
      color: "secondary"
    },
    {
      icon: Database,
      title: "Données Techniques",
      description: "Type de navigateur, système d'exploitation",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Données d'Engagement",
      description: "Participation aux programmes, préférences",
      color: "secondary"
    }
  ];

  const rights = [
    {
      title: "Droit d'Accès",
      description: "Vous pouvez demander quelles données nous avons sur vous"
    },
    {
      title: "Droit de Rectification",
      description: "Vous pouvez corriger vos données inexactes"
    },
    {
      title: "Droit de Suppression",
      description: "Vous pouvez demander la suppression de vos données"
    },
    {
      title: "Droit d'Opposition",
      description: "Vous pouvez vous opposer au traitement de vos données"
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
                Politique de Confidentialité
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text-secondary">Politique de</span>
              <br />
              <span className="text-white">Confidentialité</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Protection de vos données personnelles et respect de votre vie privée
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

      {/* Types de Données Collectées */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <Database className="mr-2" size={16} />
              Données Collectées
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Types de Données Collectées
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Les données que nous collectons et comment nous les utilisons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {dataTypes.map((dataType, index) => (
              <motion.div
                key={`data-${dataType.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                    dataType.color === "primary" 
                      ? "bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30" 
                      : "bg-gradient-to-br from-secondary/20 to-secondary/30 group-hover:from-secondary/30 group-hover:to-secondary/40"
                  }`}>
                    <dataType.icon 
                      className={`${dataType.color === "primary" ? "text-primary" : "text-secondary"} group-hover:scale-110 transition-transform duration-300`} 
                      size={32} 
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {dataType.title}
                  </h3>
                  <p className="text-neutral-dark leading-relaxed">
                    {dataType.description}
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
                <Lock className="mr-2" size={16} />
                Politique Détaillée
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Politique de Confidentialité Complète
              </h2>
            </motion.div>

            <div className="space-y-8">
              {/* Introduction */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Introduction
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Le Réseau des Femmes Leaders autour de Thierno Amadou Ba (REFLET) s'engage à protéger votre vie privée et vos données personnelles.</p>
                  <p>Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément à la législation sénégalaise sur la protection des données.</p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Dernière mise à jour :</p>
                    <p>Cette politique a été mise à jour le {new Date().toLocaleDateString('fr-FR')} et peut être modifiée à tout moment.</p>
                  </div>
                </div>
              </Card>

              {/* Données Collectées */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Database className="mr-3" size={24} />
                  Données Personnelles Collectées
                </h3>
                <div className="space-y-6 text-neutral-dark">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Données d'Identification</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone</li>
                        <li>Adresse postale (si fournie)</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Données de Connexion</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Adresse IP</li>
                        <li>Données de navigation</li>
                        <li>Pages visitées</li>
                        <li>Durée de visite</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Données Techniques</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Type de navigateur</li>
                        <li>Système d'exploitation</li>
                        <li>Résolution d'écran</li>
                        <li>Langue du navigateur</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Données d'Engagement</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Participation aux programmes</li>
                        <li>Préférences de communication</li>
                        <li>Historique des interactions</li>
                        <li>Centres d'intérêt</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Finalités du Traitement */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Eye className="mr-3" size={24} />
                  Finalités du Traitement
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Nous utilisons vos données personnelles pour les finalités suivantes :</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Gestion des Programmes</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Inscription aux programmes de formation</li>
                        <li>Suivi de votre participation</li>
                        <li>Émission de certificats</li>
                        <li>Évaluation de la satisfaction</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Communication</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Envoi d'informations sur nos activités</li>
                        <li>Newsletter et actualités</li>
                        <li>Invitations aux événements</li>
                        <li>Support et assistance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Amélioration des Services</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Analyse de l'utilisation du site</li>
                        <li>Amélioration de l'expérience utilisateur</li>
                        <li>Développement de nouveaux programmes</li>
                        <li>Statistiques anonymisées</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Base Légale */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Base Légale du Traitement
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Le traitement de vos données personnelles est basé sur :</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <Heart className="text-primary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Consentement</h4>
                        <p>Vous avez donné votre consentement explicite pour le traitement de vos données (newsletter, communications marketing).</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <Users className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Exécution d'un Contrat</h4>
                        <p>Le traitement est nécessaire pour l'exécution de votre inscription et participation aux programmes REFLET.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <Award className="text-primary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Intérêt Légitime</h4>
                        <p>Nous avons un intérêt légitime à améliorer nos services et à maintenir la sécurité du site.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Partage des Données */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  Partage et Communication des Données
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Partenaires Techniques</h4>
                      <p>Nous partageons certaines données avec nos partenaires techniques pour le bon fonctionnement du site :</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                        <li><strong>Kamit Digital Solution & Innovation</strong> (développement et maintenance technique)</li>
                        <li><strong>IONOS</strong> (hébergement du site)</li>
                        <li><strong>Google Analytics</strong> (analyse du trafic - données anonymisées)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Obligations Légales</h4>
                      <p>Nous pouvons divulguer vos données si la loi l'exige ou pour protéger nos droits et ceux de nos utilisateurs.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Sécurité */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Lock className="mr-3" size={24} />
                  Sécurité des Données
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <Lock className="text-primary" size={16} />
                        </div>
                        <span>Chiffrement SSL/TLS</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                          <Shield className="text-secondary" size={16} />
                        </div>
                        <span>Accès sécurisé aux données</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <Database className="text-primary" size={16} />
                        </div>
                        <span>Sauvegarde régulière</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                          <Eye className="text-secondary" size={16} />
                        </div>
                        <span>Surveillance continue</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <Users className="text-primary" size={16} />
                        </div>
                        <span>Formation du personnel</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                          <AlertCircle className="text-secondary" size={16} />
                        </div>
                        <span>Procédures d'incident</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Droits des Utilisateurs */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Users className="mr-3" size={24} />
                  Vos Droits
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Conformément à la législation sénégalaise, vous disposez des droits suivants :</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rights.map((right) => (
                      <div key={`right-${right.title}`} className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">{right.title}</h4>
                        <p className="text-sm">{right.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg mt-6">
                    <p className="font-semibold text-primary mb-2">Comment exercer vos droits :</p>
                    <p>Pour exercer ces droits, contactez-nous à : <strong>presidente@reseaureflet.com</strong></p>
                    <p className="mt-2">Nous vous répondrons dans un délai de 30 jours maximum.</p>
                  </div>
                </div>
              </Card>

              {/* Cookies */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  Cookies et Technologies Similaires
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Notre site utilise des cookies et technologies similaires pour améliorer votre expérience :</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Cookies Essentiels</h4>
                      <p>Nécessaires au fonctionnement du site (session, sécurité, préférences).</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Google Analytics</h4>
                      <p>Nous utilisons Google Analytics pour analyser l'utilisation du site. Ces données sont anonymisées.</p>
                      <p className="mt-2">Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.</p>
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
                  <p>Pour toute question concernant cette politique de confidentialité ou vos données personnelles :</p>
                  
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
                Questions sur la Confidentialité
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Une Question sur vos Données ?
              </h2>
              <p className="text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
                Pour toute question concernant vos données personnelles, n'hésitez pas à nous contacter.
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
