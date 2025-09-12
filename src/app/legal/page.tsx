"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, FileText, Users, Globe, Heart, Award, 
  Star, ExternalLink, Mail
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Legal() {
  const legalSections = [
    {
      icon: FileText,
      title: "Mentions Légales",
      content: "Informations légales sur REFLET et ses activités",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Conditions Générales",
      content: "Conditions d'utilisation du site et des services",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Politique de Confidentialité",
      content: "Protection des données personnelles et respect de la vie privée",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Cookies",
      content: "Utilisation des cookies et technologies de suivi",
      color: "secondary"
    }
  ];

  const kamitServices = [
    {
      title: "Développement Web",
      description: "Sites web modernes et responsives avec les dernières technologies",
      icon: Globe
    },
    {
      title: "Solutions Digitales",
      description: "Applications web et mobiles sur mesure pour votre entreprise",
      icon: Award
    },
    {
      title: "Innovation Technologique",
      description: "Intégration d'IA, automatisation et solutions innovantes",
      icon: Star
    },
    {
      title: "Support Technique",
      description: "Maintenance, hébergement et support 24/7",
      icon: Heart
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
                Informations Légales
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text-secondary">Mentions</span>
              <br />
              <span className="text-white">Légales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Informations légales et conditions d'utilisation du site REFLET
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                href="#mentions-legales"
                variant="secondary"
                size="lg"
                icon={<FileText />}
                className="shadow-custom-lg hover:shadow-2xl"
              >
                Voir les mentions légales
              </Button>
              <Button
                href="#kamit-digital"
                variant="outline"
                size="lg"
                icon={<ExternalLink />}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Notre partenaire technique
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kamit Digital Solution & Innovation - Section Mise en Avant */}
      <section id="kamit-digital" className="py-24 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <Star className="mr-2" size={16} />
              Notre Partenaire Technique
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Site Créé par <span className="text-secondary">Kamit Digital Solution & Innovation</span>
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto mb-8">
              Ce site web a été entièrement conçu et développé par Kamit Digital Solution & Innovation, 
              une entreprise spécialisée dans les solutions digitales innovantes au Sénégal.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-secondary rounded-full mb-6">
                  <Globe className="text-primary" size={40} />
                </div>
                <h3 className="font-heading text-3xl font-bold text-primary mb-4">
                  Kamit Digital Solution & Innovation
                </h3>
                <p className="text-xl text-secondary font-semibold mb-4">
                  https://kamit.tech
                </p>
                <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
                  Entreprise spécialisée dans le développement de solutions digitales innovantes, 
                  la création de sites web modernes et l'accompagnement technologique des entreprises sénégalaises.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {kamitServices.map((service, index) => (
                  <motion.div
                    key={`service-${service.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                      {service.title}
                    </h4>
                    <p className="text-neutral-dark text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://kamit.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="mr-2" size={20} />
                  Visiter Kamit Digital
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sections Légales */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" size="lg" className="mb-6">
              <FileText className="mr-2" size={16} />
              Informations Légales
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Documents Légaux
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Consultez nos documents légaux et nos conditions d'utilisation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {legalSections.map((section, index) => {
              const getHref = (title: string) => {
                switch (title) {
                  case "Mentions Légales":
                    return "/legal/mentions-legales";
                  case "Conditions Générales":
                    return "/legal/conditions-generales";
                  case "Politique de Confidentialité":
                    return "/legal/politique-confidentialite";
                  case "Cookies":
                    return "/legal/politique-cookies";
                  default:
                    return "/legal";
                }
              };

              return (
                <motion.div
                  key={`legal-${section.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={getHref(section.title)} className="block">
                    <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                        section.color === "primary" 
                          ? "bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30" 
                          : "bg-gradient-to-br from-secondary/20 to-secondary/30 group-hover:from-secondary/30 group-hover:to-secondary/40"
                      }`}>
                        <section.icon 
                          className={`${section.color === "primary" ? "text-primary" : "text-secondary"} group-hover:scale-110 transition-transform duration-300`} 
                          size={32} 
                        />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-neutral-dark leading-relaxed mb-4">
                        {section.content}
                      </p>
                      <div className="inline-flex items-center text-primary group-hover:text-secondary transition-colors">
                        <span className="text-sm font-medium">Consulter</span>
                        <ExternalLink className="ml-1" size={16} />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentions Légales Détaillées */}
      <section id="mentions-legales" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="primary" size="lg" className="mb-6">
                <FileText className="mr-2" size={16} />
                Mentions Légales Complètes
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Informations Légales REFLET
              </h2>
            </motion.div>

            <div className="space-y-8">
              {/* Éditeur du Site */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Users className="mr-3" size={24} />
                  Éditeur du Site
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p><strong>Nom :</strong> Réseau des Femmes Leaders autour de Thierno Amadou Ba (REFLET)</p>
                  <p><strong>Siège social :</strong> Bambilor, Dakar, Sénégal</p>
                  <p><strong>Date de création :</strong> 30 Avril 2022</p>
                  <p><strong>Présidente :</strong> Binta Ndiaye BA</p>
                  <p><strong>Email :</strong> presidente@reseaureflet.com</p>
                  <p><strong>Téléphone :</strong> 772298974 / 77 247 29 29</p>
                </div>
              </Card>

              {/* Hébergement */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  Hébergement du Site
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p><strong>Site développé et hébergé par :</strong></p>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-l-4 border-primary">
                    <p className="font-semibold text-lg text-primary mb-2">Kamit Digital Solution & Innovation</p>
                    <p><strong>Site web :</strong> <a href="https://kamit.tech" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://kamit.tech</a></p>
                    <p><strong>Services :</strong> Développement web, solutions digitales, hébergement</p>
                    <p><strong>Spécialisation :</strong> Sites web modernes, applications web et mobiles, solutions innovantes</p>
                  </div>
                </div>
              </Card>

              {/* Propriété Intellectuelle */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Propriété Intellectuelle
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                  <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                  <p>Le site REFLET et son contenu sont protégés par les lois sur la propriété intellectuelle. Le design et le développement technique ont été réalisés par <strong>Kamit Digital Solution & Innovation</strong>.</p>
                </div>
              </Card>

              {/* Protection des Données */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Protection des Données Personnelles
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Conformément à la loi n° 2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
                  <p>Pour exercer ce droit, vous pouvez nous contacter à l'adresse : <strong>presidente@reseaureflet.com</strong></p>
                  <p>Les données collectées sur ce site sont utilisées uniquement dans le cadre des activités du réseau REFLET et ne sont pas transmises à des tiers sans votre consentement.</p>
                </div>
              </Card>

              {/* Cookies */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  Cookies
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic du site.</p>
                  <p>En continuant à utiliser ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.</p>
                  <p>Vous pouvez désactiver les cookies dans les paramètres de votre navigateur si vous le souhaitez.</p>
                </div>
              </Card>

              {/* Responsabilité */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Limitation de Responsabilité
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
                  <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse <strong>presidente@reseaureflet.com</strong>, en décrivant le problème de la manière la plus précise possible.</p>
                  <p>REFLET ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site.</p>
                </div>
              </Card>

              {/* Crédits Techniques */}
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Award className="mr-3" size={24} />
                  Crédits Techniques
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="font-heading text-xl font-bold text-secondary mb-4">
                      Site développé par Kamit Digital Solution & Innovation
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p><strong>Technologies utilisées :</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Next.js 14 (React)</li>
                          <li>TypeScript</li>
                          <li>Tailwind CSS</li>
                          <li>Framer Motion</li>
                          <li>Lucide React</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>Services Kamit :</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Développement web sur mesure</li>
                          <li>Design responsive</li>
                          <li>Optimisation SEO</li>
                          <li>Hébergement sécurisé</li>
                          <li>Maintenance technique</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <a 
                        href="https://kamit.tech" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="mr-2" size={20} />
                        Visiter Kamit Digital Solution & Innovation
                      </a>
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
                Questions Légales
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Une Question Légale ?
              </h2>
              <p className="text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
                Pour toute question concernant nos mentions légales ou nos conditions d'utilisation, 
                n'hésitez pas à nous contacter.
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
