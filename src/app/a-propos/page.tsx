"use client";

import { motion } from "framer-motion";
import { 
  Heart, Target, Users, Award, Calendar, 
  TrendingUp, Globe, Shield, Zap, 
  BookOpen, HandHeart, Sparkles
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import OptimizedImage from "@/components/ui/Image";

export default function APropos() {
  const timeline = [
    {
      year: "2022",
      title: "Création de REFLET",
      description: "Création du réseau le 30 avril 2022 par Thierno Amadou BA et Binta Ndiaye BA",
      icon: Sparkles
    },
    {
      year: "2022",
      title: "Premières Activités",
      description: "Formation sur le Leadership et don de moustiquaires aux sinistrés de Bambilor",
      icon: BookOpen
    },
    {
      year: "2023",
      title: "Lancement Officiel",
      description: "Lancement officiel du réseau au Théâtre National Daniel Sorano le 25 décembre",
      icon: Globe
    },
    {
      year: "2023",
      title: "Formations et Actions",
      description: "Formations sur le leadership, transformation des produits locaux et dépistage médical",
      icon: HandHeart
    },
    {
      year: "2024",
      title: "Conférence UCAD",
      description: "Deuxième édition de l'anniversaire avec conférence sur le leadership féminin à l'UCAD",
      icon: TrendingUp
    },
    {
      year: "2025",
      title: "Actions Sociales",
      description: "Participation aux ziara et actions sociales pour les enfants malades",
      icon: Zap
    }
  ];

  const leadershipTeam = [
    {
      name: "Thierno Amadou BA",
      role: "Khalif de Bambilor",
      image: "/images/team/thierno-amadou-ba.jpg",
      bio: "Diplomate religieux international, membre fondateur du réseau REFLET",
      expertise: ["Leadership", "Spiritualité", "Développement"]
    },
    {
      name: "Binta Ndiaye BA",
      role: "Présidente du Réseau",
      image: "/images/team/binta-ndiaye-ba.jpg",
      bio: "Spécialiste en Banque-Assurance, Présidente du Réseau des Femmes Leaders autour de Thierno Amadou Ba",
      expertise: ["Finance", "Leadership", "Banque"]
    },
    {
      name: "Yandé Gaye",
      role: "Secrétaire Général",
      image: "/images/team/yande-gaye.jpg",
      bio: "Secrétaire Général du réseau REFLET, membre fondateur",
      expertise: ["Administration", "Organisation", "Coordination"]
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
                <Heart className="mr-2" size={16} />
                Notre Histoire & Mission
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text-secondary">À Propos</span>
              <br />
              <span className="text-white">de REFLET</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Découvrez notre histoire, notre mission et notre vision pour transformer le leadership féminin au Sénégal
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                href="/equipe"
                variant="secondary"
                size="lg"
                icon={<Users />}
                className="shadow-custom-lg hover:shadow-2xl"
              >
                Rencontrer l'équipe
              </Button>
              <Button
                href="/programmes"
                variant="outline"
                size="lg"
                icon={<BookOpen />}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Nos programmes
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <Calendar className="mr-2" size={16} />
              Notre Parcours
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              L'Histoire de REFLET
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              De notre fondation en 2019 à aujourd'hui, découvrez les étapes clés de notre développement
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={`timeline-${index}-${item.title.replace(/\s+/g, '-').toLowerCase()}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mr-4">
                          <item.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-bold text-primary">{item.title}</h3>
                          <p className="text-secondary font-semibold">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-neutral-dark leading-relaxed">{item.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-gradient-secondary rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" size="lg" className="mb-6">
                <Target className="mr-2" size={16} />
                Notre Mission
              </Badge>
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Notre Mission REFLET
              </h2>
              <p className="text-lg text-neutral-dark leading-relaxed mb-8">
                REFLET est un cadre de concertation, d'échanges et de partage de savoirs et d'expériences. 
                Il sert d'instrument de coopération entre les femmes et se positionne comme organe de représentation 
                et de partage de projets et programmes d'appui aux femmes pour leur épanouissement.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">Ouverture</h3>
                    <p className="text-neutral-dark">Le Réseau ne connaît pas de frontières géographiques, ni confrériques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">Solidarité</h3>
                    <p className="text-neutral-dark">Actions sociales envers les femmes en déficit de moyens matériels et financiers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">Progrès</h3>
                    <p className="text-neutral-dark">Catalyseur des valeurs sûres de la gent féminine pour faire émerger une nouvelle génération de femmes élites</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-primary rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>
                <div className="relative z-10">
                  <Badge variant="secondary" size="lg" className="mb-6">
                    <Globe className="mr-2" size={16} />
                    Notre Vision
                  </Badge>
                  <h3 className="font-heading text-3xl font-bold mb-6">
                    Notre Vision REFLET
                  </h3>
                  <p className="text-xl text-white/90 leading-relaxed mb-8">
                    Le Réseau des Femmes Leaders autour de Thierno Amadou Ba se veut un cadre de réflexion sur le devenir 
                    économique et social de la femme dans un monde sélectif et promeut la culture de l'excellence pour 
                    permettre à celle-ci d'atteindre les plus hauts niveaux de responsabilité.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">2022</div>
                      <div className="text-white/80">Année de Création</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">Bambilor</div>
                      <div className="text-white/80">Siège Social</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <Users className="mr-2" size={16} />
              Notre Équipe Dirigeante
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Les Femmes qui Dirigent REFLET
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Découvrez les leaders visionnaires qui façonnent l'avenir du leadership féminin au Sénégal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={`leader-${member.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-30 h-30 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Award className="text-primary" size={16} />
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{member.role}</p>
                  <p className="text-neutral-dark leading-relaxed mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={`skill-${member.name}-${skill}`} variant="outline" size="sm" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" size="lg" className="mb-6">
              <TrendingUp className="mr-2" size={16} />
              Notre Impact
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              REFLET en Chiffres
            </h2>
            <p className="text-xl text-white/90">
              Notre impact mesurable depuis 2019
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-secondary" size={40} />
              </div>
              <h3 className="font-heading text-5xl font-bold mb-2 text-secondary">2022</h3>
              <p className="text-white/80 text-lg">Année de création</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="font-heading text-5xl font-bold mb-2 text-secondary">Bambilor</h3>
              <p className="text-white/80 text-lg">Siège social</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-secondary" size={40} />
              </div>
              <h3 className="font-heading text-5xl font-bold mb-2 text-secondary">30 Avril</h3>
              <p className="text-white/80 text-lg">Date de création</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="font-heading text-5xl font-bold mb-2 text-secondary">2023</h3>
              <p className="text-white/80 text-lg">Lancement officiel</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                Rejoignez Notre Mission
              </h2>
              <p className="text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
                Devenez membre de REFLET et participez à la transformation du leadership féminin au Sénégal
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Heart />}
                  className="shadow-custom-lg hover:shadow-2xl"
                >
                  Rejoindre REFLET
                </Button>
                <Button
                  href="/programmes"
                  variant="outline"
                  size="lg"
                  icon={<BookOpen />}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Découvrir nos programmes
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
