"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  ArrowRight, Users, Target, BookOpen, Calendar, Sparkles, Star, Heart, 
  Award, TrendingUp, Globe, Shield, Zap, CheckCircle, Mail,
  Clock, MapPin, UserCheck, Briefcase, Lightbulb, HandHeart
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Image from "@/components/ui/Image";

export default function Home() {
  // Métadonnées SEO pour la page d'accueil
  useEffect(() => {
    // Titre de la page
    document.title = "REFLET - Réseau des Femmes Leaders autour de Thierno";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'REFLET - Réseau des Femmes Leaders autour de Thierno Amadou BA. Excellence et leadership féminin au Sénégal. Formation, mentorat et développement professionnel.');
    }
    
    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'REFLET, femmes leaders, leadership féminin, Sénégal, Thierno Amadou BA, formation, mentorat, développement professionnel, Bambilor, réseau, empowerment, entrepreneuriat féminin');
    }
    
    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'REFLET - Réseau des Femmes Leaders autour de Thierno');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'REFLET - Réseau des Femmes Leaders autour de Thierno Amadou BA. Excellence et leadership féminin au Sénégal.');
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', 'https://reflet-senegal.com/images/og-image-reflet.jpg');
    }
    
    // Twitter Card
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute('content', 'summary_large_image');
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'REFLET - Réseau des Femmes Leaders autour de Thierno');
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'REFLET - Réseau des Femmes Leaders autour de Thierno Amadou BA. Excellence et leadership féminin au Sénégal.');
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', 'https://reflet-senegal.com/images/og-image-reflet.jpg');
    }
  }, []);

  const features = [
    {
      icon: Users,
      title: "Formation Personnalisée",
      description: "Programmes adaptés à votre niveau et vos objectifs professionnels",
      color: "primary"
    },
    {
      icon: Target,
      title: "Mentorat Expert",
      description: "Accompagnement par des femmes leaders expérimentées",
      color: "secondary"
    },
    {
      icon: Globe,
      title: "Réseau International",
      description: "Connexions avec des femmes leaders dans toute l'Afrique",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Communauté Solidaire",
      description: "Un environnement de soutien mutuel et d'entraide",
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Impact Mesurable",
      description: "Résultats concrets sur votre développement professionnel",
      color: "primary"
    },
    {
      icon: Award,
      title: "Certification Reconnue",
      description: "Certificats valorisés par les employeurs sénégalais",
      color: "secondary"
    }
  ];

  const recentEvents = [
    {
      title: "Deuxième édition de l'anniversaire du réseau REFLET",
      date: "21 Décembre 2024",
      location: "UCAD II, Dakar",
      attendees: "Conférence sur le leadership féminin",
      image: "/images/actualites/reflet-5-ans-celebration.jpg",
      slug: "deuxieme-edition-anniversaire-reseau-reflet"
    },
    {
      title: "Formation Leadership et Développement Personnel",
      date: "9 Septembre 2023",
      location: "CEDAF, Bambilor",
      attendees: "Formatrice : Mme Mbengue",
      image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
      slug: "formation-leadership-developpement-personnel"
    },
    {
      title: "Journée dépistage cancer du col de l'utérus",
      date: "30 Octobre 2023",
      location: "Poste de santé de Bambilor",
      attendees: "Dépistage gratuit",
      image: "/images/actualites/temoignage-khadija-startup.png",
      slug: "journee-depistage-cancer-col-uterus"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-24 lg:py-32">
        {/* Simple Background Elements */}
        <div className="absolute inset-0 bg-gradient-radial opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <Badge variant="secondary" size="lg" className="mb-6">
                  <Star className="mr-2" size={16} />
                  Excellence & Leadership Féminin
                </Badge>
              </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            >
              <span className="gradient-text-secondary">REFLET</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-white/95 mb-6"
            >
              Réseau des Femmes Leaders autour de Thierno Amadou Ba
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-8 text-white/85 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              « Servir la communauté en favorisant l'épanouissement social de la femme par elle, pour elle et avec elle ». Un cadre de concertation, d'échanges et de partage de savoirs et d'expériences.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-secondary mb-1">2022</div>
                <div className="text-sm text-white/70">Année de création</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-secondary mb-1">Bambilor</div>
                <div className="text-sm text-white/70">Siège social</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-secondary mb-1">30 Avril</div>
                <div className="text-sm text-white/70">Date de création</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                href="/programmes"
                  variant="secondary"
                  size="md"
                  icon={<ArrowRight />}
                  className="shadow-lg hover:shadow-xl"
              >
                Découvrir nos programmes
                </Button>
                <Button
                href="/contact"
                  variant="outline"
                  size="md"
                  icon={<Heart />}
                  className="border-white text-white hover:bg-white hover:text-primary"
              >
                Nous rejoindre
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Hero Image */}
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                    <div className="relative rounded-xl h-80 overflow-hidden">
                      <Image
                        src="/images/hero/women-leaders-hero.jpg"
                        alt="Femmes Leaders REFLET"
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                        priority={true}
                        animate={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-heading text-xl font-bold mb-1">Femmes Leaders</h3>
                        <p className="text-white/90">Sénégalaises inspirantes</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="lg" className="mb-4">
              <Sparkles className="mr-2" size={16} />
              Notre Impact
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              REFLET en Chiffres
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de notre engagement pour l'excellence du leadership féminin
            </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "2022", label: "Année de création", color: "primary" },
              { icon: Target, number: "Bambilor", label: "Siège social", color: "secondary" },
              { icon: BookOpen, number: "30 Avril", label: "Date de création", color: "primary" },
              { icon: Calendar, number: "2023", label: "Lancement officiel", color: "secondary" }
            ].map((stat, index) => (
              <Card key={`stat-${stat.label}`} className="text-center p-8 group">
            <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                    stat.color === "primary" 
                      ? "bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30" 
                      : "bg-gradient-to-br from-secondary/20 to-secondary/30 group-hover:from-secondary/30 group-hover:to-secondary/40"
                  }`}
                >
                  <stat.icon 
                    className={`${stat.color === "primary" ? "text-primary" : "text-secondary"} group-hover:scale-110 transition-transform duration-300`} 
                    size={40} 
                  />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="font-heading text-4xl font-bold text-primary mb-3"
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-neutral-dark font-medium"
                >
                  {stat.label}
                </motion.p>
              </Card>
            ))}
          </div>
              </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" size="lg" className="mb-4">
              <Lightbulb className="mr-2" size={16} />
              Nos Atouts
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Pourquoi Choisir REFLET ?
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Des avantages uniques qui font de REFLET le partenaire idéal pour votre développement professionnel
            </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={`feature-${feature.title}`} className="p-8 group">
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                    feature.color === "primary" 
                      ? "bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30" 
                      : "bg-gradient-to-br from-secondary/20 to-secondary/30 group-hover:from-secondary/30 group-hover:to-secondary/40"
                  }`}
                >
                  <feature.icon 
                    className={`${feature.color === "primary" ? "text-primary" : "text-secondary"} group-hover:scale-110 transition-transform duration-300`} 
                    size={32} 
                  />
            </motion.div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-dark leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
                <Badge variant="primary" size="lg" className="mb-6">
                  <HandHeart className="mr-2" size={16} />
              Notre Mission
                </Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                  Transformer le Leadership Féminin au Sénégal
                </h2>
                <p className="text-lg text-neutral-dark leading-relaxed mb-8">
              REFLET s'engage à développer le leadership féminin au Sénégal en offrant des programmes de formation, 
              de mentorat et de networking qui permettent aux femmes de réaliser leur plein potentiel et de contribuer 
              activement au développement de leur communauté et de leur pays.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Formation de qualité adaptée aux besoins locaux",
                    "Mentorat par des femmes leaders expérimentées",
                    "Réseau de soutien et d'entraide mutuelle",
                    "Impact mesurable sur les communautés"
                  ].map((item, index) => (
            <motion.div
                      key={`mission-${item.replace(/\s+/g, '-').toLowerCase().substring(0, 30)}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="text-secondary mr-3 flex-shrink-0" size={20} />
                      <span className="text-neutral-dark">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Button
                href="/a-propos"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight />}
                >
                  En savoir plus
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-primary rounded-2xl p-8 shadow-custom-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="text-secondary" size={32} />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-secondary mb-2">95%</h3>
                      <p className="text-white/90 text-sm">Taux de satisfaction</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserCheck className="text-secondary" size={32} />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-secondary mb-2">80%</h3>
                      <p className="text-white/90 text-sm">Promotion professionnelle</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="text-secondary" size={32} />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-secondary mb-2">60%</h3>
                      <p className="text-white/90 text-sm">Création d'entreprise</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="text-secondary" size={32} />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-secondary mb-2">100%</h3>
                      <p className="text-white/90 text-sm">Certification réussie</p>
                    </div>
                  </div>
                </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Recent Events Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="primary" size="lg" className="mb-4">
              <Calendar className="mr-2" size={16} />
              Événements Récents
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Nos Dernières Activités
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Découvrez nos événements récents et l'impact qu'ils ont eu sur notre communauté
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <Card key={`event-${event.title}`} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    animate={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" size="sm">
                      <Calendar className="mr-1" size={12} />
                      Événement
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4 leading-tight">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-neutral-dark">
                      <Clock className="mr-2" size={16} />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-neutral-dark">
                      <MapPin className="mr-2" size={16} />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-neutral-dark">
                      <Users className="mr-2" size={16} />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>
                  <Button
                    href={`/actualites/${event.slug}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                    icon={<ArrowRight />}
                  >
                    Lire l'article
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-radial opacity-10"></div>
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" size="lg" className="mb-6">
                <Mail className="mr-2" size={16} />
                Newsletter
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Restez Informées
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Recevez nos dernières actualités, opportunités et conseils pour développer votre leadership
              </p>
              
              {/* Newsletter Form */}
              <form className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      required
                      className="w-full px-6 py-4 rounded-lg text-primary placeholder-neutral-dark border-2 border-secondary/30 focus:ring-2 focus:ring-secondary focus:outline-none shadow-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    icon={<Mail />}
                    className="shadow-custom-lg hover:shadow-2xl whitespace-nowrap"
                  >
                    S'abonner
                  </Button>
                </div>
              </form>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center text-white/80">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <Sparkles className="text-secondary" size={16} />
                  </div>
                  <span className="text-sm">Actualités exclusives</span>
                </div>
                <div className="flex items-center justify-center text-white/80">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <Target className="text-secondary" size={16} />
                  </div>
                  <span className="text-sm">Opportunités de formation</span>
                </div>
                <div className="flex items-center justify-center text-white/80">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <Heart className="text-secondary" size={16} />
                  </div>
                  <span className="text-sm">Conseils personnalisés</span>
                </div>
              </div>

              <p className="text-white/70 text-sm">
                Nous respectons votre vie privée. Désabonnement possible à tout moment.
              </p>
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Prête à Transformer Votre Leadership ?
              </h2>
              <p className="text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
                Rejoignez des centaines de femmes qui ont déjà transformé leur vie professionnelle avec REFLET
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Heart />}
                  className="shadow-custom-lg"
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
                  Voir nos programmes
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}