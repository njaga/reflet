"use client";

import { motion } from "framer-motion";
import { 
  Shield, FileText, Users, Globe, ExternalLink, Mail, Building
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function MentionsLegales() {
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
                <FileText className="mr-2" size={16} />
                Mentions Légales
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
              Informations légales sur le site REFLET et ses activités
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

      {/* Contenu Principal */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="primary" size="lg" className="mb-6">
                <Building className="mr-2" size={16} />
                Informations Légales REFLET
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Mentions Légales Complètes
              </h2>
              <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
                Toutes les informations légales concernant le site REFLET et ses activités
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* Éditeur du Site */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Users className="mr-3" size={24} />
                  Éditeur du Site
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <p className="font-semibold text-lg text-primary mb-4">Réseau des Femmes Leaders autour de Thierno Amadou Ba (REFLET)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p><strong>Siège social :</strong> Bambilor, Dakar, Sénégal</p>
                        <p><strong>Date de création :</strong> 30 Avril 2022</p>
                        <p><strong>Présidente :</strong> Binta Ndiaye BA</p>
                      </div>
                      <div>
                        <p><strong>Email :</strong> presidente@reseaureflet.com</p>
                        <p><strong>Téléphone :</strong> 772298974 / 77 247 29 29</p>
                        <p><strong>Site web :</strong> www.reseaureflet.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Développement et Hébergement */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Globe className="mr-3" size={24} />
                  Développement et Hébergement
                </h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg border-l-4 border-secondary">
                    <h4 className="font-heading text-xl font-bold text-secondary mb-4">
                      Site développé par Kamit Digital Solution & Innovation
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p><strong>Site web :</strong> <a href="https://kamit.tech" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://kamit.tech</a></p>
                        <p><strong>Email :</strong> hello@kamit.tech</p>
                        <p><strong>Téléphone :</strong> +221 76 129 13 36</p>
                      </div>
                      <div>
                        <p><strong>Adresse :</strong> Villa n°26, Résidence le Récif</p>
                        <p><strong>Ville :</strong> Saly Portudal, Mbour, Sénégal</p>
                        <p><strong>Services :</strong> Développement web, solutions digitales</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <a 
                        href="https://kamit.tech" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="mr-2" size={20} />
                        Visiter Kamit Digital
                      </a>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <h4 className="font-heading text-lg font-bold text-primary mb-3">Hébergement</h4>
                    <p><strong>Hébergeur :</strong> IONOS</p>
                    <p><strong>Type d'hébergement :</strong> Hébergement web professionnel</p>
                    <p><strong>Localisation :</strong> Serveurs sécurisés en Europe</p>
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
                  <p>L'ensemble de ce site relève de la législation sénégalaise et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                  
                  <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Crédits techniques :</p>
                    <p>Le site REFLET et son contenu sont protégés par les lois sur la propriété intellectuelle. Le design et le développement technique ont été réalisés par <strong>Kamit Digital Solution & Innovation</strong>.</p>
                    <p className="mt-2"><strong>Technologies utilisées :</strong> Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
                  </div>
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
                  
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Support technique :</p>
                    <p>Pour toute question technique concernant le fonctionnement du site, vous pouvez contacter directement <strong>Kamit Digital Solution & Innovation</strong> à l'adresse <strong>hello@kamit.tech</strong>.</p>
                  </div>
                </div>
              </Card>

              {/* Droit Applicable */}
              <Card className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Droit Applicable et Juridiction
                </h3>
                <div className="space-y-4 text-neutral-dark">
                  <p>Le présent site est soumis au droit sénégalais. En cas de litige, les tribunaux sénégalais seront seuls compétents.</p>
                  
                  <p>Toute utilisation du site implique l'acceptation pleine et entière des présentes mentions légales.</p>
                  
                  <p>REFLET se réserve le droit de modifier les présentes mentions légales à tout moment. Il appartient donc à l'utilisateur de consulter régulièrement cette page.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
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
                Pour toute question concernant nos mentions légales, n'hésitez pas à nous contacter.
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
