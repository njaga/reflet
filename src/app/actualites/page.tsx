"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calendar, User, ArrowRight, Heart, BookOpen, Clock
} from "lucide-react";

export default function Actualites() {
  const articles = [
    {
      id: 1,
      title: "Deuxième édition de l'anniversaire du réseau REFLET",
      excerpt: "Conférence à l'UCAD II sur le leadership féminin dans l'éducation : le rôle éducatif de la femme dans une société en mutation.",
      author: "Binta Ndiaye BA",
      date: "21 Décembre 2024",
      category: "Événements",
      readTime: "5 min",
      image: "/images/actualites/reflet-5-ans-celebration.jpg",
      featured: true,
      slug: "deuxieme-edition-anniversaire-reseau-reflet"
    },
    {
      id: 2,
      title: "Formation Leadership et Développement Personnel",
      excerpt: "Formation dispensée par Mme Mbengue au CEDAF de Bambilor pour développer les compétences en leadership des membres du réseau.",
      author: "Yandé Gaye",
      date: "9 Septembre 2023",
      category: "Formations",
      readTime: "3 min",
      image: "/images/actualites/nouveau-programme-leadership-transformationnel.jpg",
      featured: false,
      slug: "formation-leadership-developpement-personnel"
    },
    {
      id: 3,
      title: "Formation Transformation des Produits Locaux",
      excerpt: "Formation sur la transformation des produits locaux, jus de fruits et sirop dispensée par Mme Fatou GAYE à Rufisque.",
      author: "Fatou GAYE",
      date: "11 Septembre 2023",
      category: "Formations",
      readTime: "4 min",
      image: "/images/actualites/partenariat-ucad.png",
      featured: false,
      slug: "formation-transformation-produits-locaux"
    },
    {
      id: 4,
      title: "Journée Dépistage Cancer du Col de l'Utérus",
      excerpt: "Journée de dépistage gratuite du cancer du col de l'utérus et cancer du sein au poste de santé de Bambilor.",
      author: "Équipe REFLET",
      date: "30 Octobre 2023",
      category: "Santé",
      readTime: "3 min",
      image: "/images/actualites/temoignage-khadija-startup.png",
      featured: false,
      slug: "journee-depistage-cancer-col-uterus"
    },
    {
      id: 5,
      title: "Lancement Officiel du Réseau REFLET",
      excerpt: "Lancement officiel du réseau au Théâtre National Daniel Sorano avec financement de dix membres du réseau.",
      author: "Thierno Amadou BA",
      date: "25 Décembre 2023",
      category: "Événements",
      readTime: "4 min",
      image: "/images/actualites/formation-gestion-financiere.jpg",
      featured: false,
      slug: "lancement-officiel-reseau-reflet"
    },
    {
      id: 6,
      title: "Don de Moustiquaires aux Sinistrés de Bambilor",
      excerpt: "Action sociale parrainée par le Khalife Thierno Amadou BA pour venir en aide aux sinistrés de Bambilor.",
      author: "Thierno Amadou BA",
      date: "7 Septembre 2022",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/forum-femmes-leaders-afrique.jpg",
      featured: false,
      slug: "don-moustiquaires-sinistres-bambilor"
    },
    {
      id: 7,
      title: "Formation Leadership par Mr BACHIR",
      excerpt: "Première formation sur le Leadership dispensée par Mr BACHIR au CEDAF de Bambilor, marquant le début des activités du réseau.",
      author: "Mr BACHIR",
      date: "20 Août 2022",
      category: "Formations",
      readTime: "3 min",
      image: "/images/actualites/formation-leadership-bachir.jpg",
      featured: false,
      slug: "formation-leadership-bachir-cedaf"
    },
    {
      id: 8,
      title: "Financement des Dix Membres du Réseau",
      excerpt: "Financement effectif des dix membres du réseau REFLET, concrétisant l'engagement du réseau envers ses membres.",
      author: "Binta Ndiaye BA",
      date: "30 Décembre 2023",
      category: "Financement",
      readTime: "4 min",
      image: "/images/actualites/financement-membres-reseau.jpeg",
      featured: false,
      slug: "financement-dix-membres-reseau"
    },
    {
      id: 9,
      title: "Participation à la 31ème Edition Ziara",
      excerpt: "Participation du réseau REFLET à la 31ème Edition ziara feu Thierno Djiby Ousmane BA à Bambilor en appui à la restauration des pèlerins.",
      author: "Thierno Amadou BA",
      date: "25 Février 2023",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/ziara-31eme-edition.jpg",
      featured: false,
      slug: "participation-31eme-ziara-bambilor"
    },
    {
      id: 10,
      title: "Participation à la 32ème Edition Ziara",
      excerpt: "Participation du réseau REFLET à la 32ème Edition ziara feu Thierno Djiby Ousmane BA à Bambilor en appui à la restauration des pèlerins.",
      author: "Thierno Amadou BA",
      date: "3 Février 2024",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/ziara-32eme-edition.jpg",
      featured: false,
      slug: "participation-32eme-ziara-bambilor"
    },
    {
      id: 11,
      title: "Participation à la 33ème Edition Ziara",
      excerpt: "Participation du réseau REFLET à la 33ème Edition ziara feu Thierno Djiby Ousmane BA à Bambilor en appui à la restauration des pèlerins.",
      author: "Thierno Amadou BA",
      date: "1 Février 2025",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/ziara-33eme-edition.jpg",
      featured: false,
      slug: "participation-33eme-ziara-bambilor"
    },
    {
      id: 12,
      title: "Journée Don à l'Hôpital des Enfants de Diamniadio",
      excerpt: "Journée don à l'Hôpital des Enfants de Diamniadio dans le cadre de leur projet l'Art au chevet des malades pour une meilleure prise en charge des enfants malades.",
      author: "Équipe REFLET",
      date: "29 Août 2025",
      category: "Actions Sociales",
      readTime: "4 min",
      image: "/images/actualites/don-hopital-enfants-diamniadio.jpg",
      featured: false,
      slug: "journee-don-hopital-enfants-diamniadio"
    },
    {
      id: 13,
      title: "Collecte Don pour Dahara de Bambilor Sinistré",
      excerpt: "Collecte de dons organisée par le réseau REFLET pour venir en aide à Dahara de Bambilor sinistré, démontrant la solidarité du réseau.",
      author: "Équipe REFLET",
      date: "30 Août 2025",
      category: "Actions Sociales",
      readTime: "3 min",
      image: "/images/actualites/collecte-don-dahara-bambilor.jpg",
      featured: false,
      slug: "collecte-don-dahara-bambilor-sinistre"
    }
  ];

  const categories = ["Tous", "Événements", "Formations", "Santé", "Actions Sociales", "Financement"];

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
                <BookOpen className="mr-2" size={16} />
                Actualités & Nouvelles
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Actualités</span>
              <br />
              <span className="text-white">REFLET</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Restez informées de nos dernières nouvelles et programmes
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#articles"
                className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                <BookOpen className="mr-2" size={20} />
                Découvrir les articles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <Heart className="mr-2" size={20} />
                Nous rejoindre
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "Tous"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-neutral-dark hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Principal */}
      <section id="articles" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {articles.filter(article => article.featured).map((article) => (
            <motion.article
              key={`featured-article-${article.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image de l'article */}
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
                          Article à la une
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu de l'article */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-neutral-dark leading-relaxed mb-8 text-lg">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center">
                        <User className="text-primary mr-2" size={18} />
                        <span className="text-neutral-dark font-medium">{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="text-primary mr-2" size={18} />
                        <span className="text-neutral-dark">{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="text-primary mr-2" size={18} />
                        <span className="text-neutral-dark">{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/actualites/${article.slug}`}
                      className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl w-fit relative z-10 border-2 border-primary-400"
                      style={{ minHeight: '50px' }}
                    >
                      Lire l'article
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Grille d'Articles */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">
              <BookOpen className="mr-2" size={16} />
              Tous les Articles
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Découvrez Nos Dernières Actualités
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Des articles inspirants sur le leadership féminin, l'entrepreneuriat et les succès de notre communauté
            </p>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <motion.article
                key={`article-${article.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Image de l'article */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Contenu de l'article */}
                  <div className="p-6 flex flex-col">
                    <h3 className="font-heading text-xl font-bold text-primary mb-3 leading-tight overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {article.title}
                    </h3>
                    <p className="text-neutral-dark text-sm leading-relaxed mb-6 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                      {article.excerpt}
                    </p>
                    
                    <div className="space-y-4 mt-auto">
                      <div className="flex items-center gap-4 text-xs text-neutral-dark">
                        <div className="flex items-center">
                          <User className="mr-1" size={12} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1" size={12} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1" size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Link
                        href={`/actualites/${article.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm w-full justify-center shadow-lg hover:shadow-xl"
                        style={{ 
                          minHeight: '44px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          cursor: 'pointer'
                        }}
                      >
                        Lire l'article
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Restez Informées
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et opportunités
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg text-primary placeholder-neutral-dark border-2 border-white/20 focus:border-secondary focus:outline-none transition-colors"
                />
                <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                  S'abonner
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Archives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-2xl font-bold text-primary mb-8">
              Archives
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["2024", "2023", "2022", "2021"].map((year, index) => (
                <motion.button
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-100 text-neutral-dark px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  {year}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

